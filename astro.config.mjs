import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://foxyline.ai',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'nl'],
    routing: {
      prefixDefaultLocale: true
    }
  }
});