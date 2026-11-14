/** Eight shades per family, light to dark. v7.5 palette. */
const scales = [
  ["#FAF9FF", "#F5F2FF", "#C2B7DD", "#8B7DAE", "#58447F", "#2A0B4F", "#1D033C", "#110027"],
  ["#F3FFFB", "#E7FFF6", "#CCFDEC", "#A3F2D7", "#73E7C4", "#28DBB0", "#01A684", "#05745B"],
  ["#FEFEF3", "#FDFCE8", "#FCF9D2", "#FEFABE", "#E0D894", "#C4B76A", "#A9973E", "#8D770A"],
  ["#F9FBFF", "#F2F7FF", "#E1EBFE", "#AEC8FE", "#7BA4FF", "#477DFE", "#1D53EF", "#0D329F"],
  ["#FFF9FA", "#FFF3F4", "#FEB5BC", "#FD6B82", "#EA1557", "#C10E46", "#960434", "#6D0023"],
] as const;

const dream = scales[0];

/** 1px line under a section: three steps darker in that section's family. White counts as DREAM 10. */
export function edgeAbove(color: string): string {
  const hex = color.trim().toLowerCase();
  const normalized = hex === "#fff" || hex === "#ffffff" ? dream[0].toLowerCase() : hex;
  for (const scale of scales) {
    const index = scale.findIndex((step) => step.toLowerCase() === normalized);
    if (index === -1) continue;
    return scale[Math.min(index + 3, scale.length - 1)];
  }
  return dream[3];
}
