// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import trademark from "./integrations/trademark.mjs";
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

// Sitemap <lastmod> (20 Nov 2026): the date the page's own source file last changed in git. Pages built from
// shared data use that data file. No date is written when git has no history for the file.
const lastmodCache = new Map();
function gitDate(file) {
  if (lastmodCache.has(file)) return lastmodCache.get(file);
  let d;
  try {
    d = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], { encoding: "utf8" }).trim() || undefined;
  } catch {
    d = undefined;
  }
  lastmodCache.set(file, d);
  return d;
}
function sourceFor(pathname) {
  const p = pathname.replace(/\/$/, "") || "/index";
  const candidates = [
    `src/pages${p}.astro`,
    `src/pages${p}/index.astro`,
    `src/content/pages${p}.md`,
  ];
  let m;
  if ((m = p.match(/^\/insights\/([^/]+)$/)) && !p.startsWith("/insights/category")) candidates.push(`src/content/blog/${m[1]}.md`);
  if (p.startsWith("/insights/category")) candidates.push("src/data/blog.ts");
  if (p.startsWith("/podcast/")) candidates.push("src/data/podcast.ts");
  if (p.startsWith("/wayfinders/")) candidates.push("src/data/wayfinder-profiles.ts");
  if (p.startsWith("/casestudies/")) candidates.push("src/pages/casestudies/[slug].astro");
  return candidates.find((f) => existsSync(f));
}

// https://astro.build/config
export default defineConfig({
  site: "https://www.dogoodagency.co",
  trailingSlash: "never",
  integrations: [trademark(), sitemap({
    // The placeholder articles were replaced by real ones on 18 Nov 2026, so articles are included.
    filter: (page) =>
      // Thank-you, booking and form-acknowledgement pages stay out of the sitemap (and are noindex).
      // /foundrland stays out too (noindex): foundr.land gets its own website (Seb, 20 Nov 2026).
      !/\/([a-z0-9-]*thankyou|thank-you|newsletter\/thanks|stage1-tc|internal|internal60|catchup|prefrp|frpfit|orientation|clarity|exit|wealth|foundrland)\/?$/.test(page),
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
