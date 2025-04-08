import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://moosly.design',
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});