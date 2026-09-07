'use client';

import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { whatsappUrl } from '@/lib/site';

export function ContactLink({ compact = false }: { compact?: boolean }) {
  const url = whatsappUrl();
  const content = <><MessageCircle aria-hidden="true" size={19} /><span>{compact ? 'Hablemos' : 'Contame tu idea'}</span><ArrowUpRight aria-hidden="true" size={18} /></>;
  return url ? (
    <a className={`contact-button ${compact ? 'compact' : ''}`} href={url} target="_blank" rel="noopener noreferrer" aria-label="Contame tu idea por WhatsApp (abre una nueva pestaña)">{content}</a>
  ) : (
    <Button className={`contact-button ${compact ? 'compact' : ''}`} disabled aria-describedby="contact-pending">{content}</Button>
  );
}
