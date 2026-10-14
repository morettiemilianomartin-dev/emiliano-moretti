import rss from '@astrojs/rss';
import { getPosts } from '../lib/posts';
export async function GET(context) {
  const posts = await getPosts();
  return rss({
    title: 'Emiliano Moretti · Blog',
    description: 'Cómo vendo con Claude, pieza por pieza.',
    site: context.site,
    customData: '<language>es</language>',
    stylesheet: '/rss.xsl',
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `/blog/${p.id}/`, categories: p.data.tags })),
  });
}
