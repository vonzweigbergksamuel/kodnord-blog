// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://kodnord.netlify.app/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), mdx(), react()],
  adapter: netlify(),
});