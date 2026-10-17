// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';

// Dominio propio desde oct 2026. Si cambia, actualizar también robots.txt, rss.xsl, index.astro y .github/workflows/publicar.yml.
const SITE = 'https://www.emilianomoretti.com';

// Pares español ↔ inglés para el sitemap (hreflang). Cada página también los declara en su <head>.
// Solo cuenta un par si las dos versiones ya están publicadas (misma regla que src/lib/posts.ts).
function readPosts(dir) {
  const base = new URL(dir, import.meta.url);
  if (!fs.existsSync(base)) return [];
  return fs.readdirSync(base).filter((f) => f.endsWith('.md')).map((f) => {
    const txt = fs.readFileSync(new URL(f, base), 'utf8');
    const get = (k) => (txt.match(new RegExp(`^${k}:\\s*"?([^"\\n]+?)"?\\s*$`, 'm')) || [])[1];
    return { id: f.replace(/\.md$/, ''), es: get('es'), pub: new Date(get('pubDate')), draft: get('draft') === 'true' };
  });
}
const now = new Date();
const live = (p) => !p.draft && p.pub <= now;
const esLive = new Set(readPosts('./src/content/blog/').filter(live).map((p) => p.id));
const pairs = [['/', '/en/'], ['/blog/', '/en/blog/']];
for (const p of readPosts('./src/content/blog-en/').filter(live)) if (esLive.has(p.es)) pairs.push([`/blog/${p.es}/`, `/en/blog/${p.id}/`]);
const alternates = new Map();
for (const [es, en] of pairs) {
  const links = [{ lang: 'es', url: SITE + es }, { lang: 'en', url: SITE + en }, { lang: 'x-default', url: SITE + es }];
  alternates.set(SITE + es, links); alternates.set(SITE + en, links);
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [sitemap({ serialize(item) { const links = alternates.get(item.url); if (links) item.links = links; return item; } })],
});
