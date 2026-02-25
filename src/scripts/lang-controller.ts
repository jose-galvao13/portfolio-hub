// src/scripts/lang-controller.ts
// ─────────────────────────────────────────────────────────────────────────────
// Client-side i18n controller - Enhanced version with translations integration
//
// HOW IT WORKS
// ────────────
// 1. Reads language preference from:
//    - localStorage (persistent)
//    - URL parameter ?lang=pt
//    - Browser language
//    - Falls back to 'en'
//
// 2. Applies translations to ALL elements with data-i18n attributes
//
// 3. Supports:
//    - Text content swap (data-i18n="key")
//    - Attribute swap (data-i18n-attr="title|alt|aria-label|placeholder")
//    - Dynamic content with placeholders
//
// USAGE IN TEMPLATES
// ──────────────────
// Text swap:
//   <h2 data-i18n="projects.featured">⭐ Featured Projects</h2>
//
// Attribute swap:
//   <img 
//     data-i18n="projects.viewImages"
//     data-i18n-attr="alt"
//     alt="Click to expand image"
//   />
//
// Both:
//   <button
//     data-i18n="hero.btn.resume"
//     data-i18n-attr="aria-label"
//     aria-label="Download Resume"
//   >Resume</button>
//
// Multiple attributes (comma-separated):
//   <input
//     data-i18n="contact.email"
//     data-i18n-attr="placeholder,aria-label"
//     placeholder="Your email"
//     aria-label="Email address"
//   />
// ─────────────────────────────────────────────────────────────────────────────

import { 
  type Lang, 
  SUPPORTED_LANGS, 
  DEFAULT_LANG,
  t,
  type TranslationKey 
} from '../i18n/translations';

const STORAGE_KEY = 'jg-portfolio-lang';

// ── Persistence & Detection ──────────────────────────────────────────────────

/**
 * Get the current language from multiple sources (priority order):
 * 1. URL parameter (?lang=pt)
 * 2. localStorage
 * 3. Browser language
 * 4. Default (en)
 */
export function getLang(): Lang {
  // 1. URL parameter
  if (typeof window !== 'undefined') {
    const urlParam = new URLSearchParams(window.location.search).get('lang') as Lang | null;
    if (urlParam && SUPPORTED_LANGS.includes(urlParam)) {
      // Persist it for future visits
      setLang(urlParam);
      return urlParam;
    }
  }

  // 2. localStorage
  const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

  // 3. Browser language
  const browser = navigator.language.slice(0, 2) as Lang;
  if (SUPPORTED_LANGS.includes(browser)) return browser;

  // 4. Default
  return DEFAULT_LANG;
}

/**
 * Persist language choice to localStorage and update HTML lang attribute
 */
export function setLang(lang: Lang): void {
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
}

// ── DOM Translation ──────────────────────────────────────────────────────────

/**
 * Apply translations to all elements with data-i18n attributes
 */
function applyLang(lang: Lang): void {
  // 1. Translate text content
  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n') as TranslationKey;
    if (!key) return;

    try {
      let translation = t(lang, key);
      
      // Handle placeholders like {0}, {1}, etc.
      const placeholders = el.dataset.i18nPlaceholders;
      if (placeholders) {
        try {
          const values = JSON.parse(placeholders);
          if (Array.isArray(values)) {
            values.forEach((value, index) => {
              translation = translation.replace(`{${index}}`, value);
            });
          }
        } catch (e) {
          console.warn(`[i18n] Invalid placeholder JSON for key "${key}"`, e);
        }
      }

      // Apply translation
      el.innerHTML = translation;
    } catch (error) {
      console.warn(`[i18n] Translation failed for key "${key}"`, error);
    }
  });

  // 2. Translate attributes (alt, title, placeholder, aria-label, etc.)
  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach(el => {
    const attrs = el.getAttribute('data-i18n-attr');
    const key = el.getAttribute('data-i18n') as TranslationKey;
    
    if (!attrs || !key) return;

    try {
      const translation = t(lang, key);
      
      // Support multiple attributes (comma-separated)
      attrs.split(',').forEach(attr => {
        const trimmedAttr = attr.trim();
        if (trimmedAttr) {
          el.setAttribute(trimmedAttr, translation);
        }
      });
    } catch (error) {
      console.warn(`[i18n] Attribute translation failed for key "${key}"`, error);
    }
  });

  // 3. Update language switcher buttons
  updateSwitcherButtons(lang);

  // 4. Update HTML lang attribute
  document.documentElement.lang = lang;

  // 5. Emit custom event for other scripts to react
  window.dispatchEvent(new CustomEvent('lang-change', { 
    detail: { lang, timestamp: Date.now() } 
  }));
}

/**
 * Update the visual state of language switcher buttons
 */
function updateSwitcherButtons(lang: Lang): void {
  document.querySelectorAll<HTMLButtonElement>('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
    
    // Update aria-label for screen readers
    const langName = btn.dataset.lang === 'en' ? 'English' : 'Português';
    btn.setAttribute('aria-label', 
      isActive 
        ? `${langName} (current language)` 
        : `Switch to ${langName}`
    );
  });
}

// ── Event Handlers ───────────────────────────────────────────────────────────

/**
 * Handle language switch button clicks
 */
function setupLanguageSwitcher(): void {
  document.querySelectorAll<HTMLButtonElement>('.lang-btn[data-lang]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const chosen = btn.dataset.lang as Lang;
      if (!SUPPORTED_LANGS.includes(chosen)) {
        console.warn(`[i18n] Unsupported language: ${chosen}`);
        return;
      }

      setLang(chosen);
      applyLang(chosen);

      // Optional: Update URL without reload
      if (window.history && window.history.replaceState) {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', chosen);
        window.history.replaceState({}, '', url.toString());
      }
    });
  });
}

/**
 * Handle keyboard navigation for language switcher
 */
function setupKeyboardNavigation(): void {
  document.querySelectorAll<HTMLButtonElement>('.lang-btn[data-lang]').forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
}

// ── Initialization ───────────────────────────────────────────────────────────

/**
 * Initialize the i18n system
 */
function boot(): void {
  const lang = getLang();
  
  // Apply translations
  applyLang(lang);
  
  // Setup event handlers
  setupLanguageSwitcher();
  setupKeyboardNavigation();
  
  // Log for debugging (remove in production)
  console.log(`[i18n] Language initialized: ${lang}`);
}

// ── Run on DOM Ready ─────────────────────────────────────────────────────────

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

// ── Public API for manual control ────────────────────────────────────────────

/**
 * Manually switch language (useful for testing or programmatic control)
 */
export function switchLanguage(lang: Lang): void {
  if (!SUPPORTED_LANGS.includes(lang)) {
    console.warn(`[i18n] Unsupported language: ${lang}`);
    return;
  }
  
  setLang(lang);
  applyLang(lang);
}

/**
 * Get translation for a specific key in current language
 */
export function translate(key: TranslationKey): string {
  return t(getLang(), key);
}

/**
 * Re-apply translations (useful after dynamic content is added)
 */
export function refresh(): void {
  applyLang(getLang());
}

// Export for use in other modules
export { type Lang, SUPPORTED_LANGS, DEFAULT_LANG };