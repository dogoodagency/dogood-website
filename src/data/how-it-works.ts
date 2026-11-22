/** Data for the dedicated /how-it-works page. Copy is verbatim from src/content/pages/how-it-works.md. */

const MEDIA = "/media/how-it-works";

export type HouseArrow = { cx: number; cy: number; w: number; rot: number; flip: 1 | -1 };
export type HouseLabel = { x: number; y: number; w: number; text: string };

export type House = {
  id: "before" | "stage1" | "stage2";
  eyebrow: string;
  title: string;
  badge?: string;
  src1100: string;
  src640: string;
  width: number;
  height: number;
  alt: string;
  arrows: HouseArrow[];
  labels: HouseLabel[];
};

/** Left-hand labels (x < 50) first, then right-hand ones, so the phone list reads in a tidy order. */
function leftFirst(labels: HouseLabel[]): HouseLabel[] {
  return [...labels.filter((l) => l.x < 50), ...labels.filter((l) => l.x >= 50)];
}

// 20 Nov 2026 (Seb): labels and arrows moved 4% closer to the house (arrows overlap it a little more), so
// the labels keep clear padding from the description card's edge.
export const houses: House[] = [
  {
    id: "before",
    eyebrow: "Before Stage 1",
    title: "The house is a mess",
    src1100: `${MEDIA}/house-before-1100.webp`,
    src640: `${MEDIA}/house-before-640.webp`,
    width: 1100,
    height: 1189,
    alt: "Cutaway illustration of a messy, neglected house: dark rooms, cluttered floors, an unmade bed, a broken window and weeds in the garden.",
    arrows: [
      { cx: 8.6, cy: 46.5, w: 13.6, rot: -14, flip: -1 },
      { cx: 92.2, cy: 52.9, w: 12.4, rot: 0, flip: 1 },
      { cx: 11.8, cy: 85.6, w: 12.4, rot: 136, flip: 1 },
      { cx: 12.7, cy: 18.1, w: 13.5, rot: 27, flip: -1 },
    ],
    labels: leftFirst([
      { x: -4.6, y: 18.3, w: 18.2, text: "You struggle sleeping" },
      { x: -5.6, y: 50.6, w: 16.6, text: "Lights have gone out" },
      { x: -11.9, y: 84.8, w: 16.7, text: "Weeds are everywhere" },
      { x: 89.3, y: 55.8, w: 19.3, text: "Nothing feels in its place" },
    ]),
  },
  {
    id: "stage1",
    eyebrow: "After Stage 1 (completed)",
    title: "The house feels like a home again",
    src1100: `${MEDIA}/house-stage1-1100.webp`,
    src640: `${MEDIA}/house-stage1-640.webp`,
    width: 1100,
    height: 1222,
    alt: "Cutaway illustration of the same house after Stage 1: the main rooms are tidy and warmly lit, while the home office and the garden still need attention.",
    arrows: [
      { cx: 0.2, cy: 50.7, w: 14.9, rot: -6, flip: -1 },
      { cx: 93.4, cy: 47.2, w: 13.7, rot: -18, flip: 1 },
      { cx: 10.3, cy: 18.3, w: 14.8, rot: 32, flip: -1 },
      { cx: 9.2, cy: 90.4, w: 14.9, rot: -30, flip: -1 },
      { cx: 93.8, cy: 26.9, w: 14.9, rot: 172, flip: -1 },
    ],
    labels: leftFirst([
      { x: -21.0, y: 15.2, w: 26, text: "Happiness you've not felt in a long time" },
      { x: -19.1, y: 54.6, w: 25, text: "Essential rooms work well" },
      { x: -14.2, y: 96.5, w: 44.8, text: "You may feel uncomfortable about inviting friends" },
      { x: 90.6, y: 13.9, w: 20.1, text: "Some rooms still need attention" },
      { x: 101.5, y: 45.1, w: 18.4, text: "Rooms are light + clear" },
    ]),
  },
  {
    id: "stage2",
    eyebrow: "After Stage 2 (FRP completed)",
    title: "You've designed your new home",
    badge: "Included in Stage 1 + Stage 2",
    src1100: `${MEDIA}/house-stage2-1100.webp`,
    src640: `${MEDIA}/house-stage2-640.webp`,
    width: 1100,
    height: 1398,
    alt: "Cutaway illustration of the finished home after Stage 2: a rooftop terrace, connected open-plan rooms, a garden and a pool, everything intentional.",
    arrows: [
      { cx: 85.4, cy: 20.6, w: 13.4, rot: -28, flip: 1 },
      { cx: 0.2, cy: 55.4, w: 14.6, rot: 9, flip: -1 },
      { cx: 3.1, cy: 19.8, w: 14.5, rot: 37, flip: -1 },
      { cx: 97.9, cy: 40.0, w: 13.5, rot: 16, flip: 1 },
      { cx: -1.5, cy: 84.7, w: 14.6, rot: -36, flip: -1 },
    ],
    labels: leftFirst([
      { x: -21.0, y: 16.2, w: 19.6, text: "The whole house works together" },
      { x: -13.3, y: 57.1, w: 18.2, text: "You love having people over" },
      { x: -15.0, y: 89.9, w: 24.9, text: "Every space feels intentional" },
      { x: 92.0, y: 17.5, w: 17, text: "Life at a whole new level" },
      { x: 95.7, y: 43.8, w: 17, text: "Rooms connect + opened up" },
    ]),
  },
];

