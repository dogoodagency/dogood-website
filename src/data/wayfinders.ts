/**
 * Single source of truth for the Wayfinders: used by /wayfinders (team cards, JSON-LD)
 * and, in a later pass, by the individual profile pages (/wayfinders/<slug>).
 * Card copy is verbatim from the live site; typo fixes are noted inline.
 */
import { hubs, type Flag } from "./how-it-works";
import { profiles, type WayfinderProfile, type ProfileSection } from "./wayfinder-profiles";

export type { WayfinderProfile, ProfileSection };

const PHOTOS = "/media/wayfinders";

export type WayfinderPhoto = {
  /** e.g. "/media/wayfinders/seb": @1x.webp (320w), @2x.webp (640w), @1x.png fallback. */
  base: string;
  width: number;
  height: number;
  alt: string;
};

/** The nine one-liners shown on every card, in display order. */
export type WayfinderLines = {
  whyFoundersCome: string;
  myEdge: string;
  workingStyle: string;
  bestFit: string;
  realStakes: string;
  trainingMethods: string;
  travel: string;
  humanSide: string;
  whatIdTellYou: string;
};

/** Labels for the nine lines, in the same order as `WayfinderLines`. */
export const lineLabels: { key: keyof WayfinderLines; label: string }[] = [
  { key: "whyFoundersCome", label: "Why Founders Come" },
  { key: "myEdge", label: "My Edge" },
  { key: "workingStyle", label: "Working Style" },
  { key: "bestFit", label: "Best Fit" },
  { key: "realStakes", label: "Real Stakes" },
  { key: "trainingMethods", label: "Training & Methods" },
  { key: "travel", label: "Travel In-Person Intensives" },
  { key: "humanSide", label: "Human Side" },
  { key: "whatIdTellYou", label: "What I'd tell you" },
];

export type Wayfinder = {
  slug: string;
  name: string;
  /** e.g. "North America Hub" */
  hub: string;
  /** e.g. "(+ Canada)" */
  hubExtra: string;
  photo: WayfinderPhoto;
  /** Soft panel colour behind the cut-out photo. */
  tint: string;
  flags: Flag[];
  lines: WayfinderLines;
  /** Canonical profile path. */
  url: string;
  /** Full profile copy for /wayfinders/<slug> (see ./wayfinder-profiles). */
  profile: WayfinderProfile;
};

function flagsFor(name: string): Flag[] {
  return hubs.find((hub) => hub.wayfinder === name)?.flags ?? [];
}

function photo(slug: string, name: string, height: number): WayfinderPhoto {
  return {
    base: `${PHOTOS}/${slug}`,
    width: 320,
    height,
    alt: `Portrait of ${name}, DoGood Wayfinder`,
  };
}

