/** Colour of the section above a join, and the 1px line drawn under it. */
const edgeBySection: Record<string, string> = {
  "#ffffff": "#C2B7DD",
  "#fff": "#C2B7DD",
  "#faf9ff": "#C2B7DD",
  "#f5f2ff": "#C2B7DD",
  "#f3fffb": "#A3F2D7",
  "#e7fff6": "#A3F2D7",
  "#fefef3": "#E0D894",
  "#f2f7ff": "#AEC8FE",
  "#fff9fa": "#FEB5BC",
  "#2a0b4f": "#110027",
};

/** 1px line under a section. White counts as DREAM 10. */
export function edgeAbove(color: string): string {
  return edgeBySection[color.trim().toLowerCase()] ?? "#C2B7DD";
}
