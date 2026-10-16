import { getCollection } from 'astro:content';
export async function getPosts() {
  // Solo se publican los artículos cuya fecha (pubDate) ya llegó. Los de fecha futura
  // aparecen solos cuando la web se vuelve a compilar ese día (ver .github/workflows/publicar.yml).
  const now = new Date();
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.pubDate <= now);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
export function fmtDate(d: Date) {
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}
export function readingMinutes(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}
