// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import trademark from "./integrations/trademark.mjs";

// Sitemap <lastmod>: see src/lib/lastmod.mjs.
import { gitDate, sourceFor } from "./src/lib/lastmod.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://www.dogoodagency.co",
  trailingSlash: "never",
  integrations: [trademark(), sitemap({
    // The placeholder articles were replaced by real ones on 18 Nov 2026, so articles are included.
    filter: (page) =>
      // Thank-you, booking and form-acknowledgement pages stay out of the sitemap (and are noindex).
      !/\/([a-z0-9-]*thankyou|thank-you|newsletter\/thanks|stage1-tc|internal|internal60|catchup|prefrp|frpfit|orientation|clarity|exit|wealth)\/?$/.test(page),
    serialize(item) {
      const file = sourceFor(new URL(item.url).pathname);
      const date = file && gitDate(file);
      if (date) item.lastmod = date;
      return item;
    },
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
