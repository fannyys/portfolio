import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/projects',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    role: z.string(),
    client: z.string().optional(),

    coverImage: z.string(),

    coverAlt: z.string().default(''),

    tags: z.array(z.string()).default([]),

    featured: z.boolean().default(false),

    order: z.number().default(0),

    background: z
      .enum(['lime', 'cyan', 'lavender', 'mint'])
      .default('lime'),
  }),
});

export const collections = {
  projects,
};
