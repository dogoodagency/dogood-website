/**
 * The 12 chapters of the /book page (copy: Grova v1.0, .r7/book-page-copy.md, word for word).
 * To release a chapter: set `released: true` and `pdf: "/downloads/<file>.pdf"` (the file goes in public/downloads/).
 * The "Download the chapters so far" button and the download list only render once at least one chapter is released.
 * `date` is shown as "Coming · <date>"; chapters without a date show just "Coming".
 */
export interface BookChapter {
  number: number;
  title: string;
  date?: string;
  teaser: string;
  released: boolean;
  pdf: string;
}

export const bookChapters: BookChapter[] = [
  {
    number: 1,
    title: "The Raffle",
    date: "December 15, 2026",
    teaser:
      "At the plant Christmas party, Frank sweats inside a Santa suit he hasn't washed in twenty-two years. His co-founder runs the raffle from a laundry cart. In among the tickets: an envelope from a private equity fund.",
    released: false,
    pdf: "",
  },
  {
    number: 2,
    title: "Rich or King",
    date: "January 12, 2027",
    teaser:
      "Frank wants someone to tell him he built something good. The advisor he hires tells him the company is worth more without him in it.",
    released: false,
    pdf: "",
  },
  {
    number: 3,
    title: "Two Pages About My Life",
    date: "January 26, 2027",
    teaser:
      "Twenty-eight years of work fit on two anonymous pages. Frank practices his pitch for buyers. His oldest friend asks about the life those pages leave out.",
    released: false,
    pdf: "",
  },
  {
    number: 4,
    title: "Exclusivity",
    date: "February 9, 2027",
    teaser:
      "Frank signs the letter of intent and goes quiet. The secret he keeps to protect his people starts to hurt them first.",
    released: false,
    pdf: "",
  },
  {
    number: 5,
    title: "Quality of Earnings",
    date: "February 23, 2027",
    teaser:
      "The numbers check finds a hole, and the price drops. Beside the oldest washer in the plant, Frank and his co-founder find out what each one decided without the other.",
    released: false,
    pdf: "",
  },
  {
    number: 6,
    title: "Champagne for the Dead Man",
    date: "March 9, 2027",
    teaser:
      "Frank signs with a pen that skips. Then his friend holds a wake for \"Frank the founder\" on the plant floor, with a borrowed retirement cake.",
    released: false,
    pdf: "",
  },
  {
    number: 7,
    title: "The Millionaire Who Missed Monday",
    teaser:
      "Frank gets up before dawn and drives to the company he sold. At home, he tries to make being needed his new job.",
    released: false,
    pdf: "",
  },
  {
    number: 8,
    title: "Wealthy, Lost, and Still in a Bathrobe",
    teaser:
      "Frank books the cheapest room he can find at a half-finished hotel. He fixes a washer before he asks his wife what she needs.",
    released: false,
    pdf: "",
  },
  {
    number: 9,
    title: "Clause 7.3",
    teaser:
      "Frank returns with a new title and an office that used to hold supplies. The buyer starts changing the plant. And the rest of his money depends on how it does.",
    released: false,
    pdf: "",
  },
  {
    number: 10,
    title: "Enough",
    teaser:
      "His financial advisor arrives with a spreadsheet called \"Do Nothing Stupid.\" Frank has already made a move of his own.",
    released: false,
    pdf: "",
  },
  {
    number: 11,
    title: "Who Am I If I Don't Have This",
    teaser: "A move is coming. The quiet Frank has been outrunning starts to catch up.",
    released: false,
    pdf: "",
  },
  {
    number: 12,
    title: "The Tuesday Plan",
    teaser: "Frank tries to build a small Tuesday of his own. But the life he sold isn't quite done with him.",
    released: false,
    pdf: "",
  },
];
