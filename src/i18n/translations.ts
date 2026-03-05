
export type Lang = 'en' | 'pt';

export const SUPPORTED_LANGS: Lang[] = ['en', 'pt'];
export const DEFAULT_LANG: Lang = 'en';

// ─── Translation dictionary ──────────────────────────────────────────────────

const translations = {

  // ── Meta ──────────────────────────────────────────────────────────────────
  'meta.title': {
    en: 'José Galvão | Portfolio',
    pt: 'José Galvão | Portfólio',
  },
  'meta.description': {
    en: 'Business Data Analyst specialising in Python automation, ML, and financial data engineering. 200h+ manual work eliminated through AI-powered solutions.',
    pt: 'Analista de Dados de Negócio especializado em automação Python, ML e engenharia de dados financeiros. Mais de 200h de trabalho manual eliminadas com soluções de IA.',
  },
  'meta.ogTitle': {
    en: 'José Galvão | Business Data Analyst & Automation Specialist',
    pt: 'José Galvão | Analista de Dados & Especialista em Automação',
  },

  // ── Nav ───────────────────────────────────────────────────────────────────
  'nav.projects':     { en: 'Projects',       pt: 'Projetos' },
  'nav.about':        { en: 'About',           pt: 'Sobre' },
  'nav.skills':       { en: 'Skills',          pt: 'Competências' },
  'nav.contact':      { en: 'Contact',         pt: 'Contacto' },
  'nav.filterSkill':  { en: 'Filter by Skill', pt: 'Filtrar por Skill' },
  'nav.viewAll':      { en: 'View all projects', pt: 'Ver todos os projetos' },
  'nav.pythonProjects': { en: 'Python Projects', pt: 'Projetos Python' },

  // ── Hero ──────────────────────────────────────────────────────────────────
  'hero.role': {
    en: 'Business Data Analyst',
    pt: 'Analista de Dados de Negócio',
  },
  'hero.description': {
    en: 'Business Management student at ISCAC & self-taught programmer.<br>I turn manual, repetitive processes into automated systems —<br>from ETL pipelines to ML models that drive real business decisions.',
    pt: 'Estudante de Gestão de Empresas no ISCAC & programador autodidata.<br>Transformo processos manuais e repetitivos em sistemas automatizados —<br>de pipelines ETL a modelos de ML que sustentam decisões reais de negócio.',
  },
  'hero.btn.linkedin': { en: 'LinkedIn',  pt: 'LinkedIn' },
  'hero.btn.github':   { en: 'GitHub',    pt: 'GitHub' },
  'hero.btn.resume':   { en: 'Resume',    pt: 'Currículo' },

  // ── Stats ─────────────────────────────────────────────────────────────────
  'stats.heading':         { en: 'By the',              pt: 'Em' },
  'stats.headingAccent':   { en: 'Numbers',              pt: 'Números' },
  'stats.projects.desc':   { en: 'End-to-End Projects',  pt: 'Projetos Completos' },
  'stats.projects.ctx':    { en: 'Each with a public GitHub repo & documented case study', pt: 'Cada um com repositório GitHub público e case study documentado' },
  'stats.data.desc':       { en: 'Data Processed',       pt: 'Dados Processados' },
  'stats.data.ctx':        { en: 'Warehouse: 1.2M transactions · E-Commerce: 100k · Real Estate: 95k', pt: 'Warehouse: 1,2M transações · E-Commerce: 100k · Imobiliário: 95k' },
  'stats.accuracy.desc':   { en: 'Avg. Model Accuracy',  pt: 'Precisão Média dos Modelos' },
  'stats.accuracy.ctx':    { en: 'Across 4 ML projects (AUC/MAPE)', pt: 'Em 4 projetos de ML (AUC/MAPE)' },
  'stats.automation.desc': { en: 'Fastest Automation',   pt: 'Automação Mais Rápida' },
  'stats.automation.ctx':  { en: 'Financial reporting: month-end close from 2 days to under 5 seconds', pt: 'Relatórios financeiros: fecho mensal de 2 dias para menos de 5 segundos' },

  // ── Projects section ──────────────────────────────────────────────────────
  'projects.featured':     { en: '⭐ Featured Projects',   pt: '⭐ Projetos em Destaque' },
  'projects.filterLabel':  { en: '🔍 FILTER BY SKILLS',    pt: '🔍 FILTRAR POR SKILLS' },
  'projects.filterAll':    { en: 'All Projects',            pt: 'Todos os Projetos' },
  'projects.showMore':     { en: 'Show More Projects',      pt: 'Ver Mais Projetos' },
  'projects.showLess':     { en: 'Show Less',               pt: 'Ver Menos' },
  'projects.caseStudy':    { en: '📖 Case Study',           pt: '📖 Case Study' },
  'projects.demo':         { en: '▶ Live Demo',             pt: '▶ Demo ao Vivo' },
  'projects.code':         { en: '{} Code',                 pt: '{} Código' },
  'projects.complexity':   { en: 'Complexity',              pt: 'Complexidade' },
  'projects.impact':       { en: 'Business Impact',         pt: 'Impacto de Negócio' },
  'projects.advanced':     { en: 'Advanced',                pt: 'Avançado' },
  'projects.intermediate': { en: 'Intermediate',            pt: 'Intermédio' },
  'projects.high':         { en: 'High',                    pt: 'Alto' },
  'projects.medium':       { en: 'Medium',                  pt: 'Médio' },
  'projects.viewImages':   { en: 'Click to expand image',   pt: 'Clique para ampliar imagem' },
  'projects.prevImage':    { en: 'Previous image',          pt: 'Imagem anterior' },
  'projects.nextImage':    { en: 'Next image',              pt: 'Próxima imagem' },

  // ── Project titles & types ─────────────────────────────────────────────────
  'project.churn.title':     { en: 'Customer Churn & Retention Analytics',    pt: 'Análise de Churn & Retenção de Clientes' },
  'project.churn.type':      { en: 'Data Science / Business Intelligence',    pt: 'Ciência de Dados / Business Intelligence' },
  'project.fraud.title':     { en: 'Unsupervised Fraud Detection System',     pt: 'Sistema de Deteção de Fraude Não Supervisionado' },
  'project.fraud.type':      { en: 'Machine Learning / Data Security',        pt: 'Machine Learning / Segurança de Dados' },
  'project.realestate.title':{ en: 'Portugal Real Estate Analytics',          pt: 'Análise do Mercado Imobiliário Português' },
  'project.realestate.type': { en: 'Market Intelligence & Real Estate',       pt: 'Inteligência de Mercado & Imobiliário' },
  'project.chatcfo.title':   { en: 'ChatCFO - RAG Financial Analyst',         pt: 'ChatCFO - Analista Financeiro RAG' },
  'project.chatcfo.type':    { en: 'AI & Fintech',                            pt: 'IA & Fintech' },
  'project.macro.title':     { en: 'Macro Portfolio Analyzer',                pt: 'Analisador de Carteira Macro' },
  'project.macro.type':      { en: 'Investment Analysis',                     pt: 'Análise de Investimentos' },
  'project.equity.title':    { en: 'Equity Research - Auto DCF',              pt: 'Research de Ações - DCF Automático' },
  'project.equity.type':     { en: 'Corporate Finance',                       pt: 'Finanças Corporativas' },
  'project.banker.title':    { en: 'Banker AI: Credit Risk Engine',           pt: 'Banker AI: Motor de Risco de Crédito' },
  'project.banker.type':     { en: 'Risk Management',                         pt: 'Gestão de Risco' },
  'project.warehouse.title': { en: 'Financial Data Warehouse (ETL)',          pt: 'Data Warehouse Financeiro (ETL)' },
  'project.warehouse.type':  { en: 'Data Engineering',                        pt: 'Engenharia de Dados' },
  'project.reporting.title': { en: 'Automated Financial Reporting',           pt: 'Relatórios Financeiros Automatizados' },
  'project.reporting.type':  { en: 'Accounting Automation',                   pt: 'Automação Contabilística' },
  'project.ecom.title':      { en: 'E-Commerce Analytics Dashboard',          pt: 'Dashboard de Analytics E-Commerce' },
  'project.ecom.type':       { en: 'Business Intelligence',                   pt: 'Business Intelligence' },
  'project.forecast.title':  { en: 'AI Sales Forecasting',                    pt: 'Previsão de Vendas com IA' },
  'project.forecast.type':   { en: 'Data Science & FP&A',                     pt: 'Ciência de Dados & FP&A' },
  'project.fraudapi.title':  { en: 'FraudShield API — MLOps Engine',          pt: 'FraudShield API — Motor de MLOps'},
  'project.fraudapi.type':   { en: 'MLOps & API Engineering',                 pt: 'Engenharia de MLOps e API'},
  // ── Skills section ────────────────────────────────────────────────────────
  'skills.heading':          { en: 'Technical',            pt: 'Competências' },
  'skills.headingAccent':    { en: 'Arsenal',              pt: 'Técnicas' },
  'skills.tooltip.python':   { en: 'Advanced proficiency', pt: 'Proficiência avançada' },
  'skills.tooltip.sql':      { en: 'Query optimization',   pt: 'Otimização de queries' },
  'skills.tooltip.powerbi':  { en: 'DAX & visualization',  pt: 'DAX & visualização' },
  'skills.tooltip.ml':       { en: 'Scikit-learn & TensorFlow', pt: 'Scikit-learn & TensorFlow' },
  'skills.tooltip.finance':  { en: 'DCF & forecasting',    pt: 'DCF & previsão financeira' },

  // ── Efficiency calculator ─────────────────────────────────────────────────
  'calc.heading':            { en: 'ROI',                   pt: 'ROI' },
  'calc.headingAccent':      { en: 'Calculator',            pt: 'Calculadora' },
  'calc.subtitle':           { en: "Estimate what automation is worth to your business", pt: "Calcule o valor da automação para o seu negócio" },
  'calc.processes':          { en: '⚙️ Number of manual processes / week', pt: '⚙️ Nº de processos manuais / semana' },
  'calc.hours':              { en: '⏱️ Hours per process', pt: '⏱️ Horas por processo' },
  'calc.rate':               { en: '💳 Analyst Hourly Rate', pt: '💳 Custo Horário do Analista' },
  'calc.savings':            { en: 'Annual Savings',        pt: 'Poupança Anual' },
  'calc.hoursLabel':         { en: 'Hours/year recovered',  pt: 'Horas/ano recuperadas' },
  'calc.fteLabel':           { en: 'FTE equivalent freed',  pt: 'FTE equivalente libertado' },
  'calc.monthlyLabel':       { en: 'Monthly savings',       pt: 'Poupança mensal' },
  'calc.dailyLabel':         { en: 'Daily time saved',      pt: 'Tempo diário poupado' },

  // ── About / Experience ────────────────────────────────────────────────────
  'about.heading':           { en: 'About',                  pt: 'Sobre' },
  'about.headingAccent':     { en: 'Me',                     pt: 'Mim' },
  'about.education':         { en: 'Education',              pt: 'Formação' },
  'about.experience':        { en: 'Experience',             pt: 'Experiência' },
  'about.languages':         { en: 'Languages',              pt: 'Idiomas' },
  'about.softSkills':        { en: 'Soft Skills',            pt: 'Competências Pessoais' },
  'about.lang.pt':           { en: 'Portuguese',             pt: 'Português' },
  'about.lang.en':           { en: 'English',                pt: 'Inglês' },
  'about.lang.native':       { en: 'Native',                 pt: 'Nativo' },
  'about.lang.professional': { en: 'Professional',           pt: 'Profissional' },

  // ── Contact ───────────────────────────────────────────────────────────────
  'contact.heading':         { en: "Let's",                  pt: 'Vamos' },
  'contact.headingAccent':   { en: 'Connect',                pt: 'Conectar' },
  'contact.available':       { en: 'Available for freelance projects & collaborations', pt: 'Disponível para projetos freelance & colaborações' },
  'contact.cta':             { en: 'Get in Touch',           pt: 'Entrar em Contacto' },

  // ── Footer ────────────────────────────────────────────────────────────────
  'footer.rights':           { en: 'All rights reserved.',   pt: 'Todos os direitos reservados.' },
  'footer.madeWith':         { en: 'Made with',              pt: 'Feito com' },

  // ── Lightbox / UI ─────────────────────────────────────────────────────────
  'ui.close':                { en: 'Close',                  pt: 'Fechar' },
  'ui.prev':                 { en: 'Previous',               pt: 'Anterior' },
  'ui.next':                 { en: 'Next',                   pt: 'Seguinte' },
  'ui.loading':              { en: 'Loading…',               pt: 'A carregar…' },

} as const;

