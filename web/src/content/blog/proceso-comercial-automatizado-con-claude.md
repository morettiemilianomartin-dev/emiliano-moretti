---
title: "Cómo automaticé mi proceso comercial con Claude (sin saber programar)"
description: "Del primer mail de un lead al CRM sin cargar nada a mano: las herramientas, el flujo paso a paso y lo que decidí no automatizar."
pubDate: 2026-10-14T12:00:00Z
category: "Proceso"
destacado: true
tags: ["ventas con IA", "Claude", "proceso comercial", "automatización de ventas", "Notion", "HubSpot"]
tldr:
  - "Mi proceso comercial corre sobre Claude: del mail de un lead a la propuesta y al CRM, sin cargar datos a mano."
  - "Claude no reemplaza mis herramientas: se conecta a Gmail, Calendar, Granola, Notion, Slack y HubSpot, y trabaja dentro de ellas."
  - "Lo que repito, lo convierto en skills. Notion es la memoria: todo lo que Claude sabe de un cliente sale de ahí."
  - "Las llamadas, la relación y la decisión final siguen siendo mías. La IA prepara, yo decido."
faq:
  - q: "¿Necesito saber programar para automatizar mi proceso comercial con Claude?"
    a: "No. Todo lo que uso son conectores y skills que se configuran en lenguaje natural. Lo técnico es menos importante que tener claro tu proceso y enseñarle a Claude dónde buscar."
  - q: "¿Qué es un conector en Claude?"
    a: "Es la conexión que le permite a Claude leer y escribir en tus herramientas, como Gmail, Notion o HubSpot. Sin conectores, Claude solo ve lo que le pegás en el chat; con conectores, trabaja con tu información real."
  - q: "¿Qué es una skill?"
    a: "Es un conjunto de instrucciones guardado para una tarea que repetís: preparar una llamada, armar una propuesta, cargar un deal. En vez de explicarle todo cada vez, la invocás y sigue siempre el mismo proceso."
  - q: "¿La IA va a reemplazar a los comerciales?"
    a: "Creo que no. La IA se queda con la prospección, las notas, la validación técnica y las propuestas sin errores. La parte humana, empática y social de vender no se reemplaza. A mí me da más tiempo para eso."
  - q: "¿Qué pasa con la información de los clientes?"
    a: "Nada llega a un cliente sin que yo lo lea, y cuando cuento mi proceso en público, los clientes van siempre anonimizados. Antes de conectar una herramienta conviene revisar qué permisos le das y qué política de datos tiene tu empresa."
---

**Un proceso comercial automatizado con Claude es un flujo de ventas en el que la IA mueve la información entre tus herramientas por vos**: lee el mail del lead, completa la ficha del cliente, resume la llamada, prepara la propuesta y actualiza el CRM. Vos revisás y decidís. Así trabajo hoy, y no sé programar.

Vendo desde 2011. Pasé por medios y publicidad, y durante quince años usé el stack que me dieron: el CRM de turno, las slides de la empresa, el Excel de siempre. A principios de 2026 empecé a usar IA en serio y, por primera vez, armé mis propias herramientas.

