"""Genera la imagen para redes (1200x630) de un artículo nuevo.

Uso (desde la carpeta web/):
  python3 og-plantilla/generar.py <slug> "<título corto>" "<categoría>" "<línea de comando>"

Ejemplo:
  python3 og-plantilla/generar.py mi-articulo "Mis primeros dos leads fueron amigos" "opinión" "whatsapp: 2 mensajes nuevos"

Crea public/og/<slug>.jpg. Después hay que sumar en el frontmatter del artículo:
  image: "/og/<slug>.jpg"
Necesita Python 3, Pillow y Playwright (Chromium).
"""
import html, pathlib, subprocess, sys, tempfile

WEB = pathlib.Path(__file__).resolve().parent.parent
FONTS = (WEB / 'public' / 'fonts').as_uri()
PHOTO = (WEB / 'public' / 'avatar.jpg').as_uri()

CSS = f"""
@font-face{{font-family:'Inter Tight';src:url({FONTS}/inter-tight-400.woff2) format('woff2');font-weight:400}}
@font-face{{font-family:'Inter Tight';src:url({FONTS}/inter-tight-500.woff2) format('woff2');font-weight:500}}
@font-face{{font-family:'Geist Mono';src:url({FONTS}/geist-mono-500.woff2) format('woff2');font-weight:500}}
*{{margin:0;padding:0;box-sizing:border-box}}
html,body{{width:1200px;height:630px;overflow:hidden}}
body{{background:#0B0B0B;font-family:'Inter Tight';letter-spacing:-0.02em;position:relative;color:#F5F5F5}}
.dots{{position:absolute;inset:0;background-image:radial-gradient(#262626 1.6px,transparent 1.7px);background-size:22px 22px}}
.mono{{font-family:'Geist Mono';letter-spacing:0;font-size:17px;color:#9A9A9A}}
.w{{color:#F5F5F5}}
.cur{{display:inline-block;width:.55em;height:1.05em;background:#F5F5F5;vertical-align:-.15em;margin-left:4px}}
.top{{position:absolute;left:72px;right:72px;top:58px;display:flex;justify-content:space-between}}
.t{{position:absolute;left:72px;right:72px;top:0;bottom:0;display:flex;align-items:center}}
h1{{font-size:76px;font-weight:500;line-height:1;text-wrap:balance}}
.bot{{position:absolute;left:72px;bottom:54px;display:flex;align-items:center;gap:18px}}
.bot img{{width:64px;height:64px;border-radius:50%;object-fit:cover;object-position:center 25%}}
.n{{font-size:24px;font-weight:500}}
.r{{font-size:19px;color:#9A9A9A;margin-top:2px}}
"""

def page(title, category, cmd):
    t, k, c = (html.escape(x) for x in (title, category.lower(), cmd))
    return (f'<!doctype html><html><head><meta charset=utf-8><style>{CSS}</style></head><body>'
            f'<div class="dots"></div>'
            f'<div class="top mono"><span><span class="w">&gt; {c}</span><span class="cur"></span></span><span>blog / {k}</span></div>'
            f'<div class="t"><h1>{t}</h1></div>'
            f'<div class="bot"><img src="{PHOTO}"><div><div class="n">Emiliano Moretti</div><div class="r">Ventas B2B con IA y criterio humano</div></div></div>'
            f'</body></html>')

def main():
    slug, title, category, cmd = sys.argv[1:5]
    out = WEB / 'public' / 'og' / f'{slug}.jpg'
    out.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory() as d:
        src = pathlib.Path(d) / 'og.html'; png = pathlib.Path(d) / 'og.png'
        src.write_text(page(title, category, cmd), encoding='utf-8')
        js = ("const {chromium}=require('playwright');(async()=>{const b=await chromium.launch();"
              "const p=await b.newPage({viewport:{width:1200,height:630}});"
              f"await p.goto({src.as_uri()!r});await p.waitForTimeout(400);"
              f"await p.screenshot({{path:{str(png)!r}}});await b.close();}})();")
        subprocess.run(['node', '-e', js], check=True)
        from PIL import Image
        Image.open(png).convert('RGB').save(out, 'JPEG', quality=88, optimize=True)
    print(f'OK: {out.relative_to(WEB)}  ->  image: "/og/{slug}.jpg"')

if __name__ == '__main__':
    main()
