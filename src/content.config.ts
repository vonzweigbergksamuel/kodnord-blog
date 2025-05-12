import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { PostSchema } from "./lib/types";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: PostSchema,
});

export const collections = { blog };
