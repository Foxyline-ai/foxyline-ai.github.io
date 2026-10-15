// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://foxyline.ai',

  // Pages folded into the one-pager (Aug 2026). GitHub Pages has no server
  // rewrites, so Astro emits a redirect page with a canonical for each.
  // Search Console showed 0 clicks on every one of these over 90 days.
  redirects: {
    '/solutions': '/',
    '/services': '/',
    '/process': '/',
    '/a-propos': '/',
    '/realisations': '/',
    '/fr/solutions': '/fr/',
    '/fr/services': '/fr/',
    '/fr/process': '/fr/',
    '/fr/a-propos': '/fr/',
    '/fr/realisations': '/fr/',
  },
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/merci'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
