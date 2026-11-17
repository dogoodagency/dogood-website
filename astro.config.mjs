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
    // Blog renamed to Insights.
    "/blog": "/insights",
    "/blog/rss.xml": "/insights/rss.xml",
    "/blog/category/preparing-for-exit": "/insights/category/preparing-for-exit",
    "/blog/category/after-the-sale": "/insights/category/after-the-sale",
    "/blog/category/identity-and-purpose": "/insights/category/identity-and-purpose",
    "/blog/category/health-and-energy": "/insights/category/health-and-energy",
    "/blog/category/relationships-and-family": "/insights/category/relationships-and-family",
    "/blog/category/whats-next": "/insights/category/whats-next",
    "/blog/category/working-with-founders": "/insights/category/working-with-founders",
    "/blog/category/personal-side-of-exit-planning": "/insights/category/personal-side-of-exit-planning",
    "/blog/before-you-sign-preparing-yourself": "/insights/before-you-sign-preparing-yourself",
    "/blog/dont-fill-the-calendar-yet": "/insights/dont-fill-the-calendar-yet",
    "/blog/first-90-days-after-the-sale": "/insights/first-90-days-after-the-sale",
    "/blog/raising-the-personal-side-of-exit-with-a-client": "/insights/raising-the-personal-side-of-exit-with-a-client",
    "/blog/talking-about-the-next-chapter-at-home": "/insights/talking-about-the-next-chapter-at-home",
    "/blog/who-am-i-without-the-company": "/insights/who-am-i-without-the-company",
    "/blog/why-deals-stall-when-the-founder-isnt-ready": "/insights/why-deals-stall-when-the-founder-isnt-ready",
    "/blog/why-your-body-crashes-after-the-deal-closes": "/insights/why-your-body-crashes-after-the-deal-closes",
    // Old Insights pages now point at their closest new articles.
    "/insights/first-months-after-exit": "/insights/first-90-days-after-the-sale",
    "/insights/who-are-you-now": "/insights/who-am-i-without-the-company",
    "/insights/after-the-deal": "/insights/raising-the-personal-side-of-exit-with-a-client",
  },
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
  },
});
