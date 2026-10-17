import { getCollection } from 'astro:content';
import type { Lang } from './i18n';

// Solo se publican los artículos cuya fecha (pubDate) ya llegó. Los de fecha futura
// aparecen solos cuando la web se vuelve a compilar ese día (ver .github/workflows/publicar.yml).
export async function getPosts(lang: Lang = 'es') {
  const now = new Date();
  const posts = await getCollection(lang === 'es' ? 'blog' : 'blogEn', ({ data }) => !data.draft && data.pubDate <= now);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Pares español ↔ inglés publicados. Solo cuenta una traducción si las dos versiones ya están publicadas.
export async function getPairs() {
  const es = new Set((await getPosts('es')).map((p) => p.id));
  const esToEn = new Map<string, string>(), enToEs = new Map<string, string>();
  for (const p of await getPosts('en')) {
    const src = (p.data as { es: string }).es;
    if (es.has(src)) { esToEn.set(src, p.id); enToEs.set(p.id, src); }
  }
  return { esToEn, enToEs };
}

export const postUrl = (lang: Lang, id: string) => (lang === 'es' ? `/blog/${id}/` : `/en/blog/${id}/`);

export function fmtDate(d: Date, lang: Lang = 'es') {
  return d.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
export function readingMinutes(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
