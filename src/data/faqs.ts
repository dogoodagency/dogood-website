/**
 * FAQ content for /faqs.
 *
 * HOW TO EDIT
 * - Each question is one object: { id, q, a }. `a` is a list of paragraphs.
 * - To delete a question, delete its object. To move it, cut it into another category's `items`.
 * - `id` becomes the deep link (/faqs#why-whoop), so keep it short and unique.
 * - Links inside answers use [link text](url). Addresses starting with http open in a new tab.
 * - Tags in the comments: [SEB] = Seb's wording, used verbatim (typo fixes only);
 *   [ADDED] = written from the sources named in the comment.
 */

export interface Faq {
  id: string;
  q: string;
  a: string[];
  schemaQ?: string;
  schemaA?: string[];
}

export interface FaqCategory {
  id: string;
  title: string;
  items: Faq[];
}

const linkRe = /\[([^\]]+)\]\(([^)\s]+)\)/g;

const esc = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Turns one answer paragraph (with [text](url) links) into safe HTML. */
export function faqHtml(text: string): string {
  let out = "";
  let last = 0;
  for (const match of text.matchAll(linkRe)) {
    const start = match.index ?? 0;
    const label = match[1];
    const href = match[2];
    const external = /^https?:\/\//.test(href);
    out += esc(text.slice(last, start));
    out += `<a href="${esc(href)}"${external ? ' target="_blank" rel="noopener"' : ""}>${esc(label)}</a>`;
    last = start + match[0].length;
  }
  return out + esc(text.slice(last));
}

/** Plain text of an answer paragraph (links reduced to their label). */
export function faqPlain(text: string): string {
  return text.replace(linkRe, "$1");
}

