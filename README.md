# Luciano · Domótica

Landing de servicios para Los Reartes, Villa General Belgrano y alrededores, con asesoría remota. Hecha con el starter de Sites (Vinext, React y Shadcn).

## Desarrollo

Requiere Node >= 22.13 y npm. Ejecutar `npm ci` y `npm run dev`. Usar la URL que imprime el servidor.

- `npm run build`: genera la salida de producción para Sites.
- `npm run lint`: análisis estático del código propio; excluye el catálogo Shadcn y los hooks provistos por el starter, que se conservan sin modificaciones.
- `npm run check:publish`: verifica que exista un número de WhatsApp válido antes de publicar.

## Contacto y publicación

La configuración comercial está centralizada en `lib/site.ts`. El WhatsApp configurado es `5492215796600` (celular argentino). Instagram: https://www.instagram.com/luciano.domotica/. El número visible, el enlace telefónico y el perfil están centralizados en la misma configuración.

Mientras el contacto esté vacío o tenga formato inválido, los botones están desactivados, se muestra un aviso de vista previa y la página lleva `noindex`. El número válido activa los enlaces con el mensaje prearmado y habilita la indexación al volver a construir.

Antes de publicar: ejecutar `npm run check:publish` y `npm run build`, y publicar la versión validada con Sites usando el `project_id` existente en `.openai/hosting.json`. No crear otro sitio. El verificador no reemplaza comprobar que el número pertenezca al destinatario correcto.

La foto proviene del archivo proporcionado por Luciano. El temario del curso no forma parte de la web. No hay formulario, base de datos, tienda, reservas ni analítica.

## Seguimiento comercial manual

Registrar fuera del sitio: fecha, localidad, necesidad, modalidad, presupuesto enviado y si se aceptó un trabajo pago. Esto permite contrastar consultas con ingresos reales sin agregar un CRM a esta primera versión.
