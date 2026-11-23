/**
 * Testimonials show at most 70 words (Seb, 19 Nov 2026, all testimonial sections on the site). Longer quotes
 * stop at the last full word before the limit and end with an ellipsis; the full text stays in the data files.
 */
export const QUOTE_WORDS = 70;

export function clipWords(text: string, limit = QUOTE_WORDS): string {
  const words = text.replace(/\s+/g, " ").trim().split(" ");
  if (words.length <= limit) return words.join(" ");
  return `${words.slice(0, limit).join(" ").replace(/[.,;:–—\s]+$/, "")}…`;
}
