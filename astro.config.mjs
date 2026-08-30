// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Test deploy on GitHub Pages: https://thelarsofus90.github.io/vrg-gieseritz/
// Go-live on the club domain: set site to https://www.vrg-gieseritz.de, base to '/',
// add public/CNAME with www.vrg-gieseritz.de, then point DNS.
export default defineConfig({
  site: 'https://thelarsofus90.github.io',
  base: '/vrg-gieseritz',
  compressHTML: true,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
