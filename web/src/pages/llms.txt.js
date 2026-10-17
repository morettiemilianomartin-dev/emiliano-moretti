import { getPosts } from '../lib/posts';
// Resumen del sitio para modelos de lenguaje (ChatGPT, Claude, Perplexity…). Se regenera solo en cada build.
export async function GET(context) {
  const site = context.site.href.replace(/\/$/, '');
  const posts = await getPosts('es');
  const postsEn = await getPosts('en');
  const body = `# Emiliano Moretti

> Director comercial en Modulor Studios (Madrid). Vende desde 2011 y su proceso comercial corre sobre Claude: del primer mail de un lead a la propuesta y al CRM, sin cargar nada a mano. Escribe en español sobre ventas B2B con IA; algunos artículos están traducidos al inglés.

Temas: proceso comercial con Claude, conectores (Gmail, Calendar, Granola, Notion, Slack, HubSpot), skills para tareas comerciales repetibles, Notion como memoria del sistema, propuestas con Claude Design, lo que no conviene automatizar en ventas.

## Páginas
- [Inicio](${site}/): quién es, cómo funciona su proceso paso a paso y cómo contactarlo.
- [Blog](${site}/blog/): artículos sobre ventas con IA.
- [Home in English](${site}/en/) y [blog in English](${site}/en/blog/): versión en inglés del sitio.

## Artículos
${posts.map((p) => `- [${p.data.title}](${site}/blog/${p.id}/): ${p.data.description}`).join('\n')}

## Articles in English
${postsEn.map((p) => `- [${p.data.title}](${site}/en/blog/${p.id}/): ${p.data.description}`).join('\n')}

## Contacto
- LinkedIn: https://www.linkedin.com/in/emiliano-moretti/
- X: https://x.com/EmilianoMorett5
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
