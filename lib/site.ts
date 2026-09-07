export const site = {
  // Public HTTPS origin. Set this when the site is ready for public indexing.
  url: '',
  name: 'Luciano',
  service: 'Domótica',
  area: 'Los Reartes · Villa General Belgrano',
  coverage: 'Los Reartes, Villa General Belgrano y alrededores a unos 30 minutos en auto. También consultas a distancia.',
  // Celular argentino en formato internacional, solo dígitos.
  whatsapp: '5492215796600',
  phone: '+54 9 221 579-6600',
  phoneHref: 'tel:+5492215796600',
  instagram: 'https://www.instagram.com/luciano.domotica/',
  instagramHandle: '@luciano.domotica',
  message: 'Hola Luciano, estoy en [localidad] y me gustaría automatizar [idea]. ¿Podemos coordinar una charla inicial?',
  title: 'Luciano · Domótica en Los Reartes y Villa General Belgrano',
  description: 'Asesoría, configuración de Home Assistant y automatizaciones para tu casa o negocio. Atención en Los Reartes, Villa General Belgrano y a distancia. Charla inicial sin cargo.',
};

export function whatsappUrl(number: string = site.whatsapp): string | null {
  return /^[1-9]\d{7,14}$/.test(number)
    ? `https://wa.me/${number}?text=${encodeURIComponent(site.message)}`
    : null;
}

export function siteUrl(value: string = site.url): string | null {
  try {
    const url = new URL(value);
    if (url.protocol !== 'https:' || url.username || url.password || url.pathname !== '/' || url.search || url.hash || !url.hostname.includes('.') || url.hostname.endsWith('.localhost') || url.hostname === '127.0.0.1') return null;
    return url.origin;
  } catch {
    return null;
  }
}

export function isIndexable(): boolean {
  return Boolean(siteUrl() && whatsappUrl());
}
