export const logos = [
  { file: "Adobe.png", alt: "Adobe" },
  { file: "Siemens.png", alt: "Siemens" },
  { file: "Novartis.png", alt: "Novartis" },
  { file: "Generali.png", alt: "Generali" },
  { file: "Rolls-Royce.png", alt: "Rolls Royce" },
  { file: "Vodafone.png", alt: "Vodafone" },
  { file: "Johnson-and-Johnson.png", alt: "Johnson and Johnson" },
  { file: "ABN-AMRO.png", alt: "ABN AMRO" },
  { file: "Iberdrola.png", alt: "Iberdrola" },
  { file: "Coty.png", alt: "Coty" },
  { file: "Careem.png", alt: "Careem" },
  { file: "Arla.png", alt: "Arla" },
  { file: "Aptar.png", alt: "Aptar" },
  { file: "BVG.png", alt: "BVG" },
  { file: "Nationale-Nederlanden.png", alt: "Nationale Nederlanden" },
  { file: "Upwork.png", alt: "Upwork" },
  { file: "Berty.png", alt: "Berty" },
  { file: "GoFleet.png", alt: "GoFleet" },
  { file: "The-Summit.png", alt: "The Summit" },
  { file: "Tiny-Home-Tours.png", alt: "Tiny Home Tours" },
  { file: "Tweepi.png", alt: "Tweepi" },
  { file: "USM.png", alt: "USM" },
  { file: "Warrior.png", alt: "Warrior" },
  { file: "ZenduIT.png", alt: "ZenduIT" },
  // Added 18 Nov 2026 (Seb): recoloured to brand pink; small marks carry the company name beside them.
  { file: "Sutter-Health.png", alt: "Sutter Health" },
  { file: "BitFlow.png", alt: "BitFlow" },
  { file: "LunchAssist.png", alt: "LunchAssist" },
  { file: "APA.png", alt: "Australian Physiotherapy Association" },
  { file: "eXp-Realty.png", alt: "eXp Realty" },
  { file: "Google.png", alt: "Google" },
  { file: "Spiralyze.png", alt: "Spiralyze" },
] as const;

