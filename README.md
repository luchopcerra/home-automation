# Luciano · Domótica

Landing de servicios para Los Reartes, Villa General Belgrano y alrededores, con asesoría remota. Hecha con el starter de Sites (Vinext, React y Shadcn).

## Desarrollo

Requiere Node >= 22.13 y npm. Ejecutar `npm ci` y `npm run dev`. Usar la URL que imprime el servidor.

- `npm run build`: genera la salida de producción para Sites.
- `npm run build:cloudflare`: valida el contacto y genera el Worker y sus assets para tu cuenta de Cloudflare.
- `npm run deploy:check`: reconstruye y valida el paquete con Wrangler sin publicarlo.
- `npm run deploy`: reconstruye y publica en Cloudflare Workers.
- `npm run lint`: análisis estático del código propio; excluye el catálogo Shadcn y los hooks provistos por el starter, que se conservan sin modificaciones.
- `npm run check:publish`: verifica que exista un número de WhatsApp válido antes de publicar.

## Contacto y publicación

La configuración comercial está centralizada en `lib/site.ts`. El WhatsApp configurado es `5492215796600` (celular argentino). Instagram: https://www.instagram.com/luciano.domotica/. El número visible, el enlace telefónico y el perfil están centralizados en la misma configuración.

Mientras el contacto esté vacío o tenga formato inválido, los botones están desactivados, se muestra un aviso de vista previa y la página lleva `noindex`. El número válido activa los enlaces con el mensaje prearmado. La indexación requiere además configurar `site.url` con el origen HTTPS público (sin ruta, parámetros ni fragmentos) y publicar el sitio con acceso público. Mientras falte ese origen, la página lleva `noindex`.

Para publicar en tu cuenta de Cloudflare, seguir la sección siguiente. Para seguir usando Sites: ejecutar `npm run check:publish` y `npm run build`, y publicar la versión validada usando el `project_id` existente en `.openai/hosting.json`. No crear otro sitio de Sites. El verificador no reemplaza comprobar que el número pertenezca al destinatario correcto.

## Publicar en Cloudflare Workers

El destino es **Workers** dentro de **Workers & Pages**. Vinext genera un servidor para React Server Components y las rutas de metadatos, además de los assets; no subir solamente `dist/client` a Pages. No requiere D1, R2 ni otros recursos.

### Primera publicación desde tu equipo

```sh
npm ci
npm run cf:login
npm run cf:whoami
export CLOUDFLARE_ACCOUNT_ID='<ID de tu cuenta>'
npm run deploy:check
npm run deploy
```

Elegir el ID que devuelve `cf:whoami` o copiarlo del dashboard de Cloudflare. El Worker se llama `luciano-domotica`: comprobar que ese nombre esté libre o corresponda al sitio antes de publicar, ya que una publicación actualiza el Worker existente. Para cambiarlo, editar `wrangler.cloudflare.jsonc`. No guardar tokens en Git.

Wrangler imprime la URL `workers.dev` al terminar. Configurar el origen HTTPS real en `site.url` de `lib/site.ts` y volver a ejecutar `npm run deploy` para habilitar canónica, sitemap e indexación. Se puede publicar primero con `site.url` vacío; esa versión conserva `noindex`. Para un dominio propio, agregarlo en el Worker → Settings → Domains & Routes → Add → Custom Domain, y usar ese origen en `site.url`.

### Publicaciones automáticas con GitHub Actions

El workflow [`.github/workflows/deploy-cloudflare.yml`](.github/workflows/deploy-cloudflare.yml) publica automáticamente cada `push` a `main`. Antes de su primera ejecución, configurar en el repositorio de GitHub:

| Campo | Valor |
| --- | --- |
| Secret `CLOUDFLARE_API_TOKEN` | Token de API con la plantilla **Edit Cloudflare Workers**, limitado a la cuenta elegida |
| Variable `CLOUDFLARE_ACCOUNT_ID` | ID de esa cuenta de Cloudflare |

En GitHub: **Settings → Secrets and variables → Actions**. El token debe crearse y almacenarse solo como secreto: no incluirlo en archivos, commits, logs ni variables de build. El workflow instala dependencias bloqueadas y ejecuta `npm run deploy`, que valida y reconstruye el Worker antes de publicarlo. Las ramas que no son `main` no modifican producción.

`wrangler.cloudflare.jsonc` es la configuración fuente. El plugin genera `dist/server/wrangler.json` con el servidor compilado y los assets; no editar ese archivo. `deploy:cloudflare` publica la última compilación y se usa después del build en CI. Para publicar desde tu equipo, usar siempre `npm run deploy`, que reconstruye primero. El modo `cloudflare` omite el plugin de Sites; `npm run build` conserva el flujo de Sites. Ambos usan `dist`, por lo que no deben ejecutarse al mismo tiempo.

Para probar el Worker compilado: `npm run build:cloudflare` y `npm start`. Revisar `/`, `/robots.txt`, `/sitemap.xml`, `/llms.txt`, la foto y los enlaces de contacto. `/llms.txt` devuelve 404 mientras no exista `site.url`. `npm run cf:types` regenera los tipos de Cloudflare en `.wrangler/` si se agregan bindings.

Referencias: [Vinext en Workers](https://github.com/cloudflare/vinext#cloudflare-workers), [Cloudflare Vite plugin](https://developers.cloudflare.com/workers/vite-plugin/get-started/), [GitHub Actions](https://docs.github.com/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions).

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
