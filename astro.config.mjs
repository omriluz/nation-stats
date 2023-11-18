import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";
const site = 'https://nation-stats.com'
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  site
});