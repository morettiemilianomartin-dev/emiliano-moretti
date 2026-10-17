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
    return { id: f.replace(/\.md$/, ''), es: get('es'), pub: new Date(get('pubDate')), upd: get('updatedDate') ? new Date(get('updatedDate')) : null, draft: get('draft') === 'true' };
  });
}
const now = new Date();
const live = (p) => !p.draft && p.pub <= now;
const esPosts = readPosts('./src/content/blog/').filter(live), enPosts = readPosts('./src/content/blog-en/').filter(live);
const esLive = new Set(esPosts.map((p) => p.id));
// Fecha de última modificación de cada artículo para el sitemap (lastmod).
const lastmod = new Map();
for (const p of esPosts) lastmod.set(`${SITE}/blog/${p.id}/`, (p.upd ?? p.pub).toISOString());
for (const p of enPosts) lastmod.set(`${SITE}/en/blog/${p.id}/`, (p.upd ?? p.pub).toISOString());
const pairs = [['/', '/en/'], ['/blog/', '/en/blog/'], ['/sobre-mi/', '/en/about/']];
for (const p of enPosts) if (esLive.has(p.es)) pairs.push([`/blog/${p.es}/`, `/en/blog/${p.id}/`]);
const alternates = new Map();
for (const [es, en] of pairs) {
  const links = [{ lang: 'es', url: SITE + es }, { lang: 'en', url: SITE + en }, { lang: 'x-default', url: SITE + es }];
  alternates.set(SITE + es, links); alternates.set(SITE + en, links);
}

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (page) => !page.includes('/ui-kit/'), serialize(item) { const links = alternates.get(item.url); if (links) item.links = links; if (lastmod.has(item.url)) item.lastmod = lastmod.get(item.url); return item; } })],
});
