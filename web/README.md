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

## Reglas SEO / GEO de cada artículo

- Respuesta directa en las primeras 40–60 palabras (definición "X es…").
- Palabra clave principal en título, H1 y primer párrafo.
- Subtítulos `##` en forma de pregunta; párrafos de 2–4 frases; tablas y listas cuando sumen.
- Experiencia en primera persona: lo que hago, no teoría. Sin cifras internas ni clientes con nombre.
- 3–5 enlaces internos (`/#como`, `/#detras`, `/#criterio`, otros artículos) y enlaces externos solo a fuentes oficiales.
- Fecha visible; si se actualiza, sumar `updatedDate`.
- Preguntas frecuentes al final con respuestas autosuficientes.

## Cambiar a dominio propio

Editá `site` en `astro.config.mjs` y la línea `Sitemap:` de `public/robots.txt`.
