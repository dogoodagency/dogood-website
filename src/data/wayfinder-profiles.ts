/**
 * Profile-page copy for the five Wayfinders (/wayfinders/<slug>), word for word from the live
 * pages (.briefs/live/wayfinders_<slug>.txt). Attached to each Wayfinder as `profile` in ./wayfinders.
 *
 * Deliberately not carried over: the "Not sure where you stand? A 5-minute Founder Diagnostic™"
 * block, and in Seb's section 5 the clause ", totaling USD 16.5M in enterprise value".
 * Typo fix: the section 4 sub-line on the live site lacks its closing quote mark (added below).
 */

export type ProfileSection = {
  n: number;
  heading: string;
  /** The one-line italic sub-heading. */
  sub: string;
  /** One entry per paragraph. */
  body: string[];
};

export type WayfinderProfile = {
  /** <title> from the live page. */
  seoTitle: string;
  /** Meta description from the live page. */
  seoDescription: string;
  sections: ProfileSection[];
  /** Name shown as the handwritten signature. */
  signature: string;
};

/** Headings + sub-lines are identical on all five live profiles. */
const meta: { heading: string; sub: string }[] = [
  { heading: "Why founders come to me", sub: "So you know I understand the moment you’re in — and what this work is actually for." },
  { heading: "What I’m known for", sub: "The edge you get with me — beyond “right questions.”" },
  { heading: "How I work with you", sub: "What it feels like to be in the room with me" },
  // Live text: the closing ” after "kind of work" is missing (typo fixed).
  { heading: "Whom I'm the best fit for", sub: "So you know quickly if this is “your kind of work”" },
  { heading: "Why I can hold real stakes", sub: "Credibility, fast — so you don’t have to “take a leap of faith.”" },
  { heading: "What I have been trained in", sub: "Enough authority to trust me and the method — without hiding behind credentials." },
  { heading: "From where I travel", sub: "So scheduling is simple and the partnership is sustainable." },
  { heading: "What I'm here to do & my hobbies", sub: "So you meet the real me — not just the professional version." },
  { heading: "What I wish I could tell you now", sub: "One thing, straight from me to you." },
];

function build(
  seoTitle: string,
  seoDescription: string,
  signature: string,
  bodies: string[][],
): WayfinderProfile {
  return {
    seoTitle,
    seoDescription,
    signature,
    sections: meta.map((m, i) => ({ n: i + 1, ...m, body: bodies[i] })),
  };
}

