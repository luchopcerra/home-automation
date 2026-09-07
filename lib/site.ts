export const site = {
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