export const arrowSrc = `${MEDIA}/arrow-pink.png`;

export type Inclusion = { title: string; detail: string };

export const stage1Includes: Inclusion[] = [
  { title: "8x virtual 1:1 sessions", detail: "2x weekly, 75 min | Diagnose what’s going on, make key distinctions, and set clear next steps" },
  { title: "1.5-Day In-Person Residency", detail: "We travel to you | Private block to accelerate one major breakthrough fast" },
  { title: "Foundational Founder OS", detail: "Your playbook of tools and exercises — so you can repeat the work" },
  { title: "Onboarding Starter Pack", detail: "Schedule, expectations, support rules, and what we need before Day 0" },
  { title: "Founder Completion Checkpoints", detail: "What has changed, in your words and in your data" },
  { title: "72‑Hour Clarity Snapshot", detail: "Install a tangible habit win — rapid, meaningful, and effective" },
  { title: "10-Day Containment Protocol", detail: "When life feels chaotic, we steady the basics first" },
  {
    title: "Recovery & Stress Diagnostics",
    detail: 'A <a href="https://www.whoop.com/au/en/life/">WHOOP</a> baseline for sleep/recovery/stress — so stabilization is measurable',
  },
  { title: "16-Week Reclamation Plan", detail: "Your itinerary — so you always know what to tackle first, next, and last" },
];

export const stage2Includes: Inclusion[] = [
  { title: "12x virtual 1:1 sessions", detail: "1x weekly, 90 min | Diagnose what's shifting, make key distinctions, and set clear next steps" },
  { title: "1.5-Day In-Person Residency", detail: "We travel to you | Private block to accelerate one major breakthrough fast" },
  { title: "Founder OS 2.0", detail: "Deeper mechanisms + tighter integration for systematic, long-term change" },
  { title: "NextLife Roadmap", detail: "Your personalized 12-week blueprint + anchor progression, showing where you are headed" },
  { title: "Progress Pulse", detail: "Tracks commitments → routines → patterns so we course-correct immediately" },
  { title: "Custom State-Shift Audio", detail: "Bespoke tracks designed for focus, decompression, and high-stakes days" },
  { title: "Relationship + Health Restore Kit", detail: "Practical guide for conversations, boundaries, and reconnection with self + others" },
  { title: "Partnership Reviews", detail: "Week 5 + Week 12 — Refine our process and adjust priorities as you progress" },
];

