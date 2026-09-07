import { site, siteUrl, whatsappUrl } from './site';
import { questions } from './faq';

export function structuredData() {
  const origin = siteUrl();
  const id = (fragment: string) => `${origin ?? ''}/#${fragment}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': id('organizacion'),
        name: `${site.name} ${site.service}`,
        description: site.description,
        ...(origin ? { url: `${origin}/`, image: `${origin}/luciano.jpg` } : {}),
        ...(whatsappUrl() ? { telephone: site.phone } : {}),
        sameAs: [site.instagram],
        areaServed: ['Los Reartes', 'Villa General Belgrano'].map(name => ({ '@type': 'Place', name })),
      },
      {
        '@type': 'Service',
        '@id': id('servicio'),
        name: 'Asesoría en domótica y configuración de Home Assistant',
        serviceType: 'Asesoría, integración de dispositivos y automatizaciones',
        description: site.coverage,
        provider: { '@id': id('organizacion') },
        ...(origin ? { url: `${origin}/#servicios` } : {}),
      },
      {
        '@type': 'WebSite',
        '@id': id('sitio'),
        name: `${site.name} ${site.service}`,
        inLanguage: 'es-AR',
        publisher: { '@id': id('organizacion') },
        ...(origin ? { url: `${origin}/` } : {}),
      },
      {
        '@type': 'FAQPage',
        '@id': id('preguntas-frecuentes'),
        inLanguage: 'es-AR',
        isPartOf: { '@id': id('sitio') },
        mainEntity: questions.map(({ question, answer }) => ({
          '@type': 'Question', name: question,
          acceptedAnswer: { '@type': 'Answer', text: answer },
        })),
      },
    ],
  };
}
