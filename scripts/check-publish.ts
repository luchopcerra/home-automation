import { site, whatsappUrl } from '../lib/site.ts';

if (!whatsappUrl()) {
  console.error('Publicación bloqueada: completá site.whatsapp en lib/site.ts con el número real en formato internacional, solo dígitos.');
  process.exitCode = 1;
} else {
  console.log(`Contacto de ${site.name} configurado. Sitio listo para preparar su publicación.`);
}
