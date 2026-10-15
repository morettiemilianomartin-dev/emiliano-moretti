# emiliano-moretti — web + blog (Astro)

Sitio estático hecho con [Astro](https://astro.build). Vercel lo compila solo en cada cambio.

## Publicar un artículo

1. Creá un archivo en `src/content/blog/` con el nombre del link, por ejemplo `notion-como-memoria.md`
   (queda publicado en `/blog/notion-como-memoria/`).
2. Arriba de todo va este bloque (frontmatter):

```md
---
title: "Título con la palabra clave principal (máx. ~65 caracteres)"
description: "Resumen de 140–160 caracteres: es lo que muestran Google y las redes."
pubDate: 2026-10-21
category: "Proceso"
tags: ["ventas con IA", "Claude"]
tldr:
  - "Respuesta directa en una frase."
  - "Segunda idea clave."
faq:
  - q: "Pregunta real que haría alguien"
    a: "Respuesta corta y autosuficiente."
linkedin: "https://www.linkedin.com/posts/..."   # opcional
x: "https://x.com/EmilianoMorett5/status/..."      # opcional
draft: false                                       # true = no se publica
---
```

3. Debajo, el texto en Markdown. Subtítulos `##` formulados como preguntas.
4. Subí el archivo a GitHub: el índice del blog, el sitemap, el RSS y `llms.txt` se actualizan solos.

## Después de publicar (2 minutos)

1. **Google Search Console** → Inspección de URLs → pegar la URL del artículo → Solicitar indexación.
2. **Bing Webmaster Tools** → URL Submission → pegar la URL → Submit.
3. Compartirlo en LinkedIn y X con el enlace.

No borrar nunca `public/googleffb23e07d95d9c73.html`: es la verificación de Google Search Console.

## Reglas SEO / GEO de cada artículo

- Respuesta directa en las primeras 40–60 palabras (definición "X es…").
- Palabra clave principal en título, H1 y primer párrafo.
- Subtítulos `##` en forma de pregunta; párrafos de 2–4 frases; tablas y listas cuando sumen.
- Experiencia en primera persona: lo que hago, no teoría. Sin cifras internas ni clientes con nombre.
- 3–5 enlaces internos (`/#como`, `/#detras`, `/#criterio`, otros artículos) y enlaces externos solo a fuentes oficiales.
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

## Cambiar a dominio propio

Editá `site` en `astro.config.mjs` y la línea `Sitemap:` de `public/robots.txt`.
