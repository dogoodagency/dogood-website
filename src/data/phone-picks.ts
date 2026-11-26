/**
 * Which testimonials each page shows on phones (Seb, 21 Nov 2026): no testimonial appears on more than one
 * page. Names as they appear in the data (case does not matter). Desktop walls are unchanged.
 */
export const phonePicks = {
  // DG-PRE-55 (26 Nov 2026): removed testimonials are gone from every pick; T Avdyli is new on the home pick.
  home: ["ZEINA G", "IMMANUAL J", "T AVDYLI"],
  stories: ["JENNIFER M", "MICHAEL R", "FLORIAN W"],
  reset: ["ZACH G", "CHRISTIAN V"],
  // Wayfinders also shows its two Wayfinder voices (Gina P and Tami L, on working with Chantill).
  wayfinders: ["AMER K"],
  // Sound bites: The Reset and The Build share one list of six.
  resetBites: ["GREG N", "ANNA S", "PETER V"],
  buildBites: ["STEVE P", "KAREN W", "DANIEL O"],
} as const;
