import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    course: z.string().optional(),
    grade: z.string().optional(),
    date: z.string().optional(),
    role: z.string().optional(),
    tools: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverFit: z.enum(["cover", "contain"]).default("cover"),
    screenshots: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().default(""),
          caption: z.string().optional(),
        }),
      )
      .default([]),
    featured: z.boolean().default(false),
    order: z.number().default(100),
  }),
});

export const collections = { projects };
