---
title: "Notion como memoria: la base de mi proceso comercial con Claude"
description: "Todo lo que Claude sabe de un cliente sale de Notion. Cómo organizo fichas, notas de llamadas y propuestas para que la IA no empiece de cero en cada conversación."
pubDate: 2026-10-29T06:00:00Z
category: "Proceso"
tags: ["Notion", "Claude", "ventas con IA", "proceso comercial"]
image: "/og/notion-como-memoria.jpg"
tldr:
  - "Notion es la memoria de mi proceso comercial: todo lo que Claude sabe de un cliente sale de ahí."
  - "Cada propuesta tiene una página interna con la ficha del lead, lo que pidió el cliente, el alcance, los riesgos y las preguntas pendientes, siempre con la misma estructura."
  - "Claude lee Notion antes de cada paso, decide qué hacer y escribe lo nuevo en el mismo lugar."
  - "Antes de pensar en prompts, conviene ordenar dónde vive la información."
faq:
  - q: "¿Para qué sirve Notion si uso Claude?"
    a: "Para que Claude tenga memoria. Cada conversación empieza sin contexto; si la información del cliente está ordenada en Notion y Claude tiene acceso, puede leerla antes de cada tarea y no hay que volver a explicarle nada."
  - q: "¿Qué información comercial conviene guardar en Notion?"
    a: "Fichas de clientes, notas de cada llamada, propuestas con su estado y los playbooks de cómo se vende cada servicio. Lo importante es que siempre tenga la misma estructura, así Claude sabe dónde buscar."
  - q: "¿Notion reemplaza al CRM?"
    a: "En mi caso no. HubSpot guarda el deal: etapa, importe y responsable. Notion guarda el contexto: qué dijo el cliente, qué le propusimos y por qué."
---

**Notion es la memoria de mi proceso comercial: todo lo que Claude sabe de un cliente sale de ahí.** Es la parte del sistema que menos se ve y la que más se da por sentada. Sin Notion, Claude empezaría de cero en cada conversación y yo tendría que explicarle otra vez quién es el cliente, qué pidió y qué le propusimos.

## ¿Por qué Claude necesita una memoria?

Cada conversación con Claude arranca sin contexto. Los conectores le dan acceso a mis herramientas (Gmail, Calendar, Granola, HubSpot), pero alguien tiene que decidir dónde vive la información de cada cliente y con qué forma. Ese lugar es Notion.

Uno de los [criterios que no negocio](/#criterio) es que el contexto vale más que el prompt. La calidad de lo que Claude devuelve depende sobre todo de lo bien que le enseñé dónde buscar.

## ¿Qué guardo en Notion?

Todo lo comercial vive en un mismo espacio de ventas, con cuatro partes: clientes y cuentas, notas de llamadas, propuestas y playbooks por boutique.

Las propuestas están en una base de datos donde cada fila es un proyecto. Además del documento, cada una tiene campos fijos: el estado (haciendo propuesta, esperando respuesta, ganado, perdido), el tipo de servicio, cómo nos conoció el cliente, el idioma y la llamada de discovery. También hay plantillas por tipo de proyecto, así una propuesta de web y una de branding arrancan con la estructura que les corresponde.

Que todo tenga siempre la misma forma es lo que hace que funcione, porque Claude no tiene que adivinar dónde está cada cosa.

## ¿Cómo es una ficha por dentro?

Cada propuesta tiene una página interna que se va llenando a medida que avanza la venta. Arriba de todo está el link a la hoja de estimación. Después viene una ficha del lead con el origen del contacto, la fecha de la llamada de discovery y el link a la grabación de Granola, más los links al deal en HubSpot y al hilo de mail.

Debajo, Claude ordena lo que salió de la llamada: quién es el cliente, qué pidió, qué herramientas usa, qué entra en el alcance y qué queda afuera. La página termina con dos secciones que me ahorran muchos errores, una con los riesgos y puntos abiertos y otra con las preguntas que todavía le tengo que hacer al cliente.

Hace poco lo vi funcionar en una propuesta de branding. Después de una llamada de discovery de media hora, la página ya tenía todo eso armado. Dos días después estimé el proyecto con una compañera, sumamos las notas de esa sesión en la misma página y ajustamos el alcance con su feedback. La versión para el cliente salió de ahí, como subpágina y sin ningún dato interno.

## ¿Cómo lo usa Claude?

El ciclo es siempre el mismo: Claude lee, decide y escribe. Antes de una llamada lee la ficha del cliente y me arma el contexto. Después, Granola transcribe la conversación y Claude completa la ficha con lo que dijo el cliente.

Cuando llega el momento de la propuesta, la skill que uso para armarlas revisa primero Notion, Gmail y Granola. Busca también en el histórico de propuestas del grupo, con registros desde 2020, por si ese cliente ya trabajó con nosotros. Recién después redacta, y la propuesta queda guardada en el repositorio de su boutique, con su estado.

Lo cuento paso a paso en [cómo automaticé mi proceso comercial con Claude](/blog/proceso-comercial-automatizado-con-claude/).

## ¿Qué reglas le puse?

Algunas partes de Notion son solo de lectura. El histórico de propuestas, por ejemplo, Claude lo consulta como referencia pero nunca lo modifica.

Otra regla salió de un cambio de proceso. Antes cargaba cada deal en HubSpot con un formulario. Ahora Claude lo crea directo, pero antes busca si ya existe uno abierto para ese cliente y, si lo encuentra, me pregunta antes de crear otro. Así no se duplican deals.

La otra regla importante separa lo interno de lo que ve el cliente. La página que se comparte con un cliente es siempre una subpágina de la página interna del proyecto, y la hoja de estimación interna queda arriba de todo en la página interna, nunca en la del cliente. Así los costos y las notas del equipo no se mezclan con lo que se envía.

## ¿Y HubSpot?

Conviven. HubSpot guarda el deal: la etapa, el importe y quién lo lleva. Notion guarda el contexto: qué dijo el cliente, qué le propusimos y por qué. Claude escribe en los dos, y cada paso del proceso actualiza el deal sin que yo lo cargue a mano.

El mismo sistema me sirve para otras cosas. Los [case studies que estamos armando](/blog/case-studies-cuando-el-trabajo-no-se-ve/) siguen el mismo camino: entrevista grabada en Granola, ficha ordenada por Claude y repositorio en Notion.

## ¿Por dónde empezar?

Si estás metiendo IA en tu proceso comercial, mi consejo es ordenar primero dónde vive la información y con qué estructura, y después pensar en los prompts.

Si querés ver cómo lo tengo armado por dentro, está en [Detrás del proceso](/#detras). Y si estás en lo mismo, [escribime](/#contacto) y comparamos cómo lo organiza cada uno.
