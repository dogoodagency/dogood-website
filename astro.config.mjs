// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.dogoodagency.co",
  trailingSlash: "never",
  integrations: [sitemap({
    // Sample Insights articles are noindex for now; remove this filter at launch when real articles replace them.
    filter: (page) => !/\/insights\/(?!category\/)[^/]+\/?$/.test(page),
  })],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Netlify's script-src 'self' blocks inlined module scripts. Keep every
      // script as its own file so the track-record counter can run.
      assetsInlineLimit: 0,
    },
  },
  build: {
    inlineStylesheets: "auto",
    // Build pages as files (the-reset.html), not folders (the-reset/index.html),
    // so Netlify serves /the-reset directly instead of 301-ing to /the-reset/.
    format: "file",
  },
});
