import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    updated: z.string().optional(),
    hideOptin: z.boolean().optional(),
    tidycal: z.string().optional(),
    advisorLine: z.boolean().optional(),
    bandTint: z.string().optional(),
  }),
});

export const collections = { pages };
