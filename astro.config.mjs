import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import sanity from "@sanity/astro";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), sanity({
    projectId: "5mv8hczt",
    dataset: "production",
    useCdn: false
  }), icon()]
});