export const profiles: Record<string, WayfinderProfile> = {
  seb: build(
    "Seb, founder and exit coach | DoGood Agency",
    "Seb, founder of DoGood and exit coach for Asia-Pacific and the US: his successful business nearly broke him. Now he guides founders through theirs.",
    "Seb",
    [
      [
        "I believe I’ve been where you are. I built a successful business that nearly broke me — then life came to an unapologetic halt too and forced a reset where I lost everything. I felt lost, beaten up, and genuinely unsure if I could get back up. The work I’m here for started when I did the hardest project: me.",
      ],
      [
        "I have a strong sense for what’s needed to take you to the next level — whether that’s greater clarity or empowered decisions — so you can thrive and live a fulfilled life. Many of my clients have become lifelong friends and close allies. Not because I’m trying to be liked — but because truth and authenticity create results that change the relationship too.",
      ],
      [
        "I can be both nurturing and blunt when it’s warranted. I sense when people buy into their own limiting story of what they cannot do — and if it’s for your benefit, I’ll call out what no one else will tell you. I’m interested in rapid transformation to create clarity, so you can make empowered decisions fast again.",
      ],
      [
        "Over the years, I’ve worked a lot with founders who’ve built USD 5M+ companies while their life around the business isn’t all that much fun — broken relationships, health scares, or an inner calm that’s… questionable. If you have a problem in life that you’ve been rolling around with, I can help. If you’re still running, I help you reclaim clarity without stepping back. If you’ve sold (or are close), I help you rebuild identity so the next chapter feels clear and intentional.",
      ],
      [
        // Dropped from the live text: ", totaling USD 16.5M in enterprise value".
        "I’ve spent 14+ years helping founders and executive teams create major shifts — in companies and in life. I’ve delivered 150+ learning initiatives in 35+ countries. I’ve delivered workshops and worked 1:1 with 100+ founders and senior executives — from startups to iconic brands like Adobe, Vodafone, Siemens, Johnson & Johnson, Rolls‑Royce, and Upwork — on business strategy and identity shifts.",
      ],
      [
        "I’m certified as a Master NLP Practitioner and Master Trainer (advanced facilitation), with organizational development studies via Stanford and Harvard programs. The point isn’t credentials, however. It’s this: I use practical, proven methods that stand up in real life — when you’re tired, stressed, and still responsible for a company and family. I won a national award in Australia in 2014, authored Instant Silence, and founded DoGood Agency in 2019 — focused on culture excellence and operational efficiency, to transform companies globally to be profitable and do good.",
      ],
      [
        "I’m located in Australia. If you reside in New Zealand, Southeast Asia, Mexico, the U.S. or Canada, I will come and see you during our 1:1 intensives. If you’re in Europe, we’ll look at what’s realistic (I have family in Germany) — without forcing something that doesn’t make sense.",
      ],
      [
        "I’m a human lover. I see myself as a visionary. I love entrepreneurship because it serves the world. I’m a passionate Ironman 70.3 triathlon athlete, obsessed with human potential. And, I believe I’m here to be a secret agent of truth, love, and dedication — in service of lifting awareness for humanity.",
      ],
      [
        "I’m not here to motivate you –– that’s all beneath the surface. I’m here to help you create the incredible change you want, so you can live a life full of zest and vigor. You don’t need more pressure; you need clarity you can trust and a path you can actually follow. I’m here to help you get there. I believe in you.",
      ],
    ],
  ),

  vlora: build(
    "Vlora, Wayfinder for the Atlantic Hub | DoGood Agency",
    "Meet Vlora, DoGood Wayfinder for Western Europe and South America, for founders at turning points, from high growth to life after exit.",
    "Vlora",
    [
      [
        "Founders often come to me at life or business turning points — during high growth when greater clarity is needed, or post-exit when old structures fade and the question \"what now?\" arises. Outwardly strong, they may feel restless or reflective, sensing the need for a more aligned self. I work where identity meets leadership, helping founders recalibrate internally to choose their next steps consciously, not from momentum or expectation. As the nervous system settles and patterns surface, clarity and energy return, decisions sharpen, and the next chapter is embraced with ownership and renewed momentum.",
      ],
      [
        "I bring calm, focused presence to high-stakes environments while driving progress. Having co-founded ventures and thrived in high-growth ecosystems, I deeply understand founder psychology. I speak business fluently and grasp the demands of responsibility, ambition, and visibility. Simultaneously, I work with subconscious patterns and nervous system regulation, spotting when outdated conditioning clouds strategy and guiding alignment with present vision. Clients often feel more grounded, energized, and clear-minded. With stronger internal alignment, ambition becomes lighter and intentional, and strategic thinking more precise and sustainable. This work isn’t about fixing—it’s about unlocking the capacity already within.",
      ],
      [
        "Working with me is structured, thoughtful, and fully engaged. If you arrive overwhelmed, we begin by stabilizing your internal state through breath, awareness, and inquiry to restore clear thinking. We then explore beliefs about success, visibility, control, and leadership, distinguishing instinct from conditioning. I integrate subconscious work, hypnosis, somatic practices, focused reflection, and practical steps. Each session ends with clarity and grounded next actions. My aim is your autonomy—strengthening internal decision-making so you lead without relying on pressure or urgency. The atmosphere is focused yet open, fostering deep, energizing growth.",
      ],
      [
        "I work best with founders and leaders who are capable, reflective, and ready for conscious evolution. You may be scaling into greater responsibility. You may be post-exit. You may be redefining success on your own terms. What unites my clients is not their stage, but their readiness to grow with awareness. You are willing to examine the patterns that drove your success and refine them for your next chapter. You are not looking for hype. You are looking for clarity, depth, renewed energy and a way of leading that feels both powerful and natural. If you want leadership that feels aligned rather than forced, this work will resonate.",
      ],
      [
        "I have spent over a decade inside startup and high-growth environments. I understand the psychological and operational weight of leadership, capital decisions and long-term responsibility.",
        "Alongside that, I trained extensively in subconscious work and hypnosis, as well as nervous system regulation, which allows me to work at the level where lasting shifts occur. This combination allows me to sit in high-stakes conversations with composure and clarity. I help leaders access their own internal authority and make decisions from steadiness rather than reactivity. You do not have to choose between strategic sharpness and depth. The aim is integration.",
      ],
      [
        "My background intentionally bridges business and embodiment. I hold a Bachelor’s degree in Business Administration and dual Master’s degrees in International Management. I have co-founded ventures and operated inside startup ecosystems. I completed a two-year certification in hypnosis and subconscious work and trained extensively in yoga, advanced Yin specialization, and nervous system-based practices. I am also an Ocean Therapy Practitioner. This foundation allows me to support leaders both strategically and psychologically, without separating the two.",
      ],
      [
        "I am based in Europe and work internationally. My location shifts seasonally, but I structure travel intentionally to protect continuity and delivery quality. I am available for in-person intensives and structured engagements, with clear planning to ensure stability and consistency in the partnership.",
      ],
      [
        "I am here to help leaders expand while staying in their center. My own steadiness comes from consistent daily practices such as meditation, journaling, breathwork, yoga and surfing. These practices are not aesthetic rituals. They are how I maintain clarity, resilience and perspective. Outside of sessions, I design retreats and leadership programs that integrate nervous system literacy and identity work into grounded, repeatable frameworks.",
        "I believe growth can be ambitious and aligned at the same time, and that leadership can feel both powerful and alive.",
      ],
      [
        "Growth reshapes identity. Whether you are building something larger or stepping into a new chapter after exit, recalibration is part of the process. Clarity does not come from forcing answers. It emerges when the nervous system feels regulated and subconscious patterns are brought into awareness. Many leaders believe momentum requires acceleration. Often, true momentum begins with internal alignment.",
        "When alignment is restored, direction becomes clear. Energy becomes available again. Leadership becomes embodied rather than performed. From there, the next chapter is not something to manage. It is something you consciously create.",
      ],
    ],
  ),

  shiva: build(
    "Shiva, Wayfinder for the Gulf | DoGood Agency",
    "Meet Shiva, DoGood Wayfinder for the Gulf, North Africa and East Asia, for founders between worlds: post-exit, mid-collapse, or before the crash.",
    "Shiva",
    [
      [
        "I'll hold you when you're falling apart, but I also won't let you off the hook. Founders come to me when they're between worlds — post-exit, mid-collapse, or before the crash they can see coming. They need someone who's lived through systems falling apart and knows how to sit in the sh*t without flinching. I don't clean up the mess or make it prettier. I help you see what's actually not working, name what you've been avoiding, and figure out what to rebuild. You don't need saving. You need someone who won't look away.",
      ],
      [
        "I go where most humans won't — into the messy middle where real transformation happens. I'm known for asking the questions that crack things open, for hearing what you're not saying, and for the stubbornness to not let you perform your way through this. Leaders at Unilever, Randstad, and Generali have worked with me because I don't clean up complexity or sell certainty. I help you break down what's no longer sustainable and rebuild from what's actually true. My edge isn't just frameworks — it's the willingness to stay in the hard part with you.",
      ],
      [
        "I probe, question, shake things up. I'm not afraid to tell you when you're bullshitting yourself. We'll sit with the loss of identity, the fear, the uncertainty — but we'll also do something about it. My approach combines structure (I've built leadership programs for 15 years) with the flexibility to follow what's real in the room. You'll get frameworks when you need them and silence when that's more useful. I hold the container tight enough for safety and loose enough for truth. We move at the pace your nervous system can handle, not the pace your ego wants.",
      ],
      [
        "You're in the space between realities — letting go of one identity and stepping into another. Maybe you exited. Maybe the company you built no longer fits who you're becoming. You're discovering which values, assumptions, and loyalties still serve you and which need to go. This work is for founders willing to question everything they thought was true and ready to rebuild from a clearer foundation. If you want someone who'll sit with you while your world reshapes itself and help you figure out what comes next, we'll work well together.",
      ],
      [
        "I was born in Iran during war, became a refugee at four, lived across three continents, seven cities, six countries. I've reinvented my life several times, each time better than the last. I built careers and jobs I didn’t even know existed. I've designed transformation programs for Fortune 500 companies through Duke Corporate Education, Headspring (IE and Financial Times joint venture) and Imperial College. I've facilitated change for thousands of leaders globally, spoken at TEDx on living in our power and am a board member of the Right Use of Power Institute. I know what it costs to rebuild — and I know it's possible.",
      ],
      [
        "Adaptive leadership, systems thinking, cultural intelligence, power dynamics, and advanced facilitation. I hold certifications in Global Diversity, Equity and Inclusion Benchmarks (GDEIB) and have taught at Universidad Pontificia Comillas and IE School of Human Sciences. I've spent 15+ years designing programs through Duke Corporate Education, Imperial College Business School and Headspring (Financial Times & IE Business School). My approach is kind, not nice. Direct, but also deeply human. I bring authority without hiding behind credentials. The method matters, but so does the person holding it.",
      ],
      [
        "I'm based in Madrid, and the Middle East, and most of North Africa is my region. But honestly? Anywhere. If you need me and we're a fit, I'll find a way to get there. I've been moving across continents for years — logistics don't stop me. What matters is the work, not the distance. Travel is part of how I've always lived: adapting, showing up where I'm needed, building partnerships that work across time zones and cultures. If we're doing this, I'll be there.",
      ],
      [
        "I love fantasy fiction — stories about people forced to question everything they thought was true, who watch their reality get destroyed and choose what to rebuild. I walk the same overgrown park every day, watching grumpy peacocks and discovering something new each time. Nature teaches me that living systems constantly destroy and recreate themselves. Every winter is different. Every spring is different. That's what we do too — shift, move, rebuild with what's real now. I didn't set out to do this work. But once I found my feet, it became clear I'm good at it.",
      ],
      [
        "Breaking systems isn't hard. Building them is. You've already built a successful system in business — you're more than capable of building one for life. The collapse you're in or heading toward isn't failure. Sometimes it's exactly what needed to happen. Your body remembers how to navigate uncertainty even when your mind panics. Trust that. You don't need certainty to move forward. You need the skills to break down what's no longer working and the stubbornness to rebuild something better. You've done harder things than this. Let's go.",
      ],
    ],
  ),

  katrin: build(
    "Katrin, Wayfinder for Europe | DoGood Agency",
    "Meet Katrin, DoGood Wayfinder for Europe, the UK and Central America, for founders whose personal life starts to affect how they lead and decide.",
    "Katrin",
    [
      [
        "Founders come to me when personal circumstances start affecting how they lead, decide, and carry responsibility. This often happens during sustained high-pressure periods, health challenges, relationship strain, major transitions, or moments when the life they’ve built no longer feels aligned or sustainable. They come because it’s lonely at the top — and they’re looking for someone who can hold the full picture. Someone who understands both the business reality and the emotional weight of leadership, and who can be trusted with what usually stays unspoken.",
      ],
      [
        "I’m known for holding depth, complexity, and emotional intensity without rushing to solutions. I stay calm and grounded with difficult material and uncomfortable realities, especially when pressure is high.",
        "Founders often tell me that simply being fully seen and understood brings immediate relief. From that place, clarity emerges naturally, responsibility becomes easier to carry, and meaningful change can happen — without force, performance, or pretending everything is fine.",
      ],
      [
        "When we work together, you don’t have to perform or hold everything together. You can arrive exactly where you are. I create a calm, confidential space where pressure eases and clarity returns. I listen closely, ask direct questions, and help you focus on what truly matters when decisions feel heavy. Many leaders tell me that this is one of the few spaces where they can fully exhale — often for the first time in years. From that steadiness, thinking sharpens, responsibility becomes easier to carry, and next steps emerge without force. Nothing is imposed. Everything is adapted to you.",
      ],
      [
        "I work primarily with founders and senior executives in high-pressure and crisis situations, when challenges are unfolding across multiple areas of life and work at the same time. Over the years, I’ve supported founders who built multi-million-dollar companies while losing connection with their partner or children. I’ve worked with international founders and their families through major relocations, and with leaders who achieved everything they set out to in business and no longer felt grounded in the role. This work is for people who need a steady, confidential space to stabilize, regain clarity, and continue leading in a way that is sustainable.",
      ],
      [
        "I bring over 13 years of professional experience working with founders, leaders, and teams in complex, high-responsibility environments. Over that time, I’ve supported more than 50 founders and senior executives through one-on-one work and trained and mentored leaders across global organizations. My work includes leadership development and organizational change with leaders and teams at Fortune 500 and global organizations, including Roche, ING, Olympus, Dassault Systèmes, and Siemens, as well as organizations in the industrial sectors. Through this work, I’ve reached thousands of people via leadership and training initiatives, both in person and online. What allows me to work at this level is steadiness. My capacity to remain calm and clear under pressure is grounded in long-standing meditation, mindfulness, and embodiment disciplines — not as techniques, but as practices that support emotional regulation, clear perception, and sound judgment when stakes are real.",
      ],
      [
        "I hold a Master’s degree in Psychology, graduated with honors, with a specialization in consulting psychology, and have completed a certified professional degree alongside ongoing training in leadership and organizational development. I’m also a certified meditation and yoga instructor, trained in Mexico with extended periods of study in India. I integrate psychological understanding with embodied practices that support mental clarity, physical steadiness, and inner balance — especially under sustained pressure. The aim is not performance or optimization, but clarity, regulation, and a sense of inner stability that allows people to lead and live more sustainably.",
      ],
      [
        "Born in Germany, raised in the United States, and having lived for many years in Mexico and across Asia, I bring a deep sensitivity to cultural nuance when working with leaders across regions and systems. I’m based between Europe and Mexico and work with clients internationally, both online and in person.",
        "I regularly support leaders across Europe, the U.S., Canada, and Latin America. For in-person intensives, I’m available to travel to you; other regions can be discussed as needed.",
      ],
      [
        "My worldview centers on presence, cross-cultural insight, and steadiness amid uncertainty — shaped by a life lived across cultures and long-standing contemplative practice. I believe clarity and real change don’t arise from rushing or forcing answers, but from creating space: space for deep listening, emotional balance, and reconnecting with what truly matters beyond external pressure.",
        "Movement, nature, and stillness are integral to how I live. Surfing, running, mountain sports, time outdoors, travel, and a deep commitment to contemplative practice are expressions of the same orientation. I’ve spent over 150 days in silent and dark retreats, learning how to remain present, grounded, and attentive to reality as it is.",
      ],
      [
        "If you’re in a season where the cost of not addressing what’s happening has become higher than the cost of asking for support, I want you to know this: there is light on the other side of what you’re in. I say this with conviction, not optimism. I’ve supported founders and senior leaders through serious relationship challenges, health-related pressure, identity shifts, and moments where nothing felt sustainable anymore. Many of them couldn’t see for themselves how they would feel grounded, clear, or fulfilled again — until they did. What I’ve learned is that change doesn’t begin with fixing or prescribing. It often begins with being met. The simple experience of being fully seen and understood can already bring relief — even before anything needs to be resolved. My work goes to the source.",
      ],
    ],
  ),

  chantill: build(
    "Chantill, Wayfinder for North America | DoGood Agency",
    "Meet Chantill, DoGood Wayfinder for North America and Canada: a deeply relational partner for founders who feel lost and want a path back to themselves.",
    "Chantill",
    [
      [
        "Founders are drawn to me because I show all my cards. When someone is feeling lost, broken, out of resources and can’t find trusted connections, they know me as a deeply relational, genuine partner. They’re looking for a path back to themselves while realigning their priorities and purpose, restoring their confidence and identity. This is a complex, messy business that I understand intimately. My clients come to me because I know what it means to take risks, to step into new spaces first. To parent, divorce, find love again. To face health challenges that stop you in your tracks. To have identity tangled in what I built instead of who I am, and to keep moving even when I don’t know what’s on the other side.",
      ],
      [
        "I’m a rebel and a seeker at heart. I push the edges of what’s expected and stretch people to see themselves and their lives from a different perspective. At the same time, I carry a deep commitment to the people I serve, meeting you fully no matter where the work takes us. The most consistent feedback I get is that it’s my balance of steadfastness, directness, and uncommon gentleness that creates the safety needed for my clients to lean into what hurts and is hard. I’m here so you can risk what’s familiar to build what’s calling you, a path back to your life and yourself.",
      ],
      [
        "I will always create enough space for you to meet yourself honestly. While I’m unflinchingly committed to facilitating the self-sourced insights that move you forward, I won’t let you tell the stories that keep you stuck. You may feel the rush, the pressure to find relief or clarity. In our work, you can be exactly as you are. True change happens in the brain, the body, and the heart — and only from a place of space. We’ll be diligent about making real shifts, uplifting even the smallest. My job isn’t to fix you. It’s to help you cultivate a different relationship to your leadership, roles, relationships, and life so clarity can reemerge sustainably.",
      ],
      [
        "If you don’t like shortcuts but want to get to the point. If you’re willing to be stretched into new ways of relating to yourself because you want deep, lasting change, not band-aids that resurface in six months. If you’re willing to get quiet and tune into your body, your nervous system, to see how it shapes your thinking and behavior. We’ll work well together. My clients value change as relational, not transactional. They’re founders who’ve lost touch of the joy in what they’ve built, who’re struggling to find direction while maintaining momentum, and who want a partner in making changes that last.",
      ],
      [
        "I’ve never lived halfway. My life and career have taken me through great success and challenge. I’ve built businesses and stepped away from them. Led teams and shifted cultures. Guided high performers through tragedy, grief, chronic pain, reinvention, and internal reorganization. My experience ranges from the leaders at institutions like Sutter Health to those spearheading Google’s complex Learning and Development infrastructure. One of my greatest gifts is holding a strong space for you to grow into the founder and human you most want to be — without being deterred by the intensity of the experience. I’m the anchor that allows your strength to surface. In that, all ships rise.",
      ],
      [
        "I have an insatiable desire to understand how we work as humans. I’ve pursued education and experiences that amplify this search, resulting in a whole-person approach to change. For nearly 30 years, I’ve studied somatics, behavior change, and neuroscience-driven transformation. I’m trained extensively through the Polyvagal Institute and the Neuroleadership Institute in brain-based leadership development. My background includes journalism, Interpersonal Neurobiology, persistent pain science, yoga and other holistic movement therapies, humanistic psychology, Universal Design for Learning, and brain-based communication.",
      ],
      [
        "I’m based in California and love to travel.",
        "In-person intensives across the U.S., Canada, and Mexico are easy to coordinate. I’m also open to South America for the right partnership. If the fit is strong, we’ll find a way.",
      ],
      [
        "I want to see how good and beautiful life can be. I believe we can have it all and be healthy. I love big and thrive in meaningful connections. I believe it’s the biological imperative that leads us to wholeness. I’m motivated by what stretches me: being a parent, a partner, a creator, and a guide. My greatest joys are traveling, road-tripping with my kids, long-distance adventure motorcycling, time with people I love, and being in nature.",
      ],
      [
        "With kindness and care, we will make the incremental shifts that take us back “home”, back to the space inside of our body, nervous system, mind, and spirit that is full of light and trust. Trust the places where you can take a breath, lean into them, and get to know them again with fresh eyes. They will buoy you. Whatever pain, depletion, or disconnection you’re in, it’s the small cracks of light you let in that allow the next step to be illuminated. And…we don’t get there alone. Having support, the kind that is ready to be a mirror for insight to emerge, is key. The process will likely take more patience, compassion, and presence than you can imagine, but that’s the point. Isn’t it? To reach for something better. And that’s why I’m here – to help you walk the path that at this moment might feel impossible.",
      ],
    ],
  ),
};