export const urls = {
  apply: "/apply-stage-1",
  partnership: "/pathway",
  caseJ: "/casestudies/j",
  caseV: "/casestudies/v",
  guarantee: "/clarity-first-guarantee-terms",
  linkedin: "https://www.linkedin.com/in/sebwichmann/",
  podcast: "/dogood-insider",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const stats = [
  { value: "165", label: "Founders Engaged" },
  { value: "55,230", label: "Leaders Impacted" },
  { value: "$19.4 Million", label: "Learning Initiatives Sold" },
  { value: "18,360", label: "Coaching Hours" },
  { value: "100%", label: "Client Satisfaction" },
] as const;


// DG-PRE-55 (26 Nov 2026): owner-approved testimonial register, 11 named entries, text and attribution word for
// word from the "Tec: testimonial changes" tab. An empty `file` means no portrait was supplied.
export const reviews = [
  {
    file: "jennifer-m.png",
    name: "JENNIFER M",
    role: "Founder, LunchAssist",
    quote: "Seb is a lovely human with a great mind for business. DoGood would be a great support to any person in a leadership position. The team has a wealth of organizational leadership knowledge, great intuition, and a strong skillse. I absolutely recommend Seb to anyone looking to partner with an emotionally intelligent and business-savvy training agency!",
  },
  {
    file: "michael-r.png",
    name: "MICHAEL R",
    role: "Founder, Softwisery",
    quote: "For a long time, I struggled to efficiently organize my routines, often lacking a coherent system and clear vision. DoGood emerged as the guiding force to help me overcome these challenges. I've achieved focus on my goals, enhanced my schedule, and streamlined my planning processes. Together, we eliminated redundancies, attaining the clarity I had long sought after. Collaborating with the DoGood team was an absolute delight.",
  },
  {
    file: "florian-w.png",
    name: "FLORIAN W",
    role: "Founder, BitFlow",
    quote: "I would like to express my deepest gratitude for the incredible support and guidance DoGood has provided me with. It has been an absolute pleasure working with the team and witnessing your utmost professionalism throughout our time. I truly appreciate how proactive DoGood has been in understanding my requirements and tailoring it to suit my individual needs. The team’s ability to provide insightful and valuable guidance has had a profound impact on my personal development journey. I am genuinely impressed by their productivity and influence, as they have helped me grow in ways I never thought possible.",
  },
  {
    file: "zach-g.png",
    name: "ZACH G",
    role: "Founder, Warrior Leader",
    quote: "Seb is a consummate professional. His knowledge and business acumen is only surpassed by his positive energy and enthusiasm. His drive and understanding of the learning process is second to none. I look forward to working with him again on many different projects in the future.",
  },
  {
    file: "christian-v.png",
    name: "CHRISTIAN V",
    role: "Realtor, eXp Realty",
    quote: "We started working with Seb because I needed a transformation. We clicked right from the beginning, he took the time to listen and diagnose my problems from the start. Seb has helped me to create goals, and a vision. I can’t thank Seb  enough for all of his hard work and time he and the team put into me.",
  },
  {
    file: "zeina-g.png",
    name: "ZEINA G",
    role: "Founder, Synergy Plus",
    quote: "The team has many qualities that have made our experience working together phenomenal. The team has been able to help me redefine my vision, create clarity around my goals, and help me find a path forward with intent and purpose. DoGood has been able to guide us to make difficult decisions towards changes with both a firmness and sensitivity to the situation that we were in.",
  },
  {
    file: "amer-k.png",
    name: "AMER K",
    role: "Founder, Tweepi",
    quote: "Seb is a SUPERSTAR! Using Seb’s unparalleled empathy to zoom in on the learner's persona. A crucial step that guided the rest of our work together. Seb’s guidance was educational and eye-opening. The team understands human motivations and fears and gave us spot-on feedback at every step.",
  },
  {
    file: "immanual-j.png",
    name: "IMMANUAL J",
    role: "Founder, Kulture of Kindness",
    quote: "Seb from DGA was a pleasure to work with. What started off as a discussion on RFP evolved into a full scale rediscovery of a learning effort. Seb and the team provided excellent insights and ideas on the way forward. The team is skilled and helped us see our blind spots and in the process create a new strategy for our e-learning initiative.",
  },
  {
    file: "gina-p.png",
    name: "GINA P",
    role: "Founder, The Wilder Practice",
    quote: "Working with Chantill has had a twofold impact on me, both personally and in my work. I’ve become more fully aware of my emotional state and have the ability to shift states in a way that creates greater capacity — to be with things that are hard, to manage times of stress, and to turn toward discomfort with more presence. I feel like a calmer, more settled person. I’m also more able to be present in joy, and to expand states like gratitude and contentment, really feeling them in my body. There’s more bandwidth now to experience the fullness of those moments.",
  },
  {
    file: "tami-l.png",
    name: "TAMI L",
    role: "Founder, Studio T",
    quote: "Before this, I was consistently operating in high gear, nothing ever felt like enough, and I was always pursuing the next level. Over the past three years, I’ve developed a consistent daily practice that allows me to connect inwardly and show up more intentionally and effectively. My work with Chantill has had a measurable impact, expanding my capacity to take risks, be vulnerable, and move from co-regulation to self-regulation with greater ease. As a result, I’m more present, more grounded, and better able to engage with both challenges and opportunities from a different lens.",
  },
  {
    file: "t-avdyli.png",
    name: "T AVDYLI",
    role: "Founder, Routime",
    quote: "I had been sitting on a decision for a while without making real progress. In the sessions, Vlora identified patterns in how I was thinking that I hadn’t noticed myself and challenged them directly. What changed was not just clarity, but speed. I made the decision and moved forward without needing further input. It’s a very direct way of working that cuts through unnecessary complexity.",
  },
] as const;