Este artículo cuenta cómo está armado [mi proceso](/#como), pieza por pieza: qué herramientas uso, cómo es cada paso, qué hace que funcione y qué decidí no automatizar.

## ¿Por qué un comercial sin código terminó armando su propio stack?

Lo primero que construí fue un generador de propuestas. Le pasaba las notas de la reunión y me devolvía una landing lista para mandar al cliente, con analítica para saber cuándo la abría y llamarlo en caliente.

No servía para todo. Las propuestas técnicas y complejas siguen necesitando foco. Pero las estándar, las de los servicios más commodity, salían en minutos en lugar de horas armando slides a mano.

Hoy ese generador está obsoleto. Lo reemplazó un flujo más completo, que también resuelve las propuestas difíciles. Pero fue mi primera experiencia creando producto, y ahí entendí algo que guía todo lo demás:

> Las herramientas se van a adaptar a las personas, y no las personas a las herramientas.

## ¿Qué herramientas uso y qué hace cada una?

Mi stack no tiene nada exótico. Son herramientas que cualquier equipo comercial ya usa; lo que cambió es quién mueve la información entre ellas.

| Herramienta | Qué hace en mi proceso |
|---|---|
| Gmail | Por donde entra el lead |
| Calendar | Agenda las llamadas |
| [Granola](https://www.granola.ai) | Graba y resume cada llamada |
| [Notion](https://www.notion.com) | La ficha de cada cliente; la memoria del sistema |
| Slack | Donde pido las estimaciones al equipo |
| Claude Design | Donde se arma la propuesta, con la marca de cada boutique |
| [HubSpot](https://www.hubspot.com) | El pipeline, siempre al día |
| WhatsApp (vía Instinct) | Donde me llega lo urgente |
| [Claude](https://claude.ai) | El que conecta todo lo anterior |

## ¿Cómo es el flujo, paso a paso?

Son cinco pasos, del primer contacto al seguimiento. En cada uno, lo que antes hacía a mano hoy lo prepara Claude y yo lo reviso.

### 1. El lead

**Antes:** un "te escribo pronto" y a investigar quién era.

**Hoy:** el formulario llega a mi correo y abro el caso en Claude. En minutos sé quién escribe, qué hace su empresa y si ya hablamos antes, así que ningún lead queda esperando.

### 2. La llamada

**Antes:** notas en una libreta que nadie pasaba a limpio.

**Hoy:** llego a la llamada sabiendo con quién hablo. La ficha nace en Notion, Granola graba el discovery y Claude completa la ficha con lo que dijo el cliente. Yo me concentro en escuchar.

### 3. La estimación

**Antes:** días persiguiendo al equipo por Slack.

**Hoy:** el pedido sale por Slack con el resumen de la llamada y el link a la ficha. El equipo estima con todo el contexto, sin tener que preguntarme lo mismo dos veces.

### 4. La propuesta

**Antes:** slides armadas a mano, una por una.

**Hoy:** la propuesta se arma en Claude Design con el sistema de diseño de cada boutique y sale con la marca correcta a la primera. Después la reviso con el cliente en una llamada grabada.

Algo que todavía no resolví: al pasar de la landing al PDF perdí la analítica de apertura. La extraño, y va a volver.

### 5. El seguimiento

**Antes:** un CRM que se actualizaba el viernes, si se actualizaba.

**Hoy:** cada paso actualiza el deal en HubSpot y lo urgente me llega por WhatsApp, esté donde esté. Lo que muestra el pipeline es lo que está pasando.

## ¿Qué hace posible que funcione?

Lo que se ve son los pasos. Lo que hace que funcione está [detrás del proceso](/#detras), y son tres piezas: conectores, skills y una memoria en Notion.

### Conectores: Claude trabaja dentro de mis herramientas

Un conector es la conexión que le permite a Claude leer y escribir en una herramienta. Con ellos, Claude lee el mail, consulta la ficha en Notion, revisa la transcripción de Granola y actualiza el deal en HubSpot, y yo dejo de copiar y pegar entre pestañas.

### Skills: lo que repito, lo estandarizo

Una skill es un conjunto de instrucciones guardado para una tarea que repito. Cada tarea que hago más de dos veces se convierte en una: preparar una llamada, reconstruir el historial de una cuenta, armar una propuesta, cargar un deal completo, revisar qué está frenado en el pipeline o arrancar un proyecto cuando el cliente dice que sí. Así cada tarea sale con el mismo proceso y el mismo nivel.

### Notion: la memoria del sistema

Se da por sentado y es la base. Todo lo que Claude sabe de un cliente sale de Notion: la ficha, las notas de las llamadas, las propuestas anteriores y los playbooks de cada boutique. Sin Notion, Claude empieza de cero en cada conversación.

## ¿Qué cambió en mi día a día?

Lo más visible es el tiempo, pero no es lo más importante. Lo que más valoro es que el proceso ya no depende de mi memoria.

Antes, que una estimación saliera completa dependía de que yo me acordara de todo lo que se habló en la llamada. Hoy Claude valida las notas contra lo que pidió el cliente y contra lo que necesita el equipo técnico. Ya no depende de la subjetividad de olvidarme algo.

El equipo también trabaja distinto: recibe el contexto completo de entrada y deja de perseguirme con preguntas. Y yo tengo más tiempo para lo que no se delega: estar con los clientes.

## ¿Qué no automatizo?

Esta es la parte que más me importa contar, porque es la que la gente suele saltarse. Son [cuatro criterios](/#criterio):

- **La IA prepara, yo decido.** Nada llega a un cliente sin que yo lo lea.
- **Las llamadas son mías.** Granola toma las notas para que yo pueda escuchar.
- **El contexto vale más que el prompt.** El resultado mejora cuando le enseñás dónde buscar.
- **Las relaciones no se automatizan.** El tiempo que libero va a ver clientes, no a mandar más mails.

La IA nos da esteroides, pero el comercial no va a ser reemplazado. La parte humana, la empatía y lo social de vender no se delegan. Lo que se delega es la prospección, las notas, validar con el equipo técnico que no falte nada y que las propuestas salgan sin errores.

## ¿Por dónde empezar si sos comercial?

No hace falta armarlo todo de una vez. Yo tampoco lo hice así: empecé por una sola tarea y fui sumando piezas.

1. Elegí la tarea que más odiás repetir. Para mí eran las propuestas estándar.
2. Conectá una sola herramienta, la que más usás: el mail, el CRM o tus notas.
3. Escribí tu proceso como se lo explicarías a alguien nuevo. Esa explicación es tu primera skill.
4. Definí dónde vive la memoria: una ficha por cliente, siempre en el mismo lugar.
5. Decidí qué no vas a automatizar. Con ese límite claro, confiás en el resto.

Siempre usé el stack que me dieron. Hoy creo el mío. Y lo voy a seguir contando acá, pieza por pieza. Si estás en lo mismo, [escribime y comparamos notas](/#contacto).
