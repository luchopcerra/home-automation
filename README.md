# Luciano · Domótica

Landing de servicios para Los Reartes, Villa General Belgrano y alrededores, con asesoría remota. Hecha con el starter de Sites (Vinext, React y Shadcn).

## Desarrollo

Requiere Node >= 22.13 y npm. Ejecutar `npm ci` y `npm run dev`. Usar la URL que imprime el servidor.

- `npm run build`: genera la salida de producción para Sites.
- `npm run lint`: análisis estático del código propio; excluye el catálogo Shadcn y los hooks provistos por el starter, que se conservan sin modificaciones.
- `npm run check:publish`: verifica que exista un número de WhatsApp válido antes de publicar.

## Contacto y publicación

La configuración comercial está centralizada en `lib/site.ts`. El WhatsApp configurado es `5492215796600` (celular argentino). Instagram: https://www.instagram.com/luciano.domotica/. El número visible, el enlace telefónico y el perfil están centralizados en la misma configuración.

Mientras el contacto esté vacío o tenga formato inválido, los botones están desactivados, se muestra un aviso de vista previa y la página lleva `noindex`. El número válido activa los enlaces con el mensaje prearmado. La indexación requiere además configurar `site.url` con el origen HTTPS público (sin ruta, parámetros ni fragmentos) y publicar el sitio con acceso público. Mientras falte ese origen, la página lleva `noindex`.

Antes de publicar: ejecutar `npm run check:publish` y `npm run build`, y publicar la versión validada con Sites usando el `project_id` existente en `.openai/hosting.json`. No crear otro sitio. El verificador no reemplaza comprobar que el número pertenezca al destinatario correcto.

La foto proviene del archivo proporcionado por Luciano. El temario del curso no forma parte de la web. No hay formulario, base de datos, tienda, reservas ni analítica.

## Seguimiento comercial manual

Registrar fuera del sitio: fecha, localidad, necesidad, modalidad, presupuesto enviado y si se aceptó un trabajo pago. Esto permite contrastar consultas con ingresos reales sin agregar un CRM a esta primera versión.

## SEO y descubrimiento en buscadores con IA

- `lib/site.ts` centraliza identidad, cobertura, contacto y URL canónica. `site.url` queda vacío hasta confirmar el dominio público: no se inventa un dominio ni se usa localhost como canónica.
- La página incluye título, descripción, idioma `es-AR`, canónica y metadatos Open Graph/X. No se añadió una imagen social nueva.
- `/robots.txt` permite el rastreo, incluso durante la preparación, para que los bots puedan leer `noindex`. Cuando el sitio es indexable, anuncia `/sitemap.xml`, que contiene únicamente la página canónica. No incluye anclas ni fechas de modificación ficticias.
- JSON-LD describe la organización, el servicio, el sitio y las preguntas frecuentes con datos de la página. No afirma dirección comercial, certificaciones, reseñas ni precios que no se hayan proporcionado. El marcado FAQ no garantiza resultados enriquecidos.
- `lib/faq.ts` es la fuente compartida de preguntas y respuestas para el acordeón, JSON-LD y `/llms.txt`. Las respuestas permanecen en el HTML inicial aunque el acordeón esté cerrado.
- `/llms.txt` ofrece una copia textual complementaria con enlaces a las secciones reales. Devuelve 404 mientras no exista URL pública. Es una convención experimental, no un requisito de Google ni una garantía de citas por IA.
- No hay reglas específicas que bloqueen rastreadores de búsqueda. OAI-SearchBot (búsqueda) y GPTBot (entrenamiento) tienen propósitos distintos; permitir entrenamiento no es un requisito para aparecer en ChatGPT Search. La política actual permite todos los bots.

### Al habilitar el sitio público

1. Confirmar el dominio HTTPS y configurarlo en `site.url`; reconstruir y publicar. Configurar redirecciones permanentes desde otros dominios si existen.
2. Verificar que la página, robots y sitemap sean accesibles sin inicio de sesión ni desafíos del CDN. El acceso privado de Sites impide el rastreo externo aunque robots lo permita.
3. Verificar el dominio en Google Search Console y Bing Webmaster Tools; enviar `/sitemap.xml` e inspeccionar la URL principal.
4. Validar JSON-LD con Schema.org Validator y los tipos elegibles con Google Rich Results Test. Revisar la versión móvil y Core Web Vitals con PageSpeed Insights.
5. Mantener coherentes el nombre, teléfono, servicios y cobertura en Instagram y, si corresponde, un Google Business Profile para negocio de área de servicio.
6. Revisar consultas como “domótica Los Reartes”, “Home Assistant Villa General Belgrano” y “asesoría domótica remota”; medir consultas reales y contactos. Para motores con IA, repetir las consultas y registrar si citan el sitio, la fecha y el número de intentos. No inferir visibilidad estable de una sola respuesta.

Referencias: [Google: funciones de IA y tu sitio](https://developers.google.com/search/docs/appearance/ai-features), [OpenAI: rastreadores](https://developers.openai.com/api/docs/bots), [propuesta llms.txt](https://llmstxt.org/).
