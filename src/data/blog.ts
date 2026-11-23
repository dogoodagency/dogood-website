import type { CollectionEntry } from "astro:content";

export const SITE = "https://www.dogoodagency.co";

// MailerLite form already used by the footer and the /newsletter page.
// Base.astro's global script handles every form.js-subscribe. Do not create new forms.
export const NEWSLETTER_ACTION =
  "https://assets.mailerlite.com/jsonp/2046479/forms/180157154312849349/subscribe";

export type Audience = "founder" | "advisor" | "both";

export const audiences: Record<Audience, { label: string; short: string }> = {
  founder: { label: "For founders", short: "Founder" },
  advisor: { label: "For advisors", short: "Advisor" },
  both: { label: "Founders & advisors", short: "Both" },
};

export interface BlogCategory {
  slug: string;
  name: string;
  audience: Audience;
  description: string;
  intro: string;
  sketch: string;
  /** Optional search-result title and description (meta only; the page heading and intro stay as they are). */
  seoTitle?: string;
  seoDescription?: string;
}

/**
 * To add a category: add an object here AND add its slug to `categorySlugs`
 * in src/content.config.ts. See docs/INSIGHTS.md.
 */
export const categories: BlogCategory[] = [
  {
    slug: "preparing-for-exit",
    name: "Preparing for exit",
    audience: "founder",
    description: "Getting yourself ready for the sale, not just the company.",
    seoTitle: "Before the sale: notes for founders | DoGood Insights",
    seoDescription: "Notes for founders who haven't sold yet: how to get yourself ready for the sale, not just the company, and what to settle before you sign.",
    intro:
      "The deal has a timeline. You do too, and it is a different one. Preparing to sell your business usually means valuations, data rooms and tax plans. These notes are about the other side: getting yourself ready, not just the company. They are for founders who haven't sold yet and want to look at the personal side early, while there is still room to shape it, whether the sale is a year away or still a question.",
    sketch: "/sketches/how-it-works-two-stage-path-sketch",
  },
  {
    slug: "after-the-sale",
    name: "First 90 days",
    audience: "founder",
    description: "What the first three months after closing really feel like.",
    seoTitle: "After the sale: notes for founders | DoGood Insights",
    seoDescription: "Notes for founders after the sale: what the first months after closing really feel like, and what tends to help. From the Wayfinders at DoGood.",
    intro:
      "The wire has landed and the calendar is suddenly empty. Life after selling a business rarely feels the way founders expect. Many find the first months strange, flat or restless, and the hard part often arrives weeks later rather than on the day they sign. These notes describe what is common in the first 90 days and beyond, and what tends to help.",
    sketch: "/sketches/life-after-exit-machine",
  },
  {
    slug: "identity-and-purpose",
    name: "Identity & purpose",
    audience: "founder",
    description: "Who you are when the company is no longer your title.",
    intro:
      "For years the company answered the question of who you are. When it goes, that answer goes with it. These notes explore identity and purpose after a founder sells, in plain words.",
    sketch: "/sketches/insights-open-journals",
  },
  {
    slug: "health-and-energy",
    name: "Health & energy",
    audience: "founder",
    description: "Sleep, energy and the body's slow landing after a long sprint.",
    intro:
      "Years of pressure can hold a body together right up until the pressure stops. These notes look at sleep, energy and rest after the sale. They are general reflections, not medical advice.",
    sketch: "/sketches/apply-stage-1-garden-gate",
  },
  {
    slug: "relationships-and-family",
    name: "Relationships & family",
    audience: "founder",
    description: "Partners, family and friends through the change.",
    intro:
      "Selling the company changes the people around you too. Partners, children and close friends all have their own view of what comes next. These notes are about talking it through at home.",
    sketch: "/sketches/founder-long-table-family-team-sketch",
  },
  {
    slug: "whats-next",
    name: "Freedom & what's next",
    audience: "founder",
    description: "Choosing the next chapter on purpose. Not financial advice.",
    intro:
      "Freedom can feel like a lot of open road. These notes are about choosing your next chapter slowly and on purpose: how you want your days to feel, and what you want to say yes to. They are not financial advice.",
    sketch: "/sketches/case-study-v-shore-boat",
  },
  {
    slug: "working-with-founders",
    name: "Working with founders",
    audience: "advisor",
    description: "For advisors: raising the personal side with clients.",
    seoTitle: "For exit advisors: the founder side | DoGood Insights",
    seoDescription: "For exit planning advisors: how to raise the personal side of the sale with founder clients, and when to bring in support. Notes from DoGood.",
    intro:
      "You see the deal up close. You also see the person behind it. These notes are for exit planning advisors, succession planners and wealth advisors who want to raise the personal side of a sale with founder clients in a way that feels natural and respectful: when to bring it up, what to say, and when to bring in support.",
    sketch: "/sketches/podcast-two-chairs-microphone",
  },
  {
    slug: "personal-side-of-exit-planning",
    name: "Exit planning: the personal side",
    audience: "advisor",
    description: "For advisors: why readiness matters to the deal itself.",
    intro:
      "A plan can be sound on paper and still stall when the founder isn't ready to let go. These notes cover the personal side of exit planning and where advisors can help without stepping outside their role.",
    sketch: "/sketches/for-advisors-after-the-deal-sketch",
  },
];

export function getCategory(slug: string): BlogCategory | undefined {
  return categories.find((c) => c.slug === slug);
}

/** Image sources for a sketch base path such as "/sketches/insights-open-journals". */
export function sketchSrc(base: string) {
  return {
    webp1: `${base}@1x.webp`,
    webp2: `${base}@2x.webp`,
    png1: `${base}@1x.png`,
    png2: `${base}@2x.png`,
  };
}

type Post = CollectionEntry<"blog">;

/** Newest first. Returns a new array. */
export function sortedPosts<T extends Post>(posts: T[]): T[] {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Same category first, then same audience, then newest. */
export function relatedPosts<T extends Post>(post: T, all: T[], n = 3): T[] {
  const others = sortedPosts(all.filter((p) => p.id !== post.id));
  const sameCategory = others.filter((p) => p.data.category === post.data.category);
  const sameAudience = others.filter(
    (p) => p.data.category !== post.data.category && p.data.audience === post.data.audience,
  );
  const rest = others.filter(
    (p) => p.data.category !== post.data.category && p.data.audience !== post.data.audience,
  );
  return [...sameCategory, ...sameAudience, ...rest].slice(0, n);
}

/** "12 Nov 2026" style date for cards and article meta. */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0]!.toUpperCase())
    .slice(0, 2)
    .join("");
}

export function postUrl(post: Post): string {
  return `/insights/${post.id}`;
}
