// Wraps every visible ™ in <span class="tm"> after the build (Seb, 19 Nov 2026), so the sign is drawn
// 2px smaller and in a thin weight on every page (style: .tm in src/styles/global.css). Only text between
// tags is touched: never tag attributes, <script>, <style>, <title>, <textarea> or JSON-LD.
//
// Round 9 (M2, Seb): the ™ must never float away from its word. Every "word™" is now wrapped as
//   <span class="tm-keep">word<span class="tm">™</span></span>      (.tm-keep = white-space: nowrap, round7.css)
// and, so a flex or grid parent (a button, a card label) cannot turn the ™ into a separate item that the
// gap pushes away, a short text run that contains a ™ is also wrapped once as
//   <span class="tm-run">…text word™…</span>
// so the whole label stays ONE flex item. Both wrappers are visually neutral (see round7.css).
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const SKIP = /^(script|style|title|textarea|noscript)$/i;
const VOID = new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
// Text directly inside these is ordinary prose in a block: no run wrapper is needed there.
const NO_RUN = new Set(["p", "blockquote", "figcaption", "td", "th", "dd", "dt"]);
// A run longer than this is prose, not a label, and is not wrapped as a run.
const MAX_RUN = 160;

// Trademarked names (Seb, 19 Nov 2026: every trademarked word carries ™, on every page). The sign is added
// after the name wherever it appears in visible text without one. Case-sensitive, so "the build" in a
// sentence is left alone.
const MARKS = [
  "ClarityValue Shift",
  "NextLife Passage",
  "IntegralContinuity",
  "Founder Diagnostic",
  "Pressure Diagnostic",
  "The Reset",
  "The Build",
  "Exit-Prep",
];
const MARK_RE = new RegExp(`\\b(${MARKS.map((m) => m.replace(/ /g, "(?: |&nbsp;| )")).join("|")})(?!™|[A-Za-z])`, "g");

// word + ™ -> kept together (only the last word of a name, so long names can still wrap before it).
function keepSigns(text) {
  return text.replace(/([^\s™]*)™/g, (_m, word) =>
    word ? `<span class="tm-keep">${word}<span class="tm">™</span></span>` : '<span class="tm">™</span>',
  );
}

function wrapText(text, stack) {
  const marked = text.replace(MARK_RE, "$1™");
  if (!marked.includes("™")) return marked;
  // Inline SVG <text> cannot hold spans: leave those alone.
  if (stack.includes("svg")) return marked;
  const kept = keepSigns(marked);
  const parent = stack[stack.length - 1];
  if (parent && NO_RUN.has(parent)) return kept;
  if (marked.trim().length > MAX_RUN) return kept;
  return `<span class="tm-run">${kept}</span>`;
}

export function wrapTrademarks(html) {
  let out = "";
  let i = 0;
  let skipUntil = null;
  const stack = [];
  while (i < html.length) {
    const lt = html.indexOf("<", i);
    const text = lt === -1 ? html.slice(i) : html.slice(i, lt);
    out += skipUntil ? text : wrapText(text, stack);
    if (lt === -1) break;
    const gt = html.indexOf(">", lt);
    if (gt === -1) { out += html.slice(lt); break; }
    const tag = html.slice(lt, gt + 1);
    out += tag;
    const m = /^<(\/?)([a-zA-Z0-9-]+)/.exec(tag);
    if (m) {
      const [, close, rawName] = m;
      const name = rawName.toLowerCase();
      if (!close && SKIP.test(name) && !tag.endsWith("/>")) skipUntil = name;
      else if (close && skipUntil === name) skipUntil = null;
      // Track the open elements (outside script/style/etc.) so wrapText knows the parent.
      if (!skipUntil) {
        if (close) {
          const at = stack.lastIndexOf(name);
          if (at !== -1) stack.length = at;
        } else if (!VOID.has(name) && !tag.endsWith("/>")) {
          stack.push(name);
        }
      }
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
          // Signs already wrapped (by tm() in src/data/site-links.ts or by StageProgress) are left alone:
          // unwrap first, then wrap all once.
          // "FOUNDER" and "land" in separate tags (the bold-FOUNDER style) still get the sign after "land".
          const plain = html
            .replace(/<span class="tm-keep">([^<]*)<span class="tm">™<\/span><\/span>/g, "$1™")
            .replace(/<span class="tm">™<\/span>/g, "™")
            .replace(/(FOUNDER(?:<\/[a-z]+>)+(?:<[a-z][^>]*>)*land(?:<\/[a-z]+>)*)(?!™|[A-Za-z])/g, "$1™");
          const next = wrapTrademarks(plain);
          if (next !== html) { await writeFile(file, next); n++; }
        }
        console.log(`[trademark] wrapped ™ in ${n} pages`);
      },
    },
  };
}
