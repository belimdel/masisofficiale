// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://masis-paysagiste.fr',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/services/services'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