/** Order as on the live site. */
export const wayfinders: Wayfinder[] = [
  {
    slug: "chantill",
    name: "Chantill",
    hub: "North America Hub",
    hubExtra: "(+ Canada)",
    photo: photo("chantill", "Chantill", 396),
    tint: "#F5F2FF",
    flags: flagsFor("Chantill"),
    url: "/wayfinders/chantill",
    profile: profiles.chantill,
    lines: {
      whyFoundersCome: "I know what it means to risk everything, lose yourself, and find your way back.",
      myEdge: "Rebel and seeker. Steadfast directness with uncommon gentleness. I push edges, hold space.",
      workingStyle: "Brain, body, heart. No shortcuts. Space to meet yourself honestly and make real shifts.",
      bestFit: "You want deep, lasting change. Not band-aids. Relational work, not transactional fixes.",
      realStakes: "Built businesses. Guided leaders at Sutter Health and Google. I hold intensity without flinching.",
      trainingMethods: "30 years: somatics, neuroscience, Polyvagal Institute, Neuroleadership Institute. Whole-person transformation.",
      travel: "California-based. U.S., Canada, Mexico.",
      humanSide:
        "Parent. Partner. Adventure motorcyclist. I want to see how good life can be. I work with founders facing the private cost of success — helping them reclaim steadiness, clarity, and connection beyond the company they built by rewiring change from within.",
      whatIdTellYou: "Trust the breath. Small cracks of light illuminate the path. We don't walk alone.",
    },
  },
  {
    slug: "katrin",
    name: "Katrin",
    hub: "Europe Hub",
    // Live text: "United Kindom" (typo fixed).
    hubExtra: "(+ UK & Central America)",
    photo: photo("katrin", "Katrin", 447),
    tint: "#FDE9F0",
    flags: flagsFor("Katrin"),
    url: "/wayfinders/katrin",
    profile: profiles.katrin,
    lines: {
      whyFoundersCome: "I hold depth and emotional intensity, creating clarity and meaningful change.",
      myEdge: "Calm, direct, compassionate; I hold uncomfortable realities with steadiness under pressure.",
      workingStyle: "I integrate psychology and cognitive understanding with mindfulness, meditation, and somatic awareness.",
      bestFit: "Brought in for relationship strain, family responsibility, health pressure, relocations, and personal identity challenges.",
      realStakes: "13+ years working with leaders and teams within Enterprise and Fortune 500 environments.",
      trainingMethods: "Master’s degree in Psychology, specialization in Coaching & Consulting Psychology.",
      travel: "Available all over Europe, the U.S., Canada, Mexico, and Latin America.",
      humanSide:
        "Worldview rooted in presence, cross-cultural insight, and steadiness; grounded in movement, mindfulness, nature, travel, and animal welfare.",
      whatIdTellYou: "If the cost of inaction exceeds support, this calls for serious, discreet work. There is light beyond — and change begins by being met.",
    },
  },
  {
    slug: "shiva",
    name: "Shiva",
    hub: "Gulf Hub",
    hubExtra: "(+ North Africa & East Asia)",
    photo: photo("shiva", "Shiva", 363),
    tint: "#E3F8F1",
    flags: flagsFor("Shiva"),
    url: "/wayfinders/shiva",
    profile: profiles.shiva,
    lines: {
      whyFoundersCome: "I'll hold you when you're falling apart, but won't let you off the hook.",
      myEdge: "Iranian refugee. Three continents. I’ve watched entire worlds collapse, including mine. I got you.",
      workingStyle:
        "I'm not afraid of what's broken. I'm also not afraid to tell you when you're bullshitting yourself. We'll sit in the mess together. And, we'll do the work.",
      bestFit: "For founders willing to leave one reality behind and enter another. Embracing change by letting go of values, assumptions, and loyalties.",
      // Live text: "Rabdstad" (typo fixed).
      realStakes: "Built programs for ABN AMRO, Novartis, and Randstad. 15 years with Fortune 500 leaders. TEDx speaker.",
      trainingMethods: "Adaptive leadership, systems thinking, cultural intelligence. Kind, not nice. No bullshit and also deeply human.",
      travel: "Anywhere you need me. The Middle East, and Africa are best (also Europe).",
      humanSide: "Fantasy fiction (Yes, that includes Star Wars) and an ancestral wisdom lover.",
      whatIdTellYou: "Breaking systems is easy. Building them is hard. You can do hard things.",
    },
  },
  {
    slug: "seb",
    name: "Seb",
    hub: "Asia-Pacific Hub",
    hubExtra: "(+ United States)",
    photo: photo("seb", "Seb", 381),
    tint: "#F5F2FF",
    flags: flagsFor("Seb"),
    url: "/wayfinders/seb",
    profile: profiles.seb,
    lines: {
      whyFoundersCome: "The hardest project was me — resetting after life came to an unapologetic halt.",
      myEdge: "I sense what’s needed next—greater clarity or empowered decisions—so you thrive.",
      workingStyle: "Nurturing and blunt when it matters; I call out what no one else will.",
      bestFit: "For founders with USD 10M+ companies and a life that isn’t much fun right now.",
      // Live text ends "…, totaling USD 16.5M in enterprise value." — that clause is dropped on purpose.
      realStakes: "150+ initiatives in 35+ countries.",
      trainingMethods: "Master NLP Practitioner and Master Trainer, with organizational development studies via Stanford and Harvard.",
      travel: "I come and see you in Asia-Pacific, the U.S. & Canada.",
      humanSide: "I’m a human lover, visionary and Ironman 70.3 triathlon athlete, obsessed with human potential.",
      whatIdTellYou: "You don’t need more pressure; you need clarity you can trust and follow.",
    },
  },
  {
    slug: "vlora",
    name: "Vlora",
    hub: "Atlantic Hub",
    // Live text: "WesternEU" (typo fixed).
    hubExtra: "(+ Western EU & South America)",
    photo: photo("vlora", "Vlora", 409),
    tint: "#FDE9F0",
    flags: flagsFor("Vlora"),
    url: "/wayfinders/vlora",
    profile: profiles.vlora,
    lines: {
      whyFoundersCome: "High-growth. Identity shifts. Post-exits. I help founders restore clarity so the next chapter is chosen consciously, with renewed energy.",
      myEdge: "Operational literacy meets nervous system depth. I align strategic thinking with internal steadiness and creative momentum.",
      workingStyle: "Grounded, structured, and precise. Subconscious coaching, hypnosis, somatic regulation, and clear integration.",
      bestFit: "Post-exit reflection. Leadership evolution. You want clarity, aligned momentum, and depth that feels energizing, not heavy.",
      realStakes: "12+ years in startups. Co-founder. Accelerator ecosystems. I integrate business fluency with embodied intelligence.",
      trainingMethods:
        "Two-year certification in subconscious coaching and hypnosis. Yoga teacher and advanced Yin training. Ocean Therapy Practitioner. BBA + dual Master’s in International Mgt.",
      travel: "Europe-based. Available for structured international engagements.",
      humanSide: "Meditation, breathwork, hot Yin, surfing, retreats, and podcasting. I protect recovery, value aliveness.",
      whatIdTellYou: "Clarity under pressure is cultivated. When the nervous system settles, direction becomes clear, creative and surprisingly energizing.",
    },
  },
];

export const wayfinderBySlug = (slug: string) => wayfinders.find((w) => w.slug === slug);

/** Client-Fit steps (the row on /wayfinders). */
export const clientFitSteps = ["Apply for Stage 1", "Conversation", "Match (fit first)", "Start Stage 1"];

/** The nine map pins, in the same 1000 x 520 viewBox as world-land.svg. From .briefs/map-pins.json. */
export const mapPins: { name: string; x: number; y: number }[] = [
  { name: "California", x: 166.6, y: 222.8 },
  { name: "Mexico", x: 220.1, y: 269.4 },
  { name: "Peru", x: 294.2, y: 358.3 },
  { name: "Portugal & Spain", x: 483.5, y: 216.4 },
  { name: "Central Europe", x: 527.4, y: 187.9 },
  { name: "UAE", x: 649.6, y: 262.1 },
  { name: "Japan & Korea", x: 867.8, y: 224.3 },
  { name: "Southeast Asia", x: 807.4, y: 330.7 },
  { name: "Australia (east coast)", x: 914.4, y: 415.6 },
];
