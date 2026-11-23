/**
 * Which testimonials each page shows on phones (Seb, 21 Nov 2026): no testimonial appears on more than one
 * page. Names as they appear in the data (case does not matter). Desktop walls are unchanged.
 */
export const phonePicks = {
  home: ["ZEINA G", "GAJAN R", "BROOK H", "IMMANUAL J"],
  stories: ["ANJA N", "JENNIFER M", "MICHAEL R", "FLORIAN W", "MARCIA W"],
  reset: ["ZACH G", "BRIAN W", "CHRISTIAN V", "MANFRED T"],
  // Wayfinders also shows its two Wayfinder voices (Gina P and Tami L, on working with Chantill).
  wayfinders: ["STAN S", "AMER K"],
  // Sound bites: The Reset and The Build share one list of six.
  resetBites: ["GREG N", "ANNA S", "PETER V"],
  buildBites: ["STEVE P", "KAREN W", "DANIEL O"],
} as const;
