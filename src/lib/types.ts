import { z } from "astro:content";

export const PostSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  categories: z.array(z.string()).optional(),
  tags: z.array(z.string()).default([]),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  coverImage: z.string().optional(),
});
