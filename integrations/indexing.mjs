import { writeFile } from "node:fs/promises";

// OFF by default. Never infer launch from a branch or Netlify context.
// See docs/launch-index-switch.md for the single switch and manual fallback.
export default function indexing(indexable = false) {
  return {
    name: "dogood-indexing",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        await writeFile(new URL("robots.txt", dir), indexable
          ? [
              "*", "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot",
              "Claude-SearchBot", "PerplexityBot", "Google-Extended",
            ].map((agent) => `User-agent: ${agent}\nAllow: /\n`).join("\n")
            + "\nSitemap: https://www.dogoodagency.co/sitemap-index.xml\n"
          : "# Preview lockdown. See docs/launch-index-switch.md.\nUser-agent: *\nDisallow: /\n");
        await writeFile(new URL("_headers", dir), indexable
          ? "# Public launch: private pages retain their explicit noindex meta tags.\n"
          : "# Preview lockdown. See docs/launch-index-switch.md.\n/*\n  X-Robots-Tag: noindex, nofollow\n");
      },
    },
  };
}
