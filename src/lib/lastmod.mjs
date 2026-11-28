// Last-changed date of a page's source file in git (20 Nov 2026).
// Used for the sitemap <lastmod> (astro.config.mjs) and the WebPage dateModified (Base.astro).
import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

// Pages built from shared data use that data file. No date when git has no history for the file.
const lastmodCache = new Map();
export function gitDate(file) {
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
export function sourceFor(pathname) {
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

export function lastModifiedFor(pathname) {
  const file = sourceFor(pathname);
  return file ? gitDate(file) : undefined;
}
