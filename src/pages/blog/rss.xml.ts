import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { SITE, getCategory, sortedPosts } from "../../data/blog";

const esc = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const GET: APIRoute = async () => {
  const posts = sortedPosts(await getCollection("blog"));

  const items = posts
    .map((post) => {
      const link = `${SITE}/blog/${post.id}`;
      const category = getCategory(post.data.category);
      return [
        "    <item>",
        `      <title>${esc(post.data.title)}</title>`,
        `      <link>${esc(link)}</link>`,
        `      <guid isPermaLink="true">${esc(link)}</guid>`,
        `      <pubDate>${post.data.date.toUTCString()}</pubDate>`,
        `      <description>${esc(post.data.description)}</description>`,
        category ? `      <category>${esc(category.name)}</category>` : "",
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const lastBuild = (posts[0]?.data.date ?? new Date()).toUTCString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DoGood Blog</title>
    <link>${SITE}/blog</link>
    <description>Notes for founders before and after the sale, and for the advisors who work with them.</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE}/blog/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
