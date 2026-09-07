import type { Metadata } from 'next';
import { site, whatsappUrl } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  robots: whatsappUrl() ? { index: true, follow: true } : { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es-AR"><body>{children}</body></html>;
}
