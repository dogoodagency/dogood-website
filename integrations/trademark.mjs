// Wraps every visible ™ in <span class="tm"> after the build (Seb, 19 Nov 2026), so the sign is drawn
// 2px smaller and in a thin weight on every page (style: .tm in src/styles/global.css). Only text between
// tags is touched: never tag attributes, <script>, <style>, <title>, <textarea> or JSON-LD.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const SKIP = /^(script|style|title|textarea|noscript)$/i;

// Trademarked names (Seb, 19 Nov 2026: every trademarked word carries ™, on every page). The sign is added
// after the name wherever it appears in visible text without one. Case-sensitive, so "the build" in a
// sentence is left alone.
const MARKS = [
  "ClarityValue Shift",
  "NextLife Passage",
  "IntegralContinuity",
  "FOUNDERland",
  "Founder Diagnostic",
  "Pressure Diagnostic",
  "The Reset",
  "The Build",
  "Exit Prep",
];
const MARK_RE = new RegExp(`\\b(${MARKS.map((m) => m.replace(/ /g, "(?: |&nbsp;|\u00a0)")).join("|")})(?!™|[A-Za-z])`, "g");

export function wrapTrademarks(html) {
  let out = "";
  let i = 0;
  let skipUntil = null;
  while (i < html.length) {
    const lt = html.indexOf("<", i);
    const text = lt === -1 ? html.slice(i) : html.slice(i, lt);
    out += skipUntil ? text : text.replace(MARK_RE, "$1™").replace(/™/g, '<span class="tm">™</span>');
    if (lt === -1) break;
    const gt = html.indexOf(">", lt);
    if (gt === -1) { out += html.slice(lt); break; }
    const tag = html.slice(lt, gt + 1);
    out += tag;
    const m = /^<(\/?)([a-zA-Z0-9-]+)/.exec(tag);
    if (m) {
      const [, close, name] = m;
      if (!close && SKIP.test(name) && !tag.endsWith("/>")) skipUntil = name.toLowerCase();
      else if (close && skipUntil === name.toLowerCase()) skipUntil = null;
    }
    i = gt + 1;
  }
  return out;
}

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name.endsWith(".html")) out.push(p);
  }
  return out;
}

export default function trademark() {
  return {
    name: "dogood-trademark",
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const root = fileURLToPath(dir);
        let n = 0;
        for (const file of await walk(root)) {
          const html = await readFile(file, "utf8");
          // Signs already wrapped by tm() are left alone: unwrap first, then wrap all once.
          const plain = html.replace(/<span class="tm">™<\/span>/g, "™");
          const next = wrapTrademarks(plain);
          if (next !== html) { await writeFile(file, next); n++; }
        }
        console.log(`[trademark] wrapped ™ in ${n} pages`);
      },
    },
  };
}
