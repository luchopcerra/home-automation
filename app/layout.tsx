import type { Metadata } from 'next';
import { isIndexable, site, siteUrl } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: siteUrl() ? new URL(siteUrl()!) : undefined,
  title: site.title,
  description: site.description,
  alternates: siteUrl() ? { canonical: `${siteUrl()}/` } : undefined,
  robots: isIndexable()
    ? { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 }
    : { index: false, follow: false },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: `${site.name} ${site.service}`,
    title: site.title,
    description: site.description,
    ...(siteUrl() ? { url: `${siteUrl()}/` } : {}),
  },
  twitter: { card: 'summary', title: site.title, description: site.description },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-AR"><body>{children}</body></html>;
}
