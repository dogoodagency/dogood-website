/**
 * The editorial team (added 18 Nov 2026, Seb). Each article picks its author in its frontmatter:
 *   author: "seb"   (or "inka", "edda")
 * Older articles that still say `author: "Seb Wichmann"` are matched by first name.
 * To add a person: put a square photo in src/assets/authors/<id>.jpg and add an entry here.
 * Roles for Inka and Edda are placeholders until Seb confirms them.
 */
import type { ImageMetadata } from "astro";
import seb from "../assets/authors/seb.jpg";
import inka from "../assets/authors/inka.jpg";
import edda from "../assets/authors/edda.jpg";

export interface Author {
  id: string;
  name: string;
  role: string;
  image: ImageMetadata;
  /** Profile page on this site, if any. */
  url?: string;
  sameAs?: string[];
}

export const authors: Record<string, Author> = {
  seb: {
    id: "seb",
    name: "Seb Wichmann",
    role: "Founder, DoGood",
    image: seb,
    url: "https://www.dogoodagency.co/wayfinders/seb",
  },
  inka: { id: "inka", name: "Inka", role: "DoGood editorial team", image: inka },
  edda: { id: "edda", name: "Edda", role: "DoGood editorial team", image: edda },
};

/** Find the author for an article: by id ("seb") or by name ("Seb Wichmann"). Falls back to Seb. */
export function getAuthor(value: string | undefined): Author {
  const key = (value ?? "seb").trim().toLowerCase();
  if (authors[key]) return authors[key];
  const first = key.split(/\s+/)[0] ?? "";
  return authors[first] ?? authors.seb;
}
