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
    bandGroups: z.array(z.string()).optional(),
  }),
});

const categorySlugs = [
  "preparing-for-exit",
  "after-the-sale",
  "identity-and-purpose",
  "health-and-energy",
  "relationships-and-family",
  "whats-next",
  "working-with-founders",
  "personal-side-of-exit-planning",
] as const;

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    audience: z.enum(["founder", "advisor", "both"]),
    category: z.enum(categorySlugs),
    tags: z.array(z.string()),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default("Seb Wichmann"),
    authorRole: z.string().default("Founder, DoGood"),
    readTime: z.number(),
    featured: z.boolean().default(false),
    pick: z.number().int().min(1).max(3).optional(),
    heroImage: z.string(),
    heroAlt: z.string(),
    heroBg: z.enum(["purple", "teal", "pink", "lilac"]).default("lilac"),
    shortAnswer: z.string(),
    questions: z.array(z.string()),
    takeaways: z.array(z.string()),
    isThisYou: z.string(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })),
    sample: z.boolean().default(false),
    noindex: z.boolean().default(false),
  }),
});

export const collections = { pages, blog };
