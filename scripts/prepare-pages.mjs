import fs from "node:fs";
import path from "node:path";

const root = "/tmp/content-src";
const outDir = path.resolve("src/content/pages");

const copyRoutes = {
  "about.md": "about",
  "clientfit.md": "wayfinders/clientfit",
  "contact.md": "contact",
  "diagnostics.md": "diagnostics",
  "dogood-insider.md": "dogood-insider",
  "faqs.md": "faqs",
  "for-advisors.md": "for-advisors",
  "how-it-works.md": "how-it-works",
  "insights.md": "insights",
  "newsletter.md": "newsletter",
  "stories.md": "stories",
};

const skipContent = new Set([
  "homepage.md",
  "founders.md",
  "blog.md",
  "clients.md",
  "catchu.md",
  "homepage-optin.md",
  "about.md",
  "contact.md",
  "diagnostics.md",
  "dogood-insider.md",
  "privacy.md",
  "terms.md",
  "links.md",
  "tidycal-embeds.md",
  "integrations.md",
  "testimonials.md",
]);

const tidycal = {
  "orientation-call": "dogoodagency/orientation-call",
  frpfit: "dogoodagency/frpfit",
  internal: "dogoodagency/internal",
  catchup: "dogoodagency/catchup",
  claritysprints: "dogoodagency/claritysprints",
  teams: "dogoodagency/teams",
  "internal-60": "dogoodagency/internal-60",
  "pre-frp": "dogoodagency/pre-frp",
};

const hideOptin = new Set(["contact"]);

function contentSlug(file) {
  const base = file.replace(/\.md$/, "");
  const nested = base.match(/^(wayfinders|casestudies)-(.+)$/);
  if (nested) return `${nested[1]}/${nested[2]}`;
  if (base === "diagnostics-founder-check") return "diagnostics/founder-check";
  if (base === "error404") return "error404";
  return base;
}

function rewriteLinks(text) {
  return text
    .replaceAll("https://www.dogoodagency.co/founders", "/how-it-works")
    .replaceAll("https://www.dogoodagency.co/casestudies", "/stories")
    .replaceAll("https://www.dogoodagency.co/clients", "/stories")
    .replaceAll("https://www.dogoodagency.co/blog", "/insights")
    .replaceAll("https://www.dogoodagency.co/", "/")
    .replaceAll("https://www.dogoodagency.co", "/");
}

function dropInternal(text) {
  const lines = text.split("\n");
  const kept = [];
  let skip = false;
  for (const line of lines) {
    if (/seb to decide/i.test(line)) continue;
    if (/^\*\*Build note/i.test(line)) continue;
    if (/^## (Build notes|Options for Seb)\b/i.test(line)) {
      skip = true;
      continue;
    }
    if (skip) {
      if (/^## /.test(line) && !/^## (Build notes|Options for Seb)\b/i.test(line)) skip = false;
      else continue;
    }
    if (/^internal\b/i.test(line.trim())) continue;
    kept.push(line);
  }
  return kept.join("\n");
}

function meta(text, fallbackTitle) {
  const title =
    text.match(/\*\*Meta title:\*\*\s*(.+)/)?.[1]?.trim() ||
    text.match(/^- \*\*Page title:\*\*\s*(.+)/)?.[1]?.trim() ||
    fallbackTitle;
  const description =
    text.match(/\*\*Meta description:\*\*\s*(.+)/)?.[1]?.trim() ||
    text.match(/^- \*\*Meta description:\*\*\s*(.+)/)?.[1]?.trim() ||
    "DoGood Founders";
  return { title, description };
}

function copyBody(text) {
  const hero = text.search(/^## (Hero|Heading)\b/m);
  const hash = text.search(/^# (?!How |Contact |For |FAQs |Insights |Stories |Newsletter |About |Founder |DoGood |Client)/m);
  let start = hero >= 0 ? hero : hash;
  if (start < 0) start = text.indexOf("\n---\n");
  if (start < 0) start = 0;
  return dropInternal(rewriteLinks(text.slice(start))).replace(/\n{3,}/g, "\n\n").trim();
}

function contentBody(text) {
  const marker = text.indexOf("## Page content");
  let body = marker >= 0 ? text.slice(marker + "## Page content".length) : text;
  body = body
    .split("\n")
    .filter((line) => {
      if (/^\|/.test(line)) return false;
      if (/^#{1,6} Images\b/i.test(line)) return false;
      if (/html_bytes|img fail|raw_text_len/i.test(line)) return false;
      if (/^start here$|^meet the team$/i.test(line.trim())) return false;
      return true;
    })
    .join("\n");
  return dropInternal(rewriteLinks(body)).replace(/\n{3,}/g, "\n\n").trim();
}

function buttons(md) {
  return md.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (all, label, href) => {
    const name = label.trim();
    if (/^apply for stage 1/i.test(name)) {
      return `<a class="btn-apply" href="${href}">${name.replace(/ →$/, "")}</a>`;
    }
    if (/book an intro|book a|send me the guide|subscribe/i.test(name)) {
      return `<a class="btn-teal" href="${href}">${name}</a>`;
    }
    return all;
  });
}

function writePage(slug, title, description, body, extra = {}) {
  const fm = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `description: ${JSON.stringify(description)}`,
  ];
  if (extra.hideOptin) fm.push("hideOptin: true");
  if (extra.tidycal) fm.push(`tidycal: ${JSON.stringify(extra.tidycal)}`);
  if (extra.advisorLine) fm.push("advisorLine: true");
  fm.push("---", "", buttons(body), "");
  const dest = path.join(outDir, `${slug}.md`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, fm.join("\n"));
}

fs.rmSync(outDir, { recursive: true, force: true });

for (const [file, slug] of Object.entries(copyRoutes)) {
  const raw = fs.readFileSync(path.join(root, "copy", file), "utf8");
  const info = meta(raw, file.replace(".md", ""));
  writePage(slug, info.title, info.description, copyBody(raw), {
    hideOptin: hideOptin.has(slug),
    advisorLine: slug === "for-advisors",
  });
}

for (const file of fs.readdirSync(path.join(root, "content"))) {
  if (!file.endsWith(".md") || skipContent.has(file)) continue;
  const raw = fs.readFileSync(path.join(root, "content", file), "utf8");
  const slug = contentSlug(file);
  const info = meta(raw, slug);
  writePage(slug, info.title, info.description, contentBody(raw), {
    tidycal: tidycal[slug],
  });
}

const cookies = `## Cookies

DoGood OÜ uses cookies on this website. Strictly necessary cookies stay on. Everything else waits for your choice.

The detailed cookie names and durations are still marked for a CookieYes scan. Until that list is filled in, you can read how we handle personal data in the [Privacy Policy](/privacy).

[Placeholder: cookie name and duration table from the CookieYes scan.]
`;
writePage(
  "cookies",
  "Cookies Policy | DoGood Founders",
  "How DoGood uses cookies, and how to change your choices.",
  cookies,
);

console.log("pages", fs.readdirSync(outDir, { recursive: true }).filter((f) => String(f).endsWith(".md")).length);
