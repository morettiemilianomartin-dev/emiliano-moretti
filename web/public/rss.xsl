<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

<xsl:template name="fecha">
  <xsl:param name="d"/>
  <xsl:variable name="m" select="substring($d,9,3)"/>
  <xsl:value-of select="number(substring($d,6,2))"/>
  <xsl:text> de </xsl:text>
  <xsl:choose>
    <xsl:when test="$m='Jan'">enero</xsl:when><xsl:when test="$m='Feb'">febrero</xsl:when>
    <xsl:when test="$m='Mar'">marzo</xsl:when><xsl:when test="$m='Apr'">abril</xsl:when>
    <xsl:when test="$m='May'">mayo</xsl:when><xsl:when test="$m='Jun'">junio</xsl:when>
    <xsl:when test="$m='Jul'">julio</xsl:when><xsl:when test="$m='Aug'">agosto</xsl:when>
    <xsl:when test="$m='Sep'">septiembre</xsl:when><xsl:when test="$m='Oct'">octubre</xsl:when>
    <xsl:when test="$m='Nov'">noviembre</xsl:when><xsl:otherwise>diciembre</xsl:otherwise>
  </xsl:choose>
  <xsl:text> de </xsl:text>
  <xsl:value-of select="substring($d,13,4)"/>
</xsl:template>

<xsl:template match="/">
<html lang="es">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <meta name="robots" content="noindex"/>
  <title>RSS · <xsl:value-of select="/rss/channel/title"/></title>
  <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
  <style>
    @font-face{font-family:"Inter Tight";src:url(/fonts/inter-tight-400.woff2) format("woff2");font-weight:400;font-display:swap}
    @font-face{font-family:"Inter Tight";src:url(/fonts/inter-tight-500.woff2) format("woff2");font-weight:500;font-display:swap}
    @font-face{font-family:"Geist Mono";src:url(/fonts/geist-mono-500.woff2) format("woff2");font-weight:500;font-display:swap}
    :root{--bg:#fff;--fg:#333;--ink:#111;--muted:#6E6E6E;--surface:#F2F2F2;--line:#E8E8E8;--on-ink:#fff}
    @media (prefers-color-scheme:dark){:root{--bg:#0B0B0B;--fg:#D9D9D9;--ink:#F5F5F5;--muted:#9A9A9A;--surface:#171717;--line:#262626;--on-ink:#0B0B0B}}
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:var(--bg);color:var(--fg);font-family:"Inter Tight","Helvetica Neue",Arial,sans-serif;font-size:16px;line-height:1.55;letter-spacing:-.02em;-webkit-font-smoothing:antialiased}
    a{color:inherit}
    .wrap{max-width:760px;margin:0 auto;padding:40px 24px 80px}
    .brand{font-family:"Geist Mono",ui-monospace,Menlo,monospace;font-size:15px;color:var(--ink);text-decoration:none;letter-spacing:0}
    .brand .cur{display:inline-block;width:.55em;height:1.05em;background:var(--ink);vertical-align:-.15em;margin-left:3px;animation:b 1.1s steps(1) infinite}
    @keyframes b{50%{opacity:0}}
    .eyebrow{font-family:"Geist Mono",ui-monospace,monospace;font-size:12px;text-transform:uppercase;letter-spacing:.02em;color:var(--muted);margin:56px 0 14px}
    h1{font-size:clamp(30px,5vw,44px);font-weight:500;color:var(--ink);line-height:1.08;text-wrap:balance}
    h1 .g{color:var(--muted)}
    .box{margin-top:32px;background:var(--surface);border-radius:20px;padding:24px}
    .box p{margin-bottom:12px}
    .box p:last-child{margin-bottom:0}
    code{display:block;font-family:"Geist Mono",ui-monospace,monospace;font-size:14px;letter-spacing:0;background:var(--bg);color:var(--ink);border:1px solid var(--line);border-radius:12px;padding:12px 14px;word-break:break-all;margin:4px 0 14px}
    .small{font-size:14px;color:var(--muted)}
    h2{font-size:22px;font-weight:500;color:var(--ink);margin:56px 0 8px}
    ol{list-style:none}
    li{border-top:1px solid var(--line);padding:22px 0}
    li .meta{font-family:"Geist Mono",ui-monospace,monospace;font-size:12px;letter-spacing:0;color:var(--muted);text-transform:uppercase}
    li h3{font-size:20px;font-weight:500;color:var(--ink);margin:6px 0 6px;line-height:1.25}
    li h3 a{text-decoration:none}
    li h3 a:hover{text-decoration:underline}
    li p{color:var(--muted)}
    .pill{display:inline-flex;align-items:center;height:44px;padding:0 20px;border-radius:999px;background:var(--ink);color:var(--on-ink);text-decoration:none;font-weight:500;margin-top:40px}
  </style>
</head>
<body>
  <div class="wrap">
    <a class="brand" href="/"><span aria-hidden="true">&gt;</span> emiliano moretti<span class="cur" aria-hidden="true"></span></a>

    <p class="eyebrow">&gt;_ Feed RSS</p>
    <h1>Esto es un feed RSS. <span class="g">Sirve para seguir el blog sin tener que entrar a la web.</span></h1>

    <div class="box">
      <p>RSS es una forma de suscribirse a un sitio. Copiá esta dirección en tu lector de RSS y cada artículo nuevo te va a llegar solo:</p>
      <code>https://www.emilianomoretti.com/rss.xml</code>
      <p class="small">Algunos lectores gratuitos: Feedly, Inoreader o NetNewsWire. Si no usás ninguno, también podés seguirme en <a href="https://www.linkedin.com/in/emiliano-moretti/">LinkedIn</a>.</p>
    </div>

    <h2>Últimos artículos</h2>
    <ol>
      <xsl:for-each select="/rss/channel/item">
        <li>
          <span class="meta"><xsl:call-template name="fecha"><xsl:with-param name="d" select="pubDate"/></xsl:call-template></span>
          <h3><a><xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute><xsl:value-of select="title"/></a></h3>
          <p><xsl:value-of select="description"/></p>
        </li>
      </xsl:for-each>
    </ol>

    <a class="pill" href="/blog/">Ir al blog →</a>
  </div>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
