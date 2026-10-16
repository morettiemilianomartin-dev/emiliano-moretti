// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Dominio propio desde oct 2026. Si cambia, actualizar también robots.txt, rss.xsl, index.astro y .github/workflows/publicar.yml.
export default defineConfig({
  site: 'https://www.emilianomoretti.com',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
