# emiliano moretti

Landing personal de Emiliano Moretti: cómo funciona un proceso comercial montado sobre Claude, Notion, Granola, Slack, Claude Design y HubSpot.

Sitio estático, sin build: `index.html` más sus assets.

- `index.html`: la página
- `og.png`: imagen para compartir en LinkedIn y X (1200×630)
- `favicon.svg` / `apple-touch-icon.png`: iconos
- `avatar.jpg`: foto de la tarjeta de contacto
- `fonts/geist-mono-500.woff2`: tipografía del isologotipo (Geist Mono, licencia OFL)

## Publicar en Vercel

Importar el repo en Vercel con Framework Preset "Other", sin build command ni output directory.
Cada push a `main` se publica solo.

## Si cambia el dominio

Actualizar en `index.html` las URLs de `canonical`, `og:url`, `og:image` y `twitter:image`.
