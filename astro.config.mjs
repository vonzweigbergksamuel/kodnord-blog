// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://kodnord.netlify.app/",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap(), mdx()],
  adapter: netlify(),
});
