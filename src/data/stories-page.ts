/** Data for the dedicated /stories page. */

export type StoryLogo = {
  name: string;
  /** File name in /media/stories/logos/. Icon files are 128x128, wordmarks are 96px high. */
  file: string;
  /** "icon" = round icon plus the name beside it. "word" = wordmark capsule, no name text. */
  kind: "icon" | "word";
  /** Intrinsic width for wordmarks (height is always 96). */
  width?: number;
};

const icon = (name: string, file: string): StoryLogo => ({ name, file: `icon-${file}.png`, kind: "icon" });
const word = (name: string, file: string, width: number): StoryLogo => ({
  name,
  file: `word-${file}.png`,
  kind: "word",
  width,
});

export type LogoRail = {
  /** +1 moves the logos to the right, -1 to the left. */
  dir: 1 | -1;
  /** Idle velocity in px per frame at 60fps. */
  velocity: number;
  logos: StoryLogo[];
};

export const logoRails: LogoRail[] = [
  {
    dir: 1,
    velocity: 0.35,
    logos: [
      icon("Adobe", "Adobe"),
      word("Siemens", "Siemens", 606),
      icon("Novartis", "Novartis"),
      icon("Generali", "Generali"),
      icon("Rolls-Royce", "Rolls-Royce"),
      icon("Vodafone", "Vodafone"),
      word("Johnson & Johnson", "Johnson-and-Johnson", 508),
      icon("ABN AMRO", "ABN-AMRO"),
    ],
  },
  {
    dir: -1,
    velocity: 0.35,
    logos: [
      icon("Iberdrola", "Iberdrola"),
      word("Coty", "Coty", 506),
      icon("Careem", "Careem"),
      icon("Arla", "Arla"),
      icon("Aptar", "Aptar"),
      icon("BVG", "BVG"),
      icon("Nationale-Nederlanden", "Nationale-Nederlanden"),
      word("Upwork", "Upwork", 326),
    ],
  },
  {
    dir: 1,
    velocity: 0.6,
    logos: [
      icon("Berty", "Berty"),
      word("GoFleet", "GoFleet", 429),
      icon("The Summit", "The-Summit"),
      icon("Tiny Home Tours", "Tiny-Home-Tours"),
      word("Tweepi", "Tweepi", 223),
      word("USM", "USM", 213),
      icon("Warrior", "Warrior"),
      word("ZenduIT", "ZenduIT", 522),
    ],
  },
];

/** Teaser text, copied verbatim from the `study` objects in src/pages/casestudies/{j,v}.astro. */
export type CaseTeaser = {
  href: string;
  headline: string;
  headlineAccent: string;
  attribution: string;
  intro: string;
  snapshot: string[];
  problem: string;
};

export const caseTeasers: CaseTeaser[] = [
  {
    href: "/casestudies/j",
    headline: `From exit anxiety to aligned legacy`,
    headlineAccent: `—How J created a clear next life chapter`,
    attribution: `J (anonymous), USD 2M founder`,
    intro: `In six months, J regulated significant levels of stress, clarified her purpose, and committed to an exit plan, without derailing the company's growth.`,
    snapshot: [
      `We started working with J at a point common for high-performance founders: the business was healthy, but the decision to stay or exit was rapidly becoming an undeniable roadblock for further personal or professional growth. She was struggling with daily mental fatigue, ever-rising trepidation about an unclear future, and a growing communication gap with her co-founders.`,
      `J is the founder + Head of Programming & Education in the Health & Wellness industry. She came to us to clarify what “retirement” would actually mean for her, design an aligned exit plan that protected relationships and well-being, and define a legacy-partner role she could commit to. After a six-month engagement, she shifted her operational load, reducing client delivery and building the infrastructure required for a longer, better divestment.`,
    ],
    problem: `J came to us caught in a high-stakes wrestle: whether to exit ownership now (or when), and how to do it without destabilizing the company or herself emotionally. The lack of a genuine, aligned exit path was draining her emotional resources, creating anxiety about an undefined future, and stalling critical conversations with co-founders. What she needed was clarity of purpose and a feasible timeline, paired with the capacity to follow through on difficult decisions and eliminate “lesser goals” that kept pulling her off course.`,
  },
  {
    href: "/casestudies/v",
    headline: `From identity void to decisive leadership`,
    headlineAccent: `— how V reclaimed life after success`,
    attribution: `V (anonymous), USD 9M+ founder`,
    intro: `In four months of focused work, V rebuilt routine, restored identity, and reactivated leadership — while keeping the company moving.`,
    snapshot: [
      `We met V at a rare, uncomfortable place: everything was working except the life around the work. He was successful, driven and creative — and still didn’t know who he was beyond the company. Mornings felt unowned. Personal goals never stuck. Relationships stayed shallow by default.`,
      `V is the founder (now CEO / CTO) of an industry leader in the area of GPS fleet tracking and management with 80+ team members. He came to us feeling lost beyond the company — after a four‑month blended FRP engagement, he reported restored identity, stronger partnerships, and improved company leadership outcomes.`,
    ],
    problem: `V, arrived after years of high performance with a consistent internal truth: he didn’t know who he was beyond the company. There were no clear personal goals, long‑term relationship plans, or daily routines. Despite external success, he felt empty, indecisive, and partially disengaged from his personal life — symptoms that leaked into leadership and team dynamics.`,
  },
];
