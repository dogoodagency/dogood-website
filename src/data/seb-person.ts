/**
 * Seb Wichmann as a schema.org Person (20 Nov 2026). Facts only from "Who Seb Is: Source of Truth v1.10"
 * (15 Nov 2026). Rules from that doc: never say Seb exited or sold a company; no money or health details;
 * experience is stated as 14+ years. Used on /wayfinders/seb and /about, and as the founder in the
 * Organization data in Base.astro.
 */
const site = "https://www.dogoodagency.co";
export const sebPersonId = `${site}/wayfinders/seb#person`;

export const sebPerson = {
  "@type": "Person",
  "@id": sebPersonId,
  name: "Seb Wichmann",
  givenName: "Seb",
  familyName: "Wichmann",
  jobTitle: "Founder and Wayfinder",
  url: `${site}/wayfinders/seb`,
  description:
    "Founder of DoGood Agency. Seb Wichmann works 1:1 with founders before and after they sell their company, on the personal side of the exit: identity, health, relationships and meaning. 14+ years in executive coaching, leadership and organisational development across 35+ countries.",
  worksFor: { "@type": "Organization", "@id": `${site}/#organization`, name: "DoGood Agency", url: `${site}/` },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Curtin University", url: "https://www.curtin.edu.au/" },
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "Bachelor of Communications (Marketing), Curtin University of Technology, Perth" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Accredited Master NLP Practitioner and Business Coach" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "certification", name: "Certified Master Trainer (Advanced Facilitation Techniques)" },
  ],
  award: ["SuperCoach award (2014), for best coaching practices in a leadership capacity", "Upwork Expert-Vetted"],
  knowsLanguage: ["English", "German", "Spanish"],
  knowsAbout: [
    "Life after selling a business",
    "Founder identity after an exit",
    "Personal readiness before a business sale",
    "Executive coaching",
    "Leadership development",
    "Organisational development",
    "Learning and development",
    "Neuro-Linguistic Programming",
    "Mindfulness",
  ],
  sameAs: ["https://www.linkedin.com/in/sebwichmann/"],
};

export const sebBook = {
  "@type": "Book",
  "@id": `${site}/about#book-instant-silence`,
  name: "Instant Silence: Life Truly Began the Day I Stopped Seeking",
  author: { "@id": sebPersonId },
  bookFormat: "https://schema.org/EBook",
  url: "https://www.amazon.com.au/dp/B07S6F9L1C",
};
