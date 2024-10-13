import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";

// https://docs.astro.build/en/guides/integrations-guide/sitemap/
import sitemap from '@astrojs/sitemap';

// https://www.npmjs.com/package/astro-devtool-breakpoints
import devtoolBreakpoints from 'astro-devtool-breakpoints';


// https://astro.build/config
export default defineConfig({
  integrations: [
    react(), 
    tailwind(), 
    relativeLinks(), 
    devtoolBreakpoints(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  build: {
    assets: '_assets'
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  site: "https://mysite.com"
});