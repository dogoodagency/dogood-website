// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://www.dogoodagency.co",
  trailingSlash: "never",
  redirects: {
    "/founders": "/how-it-works",
    "/diagnostics/results-baseline-185746": "/diagnostics/results?band=clear",
    "/diagnostics/results-tension-596074": "/diagnostics/results?band=surfacing",
    "/diagnostics/results-strain-185749": "/diagnostics/results?band=closer",
    "/diagnostics/results-load-058364": "/diagnostics/results?band=closer",
    "/diagnostics/results-risk-295037": "/diagnostics/results?band=closer",
  },
  integrations: [sitemap()],
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
  },
});
