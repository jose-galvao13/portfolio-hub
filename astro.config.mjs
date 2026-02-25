import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jose-galvao13.github.io',
  base: '/portfolio-hub',
    i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt'],
  },
  output: 'static'
});
