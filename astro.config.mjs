import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import relativeLinks from "astro-relative-links";

// https://docs.astro.build/en/guides/integrations-guide/sitemap/
import sitemap from '@astrojs/sitemap';

// https://www.npmjs.com/package/astro-devtool-breakpoints
import devtoolBreakpoints from 'astro-devtool-breakpoints';

import minify from 'astro-min';

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
    }),
    // minify({
    //   do_not_minify_doctype: false,
    //   ensure_spec_compliant_unquoted_attribute_values: false,
    //   keep_closing_tags: false,
    //   keep_comments: false,
    //   keep_html_and_head_opening_tags: false,
    //   keep_input_type_text_attr: false,
    //   keep_spaces_between_attributes: false,
    //   keep_ssi_comments: false,
    //   minify_css: true,
    //   minify_js: true,
    //   preserve_brace_template_syntax: false,
    //   preserve_chevron_percent_template_syntax: false,
    //   remove_bangs: true,
    //   remove_processing_instructions: false,
    // }),
  ],
  build: {
    assets: '_assets'
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
  },
  // compressHTML: true,
  site: "https://mysite.com"
});