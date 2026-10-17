// Textos de la interfaz en español e inglés. El contenido de cada página vive en su propio archivo.
// Español es el idioma principal (sin prefijo en la URL); inglés vive debajo de /en/.
export type Lang = 'es' | 'en';
export const CAL = 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1_ERerY_SFciQLYK3iSLs8HwhEUT9XIO7E2XoCS4mqluKSFbzKchy6JSY0dDStcfYEp8gJYGx-';
export const EMAIL = 'emiliano@modulorstudios.com';

export const ui = {
  es: {
    home: '/', blog: '/blog/', about: '/sobre-mi/', aboutLabel: 'Sobre mí', rss: '/rss.xml', locale: 'es_ES', date: 'es-ES',
    navLabel: 'Principal', how: 'Cómo funciona', behind: 'Detrás', behindLong: 'Detrás del proceso', criteria: 'Lo que no automatizo', contact: 'Contacto',
    explore: 'Explorar', copyEmail: 'Copiar email', emailCopied: 'Email copiado', linkCopied: 'Link copiado',
    footer: 'Director comercial en Modulor Studios. Vendo con Claude y lo cuento mientras lo construyo.',
    themeDark: 'Cambiar a modo oscuro', themeLight: 'Cambiar a modo claro',
    switchTo: 'EN', switchLabel: 'Read in English', rssTitle: 'Blog de Emiliano Moretti',
    // Aviso que ve quien tiene el navegador en el otro idioma
    bar: 'Esta página también está en español.', barGo: 'Leer en español', barClose: 'Cerrar',
  },
  en: {
    home: '/en/', blog: '/en/blog/', about: '/en/about/', aboutLabel: 'About', rss: '/en/rss.xml', locale: 'en_US', date: 'en-GB',
    navLabel: 'Main', how: 'How it works', behind: 'Behind it', behindLong: 'Behind the process', criteria: 'What I don’t automate', contact: 'Contact',
    explore: 'Explore', copyEmail: 'Copy email', emailCopied: 'Email copied', linkCopied: 'Link copied',
    footer: 'Sales director at Modulor Studios. I sell with Claude and share how I build it as I go.',
    themeDark: 'Switch to dark mode', themeLight: 'Switch to light mode',
    switchTo: 'ES', switchLabel: 'Leer en español', rssTitle: 'Emiliano Moretti’s blog',
    bar: 'This page is also available in English.', barGo: 'Read in English', barClose: 'Close',
  },
} as const;

export const other = (l: Lang): Lang => (l === 'es' ? 'en' : 'es');
