# Imagen para redes de cada artículo

Cada artículo nuevo lleva su propia imagen al compartirse en LinkedIn, X o WhatsApp. La home y los artículos anteriores siguen usando `public/og.jpg`.

Formato: 1200×630, fondo negro con puntos.

- Arriba a la izquierda, una línea de comando escrita para ese artículo (por ejemplo `> whatsapp: 2 mensajes nuevos`). Sale de algo que el artículo cuenta; nunca se inventa.
- Arriba a la derecha, `blog / categoría`.
- En el centro, el título. Puede ser una versión más corta del título del artículo (hasta unas 8 palabras).
- Abajo, tu foto chica (`public/avatar.jpg`) con "Emiliano Moretti / Ventas B2B con IA y criterio humano".

`generar.py` crea la imagen en `public/og/<slug>.jpg`. Esta carpeta no se publica en la web.