// ─── Type helpers ─────────────────────────────────────────────────────────────

export type TranslationKey = keyof typeof translations;

/**
 * Returns the translation for a given key and language.
 * Falls back to English if the key doesn't exist for the requested lang.
 */
export function t(lang: Lang, key: TranslationKey): string {
  const entry = translations[key];
  if (!entry) {
    console.warn(`[i18n] Missing translation key: "${key}"`);
    return key;
  }
  return entry[lang] ?? entry['en'];
}

/**
 * Returns a full translation map for a given language.
 * Useful when you need to pass many strings to a component at once.
 */
export function getTranslations(lang: Lang): Record<TranslationKey, string> {
  return Object.fromEntries(
    (Object.keys(translations) as TranslationKey[]).map(key => [key, t(lang, key)])
  ) as Record<TranslationKey, string>;
}

/**
 * Detects preferred language from:
 *  1. URL search param  ?lang=pt
 *  2. Cookie            lang=pt
 *  3. navigator.language
 *  4. DEFAULT_LANG
 *
 * Call this CLIENT-SIDE only.
 */
export function detectLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG;

  // 1. URL param
  const urlParam = new URLSearchParams(window.location.search).get('lang') as Lang | null;
  if (urlParam && SUPPORTED_LANGS.includes(urlParam)) return urlParam;

  // 2. Cookie
  const cookieLang = document.cookie
    .split('; ')
    .find(row => row.startsWith('lang='))
    ?.split('=')[1] as Lang | undefined;
  if (cookieLang && SUPPORTED_LANGS.includes(cookieLang)) return cookieLang;

  // 3. Browser language
  const browserLang = navigator.language.slice(0, 2) as Lang;
  if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

  return DEFAULT_LANG;
}

/**
 * Persists the chosen language to a cookie.
 */
export function setLangCookie(lang: Lang) {
  document.cookie = `lang=${lang}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}
