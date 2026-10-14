// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Cuando tengas dominio propio, cambiá solo esta línea.
export default defineConfig({
  site: 'https://emiliano-moretti.vercel.app',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
