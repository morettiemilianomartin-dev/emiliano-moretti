---
title: "Cómo armé mi web personal con Claude, GitHub y Vercel (gratis y sin programar)"
description: "El proceso real detrás de esta web: de la idea a publicarla con Claude, GitHub y Vercel, sin saber programar y sin pagar hosting."
pubDate: 2026-10-14T10:00:00Z
category: "Construcción"
tags: ["Claude", "GitHub", "Vercel", "Astro", "web personal", "marca personal"]
tldr:
  - "Esta web la armé con Claude sin saber programar: Claude escribe el código, GitHub lo guarda y Vercel lo publica."
  - "El stack es gratuito: Astro, GitHub y el plan Hobby de Vercel. Lo único opcional que se paga es un dominio propio."
  - "Iteré más de diez versiones en una vista previa privada antes de publicar nada."
  - "Lo difícil no fue la técnica: fue decidir qué quería contar y para quién."
faq:
  - q: "¿Se puede hacer una web personal con Claude sin saber programar?"
    a: "Sí. Yo no programo. Claude escribe el código a partir de lo que le pido en lenguaje natural, y yo reviso el resultado en una vista previa antes de publicarlo."
  - q: "¿Cuánto cuesta publicar una web con GitHub y Vercel?"
    a: "Puede costar cero. GitHub y el plan Hobby de Vercel son gratuitos para uso personal, y Astro es código abierto. Lo único que conviene pagar más adelante es un dominio propio."
  - q: "¿Qué es Vercel?"
    a: "Es un servicio que publica webs. Lo conectás a tu repositorio de GitHub y, cada vez que cambiás un archivo, vuelve a publicar la web sola."
  - q: "¿Qué es GitHub y por qué lo necesito?"
    a: "Es donde se guarda el código de la web, con el historial de cada cambio. Funciona como la fuente de verdad: Vercel lee de ahí para publicar."
  - q: "¿Por qué Astro y no solo un archivo HTML?"
    a: "Mientras era una sola página, un HTML alcanzaba. Para tener un blog, Astro genera solo el índice, el mapa del sitio y el RSS: publicar un artículo es subir un archivo de texto."
---

**Esta web la armé con Claude, sin saber programar y sin pagar hosting.** Claude escribe el código a partir de lo que le pido, GitHub lo guarda y Vercel lo publica. Soy de ventas, no de código, y quería que la web misma fuera la prueba de lo que cuento.

Acá va el proceso real, con lo que funcionó y con lo que se rompió en el camino.

## ¿Por qué hacer una web personal si ya tengo LinkedIn?

Esta web existe porque alguien me dijo que lo que a mí me parece normal no lo hace casi nadie: [vender con un proceso que corre sobre Claude](/blog/proceso-comercial-automatizado-con-claude/). Decidí contarlo, y necesitaba un lugar propio para hacerlo.

LinkedIn y X son buenos para conversar, pero el contenido dura poco y el alcance lo decide el algoritmo. Una web es mía: acumula, se puede encontrar en Google y la pueden citar las IA cuando alguien pregunta por el tema.

## ¿Qué herramientas usé?

| Herramienta | Para qué | Costo |
|---|---|---|
| [Claude](https://claude.ai) | Diseña, escribe el código y los textos conmigo | Mi suscripción de siempre |
| [GitHub](https://github.com) | Guarda el código y el historial de cambios | Gratis |
| [Vercel](https://vercel.com) | Publica la web cada vez que algo cambia | Gratis (plan Hobby, uso personal) |
| [Astro](https://astro.build) | Arma la web y el blog | Gratis (código abierto) |

Nada más. Sin plantillas pagas, sin constructores visuales, sin hosting.

## ¿Cómo fue el proceso, paso a paso?

### 1. Decidir qué contar y para quién

Antes de diseñar nada definí tres cosas: el objetivo (contar cómo trabajo, no vender servicios), a quién le hablo (founders, directivos y perfiles tech que están dando sus primeros pasos con IA) y qué quería que pasara después: una conversación.

Esa fue la parte difícil. La técnica vino después.

### 2. Buscar referencias

Le mostré a Claude webs que me gustaban y le expliqué por qué. De ahí salió el lenguaje visual: blanco y negro, mucho aire, frases en dos tonos y una tipografía monoespaciada como guiño a "soy sales y código".

### 3. Iterar en una vista previa privada

Trabajé más de diez versiones en una vista previa que solo veía yo. Cambié el hero entero, saqué módulos que no sumaban, rehíce la sección de cómo funciona tres veces. Cada vez le pedía a Claude que revisara la página como si fuera un director de ventas viéndola por primera vez.

### 4. Armar un sistema de diseño

Con la web encaminada, armamos un mini sistema de diseño: logo con forma de prompt de terminal, colores, tipografías, botones y tono de voz. Sirve para que todo lo que publique, acá y en redes, se vea como una sola cosa.

### 5. Publicar con GitHub y Vercel

Creé un repositorio en GitHub, subí los archivos desde el navegador y lo conecté a Vercel. Desde ese momento, cada cambio que subo se publica solo en uno o dos minutos.

### 6. Sumar un blog

Cuando quise escribir artículos como este, pasamos la web a Astro. Ahora publicar es subir un archivo de texto: el índice del blog, el mapa del sitio y el RSS se actualizan solos.

## ¿Qué salió mal?

Varias cosas, y conviene contarlas.

- **Un archivo con el nombre equivocado.** Al descargar una versión nueva, mi computadora la guardó como `index_4.html`. La subí así y la web dejó de verse. La solución fue renombrarla a `index.html` desde GitHub. Lección: revisar el nombre antes de subir.
- **Una foto que desapareció.** En una versión, la imagen de la tarjeta de contacto dependía de un archivo aparte que no estaba donde debía. Terminé incrustándola en la página.
- **Diseños que no funcionaban.** Hubo un diagrama que me parecía bien y no explicaba nada. Lo cambiamos por algo más simple: las herramientas fijas que se van pintando a medida que bajás.

Ninguno de esos problemas requirió saber programar. Requirió mirar con atención y pedir el cambio.

## ¿Por qué esto le importa a alguien que no quiere hacerse una web?

Porque la web es lo de menos. Lo que muestra es un patrón que sirve para casi cualquier proceso de una empresa: vos ponés el criterio (qué se hace, para quién, qué queda y qué se va) y la IA ejecuta.

Para un founder o un directivo, eso significa poder probar una idea (una landing, una herramienta interna, un flujo de trabajo) sin esperar turno del equipo técnico, y llegar a esa conversación con algo concreto en la mano. No reemplaza a nadie: cambia desde dónde arranca la conversación.

## ¿Qué aprendí?

1. **El criterio es tuyo, la ejecución puede no serlo.** Claude escribe el código; decidir qué se queda y qué se va es trabajo mío.
2. **Iterar en privado es barato.** Diez versiones en una vista previa cuestan menos que una mala versión publicada.
3. **Pedir revisiones con un rol concreto mejora el resultado.** "Revisalo como un director de ventas" da mejores observaciones que "¿qué te parece?".
4. **Gratis no significa precario.** El stack gratuito alcanza de sobra para una web personal con blog.

Es el mismo principio que aplico en ventas: [las herramientas se adaptan a las personas](/#detras), no al revés.

Si estás probando cosas parecidas en tu empresa, escribime. Me interesa conocer a quien está en lo mismo.
