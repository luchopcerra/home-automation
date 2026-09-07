import type { MetadataRoute } from 'next';
import { isIndexable, siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  // Only real canonical pages; section anchors are not separate pages.
  return isIndexable() ? [{ url: `${siteUrl()}/` }] : [];
}