export const supports: Inclusion[] = [
  { title: "Between-Session Voice/Chat Support", detail: "A private channel for ad-hoc moments — stay grounded and decide cleanly between sessions" },
  { title: "Accountability Support", detail: "In-session truth + recalibration | We reality-check what happened, then adjust the plan" },
  { title: "Integration Review", detail: "We review your reflection work so insights stick and next sessions stay aligned" },
];

export const fitSignals = [
  "You have sold or stepped away, but the freedom feels less good than you expected.",
  "You have more time, but are not sure what you want to do with it.",
  "The company no longer gives your days the structure it once did.",
  "You’ve sold, but you still can’t really switch off from the business.",
  "You consider another project, investment, or role, but do not fully trust what is driving it.",
  "Your health, relationships, or family life need more of your attention now.",
  "You want this next part of life to mean something, not just keep you busy.",
];

export const notFor = [
  "Are still primarily trying to solve a business or operational problem.",
  "Want productivity tactics, routines, or performance training.",
  "Are looking for a quick answer or someone to tell them what to do next.",
  "Want to rush into another venture without looking honestly at what is driving the choice.",
  "Are not ready to give real attention to their health, relationships, and life beyond work.",
];

export type Flag = { name: string; src: string };
const usa: Flag = { name: "United States", src: `${MEDIA}/flag-usa.svg` };
const germany: Flag = { name: "Germany", src: `${MEDIA}/flag-germany.svg` };
const spain: Flag = { name: "Spain", src: `${MEDIA}/flag-spain.svg` };
const albania: Flag = { name: "Albania", src: `${MEDIA}/flag-albania.png` };
const portugal: Flag = { name: "Portugal", src: `${MEDIA}/flag-portugal.png` };

export const hubs = [
  {
    name: "North America",
    also: "(+ Canada)",
    wayfinder: "Chantill",
    human: "Parent. Partner. Adventure motorcyclist. I want to see how good life can be. Transforming shame into strength, fostering healing through nervous system awareness and compassion.",
    flags: [usa],
  },
  {
    name: "Europe",
    also: "(+ United Kingdom & Central America)",
    wayfinder: "Katrin",
    human: "Embracing resilience and calm, they inspire transformation through presence, cross-cultural understanding, nature, movement, and compassionate leadership.",
    flags: [usa, germany, spain],
  },
  {
    name: "Gulf",
    also: "(+ North Africa & East Asia)",
    wayfinder: "Shiva",
    human: "Iranian refugee. I lived in 3 continents, 7 cities, 6 countries, raised in 2 religions. Fantasy fiction and ancestral wisdoms lover. That includes Star Wars.",
    flags: [usa, spain],
  },
  {
    name: "Asia-Pacific",
    also: "(+ United States)",
    wayfinder: "Seb",
    human: "The endless power of human potential inspires a world where truth, love, and visionary entrepreneurship uplift collective awareness and human flourishing.",
    flags: [usa, germany, spain],
  },
  {
    name: "Atlantic",
    also: "(+ Western EU & South America)",
    wayfinder: "Vlora",
    human: "Authentic leadership comes from inner clarity, balanced nervous systems, and aligning identity with sustainable high-pressure decision-making.",
    flags: [usa, germany, albania, spain, portugal],
  },
];

export const steps = [
  { n: "Step 1", title: "Apply", text: "Takes 5 - 10 minutes" },
  { n: "Step 2", title: "Conversation", text: "45 minutes (no pitch: simply fit and clarity)" },
  {
    n: "Step 3",
    title: "Commit / Onboard",
    text: "Pay + we'll confirm start window.",
  },
  { n: "Step 4", title: "Start Stage 1 (30 days)", text: "Day 1 starts on your first private 1:1 session (not onboarding)" },
  { n: "Step 5", title: "Review in week 3", text: "Invite to Stage 2 or complete Stage 1" },
];

/** Testimonials shown on this page (matched on the `file` field in homepage.ts, text only). */
export const reviewFiles = ["michael-r.png", "florian-w.png", "brook-h.png", "christian-v.png", "zeina-g.png", "gajan-r.png"];
