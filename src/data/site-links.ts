/**
 * One source for the site's navigation links (Seb, 19 Nov 2026).
 * Header.astro (top nav) and Footer.astro (the master footer) both read from here, and every page renders
 * both through Base.astro. Change a name or link here once and it changes in the nav and the footer on every
 * page. `navLabel` is the longer name shown in the nav menus; `label` is the footer name.
 */
import { urls } from "./homepage";

export type SiteLink = { href: string; label: string; navLabel?: string; detail?: string };

/** The three offers (nav: How it works; footer: Services). */
export const offers: SiteLink[] = [
  {
    href: "/exit-prep",
    label: "The Exit Prep™",
    detail: "For founders who haven’t sold yet. Six private weekly sessions to prepare yourself, not just the company.",
  },
  {
    href: "/the-reset",
    label: "Stage 1: The Reset™",
    navLabel: "Stage 1: The Reset™ (30 Days)",
    detail: "For founders who have sold. 30 private days to see what is surfacing before the next big decision.",
  },
  {
    href: "/the-build",
    label: "Stage 2: The Build™",
    navLabel: "Stage 2: The Build™ (12 Weeks)",
    detail: "By invitation after Stage 1. Twelve weeks to build the life you chose, so it holds.",
  },
];

/** The products around the two stages (nav: Products; footer: Services, after the offers). */
export const products: SiteLink[] = [
  {
    href: "/residency",
    label: "1.5-Day In-Person Residency",
    detail: "Play, adventure and meaning, in person with your Wayfinder. On its own, or as part of Stage 1 or Stage 2.",
  },
  {
    href: "/integral-continuity",
    label: "IntegralContinuity™",
    detail: "Ongoing sessions with your Wayfinder after both stages, once or twice a month. Light or Private.",
  },
  {
    href: "/signature-retreat",
    label: "Annual Signature Retreat",
    detail: "Invitation only. Our annual, in-person retreat with a small group of founders.",
  },
  {
    href: "/founderland-membership",
    label: "FOUNDERland™ Membership",
    navLabel: "FOUNDERland Membership",
    detail: "The house founders belong to, before and after the sale.",
  },
];

/** Tools inside the Partnership (footer: Products). */
export const tools: SiteLink[] = [
  { href: "/recovery-stress-diagnostics", label: "Recovery & Stress Diagnostics (WHOOP)" },
  { href: "/state-shift-audio", label: "Custom State-Shift Audio" },
];

/** Footer: Explore (names and order from Seb's footer mock-up, 19 Nov 2026). */
export const explore: SiteLink[] = [
  { href: "/about", label: "About us" },
  { href: "/insights", label: "Insights" },
  { href: urls.podcast, label: "DoGood Insider Podcast" },
  { href: "/newsletter", label: "Newsletter" },
  { href: "/wayfinders/clientfit", label: "Client-fit process" },
  { href: "/expedited-start", label: "Expedited Start & Priority Hold" },
  { href: "/faqs", label: "FAQ" },
];

/** Advisor Center (nav menu groups and footer column). */
export const advisorLinks = {
  work: [
    {
      href: "/for-advisors",
      label: "Refer a founder",
      detail: "How a referral works, what your client gets, and how we keep you in the loop.",
    },
  ] as SiteLink[],
  resources: [
    {
      href: "/for-advisors/client-tools",
      label: "Free tools for your clients",
      detail: "A founder readiness check, a guide to the warning signs, and a planner. Free to use before and after the sale.",
    },
    {
      href: "/for-advisors/insights",
      label: "Advisor insights",
      detail: "What founders really go through when they sell, in short, anonymized notes from our talks with advisors.",
    },
  ] as SiteLink[],
};

/** Wraps ™ so it can be drawn thinner and 2px smaller (class .tm, global.css). Returns HTML. */
export function tm(label: string): string {
  return label.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/™/g, '<span class="tm">™</span>');
}
