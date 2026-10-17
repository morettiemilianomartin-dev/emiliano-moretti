# emiliano-moretti — web + blog (Astro)

Sitio estático hecho con [Astro](https://astro.build). Vercel lo compila solo en cada cambio.

## Publicar un artículo

1. Creá un archivo en `src/content/blog/` con el nombre del link, por ejemplo `notion-como-memoria.md`
   (queda publicado en `/blog/notion-como-memoria/`).
2. Arriba de todo va este bloque (frontmatter):

```md
---
title: "Título con la palabra clave principal (máx. ~65 caracteres)"
seoTitle: "Versión corta para Google y Bing"      # opcional: solo si el título pasa de 60 caracteres
description: "Resumen de 140–160 caracteres: es lo que muestran Google y las redes."
pubDate: 2026-10-21T06:00:00Z
category: "Proceso"
tags: ["ventas con IA", "Claude"]
tldr:
  - "Respuesta directa en una frase."
  - "Segunda idea clave."
faq:
  - q: "Pregunta real que haría alguien"
    a: "Respuesta corta y autosuficiente."
image: "/og/notion-como-memoria.jpg"           # imagen para redes de este artículo
destacado: false                                   # true = aparece en "Empezá por acá" arriba del blog (máx. 3)
linkedin: "https://www.linkedin.com/posts/..."   # opcional
x: "https://x.com/EmilianoMorett5/status/..."      # opcional
draft: false                                       # true = no se publica
---
```

3. Debajo, el texto en Markdown. Subtítulos `##` formulados como preguntas.
4. Subí el archivo a GitHub: el índice del blog, el sitemap, el RSS y `llms.txt` se actualizan solos.

## Imagen para redes de cada artículo

Cada artículo nuevo lleva su propia imagen al compartirse, para que no sea siempre la misma. La home y los artículos publicados antes de octubre de 2026 siguen con `public/og.jpg` (no se cambian).

1. Pedile a Claude la imagen junto con el artículo. La genera con la plantilla de `og-plantilla/` y la deja en `public/og/<nombre-del-link>.jpg`.
2. En el frontmatter del artículo, la línea `image:` apunta a esa imagen.
3. Subí las dos cosas juntas: el `.md` en `src/content/blog/` y la imagen en `public/og/`.

El diseño: fondo negro con puntos. Arriba, una línea de comando propia de cada artículo y `blog / categoría`; en el centro, el título (o una versión más corta); abajo, tu foto chica con tu nombre y la frase de la web. Detalle en `og-plantilla/README.md`.

## Versión en inglés

La web está en español (idioma principal, sin prefijo) y en inglés debajo de `/en/`. No se traduce todo: la home, el índice del blog y los artículos que elijas.

- **Traducir un artículo:** pedíselo a Claude. Crea `src/content/blog-en/<link-en-inglés>.md` con el mismo frontmatter más la línea `es: "<nombre del archivo en español>"`, y la imagen con `python3 og-plantilla/generar.py <link> "<título>" "<categoría>" "<comando>" en`. Usá la misma `pubDate` que el original (si el original está programado, la traducción sale el mismo día).
- **Qué pasa solo:** cada página declara su versión en el otro idioma (`hreflang`) para Google y Bing, el sitemap lista los pares, el botón ES/EN de la barra lleva a la misma página en el otro idioma y el feed `/en/rss.xml` alimenta el aviso diario a Bing.
- **Aviso de idioma:** a quien tiene el navegador en inglés y entra a una página que tiene traducción le aparece una barra para pasar a inglés (y al revés). No se redirige a nadie automáticamente, para que los buscadores vean las dos versiones.
- **Textos de la home y la interfaz:** la home en inglés es `src/pages/en/index.astro`; los textos de la barra, el pie y los botones están en `src/lib/i18n.ts`. Si cambiás algo de la home en español, cambialo también ahí.

## Artículos programados

Podés subir artículos con fecha futura: la web solo muestra los que tienen `pubDate` igual o anterior al momento en que se compila. Para que aparezcan solos en su día, todos los días a las 06:15 UTC (08:15 en Madrid en verano, 07:15 en invierno) GitHub vuelve a compilar la web con `.github/workflows/publicar.yml` y avisa a Bing (IndexNow) de los artículos de las últimas 24 horas.

- Usá `pubDate: 2026-11-02T06:00:00Z` (a las 06:00 UTC) para que el artículo salga en la compilación de ese día.
- Si querés publicar algo ya mismo, dale una fecha de hoy con una hora que ya pasó.
- Para forzar una publicación sin esperar: en GitHub → Actions → "Publicar artículos programados" → Run workflow.
- El workflow necesita el secreto `VERCEL_DEPLOY_HOOK` (GitHub → Settings → Secrets and variables → Actions). El valor sale de Vercel → Settings → Git → Deploy Hooks.
- GitHub pausa los workflows programados si el repo pasa 60 días sin cambios. Si eso pasa, entrá a Actions y reactivalo.
- No borrar `public/4b8b80a693d07c7131de46a294bd6889.txt`: es la clave de IndexNow.

## Después de publicar (2 minutos)

1. **Google Search Console** (opcional): Inspección de URLs → pegar la URL del artículo → Solicitar indexación. Si no lo hacés, Google lo encuentra igual por el sitemap.
2. **Bing Webmaster Tools**: lo hace solo el workflow de publicación con IndexNow. Si querés asegurarte, URL Submission → pegar la URL → Submit.
3. Compartirlo en LinkedIn y X con el enlace. Si la vista previa muestra una imagen o un título viejo, pasá la URL por el [Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/) para que la actualice.

No borrar nunca `public/googleffb23e07d95d9c73.html`: es la verificación de Google Search Console.

## Reglas SEO / GEO de cada artículo

- Respuesta directa en las primeras 40–60 palabras (definición "X es…").
- Palabra clave principal en título, H1 y primer párrafo.
- Subtítulos `##` en forma de pregunta; párrafos de 2–4 frases; tablas y listas cuando sumen.
- Experiencia en primera persona: lo que hago, no teoría. Sin cifras internas ni clientes con nombre.
- 3–5 enlaces internos (`/#como`, `/#detras`, `/#criterio`, otros artículos) y enlaces externos solo a fuentes oficiales. En las traducciones, los links van a la versión en inglés (`/en/#como`, `/en/blog/...`).
- Nunca enlazar a un artículo que todavía no se publicó: da error hasta su fecha. Cuando sale uno nuevo, sumar el link desde los artículos anteriores que hablan del tema.
- Si el título pasa de 60 caracteres, sumar `seoTitle` con una versión corta para Google y Bing.
- Fecha visible; si se actualiza, sumar `updatedDate`.
- Preguntas frecuentes al final con respuestas autosuficientes.

## Reglas de escritura (que no suene a IA)

Todo texto de la web, del blog y de redes pasa este filtro antes de publicarse (basado en el plugin Humanizer):

- Sin contrastes de relleno del tipo "no es X, es Y" o "No hablo de X. Hablo de Y". Decir la idea directo.
- Sin frases de remate sueltas que repiten lo anterior ("Ningún lead espera.", "Eso es todo.").
- Sin guiones largos (— o –) como conector: usar punto, coma, dos puntos o paréntesis.
- Sin listas de tres por inercia: solo cuando hay tres cosas de verdad.
- Sin negritas decorativas ni listas con título en negrita en cada punto (la excepción son los cuatro criterios de "Lo que no automatizo").
- Sin palabras infladas ni de venta ("crucial", "clave", "potenciar", "revolucionario", "sin precedentes").
- Cada artículo cierra distinto; no repetir la misma frase de despedida.
- No inventar datos, citas ni detalles: si falta algo, se pregunta.
- Mantener la voz de Emi: voseo, frases cortas y largas alternadas, opiniones propias. Nunca usar "che".
- Sin remates en paralelo del tipo "El post hizo esto. La confianza hizo aquello." ni frases sueltas de una línea para dar efecto.
- No cerrar por defecto con una frase de firma ("La IA nos da esteroides"): usarla solo cuando suma.
- "Soy de ventas, no de código" es el lema de la web: no repetirlo en artículos ni posts.
- Clientes y personas del equipo, siempre anónimos salvo que haya un ok explícito.
- Frases propias que se respetan cuando suman: "La IA nos da esteroides", "Siempre usé el stack que me dieron. Hoy creo el mío", "Las herramientas se adaptan a las personas".

## Otros archivos

- `src/pages/404.astro`: la página que aparece cuando un link no existe (en español, con acceso a la versión en inglés).
- `vercel.json`: cabeceras de seguridad y caché para fuentes e imágenes. Si una imagen de redes cambia y no se actualiza, puede tardar hasta un día.

## Dominio

La web vive en `https://www.emilianomoretti.com` (comprado en Vercel). `emilianomoretti.com` y `emiliano-moretti.vercel.app` redirigen ahí con un 308.

Si algún día cambia el dominio, hay que actualizarlo en `astro.config.mjs` (`site`), `public/robots.txt` (línea `Sitemap:`), `public/rss.xsl`, `src/pages/index.astro` y `src/pages/en/index.astro` (datos estructurados), `src/layouts/Base.astro` y `.github/workflows/publicar.yml` (`SITE` y `host`). Después, Search Console (Cambio de dirección), Bing (Site Move) y los links de LinkedIn, X y GitHub.
