import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),                       // Título del artículo (H1). Máx. ~65 caracteres para Google.
    description: z.string(),                 // Resumen para Google y redes. 140–160 caracteres.
    pubDate: z.coerce.date(),                // Fecha de publicación: 2026-10-14
    updatedDate: z.coerce.date().optional(),
    category: z.string().default('Proceso'), // Aparece en la miga de pan
    tags: z.array(z.string()).default([]),
    tldr: z.array(z.string()).default([]),   // "En corto": 3–4 frases con la respuesta directa (clave para GEO)
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    linkedin: z.string().url().optional(),   // Link al post de LinkedIn relacionado
    x: z.string().url().optional(),          // Link al post de X relacionado
    image: z.string().optional(),            // Imagen para redes (por defecto /og.jpg)
    destacado: z.boolean().default(false),   // true = aparece en "Empezá por acá" arriba del blog (máx. 3)
    draft: z.boolean().default(false),       // true = no se publica
  }),
});

export const collections = { blog };
