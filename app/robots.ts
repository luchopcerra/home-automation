import type { MetadataRoute } from 'next';
import { isIndexable, siteUrl } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    // Allow crawlers to read the page, including its noindex during preparation.
    // This includes search bots such as Googlebot, Bingbot and OAI-SearchBot.
    rules: [{ userAgent: '*', allow: '/' }],
    ...(isIndexable() ? { sitemap: `${siteUrl()}/sitemap.xml` } : {}),
  };
}
