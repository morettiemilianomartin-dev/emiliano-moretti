import rss from '@astrojs/rss';
import { getPosts } from '../../lib/posts';
// Feed de los artículos traducidos al inglés. El workflow de publicación también lo lee para avisar a Bing.
export async function GET(context) {
  const posts = await getPosts('en');
  return rss({
    title: 'Emiliano Moretti · Blog (English)',
    description: 'How I sell with Claude, piece by piece.',
    site: context.site,
    customData: '<language>en</language>',
    stylesheet: '/rss.xsl',
    items: posts.map((p) => ({ title: p.data.title, description: p.data.description, pubDate: p.data.pubDate, link: `/en/blog/${p.id}/`, categories: p.data.tags })),
  });
}