export const faqCategories: FaqCategory[] = [
  {
    id: "about",
    title: "About FRP & fit",
    items: [
      // [SEB]
      {
        id: "who-is-frp-for",
        q: "Who is FRP for (and who is it not for)?",
        a: [
          "FRP is for founders who have sold or meaningfully stepped away from the company they built, and are now finding their footing in life after it. You may have more freedom, time, and options than before, but not feel as settled or fulfilled as you expected. It is not for founders still trying to solve operational business problems, looking for productivity tactics, or wanting someone to prescribe the next venture.",
        ],
      },
      // [SEB]
      {
        id: "difficult-time",
        q: "I’m in the middle of a difficult time. Is now the right moment to start?",
        a: [
          "Often, yes. Some founders come to Stage 1 feeling restless, overwhelmed by the amount of space they now have, or aware that their health and closest relationships need attention. Others simply know that life after the sale is not feeling the way they expected. Stage 1 gives you a private, structured space to slow down, make sense of what is happening, and decide what deserves attention first. From there, we build a clear path into what comes next.",
        ],
      },
      // [ADDED – source: chat-brief-approved.txt §3 "I sold my company a few years ago. Am I too late?"]
      {
        id: "too-late",
        q: "I sold my company a few years ago. Am I too late?",
        a: [
          "Not at all. There is no expiry date on “what now?” Some founders come to us right after the sale, others years later, when they notice the old patterns are still running the show. Wherever you are with it, it is a welcome place to start.",
          "You can [apply for Stage 1](/apply-stage-1) when you are ready.",
        ],
      },
      // [ADDED 20 Nov 2026 – source: for-advisors.astro "Room for the family too" (Seb, 19 Nov 2026)]
      {
        id: "partner-family",
        q: "Can my partner or family be part of this?",
        a: [
          "Yes, if you want them to be. The sale changes life at home too, and spouses and partners can be part of the conversation. A family that is aligned on what comes next makes the transition easier for everyone. The work itself stays one to one, and nothing is shared without your consent.",
        ],
      },
      // [ADDED – source: chat-brief-approved.txt §3 "Is this for co-founders too?"; apply-stage-1 fit note (equity founders)]
      {
        id: "co-founders",
        q: "Is this for co-founders too?",
        a: [
          "Yes. If you are a co-founder who has sold or meaningfully stepped away from the company you built, you are in the right place. The question of what comes next can be just as personal for a co-founder, and the work is built around you.",
        ],
      },
      // [ADDED – source: chat-brief-approved.txt §3 "I'm not a founder"; stage1-tc.md (equity founders only, Clarity Sprints instead)]
      {
        id: "not-a-founder",
        q: "I’m not a founder. Is there something for me?",
        a: [
          "Not for the Founder Reclamation Partnership itself, but you are very welcome here. The Founder Reclamation Partnership is built specifically for founders, so it is probably not the right fit for you personally.",
          "If you are asking on behalf of a team or company, or about something else, email [hiya@dogoodagency.co](mailto:hiya@dogoodagency.co).",
        ],
      },
    ],
  },
  {
    id: "starting",
    title: "Starting & timing",
    items: [
      // [ADDED 20 Nov 2026 – source: Seb's answers (Exit-Prep 12–18 months before the sale; The Reset weeks or months after)]
      {
        id: "when-to-start",
        q: "When is the right time to start?",
        a: [
          "Before the sale, the best time is 12 to 18 months out, while there is still room to think. [Exit-Prep™](/exit-prep) is built for that stretch.",
          "After the sale, most founders start [The Reset](/the-reset) a few weeks or months in, once the deal is done and the quiet sets in. There is no deadline. Some come to us years later.",
        ],
      },
      // [SEB]
      // [ADDED 20 Nov 2026 – language pass #34 (timing objection, founders and advisors)]
      {
        id: "too-early",
        q: "Is it too early if I'm a year or two from selling?",
        a: [
          "No. 12 to 18 months out is the best time. The personal side moves slower than the deal, and starting early keeps the decision in your hands. [Exit-Prep™](/exit-prep) is built for that stretch.",
        ],
      },
      {
        id: "how-quickly",
        q: "How quickly can we start?",
        a: [
          "As soon as capacity allows, and within 7 days with Expedited Start. Start timing depends on capacity and travel logistics. On the FRP‑Fit Call we’ll confirm fit, urgency, and the soonest realistic start date. Standard Start begins at the next available slot (capacity‑dependent) — typically 4–8 weeks from acceptance. In acute crises, we’ll assess whether an Expedited Start is appropriate (and whether we can ethically create that space) — if so, start within 7 days after approval. If you want certainty on timing once accepted, ask about Priority Hold. The next step is to [apply for Stage 1](/apply-stage-1) and completing the FRP‑Fit Call.",
        ],
      },
      // [SEB]
      {
        id: "after-you-apply",
        q: "What happens after I apply (and what is the FRP‑Fit Call)?",
        a: [
          "It’s a two-way assessment. You share what’s happening, what you’ve tried, and what you need to be different. We’ll ask direct questions to understand patterns and urgency, then explain what Stage 1 would look like in your situation. You’ll get a clear yes/no and next steps either way.",
        ],
      },
      // [SEB] (two paragraphs, as written)
      {
        id: "priority-hold",
        q: "What if you’re full, can I reserve a start date?",
        a: [
          "Yes. If we’re at capacity and you’re a fit, you can request a Priority Hold (seated reservation) to secure first access to the next available opening (terms are confirmed on the call). The deposit is non-refundable if you back out, and fully refundable if we can’t deliver the agreed start date.",
          "If things feel acute and timing is critical, we’ll discuss whether an Expedited Start is appropriate — or, if we can’t take you on responsibly, we’ll point you to a trusted alternative.",
        ],
      },
      // [ADDED – source: chat-brief-approved.txt §10 "Why are spots limited?"; apply-stage-1.astro ("Limited to five new founders a month")]
      {
        id: "limited-spots",
        q: "Why are spots limited?",
        a: [
          "Spots are limited so every founder gets real attention. The work is private and one to one, and each founder has a Wayfinder who is genuinely with them through it, so we only take on as many founders as we can serve well. In practice that is a maximum of five new founders a month.",
          "When a month is full, you can join the waiting list and get priority for the next spots. Spots are not guaranteed, and if it is not the right fit, we will say so kindly and point you somewhere better.",
        ],
      },
    ],
  },
  {
    id: "stage-1",
    title: "Stage 1: The Reset",
    items: [
      // [SEB]
      {
        id: "after-30-days",
        q: "What will I have in my hands after 30 days?",
        a: [
          "You leave with documented clarity: your ClarityValue Shift™, the Foundational Founder OS (your personal tools/playbook), and a 16‑Week Reclamation Plan that sequences what to tackle first, next, and last. In 30 days we usually resolve one major issue, sometimes two (not everything at once).",
        ],
      },
      // [SEB]
      {
        id: "stage-1-included",
        q: "What’s included in Stage 1: The Reset?",
        a: [
          "Stage 1 includes: 8 virtual 1:1 sessions (2× weekly, 75 min), a 1.5‑day in-person residency (we travel to your location), the Foundational Founder OS, the 10‑Day Containment Protocol, Recovery & Stress Diagnostics (with WHOOP, purchased separately), and your 16‑Week Reclamation Plan.",
        ],
      },
      // [SEB]
      {
        id: "clarityvalue-shift",
        q: "What is the ClarityValue Shift™?",
        a: [
          "The ClarityValue Shift™ is the Stage 1 engine: See → Interrupt → Choose → Reset. We stop the 'doom spiral', separate story vs reality, interrupt the patterns driving the real issue (self-talk → emotion → action), and help you reset so the shift integrates long-term. See our [1‑page ClarityValue Shift™](https://drive.google.com/file/d/1Joh1osiFsSDeJwGpua1QGtllXv7-WF5C/view).",
        ],
      },
      // [SEB]
      {
        id: "why-whoop",
        q: "Why WHOOP — and is it medical?",
        a: [
          "It shows how your body is coping, not only how you feel, and no, it is not medical care. WHOOP supports the Recovery & Stress diagnostics so progress is easier to see. It’s not medical care — think recovery visibility for better decisions under pressure. [WHOOP](https://www.whoop.com/us/en/life) is required for diagnostics and purchased separately (about USD 35/month, paid annually).",
        ],
      },
      // [ADDED – source: how-it-works.md ("These supports remain consistent throughout both FRP stages")]
      {
        id: "support-between-sessions",
        q: "Is there support between sessions?",
        a: [
          "Yes. A private voice and chat channel runs throughout both stages, for the moments that come up between sessions, so you can stay grounded and decide cleanly. Accountability support and an integration review of your reflection work are part of the partnership too, so insights stick and the next sessions stay aligned.",
        ],
      },
    ],
  },
  {
    id: "stage-2",
    title: "Stage 2 & beyond",
    items: [
      // [SEB]
      {
        id: "how-frp-is-structured",
        q: "How is FRP structured (and how does the Week 3 decision work)?",
        a: [
          "FRP has two stages. You apply for Stage 1: The Reset (30 days). In Week 3, we do a mutual alignment review: either you’re complete with Stage 1, or you’re invited into Stage 2: The Build (12 weeks). You never “sign up” for Stage 2 upfront.",
        ],
      },
      // [SEB]
      {
        id: "do-i-have-to-do-stage-2",
        q: "Do I have to do Stage 2?",
        a: [
          "No. You apply for (and pay for) Stage 1 only. By the end of 30 days, you can be complete and continue independently. If the work calls for deeper reconstruction (identity, relationships, life redesign), Stage 2 is an invite-only option decided together in Week 3.",
        ],
      },
      // [ADDED – source: chat-brief-approved.txt §5 "Can I go straight to Stage 2?"]
      {
        id: "straight-to-stage-2",
        q: "Can I go straight to Stage 2?",
        a: [
          "No. Stage 2 builds on Stage 1, so everyone starts with Stage 1: The Reset, a 30-day engagement. That first month lays the foundations, and in Week 3 you and your Wayfinder decide together whether Stage 2 is the right next step. Stage 2 is by invitation, if it fits.",
        ],
      },
      // [ADDED – source: how-it-works.md (Stage 2 inclusions); chat-brief-approved.txt §5 "What Stage 2 includes"]
      {
        id: "stage-2-included",
        q: "What is included in Stage 2: The Build?",
        a: [
          "Stage 2 is a wider build around real life, deeper decisions and long-term alignment, over 12 weeks. It includes 12 virtual 1:1 sessions (weekly, 90 minutes), another 1.5-day in-person residency, Founder OS 2.0, a NextLife Roadmap (your personalized 12-week blueprint), a Progress Pulse that tracks commitments, routines and patterns, custom state-shift audio, a Relationship + Health Restore Kit, and Partnership Reviews in Week 5 and Week 12.",
          "See the [1‑page NextLife Passage™](https://drive.google.com/file/d/1GGeLMbKzGeooRViFF0LbG-lpQO-GzKOJ/view).",
        ],
      },
    ],
  },
  {
    id: "format",
    title: "Format, time & logistics",
    items: [
      // [SEB]
      {
        id: "time-commitment",
        q: "What’s the time commitment — can I do this while still running my company?",
        a: [
          "Yes. Some clients are still operating. Plan for ~5–6 hours/week for 30 days: two sessions weekly plus reflection and protocol implementation. The work is designed to create stability in your life, so you can make more empowered decisions. This isn’t passive work, you apply it as life happens.",
        ],
      },
      // [SEB]
      {
        id: "in-person-intensive",
        q: "How does the in-person residency work (travel, location, logistics)?",
        a: [
          "Stage 1 includes a private 1.5‑Day Residency where we travel to your location. It’s not a retreat or group experience. It’s a focused working block to move one major issue faster than calls alone. Logistics (timing, setting, and schedule) are coordinated during onboarding once you’re accepted.",
        ],
      },
      // [ADDED – source: chat-brief-approved.txt §7 & §10 ("Where are you based?", "What languages do you work in?"); wayfinders.md]
      {
        id: "location-and-languages",
        q: "Where are you based, and which languages do you work in?",
        a: [
          "We work with founders internationally. Sessions are online, and your Wayfinder travels to you for the 1.5-day in-person residency. The team is spread across several regions, including North America, Europe and Asia-Pacific, and the details depend on your Wayfinder, which we sort out with you after you apply.",
          "Sessions are available in English, German, Spanish, Albanian and Portuguese, depending on the Wayfinder, and every Wayfinder works in English. Mention your preferred language in your application and we will take it into account when we match you. You can [meet the Wayfinders](/wayfinders).",
        ],
      },
      // [ADDED – source: wayfinders.md; wayfinders/clientfit.md; chat-brief-approved.txt §7 "Can I choose my coach?"]
      {
        id: "choose-wayfinder",
        q: "Can I choose my Wayfinder?",
        a: [
          "You do not pick directly. Wayfinders are the small, vetted team who guide each founder one to one, and we match you with the one who fits you best. We match for fit first, based on your situation and what you respond to: direct or gentle, highly structured or more spacious. After that we look at location and time zone, to keep scheduling and travel simple.",
          "If the match does not feel right within your first two sessions, we will adjust it. If you have a preference, mention it in your application and we will take it into account. You can [meet the Wayfinders](/wayfinders) or read the [Client-Fit process](/wayfinders/clientfit).",
        ],
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & approach",
    items: [
      // [SEB]
      {
        id: "confidential",
        q: "Is this confidential?",
        a: [
          "Yes — completely confidential, and we operate under clear privacy boundaries. Your participation, situation, and conversations are not shared – ever. This is intentionally private (no groups, no cohorts) and limited capacity. The point is to give you a place where you can speak out loud your truth without managing optics, reputation, or internal politics.",
        ],
      },
      // [SEB]
      {
        id: "different-from-coaching",
        schemaQ: "How is this different from coaching or therapy?",
        schemaA: [
          "It is built for one transition only: your life around the sale of your business. FRP is a private, structured partnership for founders navigating life after the sale. Coaching can help with performance and direction. Therapy can offer an important space to process what is difficult. Masterminds and retreats can provide perspective and connection. Each can have value. FRP brings together the parts that matter in this particular transition: understanding what is really going on for you, and addressing what was neglected while building. There are clear milestones, documented decisions, and real accountability throughout.",
        ],
        q: "How is this different from coaching or therapy?",
        a: [
          "It is built for one transition only: your life around the sale of your business. FRP is a private, structured partnership for founders navigating life after the sale. Coaching can help with performance and direction. Therapy can offer an important space to process what is difficult. Masterminds and retreats can provide perspective and connection. Each can have value. FRP brings together the parts that matter in this particular transition: understanding what is really going on for you, and addressing what was neglected while building. There are clear milestones, documented decisions, and real accountability throughout.",
        ],
      },
      // [ADDED – source: chat-brief-approved.txt §4 "Is this therapy?"; diagnostics.md ("Founder-focused · Not therapy, not medical advice, not psychological services")]
      {
        id: "is-this-therapy",
        q: "Is this therapy?",
        a: [
          "No. We are not therapy, and we are not a medical or psychological service. Therapy can be really valuable, and we would never tell anyone to skip it. Our work is about clarity, patterns and choosing your next chapter on purpose, through honest conversations and practical changes in how you live.",
          "Founder-focused · Not therapy, not medical advice, not psychological services.",
        ],
      },
      // [ADDED – source: chat-brief-approved.txt §10 (distress) and §11 (not a crisis service); diagnostics.md (emergency-service note); Seb's FAQ (Expedited Start)]
      {
        id: "urgent-support",
        q: "What if things feel urgent, or I can’t cope right now?",
        a: [
          "We are not an emergency service. If you are in danger, or feel you might harm yourself, please contact your local emergency services now. If you are feeling severely overwhelmed or can’t cope any longer, we recommend you reach out to a local emergency service for help. If you can, reach out to someone you trust or a doctor today, and tell them how you are feeling.",
          "If things feel acute after the sale and timing is critical, we will discuss whether an Expedited Start is appropriate. If we cannot take you on responsibly, we will point you to a trusted alternative.",
        ],
      },
      // [SEB]
      {
        id: "existing-advisors",
        q: "Do you work with my existing advisors?",
        a: [
          "Yes, alongside them, never instead of them. You decide what we share with them.",
        ],
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing, payment & guarantee",
    items: [
      // [ADDED – source: chat-brief-approved.txt §10 "How much does it cost?" (no figure is stated on the site sources for Stage 1)]
      {
        id: "stage-1-cost",
        q: "How much does Stage 1 cost?",
        a: [
          "We share the fee on the FRP-Fit Call, because it depends on your situation and what fits, so we would rather walk you through it properly than give a number that might not suit you. We cover all of it openly in the conversation after you apply, with no pressure to commit, and questions about payment are welcome in that same conversation.",
          "WHOOP is purchased separately (see [why WHOOP](#why-whoop)), and Stage 1 is covered by our Clarity-First Guarantee. You can [apply for Stage 1](/apply-stage-1) or email [hiya@dogoodagency.co](mailto:hiya@dogoodagency.co) with questions first.",
        ],
      },
      // [ADDED – source: chat-brief-approved.txt §4 "Can you guarantee results?"]
      {
        id: "guarantee-results",
        q: "Can you guarantee results?",
        a: [
          "No. No one should guarantee how your life will turn out, and we will not. Everyone’s situation is different, and results depend on the person and the work. What we can say is that the work is focused, private and built around you, and that Stage 1 is covered by the Clarity-First Guarantee, described in the next answer.",
        ],
      },
      // [ADDED – source: how-it-works.md "Clarity‑First Guarantee (Stage 1)"; clarity-first-guarantee-terms.md; chat-brief-approved.txt §5]
      {
        id: "start-and-not-right",
        q: "What if I start and it isn’t right for me?",
        a: [
          "You can stop, and the Clarity-First Guarantee refunds everything except the two sessions you used. You can’t know whether FRP is right for you from the outside, only once you’ve been inside the work. Complete onboarding and attend your first two private 1:1 sessions. If you decide the partnership isn’t right for you, email us within 7 calendar days of your first session. We keep only the part of the Stage 1 investment that covers those two sessions, and we refund the rest, no matter the reason.",
          "You keep all decisions, plans and tools from those first sessions. We take real delivery risk on purpose, because we only want to continue if it is genuinely the right fit.",
        ],
      },
      // [ADDED – source: clarity-first-guarantee-terms.md (Terms & Conditions, sections 1–8)]
      {
        id: "guarantee-conditions",
        q: "What are the conditions of the Clarity-First Guarantee?",
        a: [
          "The guarantee applies if you complete onboarding in full, attend your first two private 1:1 sessions, and email us within 7 calendar days of Session 1. Session 1 means your first live private 1:1 session, not the acceptance call, payment date or onboarding date. “Without questions asked” means we do not interrogate, debate or ask you to justify your decision.",
          "It applies only before an in-person intensive is initiated or scheduled. If an intensive has been scheduled or has incurred costs, such as travel booking, the guarantee no longer applies, and any refund would be a separate written exception approved by us. If you came in through a Priority Hold, its deposit terms apply separately. Refunds go to the original payment method only.",
          "If the Wayfinder match feels wrong in the first two sessions, we will correct it quickly. If we can’t correct it without delay, you can exit through the guarantee. To use it, [email us](mailto:hiya@dogoodagency.co?subject=Clarity%E2%80%91First%20Guarantee%20%E2%80%94%20Exit%20Request) with your full name and the date of Session 1. Read the [full terms](/clarity-first-guarantee-terms).",
        ],
      },
      {
        id: "exit-prep-guarantee",
        q: "Does the guarantee cover Exit-Prep™?",
        a: [
          "Yes. Exit-Prep™ has its own Clarity-First Guarantee. Complete onboarding and attend your first two private 1:1 sessions. If it isn't right for you, email us within 24 hours of Session 2. We keep only the part that covers those two sessions and refund the rest, no matter the reason. Read the [full terms](/clarity-first-guarantee-terms).",
        ],
      },
    ],
  },
  {
    id: "exit-prep",
    title: "Not sold yet? Exit-Prep™",
    items: [
      // [SEB]
      {
        id: "only-sold-founders",
        q: "Do you only work with founders who have already sold?",
        a: [
          "No. About half the founders we work with haven't sold yet. [Exit-Prep™](/exit-prep) is built for them.",
        ],
      },
      // [ADDED – source: exit-prep-one-pager.md ("Why it exists", "Who it's for"); for-advisors.md FAQ; chat-brief-approved.txt §3]
      {
        id: "not-exited-yet",
        q: "I haven’t sold yet. Is this for me?",
        a: [
          "It can be. Stage 1 is for founders who have sold or meaningfully stepped away. If you still run your company but know a sale is coming, we have Exit-Prep™. It is for founders who still run the company or are getting ready to sell, and who may be stuck on the decision itself, sometimes for years. It meets you where you are today.",
          "If you are not planning to sell or step back at all, the partnership is probably not the right fit. If you have questions, [get in touch](/contact).",
        ],
      },
      // [ADDED – source: exit-prep-one-pager.md ("How it works", "What changes")]
      {
        id: "what-is-exit-prep",
        q: "What is Exit-Prep™?",
        a: [
          "Exit-Prep™ is for founders who know a sale is coming, ideally 12 to 18 months before it. It runs for six weeks, fully remote, with no travel: six weekly private sessions of 75–90 minutes with a Wayfinder, one to one, private and confidential.",
          "It comes with the same conditions as Stage 1: WhatsApp support between sessions, WHOOP, and all our learning tools. The six weeks are about clarity: what you want to do after the sale, or what is getting in the way, such as a conversation that needs to happen, health you have been putting off, or the busyness that keeps you from deciding. By the end, founders are clear and decisive.",
        ],
      },
      // [ADDED 20 Nov 2026 – source: Seb's answers (Exit-Prep is about the founder's clarity, not the deal)]
      // [ADDED 20 Nov 2026 – language pass #33 (no headspace during the sale)]
      {
        id: "too-busy-with-the-sale",
        q: "I'm too busy with the sale to think about myself. Is now the wrong time?",
        a: [
          "No. That is usually the right time. One session a week fits around a deal, and the clarity tends to make the sale itself easier.",
        ],
      },
      {
        id: "sale-falls-through",
        q: "What if the sale falls through?",
        a: [
          "The work still counts. Exit-Prep™ is about you, not the deal: what you want, what is in the way, and what you would do next. That stays useful whether the sale happens now, later or not at all.",
        ],
      },
      // [ADDED – source: exit-prep-one-pager.md; for-advisors.md FAQ ("move on to Stage 1"); how-it-works.md / Seb's FAQ (Stage 1 contents)]
      {
        id: "exit-prep-vs-stage-1",
        q: "How is Exit-Prep™ different from Stage 1?",
        a: [
          "It is the same service at the level of commitment that fits where you are today. It is not a lite version of The Reset.",
          "Stage 1: The Reset is a 30-day engagement for founders who have sold or stepped away, with eight virtual 1:1 sessions and a 1.5-day in-person residency. Exit-Prep™ is built for founders who still run the company: six weekly private sessions of 75–90 minutes over six weeks, held remotely. Both are one to one, private and confidential, with the same conditions. If you later want to go deeper after the sale, you can move on to Stage 1.",
        ],
      },
    ],
  },
  {
    id: "advisors",
    title: "For advisors",
    items: [
      // [ADDED – source: for-advisors.md ("How a referral works")]
      {
        id: "advisor-how-referral-works",
        q: "I’m an advisor. How does a referral work?",
        a: [
          "It is a short, careful path, and we never contact your client without you. First, an intro conversation with Seb, to see whether a partnership is a fit. Then you introduce the founder, with their permission. We hold a private Fit Call with the founder, which you do not need to join. If they go ahead, we keep you informed of the broad shape of things, with the founder’s consent, and never share confidential details from the work itself. Then Stage 1 starts, and you remain the trusted advisor.",
          "You can read more in the [Advisor Center](/advisor-center).",
        ],
      },
      // [ADDED – source: for-advisors.md FAQ "Will you contact my client without me?"]
      {
        id: "advisor-contact-client",
        q: "Will you contact my client without me?",
        a: [
          "No. We never contact a founder without your introduction, and we only ask you to introduce them with their permission. We do not poach, and anything we tell you about how things are going is with the founder’s consent.",
        ],
      },
      // [ADDED – source: for-advisors.md FAQ "What about a client who has not sold yet?"; exit-prep-one-pager.md]
      {
        id: "advisor-not-sold-yet",
        q: "Can I refer a client who hasn’t sold yet?",
        a: [
          "Yes, if they have firmly decided to exit and are preparing for it. For those founders we have Exit-Prep™: six weekly private sessions, held remotely, covered by the Clarity-First Guarantee. If they later want to go deeper after the sale, they can move on to Stage 1. Ask us about it on the intro call.",
        ],
      },
      // [ADDED – source: for-advisors.md FAQ "Do you give financial or legal advice?"; chat-brief-approved.txt §4]
      {
        id: "advisor-no-advice",
        q: "Do you give financial or legal advice?",
        a: [
          "No. We do not give financial, legal, tax or deal advice, and we do not poach. You stay the trusted advisor. We work only on the personal side of life after exit, the part that usually sits outside an advisor’s role.",
        ],
      },
    ],
  },
];
