import { site, siteUrl } from '@/lib/site';
import { questions } from '@/lib/faq';

export function GET() {
  const origin = siteUrl();
  if (!origin) return new Response('Public site URL not configured.', { status: 404 });

  const content = `# ${site.name} ${site.service}

> ${site.description}

${site.coverage}

## Páginas
- [Servicios de domótica](${origin}/#servicios): Asesoría, configuración de Home Assistant y automatizaciones.
- [Cómo trabajo](${origin}/#como-trabajo): Evaluación, presupuesto, configuración y pruebas.
- [Sobre Luciano](${origin}/#sobre-mi): Servicio independiente desde Los Reartes.
- [Contacto](${origin}/#contacto): Primera charla sin cargo; presupuesto según el proyecto.
- [Preguntas frecuentes](${origin}/#preguntas-frecuentes): Compatibilidad, equipos, alcance, costos y atención remota.

## Preguntas frecuentes
${questions.map(({ question, answer }) => `### ${question}\n${answer}`).join('\n\n')}
`;
  return new Response(content, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
