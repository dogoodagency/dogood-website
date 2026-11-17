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
    "/benchmark": "/",
    "/chat": "/",
    "/podcast-chat": "/",
    "/culture-teams": "/",
    "/culture-build-employee-engagement-consulting": "/",
    "/skill-boost-employee-training-and-development": "/",
    "/sop-development": "/",
    "/strategic-hiring-and-employee-onboarding": "/",
  },
  integrations: [sitemap({
    // Sample blog articles are noindex for now; remove this filter at launch when real articles replace them.
    filter: (page) => !/\/blog\/(?!category\/)[^/]+\/?$/.test(page),
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
  },
});
