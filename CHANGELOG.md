# Change log

A record of changes to this site, newest first. Read this before you start
work, and add an entry for every change you make: what changed, which files,
why, and anything the next person needs to check.

---

## Preview 6, update 37: Google Analytics 4 behind consent (20 Nov 2026, 01:13)

- **GA4** measurement ID `G-35DQF3LDYG` (property "Do Good Agency - GA4"), in `public/ga.js`, loaded from
  `Base.astro` as `type="text/plain" data-cookieyes="cookieyes-analytics"`: CookieYes only runs it after the
  visitor accepts analytics cookies. It runs only on www.dogoodagency.co / dogoodagency.co, so preview and local
  visits never mix into the live data. IP anonymised.
- **CSP** (`netlify.toml`): `www.googletagmanager.com` in script-src; Google Analytics hosts in connect-src and
  img-src.
- **To check after launch:** in CookieYes, GA should sit under Analytics; GA4 Realtime should show a visit after
  accepting cookies on the live site.

---

## Preview 6, update 36: Seb's bio on /about (20 Nov 2026, 01:03)

- /about, "Seb and the Wayfinders": Seb's approved bio replaces the old two lines (14+ years, J&J EMEA,
  Headspring London and Madrid, NLP and Master Trainer, SuperCoach, *Instant Silence*; his business nearly broke
  him). His name links to /wayfinders/seb with a GRASS underline (`about.css`).

---

## Preview 6, update 35: organisation profiles; launch notes (20 Nov 2026, 00:45)

- **Organization `sameAs`** (Base.astro) now lists only DoGood's own profiles: the LinkedIn company page
  (linkedin.com/company/dogood-agency) and the YouTube channel. Removed: Seb's personal LinkedIn (now on his
  Person record), the Upwork agency page and the IODA history page (Seb, 20 Nov 2026).
- **Launch checklist** (update 6 section): delete /foundrland and point the nav logo to the foundr.land website;
  add analytics tags behind consent.

---

## Preview 6, update 34: SEO and AEO meta pass (20 Nov 2026, 00:28)

- **Titles** shortened to 60 characters or fewer, so Google shows them in full: homepage, Exit Prep, For Advisors,
  Advisor voices, the book page, FOUNDERland Membership, Insights, the working-with-founders category,
  IntegralContinuity, Pathway (no longer says "How it works"), The Build.
- **Descriptions** trimmed to about 155 characters on 13 pages (Exit Prep, podcast archive, client tools x4,
  advisor insights x2, IntegralContinuity, Residency, WHOOP, Services, Seb's profile, foundr.land).
- **Podcast:** all 18 episode SEO titles rewritten around the founder story of each guest (e.g. "Succeeding the
  founder: Titan CEO Paul Reitz"), and 11 over-long descriptions rewritten (`src/data/podcast.ts`,
  `metaTitle` / `metaDescription`). The visible episode names still match Apple and Spotify.
- **Structured data:**
  - New `src/data/seb-person.ts`: Seb as a Person (role, education, credentials, SuperCoach award, languages,
    topics, LinkedIn), from "Who Seb Is: Source of Truth v1.10". No exit, money or health claims. Used on
    /wayfinders/seb and /about.
  - /about: AboutPage data, Seb, and his book "Instant Silence".
  - Organization data names Seb as founder. Homepage carries WebSite data.
- **404:** no canonical link, noindex (`noCanonical` prop added to `Base.astro`).
- **Sitemap:** every URL has `<lastmod>`, from the git date of the page's source file (`astro.config.mjs`).
- **/foundrland:** noindex, follow and out of the sitemap (foundr.land gets its own website); own share image
  `public/media/foundrland/foundrland-og.jpg`. Fraunces is now self-hosted (`@fontsource/fraunces`): the CSP
  blocked the Google Fonts link, so the serif had been falling back to Georgia.
- **Not changed, waiting on Seb:** the Organization `sameAs` links; the GA4 measurement ID (property
  "Do Good Agency - GA4" exists); app icon (after the new logo).

---

## Preview 6, update 33: nav foundr.land frame between DREAM 400 and 500 (20 Nov 2026, 00:00)

- **Nav foundr.land logo frame:** #412867 at rest (halfway between DREAM 400 and DREAM 500, so it stays visible
  on the DREAM 500 homepage hero), DREAM 400 (#58447F) on hover.

---

## Preview 6, update 32: one shade darker (19 Nov 2026, 23:55)

- **Nav foundr.land logo frame:** DREAM 500 (#2A0B4F), DREAM 400 (#58447F) on hover (was DREAM 400 / 300). On pages
  with a DREAM 500 hero, such as the homepage, the frame blends into the background until hover.
- **Homepage headline:** "’ve exited" / "’re planning to exit" in DREAM 300 (#8B7DAE), was DREAM 200. Contrast on
  the hero is 4.5:1 (large text needs 3:1).

---

## Preview 6, update 31: homepage hero button and headline (19 Nov 2026, 21:23)

- **Apply for Stage 1** now sits centred directly below "We support life in FOUNDERland™", inside the hero copy
  column (`index.astro`, `.hero-cta` in `home.css`). The hero no longer grows below the sketch, so the green
  path runs behind the white wave again, as before update 29.
- **Headline:** "who" stays fixed; only "’ve exited" / "’re planning to exit" change, now in DREAM 200
  (#C2B7DD). "who" and its ending never split across lines (`.hero-who`); on phones the headline scales
  slightly so "who’re planning to exit" fits on one line.

---

## Preview 6, update 30: the full foundr.land page; nav logo frame (19 Nov 2026, 21:02)

- **/foundrland** (`src/pages/foundrland.astro`) replaces the holding page. It follows the foundr.land logo board,
  not the DoGood style: light lilac, pastel PLAY / GRASS / SKY / HEART cards, DREAM 500 ink, Fraunces serif
  accents (Google Fonts, this page only). All visuals are HTML/SVG drawn for the page (phone mock-up, clarity
  wheel, journey flow, advisor workspace laptop); numbers in mock-ups are illustrative and labelled so.
- **Sections:** hero (dark logo `foundrland-logo-dark@1x/@2x`, Seb's taglines and lede); the promise
  (advisor / founder / DoGood); two ways in (Advisor or CEPA, founder directly → 7-day journey → outcomes);
  seven days; the Clarity Wheel (Day 7 vs Day 30); after Day 7 (Discover → Navigate, Day 7 / 8–13 / 14 / 30 /
  beyond, three paths); automation engine; advisor workspace; trust; first release vs following release
  (Seb's feature list) and roadmap; pilot CTA to /contact. Copy drafted from Seb's notes and decks; needs his
  sign-off. Marked "product concept, not yet built".
- **Nav logo:** 10% bigger (141px; 110px under 1080px), DREAM 400 frame, DREAM 300 on hover, no border
  (`site-rules.css`).

---

## Preview 6, update 29: Apply button moves to the homepage hero; foundr.land logo and page (19 Nov 2026, 20:47)

- **Nav (all pages):** "Apply for Stage 1" removed. In its place, the foundr.land logo (Seb's file, cropped and
  exported to `public/media/foundrland/foundrland-logo@1x/@2x .png/.webp`) on a DREAM 500 pill, linking to
  /foundrland (`Header.astro`, `site-rules.css`). The element keeps the `nav-apply` class for layout, with
  `nav-apply--brand`.
- **Homepage hero:** "Apply for Stage 1" (btn-apply lg) centred below the hero, under "We support life in
  FOUNDERland™", with 72px of room before the wave (`index.astro`, `.hero-cta` in `home.css`).
- **New page /foundrland** (`src/pages/foundrland.astro`): holding page with the logo, a "Coming soon" pill and
  links to the newsletter and contact. No description of foundr.land yet; Seb to supply the copy.

---

## Preview 6, update 28: Pathway, Reset process, advisor cards (19 Nov 2026, 19:42)

- **/how-it-works is now /pathway** (`src/pages/pathway.astro`); every internal link, the canonical and
  llms.txt updated; `public/_redirects` sends /how-it-works (and .html) to /pathway with a 301. Nav label
  "Pathway" (was "Pre & Post").
- **The Reset, How It Works:** same process design as The Build (numbered circles). The circles now show only the
  number; "Step 1" stays as the accessible label.
- **Advisor page, What you get:** "The personal leg…", "You stay the trusted advisor" and "Free tools with your
  name on the link" in GRASS 50 with a GRASS 600 border; the other three stay DREAM 500.
- **Advisor FAQ:** answers line up with the question (same 14px side padding).
- **Free tools:** "For you" tag removed from the Signals Guide card; "Read more" gets a GRASS underline on card
  hover.

---

## Preview 6, update 27: Seb's feedback round of 19 Nov 2026, 18:52

**Made by:** Claude (claude.ai). **Commits:** 27a–27d on `claude/preview-6`. axe: no issues on 21 pages; no
horizontal scroll at 390px.

- **Pre & Post journey** (`JourneyBar.astro`, rebuilt): own DREAM 500 band with more space; a winding road
  that draws itself; seven stations as shaped badges (circle, diamond, hexagon, squircle) with line icons and
  numbers; cards above/below the road with chips (Free, 30 days, 12 weeks…); phase ribbons (Start, Before the
  sale, After the sale, Beyond). Vertical road on tablet/phone.
- **Article cards everywhere** (`blog.css` end, `BlogCard.astro`): both labels left; topic labels with their own
  mid-tone border per category (`bl-pill--{slug}`); titles 18px, weight 700; descriptions always 5 lines; author
  and date pinned to the bottom.
- **FAQ hover:** no background change on /faqs cards and the advisor FAQ (Exit Prep FAQ keeps its tint).
- **The Reset / The Build:** the Stage switch is now navigation (`StageSwitch.astro`): the other stage is a link,
  the knob slides across and the page changes; only the current stage's panel shows. Quote cards white.
  "You will leave … with" and the supports on the stage's soft colour with a stage border. Case V frameless and
  centred on both pages. Track record "$19.4M", HEART numbers 4px bigger. Button caption 12px regular.
  **How It Works** redesigned as a process: 84px numbered circles on a line with arrows, text cards below.
- **Residency:** "How the 1.5 days work" in GRASS shades, appearing one after another (`ProductPage.astro`
  steps, applies to all product-page steps).
- **Recovery:** subline on one line (product-page subline no longer capped).
- **State-Shift Audio:** h1 "Shift state on demand,<br>when it counts."; sub "Mood-specific tracks designed for
  focus, reset, and high-stakes days."; tag now also names The Exit Prep; "The science, plainly" and "How we
  build your tracks" redesigned (beat diagram, brainwave chips, three numbered layers) (`AudioSection.astro`).
- **Client-fit:** process twice as slow again; the five cards rewritten to 24–30 words each, same facts;
  process centred on the case-study axis.
- **Newsletter:** form sits higher; envelope sketch 40% bigger, centred on the form.
- **Podcast:** round episode previews (episode covers); the newsletter has its own section.
- **About:** hero title on one line (desktop); Seb's signature written in under the founder's message
  (`SignatureDraw`); "Seb & the entire DoGood team" smaller, regular.
- **Apply for Stage 1:** ™ small and raised; sketch 40% bigger, centred on the card; case study in the shared
  case-compact layout.
- **Case studies J and V** (`CaseStudy.astro`, `casestudy.css` end): short hero with a "Case study · identity
  protected" pill and four key results (J: 30%, 40%, 7 weeks, 5 months from her outcomes; V: four qualitative
  results from his outcomes); anonymity note moved into the Founder Snapshot; every card framed in its own
  colour; "Net effect" dark; cards rise in on scroll.
- **Refer a founder:** "How a referral works" animated (line draws, steps rise, numbers pop); "What you get"
  small cards DREAM 500.
- **Readiness check / Signals guide / Sale planner:** page band follows the card colour on the tools page
  (DREAM / HEART / GRASS); step cards bordered in that colour (`AdvisorResourcePage.astro`).
- **Advisor insights:** three-legs visual rebuilt in HTML/CSS: legs over the centre of each card, DREAM 500 /
  HEART 500 / GRASS 500, personal leg short with a pulsing dashed "gap"; "More is on the way" box full width.

---

## Preview 6, update 26: homepage client logos (19 Nov 2026, 18:08)

- Homepage logo rail only (`logo-rails.css`, `.lr-rails--tint`): pill border removed; every logo recoloured to
  DREAM 400 (#58447F) with a CSS filter, as in Seb's reference screenshot. Names unchanged (DREAM 500). The
  Stories rail stays as it was (Seb's decision).

---

## Preview 6, update 25: Seb's feedback round of 19 Nov 2026, 14:55 (whole site)

**Made by:** Claude (claude.ai). **Commits:** `25a`–`25g` on `claude/preview-6`, last `059dca8`.
All checked with axe (no issues on 20 pages) and for horizontal scroll at 390px (none).

**Site-wide**
- Nav fork renamed **"Pre & Post"** (Seb's choice); Stage 2 back in that menu under "I've sold" (`Header.astro`).
- **™ automatic**: `integrations/trademark.mjs` now adds ™ after ClarityValue Shift, NextLife Passage,
  IntegralContinuity, FOUNDERland (also when FOUNDER and land are in separate tags), Founder Diagnostic,
  Pressure Diagnostic, The Reset, The Build and Exit Prep in visible text, case-sensitive. Titles, scripts and
  attributes are untouched.
- Buttons never change size on hover (no scale; padding keeps the same total width) (`site-rules.css`).
  Purple buttons (`btn-teal btn-dream`) keep DREAM 500 on hover everywhere.
- Testimonials: max **70 words** everywhere (`src/data/clip-words.ts`, used in TestimonialWall, ReviewsRail,
  Stories, BookingTestimonials; full text stays in the data), body size and weight, italic.
- Testimonial walls: the middle lane (which runs the other way) moves at 70% speed so all lanes *look* equal;
  measured speeds were already equal (`Base.astro`).
- FAQs: hover tints the whole item including the open answer (`site-rules.css`).
- Leftover coloured top/left edges replaced by one thin border (`.ab-vision-card`, `.fw-step`, `.ep-place`,
  `.ab-good li`).
- No SKY on DREAM backgrounds: advisor pages, resource cards, audio waveform, product-page boxes.
- **WHOOP** (`WhoopSection.astro`): all animations twice as slow; sleep bars HEART (not SKY); line
  "Sample data only. Designed by DoGood. Not WHOOP's display."; intro runs full width (2 lines); full
  variant redesigned: four coloured metric cards + two panels.
- **Article cards everywhere** (`blog.css` end): images ~20% bigger, labels 2px smaller on one line (audience
  label aligned with the image edge, topic label right), founder/advisor colours on every page, titles 2px
  smaller and bolder, founder titles GRASS 700, thin border on author photos, Insights grid gap 20px.

**Homepage:** headline words fade in place (no upward move); signature written as a pen stroke
(`SignatureDraw.astro`, strokes traced from signature.png into `src/data/signature-paths.json`, reveals the
real image); "NOT for you" card HEART 25 + HEART 300 line. Logo sample (no border, DREAM 400) sent to Seb as
an image only, **not applied**, waiting for his yes.

**How it works:** purple buttons keep colour; "I've sold" text darker (#034a3a); "Before the sale" cards
HEART; sketch bigger with less padding; newsletter box on DREAM 25; "See The Exit Prep"; new
**journey progress bar** (`JourneyBar.astro`): Read or subscribe → The Exit Prep → Stage 1 → Stage 2 →
IntegralContinuity → Annual Signature Retreat → FOUNDERland Membership, every step linked, animated.

**Exit Prep:** audio section added; "Read more" → "Notes for founders · from Insights"; advisor link
underlined GRASS.

**The Reset / The Build:** progress pills and the two dark stage cards replaced by one **Stage 1 / Stage 2
switch** (`StageSwitch.astro`, accessible tabs, panels GRASS 700 / HEART 700, equal size); band order fixed
(no white-on-white, no stray tint); "Not there yet?" card GRASS 50 with a full border; stage description
frames DREAM 300, Stage 2 panel HEART; white cards inside tinted panels; retreat link under its text; fit
cards with a strong 1px border; case J on DREAM 500; track-record cards wider, one line each; "How it works"
steps DREAM 500; case V on The Build frameless and centred (`how-it-works.css` end, `HwSupports.astro`).

**Advisor Center:** exit-advisor buttons purple, wealth-advisor buttons teal, throughout; doors and audience
cards without SKY; referral steps in DREAM shades at half speed; "Smoother deals" cards alternate DREAM 400 /
HEART 50; card borders in the card's own colour, 2–3 shades darker (also Free tools); "More tools…" on one
line; newsletter link under its card without shortening it. **Three legs of the stool** rewritten from EPI's
own description, with an animated stool visual (personal leg short, "the gap"), who leads each leg, how we
differ, a line for CEPAs and a source note (`for-advisors/insights/index.astro`).

**Wayfinders / Client-fit:** Client-Fit steps half speed; no hover tint on Wayfinder cards; Client-fit
"How it works" appears step by step in GRASS shades.

**FAQs / Footer:** envelope sketches removed; text and email field start further left.

**Newsletter:** thin borders on "A note from Seb" and the Prologue; each "Go deeper" in three boxed parts,
no hover; Keep reading sketch +30%; Stage 1 line as its own GRASS card.

**Podcast** (`dogood-insider.astro`): reworked: hero with our two-chairs sketch, "What you'll hear" (founders,
senior executives, L&D leaders; recorded before DoGood focused on the sale), numbered episode list (old covers
and illustrations removed), short host section, closing card to Insights and the newsletter.

**Recovery / Audio / Apply / About / Contact:** product-page hero titles wider (2 lines); a feature band now
gets its own wave so bands never repeat (`ProductPage.astro`); science block redesigned as a light panel
with three cards (`AudioSection.astro`); **Apply for Stage 1 redesigned** (`apply-stage-1.astro`,
`apply.css`); About "How we work" cards white / DREAM 500; Contact: IODA line removed, sketch aligned with
the form, map border.

**Open for Seb:** logo sample yes/no; "$19.4 Million" vs "$19.4M" on the stats; review of new draft copy
(three legs, podcast, apply, journey bar).

---

## Preview 6, update 24: Seb's decisions on update 23 (19 Nov 2026, 13:15)

**Commit:** `a823a80`.
- Advisor page: "worth USD 3,000" removed; the section is now "A free session with a Wayfinder".
- Audio section removed from /the-reset (Stage 2 inclusion only); it stays on /the-build and
  /state-shift-audio.
- State-Shift Audio full version: new **"A science-based approach"** block (draft for Seb, no quantum
  claims): binaural-beat meta-analysis (22 studies, medium consistent effect on memory, attention, anxiety,
  pain; before-task and longer listening work better; Garcia-Argibay, Santed & Reales, Psychological
  Research 2019), breath-paced music slowing breathing and lowering arousal, strongest when personalised
  (Leslie, Ghandeharioun, Zhou & Picard, IEEE ACII 2019), and checking tracks against WHOOP data.
- Confirmed by Seb: Stage 1 GRASS, Stage 2 HEART, The Exit Prep SKY. Nav fork name: Seb to choose from five
  suggestions ("Start here" stays until then).

---

## Preview 6, update 23: animated WHOOP and State-Shift Audio sections, About context, IODA logo (19 Nov 2026, afternoon)

**Made by:** Claude (claude.ai), Seb's feedback of 12:43 and 12:47, batch 6. **Commit:** `4fa2a10`.

- **`WhoopSection.astro`:** animated, illustrative graphs drawn by us (no WHOOP images), sample data: a
  recovery ring filling to 72% (green), a 14-day HRV line drawing itself, a week of sleep bars rising, a
  day-strain gauge. Starts when scrolled into view; still for reduced motion. The full version (on
  /recovery-stress-diagnostics) explains recovery (1–99%, from HRV, resting heart rate, sleep and breathing
  rate; green/yellow/red), HRV, sleep, strain and stress; why it helps the work; that the band has no screen;
  that Stage 1 and 2 work with the **WHOOP Life** membership, bought separately from WHOOP (adds on-demand
  ECG and daily blood pressure insights, beta); not medical care. Sources: whoop.com "the difference",
  "WHOOP Life", "How does WHOOP recovery work 101" (paraphrased; how-it-works page could not be fetched).
  Compact version on **/exit-prep, /the-reset, /the-build**.
- **`AudioSection.astro`:** animated waveforms (left ear 200 Hz, right ear 210 Hz, the 10 Hz beat the
  brain hears) and four modes with animated level meters: Focus (beta and low gamma), Decompression
  (alpha), Reset (theta), High-stakes days (alpha into beta). The full version (on /state-shift-audio)
  explains binaural beats and entrainment, modulation curves, and subliminal spoken lines, **stated with
  the real evidence level** (binaural beats: promising but mixed, small to moderate effects in reviews;
  subliminal audio: weak evidence). **"Quantum science" is not used**: there is no established scientific
  basis for it here (Seb to confirm). Safety note: not a medical treatment, not while driving, ask a doctor
  with epilepsy. Compact version on **/the-build** and, labelled "In Stage 2", on **/the-reset**. Not on
  /exit-prep (the audio is a Stage 2 inclusion; Seb to confirm).
- ProductPage gets an optional `feature` slot (used for the two full sections).
- Follow-up commit 08460b2: FAQ buttons on /faqs (and the homepage FAQ) get the same hover tint as every other FAQ row (site-rules.css).
- **About:** draft context sections: "How we work" (one founder, one Wayfinder, 75+ years combined
  experience; in stages; measured, not guessed), "Who we work with" / "Who we work alongside", and "What
  we are not". **IODA logo** recoloured to HEART 500 (`src/assets/photos/ioda-logo-heart.png`), like the
  client logos.

---

## Preview 6, update 22: Advisor Center pages, six resource pages, hero eyebrows (19 Nov 2026, afternoon)

**Made by:** Claude (claude.ai), Seb's feedback of 12:43, batch 5. Sources: Advisor Toolkit Plan v0.4
and "DoGood voice-of-customer findings" (18 Nov). **Draft copy for Seb to rewrite.** **Commit:** `64cbd8a`.

- **Refer a founder (/for-advisors):** hero line about audiences replaced by a "Who we work alongside"
  section with four coloured cards (exit planners, succession advisors, wealth advisors and family offices,
  sell-side M&A advisors). "What advisors tell us" is the moving quote wall (names note removed). The
  personal-leg line now opens two doors: "I prepare the business for the sale" (exit, succession, M&A;
  SKY) and "I look after the money and the family" (wealth, family office; GRASS), each with its partner
  button. **New:** "A free session with a Wayfinder, worth USD 3,000" for a client who wants to try first
  (Seb asked for the amount; note it is the only figure on the advisor pages). **New:** "Know an advisor
  who should see this?" with a "Recommend an advisor" email link. "How a referral works": numbered steps,
  each its own colour, coming in one by one on scroll. The walk-through note became a prominent "Coming
  soon" card with "Ask Seb for a live walk-through now". **"What you get" rewritten and redesigned** from
  the call findings: a dark lead card "Smoother deals" (cold feet, nitpicking buyers, stalled deals), then
  six cards (the personal leg covered by a specialist; fewer regrets after closing; you stay the trusted
  advisor; room for the family; free tools with your link; referral fee or a credit/donation if you do
  not accept fees). Closing box: email removed, text set on two lines each. FAQ rows tint on hover. Band
  colours rebalanced; footer strip white.
- **Free tools (/for-advisors/client-tools):** hero shortened to two lines, the rest moved under the nav.
  Cards are now links in their own colours (SKY, HEART, GRASS) with the "Coming soon" status right above
  the title and "Read more →".
- **Advisor insights (/for-advisors/insights):** same link cards; "Read the chapters in the newsletter →"
  sits small under the book card. **New content:** "The three legs of the stool" (business, financial,
  personal readiness), "In advisors' words" (quote wall), "What we hear most" (before and after the sale,
  as patterns), and "How advisors raise it".
- **Six new pages** (component `AdvisorResourcePage.astro`, noindex like the rest):
  `/for-advisors/client-tools/readiness-check`, `/signals-guide`, `/life-after-the-sale-planner`;
  `/for-advisors/insights/what-founders-struggle-with`, `/before-and-after-the-sale`, `/advisor-voices`.
  Each shows its "Coming soon" status, what it is, how it works, and the plan's honesty rules (not
  medical or financial advice, consent first, written permission for voices). The two index pages moved
  to `client-tools/index.astro` and `insights/index.astro` (same URLs).
- **Hero eyebrows site-wide** now use the Advisor Center style: 18px, weight 700, uppercase, 0.08em.

---

## Preview 6, update 21: Stories, Wayfinders, Client-fit (19 Nov 2026, afternoon)

**Made by:** Claude (claude.ai), Seb's feedback of 12:43, batch 4. **Branch:** `claude/preview-6`. **Commit:** `4f6890c`.

- **Stories:** case cards match their portrait border. J: HEART 25 card, HEART 400 line, button HEART 600.
  V: GRASS 50 card with a GRASS 600 line (clear against the DREAM 25 band), button GRASS 500, and its
  pink phrases (eyebrow, headline accent, sub-heads) in GRASS 600, on this page only. Testimonial cards
  DREAM 10 on white, 18px/500, pause on hover (update 18).
- **Wayfinders:** "Where Wayfinders Travel To" centred over the map with more room under the hero.
  Client-Fit steps tinted DREAM 10 → 25 → … deeper, card by card (the reveal animation stays). Team
  photos: heads level and the same size (about 20% bigger), Chantill, Katrin and Shiva on the right edge
  of the card (their photos are cut off there), Seb on the left (`photoFit` in wayfinders.astro). The two
  large testimonials and the rolling reviews are replaced by the Stories-style moving wall titled
  "Leaders who've been through it" (Gina P and Tami L first, word for word, "on working with Chantill").
  Bottom box: "See how it works" → "Client-fit process" (/wayfinders/clientfit).
- **Client-fit page:** the lilac strip before the footer is gone (footer strip now white); case study and
  next-step boxes both 1000px wide, the case title's first line on one line.

---

## Preview 6, update 20: How it works, The Exit Prep, Insights, Newsletter, wording (19 Nov 2026, afternoon)

**Made by:** Claude (claude.ai), Seb's feedback of 12:43, batch 3. **Branch:** `claude/preview-6`. **Commit:** `f9aeee5`.

- **Article cards everywhere (BlogCard):** every card shows the author's avatar (Seb or Inka, from the
  article's `author`); founder article titles GRASS 600, advisor titles HEART 600; thin DREAM 200 border,
  no shadow, no movement; hover tints the card (founder GRASS 25 + GRASS 600 line, advisor HEART 25 +
  HEART 600 line).
- **Article images on DREAM 500** (BlogImage, all cards and article pages). Light-line versions of the five
  sketches were made for the dark background: `public/sketches/*-ondark@1x/2x.png/webp`.
- **Insights:** suggested topics "advisors" and "earnout" removed (one line); category "The first 90 days
  after the sale" is now "First 90 days"; resource lists hover in GRASS (founders) / HEART (advisors).
- **Notes from FOUNDERland** (BlogNewsletter): "land" bold; thin DREAM 200 border; the email field is
  visible on white (DREAM 10 fill, DREAM 300 line).
- **How it works:** "I've sold" door text in GRASS 700; "Which door is mine?" now shows two coloured paths
  (Before the sale, SKY; After the sale, GRASS) next to the sketch in a DREAM 500 frame of the same height
  (light-line sketch), and a separate dashed "Not sure which door is yours?" bar with "Book an orientation
  call"; "Names are changed…" removed; the newsletter has its own band, apart from the articles.
- **The Exit Prep:** "What The Exit Prep™ is" text runs to the right edge of the cards; "Working alongside
  your advisors" shortened to one 18px paragraph, with the two articles as Insights cards under "Read more"
  and a text link for advisors; "Names are changed…" removed.
- **Newsletter page:** "Keep reading" title and intro span the frame, the letter sketch sits level with
  the field and button; "The chapters" rows alternate DREAM 500 / white with brighter type, and each date
  is a dotted label (HEART on white, GRASS on DREAM), not a link.
- **No "crisis" wording** in DoGood's own copy: Expedited Start ("If things feel urgent right now",
  "We are not an emergency service"), FAQ (question reworded, anchor now #urgent-support), client-fit
  ("how much steadying support you need right now"), /clarity booking page. The safety line (contact
  local emergency services if in danger) stays. Not changed: a Wayfinder's own bio and a podcast summary.

---

## Preview 6, update 19: The Reset and The Build, each in its own colour (19 Nov 2026, afternoon)

**Made by:** Claude (claude.ai), Seb's feedback of 12:43, batch 2. **Branch:** `claude/preview-6`. **Commit:** `dde0f18`.

- **Colours:** Stage 1 (/the-reset) is GRASS (tint bands GRASS 25, frames GRASS 600, accents GRASS 700);
  Stage 2 (/the-build) is HEART (tint bands HEART 25, frames HEART 300/500, accents HEART 600). Classes
  `.hw-page--s1` / `.hw-page--s2` in how-it-works.css; each page's wave tint matches.
- **Progress band right below the hero** on both pages: "Two stages. This page is Stage 1/2." with a large
  light progress bar (StageProgress `tone="light"`: Stage 1 green, Stage 2 pink, "You are here"), and the
  line "You apply for Stage 1 only. Stage 2 is invite-only." (removed from the hero) with a link across.
- **/the-reset:** hero lede smaller; hero buttons and "Limited to five new founders a month" removed. Stage
  cards no longer move and are no longer links: each has a small button to ClarityValue Shift™ / NextLife
  Passage™. "How it works: Apply → Conversation → Start Stage 1" smaller and links (smooth scroll) to the
  steps at the bottom. "(FRP can begin within 7 days)" on its own line. Sound bites are the moving wall
  (as on The Exit Prep); "Names are changed…" note removed. ClarityValue Shift 1-page button removed
  (text link kept). "You will leave Stage 1 with" frames in GRASS 50 / GRASS 600. Stage 2 teaser gets
  "How it works: Rework → Navigate → Realign → Integrate" and a text link instead of a button. Case V moved
  to just before "After Stage 2 (FRP completed)". Signature Retreat renamed "Annual Signature Retreat" and
  links to /signature-retreat (shared HwSupports). "Leaders who've been through it" now on white with DREAM
  10 cards (DREAM 500 band removed). Track record numbers HEART 500. Apply button under the guarantee and
  the whole Wayfinder section removed. Option B link visible on the dark card.
- **/the-build:** same structure in HEART: hero, progress band, the two stage cards, sound bites, Stage 1
  recap, case V then Stage 2 (1-page button removed, flow box), supports + retreat, What this partnership
  is not + case J, testimonials, track record, How it works (Stage 1 → Week 3 decision → Invitation →
  Start Stage 2) with Apply for Stage 1. Sound bites moved to `src/data/sound-bites.ts` (shared).
- Thin frames site-wide, continued: thick left bars (4–10px) on text frames set to 1px (includes lists,
  exit-prep, framework, doors, about, wayfinders, newsletter note, blog "is this you", insights audience
  heads). Pull-quote bars inside articles kept.

---

## Preview 6, update 18: site-wide rules, Start here / Services nav, homepage and footer (19 Nov 2026, early afternoon)

**Made by:** Claude (claude.ai), from Seb's feedback of 12:43 (batch 1 of several). **Branch:** `claude/preview-6`. **Commit:** `92ea37c`.

### Site-wide rules
- `src/styles/site-rules.css` (loaded from Base.astro): no box-shadows anywhere (frames keep their thin
  border); cards never lift on hover; FAQ rows (`details > summary`) get a DREAM tint on hover.
- Thick top bars on text frames removed (8px/6px → 1px): doors (how-it-works and exit-prep), framework
  cards, about cards, how-it-works stage boxes.
- ™: a build step (`integrations/trademark.mjs`, runs after `astro build`) wraps every visible ™ on every
  page in `<span class="tm">` (2px smaller, weight 300; Montserrat 300 now loaded). Titles, attributes,
  scripts and JSON-LD are untouched.
- Testimonial walls (TestimonialWall and /stories): every column moves at the same 38px a second (set in
  Base.astro from each column's length), so no column runs faster; sound bites now move at the Stories
  speed. Quotes 18px, weight 500. Cards on light bands are DREAM 10. Hover/focus pause fixed on the
  shared wall (a shorthand was overriding it).

### Navigation
- "How it works" menu is now **Start here**, a fork: "I haven't sold yet" → The Exit Prep™; "I've sold"
  → Stage 1: The Reset™ (30 Days), whose line says Stage 2 follows by invitation. Stage 2 is no longer in
  the nav. Card: "Which door is mine?" → /how-it-works.
- "Products" menu is now **Services** (card "All services" → /services). FOUNDERland™ Membership has
  the ™ in the nav too. WHOOP and the audio stay out of the nav.
- `/products` renamed **`/services`** (301 in `public/_redirects`). Services page: Expedited Start card
  removed; WHOOP tagged Stage 1, Stage 2 and The Exit Prep; Retreat and Membership show a "Coming soon ·
  we're building it now" pill (advisor-page style); no white cards on white bands; hover changes colour.
- Residency: hero button removed; "What it is NOT" box now HEART 25 / HEART 300; closing button "Apply
  for Stage 1". Product-page closing buttons are GRASS 500 on DREAM 500. Retreat and Membership pages
  show a "Coming soon" pill in the hero. WHOOP page: part of Stage 1, Stage 2 and The Exit Prep.

### Homepage
- Headline: "For founders [who've exited | who're planning to exit]" (the two endings swap every 4s),
  line 2 "the company they built." in HEART. Screen readers get one full sentence; reduced motion shows
  "who've exited" only.
- "We support life in FOUNDERland." (full stop). FOUNDERland in "This is the first step": GRASS 600
  #01A684. "Because we love entrepreneurship." on one line (20–26px).
- As seen on: frame max 920px so no logo shows twice at once.
- A Founder's Message: the signature writes itself in (left-to-right reveal, 2.6s) when it scrolls in.

### Footer
- Opt-in centred against "Let's Connect"; Contact and LinkedIn moved up under "Connect" and start where
  "Connect" ends after its animation (measured in Footer.astro). Explore gets "Clarity-First Guarantee"
  (→ /clarity-first-guarantee-terms) after Newsletter.

---

## Preview 6, update 17: The Build gets its own page, footer rebuilt from Seb's mock-up, one link source (19 Nov 2026, late morning)

**Made by:** Claude (claude.ai), from Seb's message of 10:36 and his footer mock-up. **Branch:** `claude/preview-6`. **Commit:** `abeb011`.

### The Reset / The Build split
- **New page `/the-build`** (Stage 2): hero with the two-step progress bar, a "You've completed Stage 1"
  recap (house 2, Seb's Stage 1 lines), the full Stage 2 section moved word for word from /the-reset
  (house 3), the supports + Signature Retreat, testimonials, the Wayfinder team, and "Stage 2 starts with
  Stage 1" (Apply for Stage 1).
- **/the-reset** is now the Stage 1 page: progress bar at the top of the hero, eyebrow
  "Stage 1: The Reset™ (30 Days)" (H1 unchanged), and the Stage 2 section replaced by "What comes after
  Stage 1": a short Stage 2 summary (Seb's own sentences), "Stage 2 is by invitation", and a button to
  /the-build. Option B ("We continue") links to /the-build.
- **`src/components/StageProgress.astro`**: the two-step bar (Stage 1 → Stage 2), current step in teal,
  the done step ticked; both steps are links.
- Shared pieces pulled out so both pages use the same source: `HwHouse.astro` (house sketch with labels),
  `HwSupports.astro` (supports + retreat), `HwWayfinders.astro` (Wayfinder team band).
- Nav and footer "Stage 2: The Build™" now link to `/the-build`.

### Footer (`src/components/Footer.astro`, new `src/styles/footer.css`)
- Rebuilt from Seb's mock-up (measured at its width, about 1728px): brand top left; columns Explore,
  Services (+ Products below), Advisor Center starting at 41.6% / 64.5% / 87.9% of the content width;
  Let's Connect across the first two columns; the opt-in to its right; About DoGood and the company below.
  All text 14px (the services note is now 14px, was 12px); links 38px apart; titles 800.
- Link names from the mock-up: Explore = About us, Insights, DoGood Insider Podcast, Newsletter,
  Client-fit process, Expedited Start & Priority Hold, FAQ. Services = The Exit Prep™, Stage 1: The
  Reset™, Stage 2: The Build™, 1.5-Day In-Person Residency, IntegralContinuity™, Annual Signature
  Retreat, FOUNDERland™ Membership. Products = Recovery & Stress Diagnostics (WHOOP), Custom State-Shift
  Audio. Advisor Center unchanged. Removed from the footer: /products (stays in the nav), ClarityValue
  Shift™ and NextLife Passage™ (not in the mock-up; Seb to confirm).
- Opt-in in its own frame (GRASS 500 line, light teal tint), 20px Black title, white email field with a
  placeholder, Subscribe next to it. Same MailerLite form and script as before.
- Tablet: brand, then the three columns side by side, then Let's Connect, opt-in, About. Phone: one
  column with the opt-in above Let's Connect.
- The old footer grid rules (`.footer-layout`, `.footer-explore` etc. in home.css) no longer match any
  markup; left in place, safe to delete later.

### ™ sign
- New global class `.tm` (global.css): 2px smaller and weight 300. Used in the nav menus, the footer and
  the progress bar via `tm()` in `src/data/site-links.ts`.

### One source for the nav and the footer
- **`src/data/site-links.ts`** holds every nav-menu and footer link (offers, products, tools, Explore,
  Advisor Center). `Header.astro` and `Footer.astro` both read it. Every page renders the header and footer
  through `Base.astro` (checked: no page has its own), so a change in site-links.ts, Header.astro or
  Footer.astro shows on every page.

### Other
- /expedited-start: "the next available spot (usually 4–8 weeks)" (Seb confirmed 4–8; the FAQ already
  said so).
- axe: home, /the-reset, /the-build, /expedited-start, no issues reported. No sideways scroll at 390,
  800, 1100, 1440, 1728px.

---

## Preview 6, update 16: two-stage frames restored, three more pages, footer product links (19 Nov 2026, morning)

**Made by:** Claude (claude.ai), from Seb's feedback of 09:19 (screenshot 6). **Branch:** `claude/preview-6`. **Commit:** `521a147`.

- **/the-reset, "Reset first. Then build."** (`src/styles/how-it-works.css`, appended): the two stage
  cards are back in the earlier frame style (DREAM 500 frames as in the old hero: pink uppercase stage
  label, white title, light line, teal method line). The teal underlines are gone (the cards are links;
  `text-decoration: none !important` on the link).
- "Ask about Expedited Start" on /the-reset now links to the new /expedited-start page.
- **New pages** (noindex, ProductPage component, no prices):
  - `/recovery-stress-diagnostics`: Recovery & Stress Diagnostics (WHOOP). Copy from Seb's Stage 1
    inclusion and "Why WHOOP" FAQ; marked part of Stage 1 and The Exit Prep (as the FAQs say). Links to
    the FAQ for the WHOOP cost.
  - `/state-shift-audio`: Custom State-Shift Audio, Seb's text word for word; marked part of Stage 2
    (as in the Stage 2 inclusions).
  - `/expedited-start`: Expedited Start & Priority Hold, client-facing version of Seb's note. Left off the
    page on purpose: the fee and deposit amounts (prices not published until Seb decides), the pricing
    rationale, and the internal guardrails ("if truly maxed, don't sell it"). Kept: start within 7 days,
    when it applies, what you get, approval only after a call, the Priority Hold terms (match the FAQ),
    and the crisis note from the FAQ. Note: the "How quickly can we start" FAQ says the usual wait is
    4–8 weeks; Seb's note says 4–6. The page gives no number.
- **/products** hub: new "Inside the Partnership" section with the three pages.
- **Footer Explore**: Products, the four nav products and the three new pages, after the stage links.
- axe: /the-reset, /products and the three new pages, no issues reported.

---

## Preview 6, update 15: homepage polish, offer names, Products menu and four product pages (19 Nov 2026, morning)

**Made by:** Claude (claude.ai), from Seb's feedback of 09:05, the FOX logo, five press logos, the colour
shades file (DoGood-Colour-Shades-v4) and the Residency one-pagers (Intensive Menu, Intensive Debrief).
**Branch:** `claude/preview-6`. **Commit:** `47620e9`.

### Homepage (`src/pages/index.astro`, `src/styles/home.css`, `src/styles/logo-rails.css`)
- Headline line restored from preview 4: "For founders who've exited the company they built, / or are
  getting ready to." (wording to be revisited with the SEO changes).
- "We support life in FOUNDERland" now 18px (body size).
- Logo pills: DREAM 10 (#FAF9FF) is what the pills already were and gave no contrast with the white logo
  circle, so the homepage pill is now the deeper lilac #E9E3F7 with a DREAM 200 line.
- "This is the first step": FOUNDERland in GRASS 500 #28DBB0 (note: low contrast on white, 1.7:1).
- Text frames aligned to one style: 56/64px padding, 40px Black titles (34px in the narrower Why frame,
  allowed to wrap), 22px Black sub-titles, 18px body, highlights in Montserrat Black 900 (not 700/800).
  Applies to "This is the first step", "This is for you if / NOT for you if" and "Why 'DoGood'?" (the
  kicker is now pink, the title DREAM 500).
- Testimonials: the shared moving wall (`TestimonialWall`, as on Stories) with the portrait left of the
  name and role; stops on hover/focus; still list on phones and for reduced motion.
- Roles now read "Founder, Company" (was "founder of ..."), in `src/data/homepage.ts` and
  `src/data/stories.ts`; Gina P is "Founder, The Wilder Practice" (also on /wayfinders). Non-founder roles
  unchanged (Anja N CEO, Bamboo HR, Realtor at eXp Realty, Tami L "Studio T").
- As seen on: the single press image is replaced by six DREAM 400 (#58447F) logos
  (`public/media/press/*.png`, 96px high, transparent), drifting slowly left in a white frame with a
  DREAM 200 line and soft shadow, edges fading out; stops on hover; wrapped and still for reduced motion.
  `src/assets/photos/as-seen-on-hires.png` is no longer used (kept).

### Names and navigation (`src/components/Header.astro`, `src/components/Footer.astro`)
- "Exit-Prep" is now **The Exit Prep™** in the menu and on /exit-prep (eyebrow, heading, title, FAQ,
  schema). Other pages still say "Exit-Prep" in running copy (how-it-works, FAQs): Seb to confirm a
  site-wide rename.
- How it works menu: The Exit Prep™, **Stage 1: The Reset™ (30 Days)**, **Stage 2: The Build™ (12 Weeks)**.
  Stage 2 links to `/the-reset#hw-stage2` until it gets its own page (proposal pending with Seb).
- Footer Explore: the same three links added at the top (day counts on a small second line).
- New **Products** menu (card image `public/nav/products-dropdown-card@1x/2x/3x`, from the long-table
  sketch, recoloured for the dark card): Residency, IntegralContinuity™, Annual Signature Retreat,
  FOUNDERland Membership; card links to /products.
- Footer layout: Explore column padding so longer names don't run under Advisor Center; opt-in line
  wraps between 1081 and 1279px.

### New pages (all noindex like the rest of the preview; `src/components/ProductPage.astro`, `src/styles/products.css`)
- `/products` hub, `/residency`, `/integral-continuity`, `/signature-retreat`, `/founderland-membership`.
  Same look as /exit-prep. **Draft copy for Seb to review.**
- Residency: from the Intensive Menu and Debrief one-pagers (what it is / is not, the four categories,
  before and after). Internal planning steps left out. "Intensive" renamed **Residency** in
  how-it-works data, /how-it-works, /wayfinders and FAQs. Left as "intensive" on purpose: the Clarity-First
  Guarantee terms page and its FAQ (legal wording), and the Wayfinders' own bios (their words).
  Note: the FAQ "How does the in-person residency work" still says it is "a focused working block to
  move one major issue", which contradicts the one-pager ("not about solving your problems").
- IntegralContinuity™: Light = one session a month, Private = two (our reading of Seb's note; to confirm),
  async support, no travel, only after both stages.
- Annual Signature Retreat: Seb's retreat text from /the-reset, word for word.
- FOUNDERland Membership: no numbers, no money model, PEF not named; "Coming soon".
- No prices anywhere.

### Checks
- axe: home, /exit-prep and the five new pages, no issues reported. No horizontal scroll at 390px.

---

## Preview 6, update 14: logo pills refined (both strips), proper ECB logo (19 Nov 2026, morning)

**Made by:** Claude (claude.ai), from Seb's voice feedback and the ECB logo file. **Branch:** `claude/preview-6`. **Commit:** `5daaf18`.

- **One pill design on both strips** (`src/styles/logo-rails.css`): the pill is a shade
  lighter than its band (Stories #F5F2FF on #E9E3F7, homepage DREAM 10 #FAF9FF on DREAM 25)
  with a 1px DREAM 100 line, so it melts into the band; logos sit in a white circle, word
  logos in a white capsule.
- About 25% less padding between the white part and the pill edge (0.75rem → 0.55rem;
  right side 2rem → 1.6rem). White circle 3.5rem; logos about 30% bigger (icon box
  1.75rem → 2.45rem, word logos 1.25rem → 1.5rem high).
- Logo names: body size (18px, as the site's body text), weight 600 (a slightly stronger
  stroke, not bold).
- **Icons balanced:** every `icon-*.png` in `public/media/stories/logos/` was trimmed and
  rescaled so each mark has the same visual area (55% of the square, never past its
  edges). Wide, thin marks (Generali, Arla, Tiny Home Tours, The Summit, ArcelorMittal) and
  marks that had extra padding (APA, LunchAssist, BitFlow, Google, Sutter Health) now read
  as large as BVG. New icons should get the same treatment (script idea in this entry:
  trim to content, scale to 55% area, clamp to 128px).
- **European Central Bank:** rebuilt from the proper logo file Seb sent (sharp; blue parts
  in pink, the euro and stars cut out).
- Homepage rails about 20% faster (0.28 → 0.34 px per frame).
- axe: home and Stories 0 issues.

---

## Preview 6, update 13: five new logos, shared logo rails (homepage two rows), Wayfinders page (19 Nov 2026, morning)

**Made by:** Claude (claude.ai), from Seb's feedback of 19 Nov 01:01 and 01:05 (recovered after the chat retry; Seb approved them again at 07:48), screenshots 20 to 22 and the logo files. **Branch:** `claude/preview-6`. **Commit:** `9b52555`.

### Logos
- Five new logos, cleaned and recoloured to HEART 500 like the others
  (`public/media/stories/logos/`): word logos **CHEP** (without "A Brambles Company"),
  **ASML** and **Randstad** (from the SVGs, sharp); round marks with the name beside them
  **ArcelorMittal** (the arc mark) and **European Central Bank** (the file had a fake
  checkerboard printed in and is tiny; cleaned and redrawn by threshold; a vector original
  would be sharper). Added to `logoRails` in `src/data/stories-page.ts`.
- **One logo strip for the whole site:** new `src/components/LogoRails.astro` +
  `src/styles/logo-rails.css` (the Stories rails moved into a component). Stories uses
  three rows; the **homepage now shows the same pills in two moving rows** (white pills on
  the lavender band, a little slower), replacing the old single pink logo line. Add a logo
  once in `stories-page.ts` and it appears on both pages. Rails follow the scroll
  direction, pause off-screen and stand still with reduced motion.
- `src/assets/logos/pink/*` and `logos` in `src/data/homepage.ts` are no longer used by the
  homepage (kept for now).

### Wayfinders (`src/pages/wayfinders.astro`, `wayfinders.css`, `src/data/wayfinders.ts`)
- Hero: one type style, left-aligned, shorter text (eyebrow and second paragraph removed,
  the 70-years line folded into the lead).
- Note under the Apply button ("For founders · Limited to 5 new founders/month") lighter.
- Client-Fit steps animate on scroll: the four steps appear one after another, the numbers
  pop, then the arrows. Still with reduced motion.
- Team cards: DREAM 500 behind every photo, whole figure scaled to fit (no heads or bodies
  cut off). "(+ United Kingdom & Central America)" → "(+ UK & Central America)".
- "More about …": opening one card opens all of them (and closing closes all), so no card
  shows empty space.
- New section "What clients say about working with a Wayfinder": Gina P and Tami L, word
  for word in their paragraphs, with headshots and "On working with Chantill". The rolling
  reviews below leave those two out (`ReviewsRail` has a new `exclude` prop).
- Bottom box: heading "Ready to be matched with your Wayfinder?", a line on what happens
  after applying, the two buttons and a small line on How it works. The thin line under the
  reviews rail (above the wave) is removed.

### Checked
- axe: home and Stories 0 issues; Wayfinders only flags the Client-Fit steps while they are
  still hidden before their scroll animation (fine once shown). No horizontal scroll on phone.

---

## Preview 6, update 12: How it works, Exit-Prep, The Reset and Stories reworked; new logos and testimonials; quote names (19 Nov 2026, morning)

**Made by:** Claude (claude.ai), from Seb's feedback (screenshots 14 to 19, seven logos, two headshots, the Exit-Prep one-pager v1). **Branch:** `claude/preview-6`. **Commits:** `eea6d30`, `302f357`, and `4ca8433` (quote names).

### Shared: moving testimonial wall (new `src/components/TestimonialWall.astro`, `testimonial-wall.css`)
- Same motion as the Stories page: three columns drifting on desktop, two on tablet, a
  still list on phones and with reduced motion. Stops on hover and keyboard focus.
  Optional portraits; `tone="dark"` for DREAM 500 bands; `short` for sound bites.

### How it works (`how-it-works.astro`, `doors.css`)
- Hero text only, subheadline on one line. The two doors sit below the hero, each in its
  own colour (Exit-Prep: lilac frame, DREAM button; The Reset: mint frame, teal button),
  with an eyebrow, a line of context and three facts each.
- New "Which door is mine?" (four situations, links to Exit-Prep, The Reset, the
  orientation call and FAQs) with the hero sketch moved here.
- "Sound bites": six quotes on the moving wall (three new from the Call Language Log).
- "Notes for founders": three latest articles plus the newsletter sign-up.
- Advisor strip: heading and button on one row.

### Exit-Prep (`exit-prep.astro`, `exit-prep.css`)
- Hero subheadline on one line. "Sound familiar?" renamed **"Sound bites"** (moving wall,
  three more quotes).
- New "What Exit-Prep is" from the one-pager: what it is, who it's for, what's included,
  the outcomes. **The price (USD 18,000) is not shown**; publishing prices is still Seb's
  decision.
- "Working alongside your advisors": more text and links to two articles and the
  Advisor Center.
- Three new FAQs (when to start, under LOI or earnout, therapy or financial advice), also in
  the FAQPage markup. Bottom "Book a free call" box removed.

### The Reset (`the-reset.astro`, `how-it-works.css`)
- Hero slimmed (heading, one line, the apply and process buttons, the limit). The two
  stage cards, the flow line and the expedite note moved into the next band.
- "Not there yet? Exit-Prep" is now a highlighted callout with a button.
- Six sound bites (four new). Wider text.
- Each house image and its stage content now sit in one box; stage headings use separate
  colours, sizes and spacing for the stage label, name, tagline, "via" and "How it works".
- Case studies are featured cards with their portraits.
- "Leaders who've been through it": moving wall with photos on DREAM 500.
- Track record counts up on scroll, same script as the homepage.
- Clarity-First Guarantee on DREAM 500 with the seal.
- Wayfinder cards: photo and name centred; the "to meet our Wayfinders up close…" line removed.
- "Apply anyway" removed. "What happens after 30 days": Option A mint, Option B purple.

### Stories (`stories.astro`, `stories.css`, `src/data/stories*.ts`)
- Hero: "Anonymised stories from founders we have worked with…" (no number of case
  studies). The note about reviews and logos moved next to the logos at 12px.
- Case studies stacked, full width, each in its own colour, with portrait, key facts,
  "The problem" and a "Read … full story" button.
- Pause button removed. The wall still stops on hover and keyboard focus and stays still
  with reduced motion (note: WCAG 2.2.2 prefers a visible pause control for moving content).
- New logos: Sutter Health, BitFlow, LunchAssist, Australian Physiotherapy Association,
  Google (marks with the company name beside them), eXp Realty and Spiralyze (word marks);
  on Stories and, recoloured to brand pink, in the homepage logo rail.
- New testimonials, word for word, with headshots: Gina P (The Wilder Practice, former
  Google organizational design executive) and Tami L (Studio T). Added to the reviews
  data, nothing replaced.

### Quote names (all pages with anonymous quotes)
- Seb asked for a first name and last initial on every quote. The sound bites come from
  real calls that must stay private, so they now carry **stand-in names** (first name +
  initial, e.g. "Mark T, Founder", "Anna S, Co-founder") and each section says "Names are
  changed to protect their privacy." Founders are "Founder" or "Co-founder"; advisors keep
  their role (Exit planner, Wealth advisor…). Pages: /how-it-works, /exit-prep, /the-reset,
  /for-advisors. A quote used on two pages keeps the same stand-in name.
- Named testimonials (homepage, Stories, The Reset wall) are unchanged.

### Checked
- axe: 0 issues on /how-it-works, /exit-prep, /the-reset, /stories, /for-advisors, home.
- No broken internal links.

---

## Preview 6, update 11: About page (vision, Wayfinders photo, IODA, What's next), no hero images, Insights clean-up (18 Nov 2026, night)

**Made by:** Claude (claude.ai), from Seb's feedback (screenshots 12 and 13, IODA logo). **Branch:** `claude/preview-6`. **Commit:** `cc29a3c`.

### Rule: no images in heroes except the homepage (Seb)
- Sketches removed from the heroes of /about, /for-advisors, /how-it-works and /stories;
  each hero is now text only with a wider text frame. The About sketch moved into the
  new vision section. **Not changed:** the Wayfinder profile pages keep their portrait
  in the hero (a person's photo, not an illustration) until Seb decides.

### About (`src/pages/about.astro`, `about.css`)
- **New section "Where we're going: The fourth seat at the table"** (tint band, after
  "Why 'DoGood'?"), from Seb's vision notes, informal and in Seb's voice: the lawyer,
  banker and wealth advisor at the table and nobody for the founder; Seb's own story;
  two cards (a transition partner in every serious exit; a house for founders before
  and after the sale); a "Why now?" line with one sourced figure (Exit Planning
  Institute, 2023 National State of Owner Readiness Report: 78% no formal exit team,
  41% with a written plan for life after the business). The year-10 numbers, prices and
  licensing model in the notes are marked GUESS and are **not** on the page. Draft for Seb.
- Wayfinders photo 20% bigger (up to 1296px) and its bottom edge tucked behind the wave
  into the next section (the wave and the IODA band sit above the photo).
- IODA redesigned: soft DREAM band fading to white (DREAM 25 → DREAM 10 → white), new
  logo (from Seb) in a white card, heading "Proud member of IODA", two sentences, "Visit
  IODA →" link (iodanet.org, opens in a new tab). No shadows.
- What's next: "See the two-stage partnership" link removed; "Private. Limited to 5 new
  founders a month." now under the button at 12px; button 20% wider (234px); the lead
  sentence runs on two lines on desktop.

### Insights (`src/pages/insights/index.astro`)
- "Browse by topic" removed. Category pages still exist (linked from article pills).
- "See what the newsletter covers" removed under the sign-up ("More about the
  newsletter" was removed site-wide in update 10). Bands rebalanced: resources on tint,
  newsletter on white, footer wave from white.

### Checked
- axe: 0 issues on /about, /insights, /for-advisors, /how-it-works, /stories; no broken links.

---

## Preview 6, update 10: Insights hero, article layout, author photos (18 Nov 2026, late night)

**Made by:** Claude (claude.ai), from Seb's feedback (screenshots 9 to 11 and three portraits). **Branch:** `claude/preview-6`. **Commit:** `22a648c`.

### Insights page (`blog-index.css`)
- Hero: wider frame (1000px), more space between items and 90px more room above the
  wave; "Honest notes for founders before and after the sale, and for the advisors who
  walk with them." on one line from 1000px up.

### Article images (`blog.css`)
- Image backgrounds now use the style guide's soft colours, on article heroes and
  cards alike: purple → DREAM 25 `#F5F2FF`, teal → GRASS 25 `#F3FFFB`, pink → HEART 25
  `#FFF9FA`, lilac → DREAM 10 `#FAF9FF`, with a 1px DREAM 100 line so they don't
  disappear on white. The `heroBg` field in each article still picks which one.

### Authors (new `src/data/authors.ts`, `src/components/AuthorByline.astro`, photos in `src/assets/authors/`)
- Three authors with photos: **seb** (Seb Wichmann, Founder, DoGood), **inka** and
  **edda** (roles "DoGood editorial team" are placeholders until Seb confirms; no
  surnames given). Pick the author per article with `author: "seb"`, `"inka"` or
  `"edda"` in the frontmatter; `authorRole` is now optional (overrides the role).
  The five articles now say `author: "seb"`. The byline and the feature card show the
  photo; the BlogPosting markup uses the author's name and role.
- To add someone: a square photo in `src/assets/authors/<id>.jpg` and one entry in `authors.ts`.

### Single article page (`src/pages/insights/[slug].astro`, `blog.css`, `BlogNewsletter.astro`)
- Visible breadcrumb at the top removed (the BreadcrumbList markup stays for search engines).
- The header above the image and the boxes below it ("Is this you?", the short answer,
  "In this article") are now as wide as the image (56rem) at every screen size; the
  article text keeps its narrower reading width.
- More white space between those boxes (40px, 56px before the text).
- "Questions this answers" removed: it repeated "In this article". The `questions` field
  stays in the frontmatter.
- "In this article": label, numbers and hover in HEART (PINK 600 `#C10E46` for small-text
  contrast) instead of green.
- The "Notes from FOUNDERland" sign-up now sits in the middle of every article (before
  the H2 closest to the middle of the text), not at the bottom. The body is split from
  the rendered HTML; an article with only one H2 keeps it at the end.
- "More about the newsletter" link removed; the privacy sentence fits on one line on
  desktop (wraps on phones).

### Checked
- axe: 0 issues on /insights and two articles; no horizontal scroll on phone.

---

## Preview 6, update 9: one master footer, contact, client fit, FAQs, podcast and newsletter pages (18 Nov 2026, late night)

**Made by:** Claude (claude.ai), from Seb's feedback with 8 screenshots. **Branch:** `claude/preview-6`. **Commit:** `b706929`.

### Footer (all pages)
- **One master footer.** Every page already used `src/components/Footer.astro` through
  `Base.astro`, but some pages hid the newsletter opt-in. The `hideOptin` option is
  removed everywhere (Footer, Base, BookingPage, contact, newsletter, client tools,
  advisor insights, the markdown route), so all 79 pages now render the identical
  footer (checked: one unique footer across the build). **Change the footer only in
  `Footer.astro`; it updates every page.** Pages can still set the colour of the
  wave above it.
- "Cookie Preferences" → **"Cookies"**.
- The big "Let's Connect" is no longer a link (Contact sits right under it);
  `home.css` selectors updated so it keeps its size.

### Contact (`src/pages/contact.astro`, `home.css`)
- Form field borders: SKY 400 `#477DFE` (were pink).
- Newsletter link ("Not ready yet? … Fuel up, stay ready") removed; the footer opt-in
  now shows on this page.
- IODA line moved from under the map to under the letterbox sketch, as a quiet line.

### Client fit (`src/pages/wayfinders/clientfit.astro`, `wayfinders.css`)
- "Seb Wichmann | Founder, DoGood Agency" removed.
- Bottom redesigned: case study in its own lilac band; a new white band with a purple
  box the same width as the case study card (860px), with a heading, a short
  description (new copy: "Ready to find your Wayfinder?" …) and the two buttons. No shadows.
- The page's meta description now actually comes from this file (the update 8
  change had gone to the unused markdown copy).

### FAQs (`src/pages/faqs.astro`, `faqs.css`)
- Hero intro on one line from 900px up; 50px more space between the hero and the wave.
- Bottom newsletter line redesigned as a card: envelope sketch, eyebrow "The DoGood
  newsletter", heading, two lines (new copy), "Join the newsletter" button.

### Podcast hub (`src/pages/dogood-insider.astro`, `podcast.css`)
- Hero image removed; the text runs wider (940px); the four platform buttons stay on
  one row on wide screens.
- The pink Seb band is now DREAM purple `#2A0B4F` (style guide), shadow removed.
- Small pink text ("Listen now", Seb card highlight) in PINK 600 for contrast.
- Old episodes: unchanged (Seb's earlier decision: keep the archive, reframe in the
  second iteration).

### Newsletter (`src/pages/newsletter.astro`, `newsletter.css`)
- Hero image removed from the hero and moved into the "Keep reading" sign-up box;
  hero text centred in a wider frame (900px).
- **Seven questions:** each keeps its short line word for word and gains a "Go
  deeper" section (same open/close as the FAQs): context, four questions behind the
  question, a short step-by-step exercise and three journal prompts. **Drafted by
  Claude, for Seb to review.**
- **The chapters:** chapters 1 to 4 now show greyed out with dates (15 Dec, 12 Jan,
  26 Jan, 9 Feb) and one line each. Titles and lines are **working drafts by Claude**
  drawn from the prologue, marked "Working titles" on the page. Seb to confirm or
  replace them in the `upcoming` array; when a chapter goes out, add it to `chapters`.

### Checked
- axe (WCAG 2 A/AA): 0 issues on contact, client fit, FAQs, podcast hub, newsletter, home.
- No broken internal links.

---

## Preview 6, update 8: booking renames, all thank-you pages, method pages, advisor buttons, SEO meta, accessibility, crawler lockdown (18 Nov 2026, late night)

**Made by:** Claude (claude.ai). **Branch:** `claude/preview-6`. **Commit:** `849a5ce`.

### 1. Booking pages renamed (Seb: no dashes in the new slugs)

| Old | New | Thank-you page |
|---|---|---|
| /pre-frp | /prefrp | /prefrp-thankyou (map + case study V, existing) |
| /frpfit | /frpfit (unchanged) | /frpfit-thankyou: map + case study J (alternates with prefrp) |
| /claritysprints | /clarity | /clarity-thankyou: case study V, no map |
| /orientation-call | /orientation | /orientation-thankyou: case study V (booking page shows J), no map |
| /internal | /internal (unchanged) | /internal-thankyou: no map, no case study |
| /internal-60 | /internal60 | /internal60-thankyou: no map, no case study |
| /catchup | /catchup (unchanged) | /catchup-thankyou: no map, no case study |

- Files: `git mv` of `pre-frp.astro`, `claritysprints.astro`, `orientation-call.astro`,
  `internal-60.astro`; canonicals updated. TidyCal embed slugs are unchanged
  (`dogoodagency/pre-frp` etc. are TidyCal's own addresses).
- New thank-you pages in `src/pages/*-thankyou.astro`, all on `ThankYouPage`
  (noindex, out of the sitemap). Copy word for word from the old Wix markdown;
  the Clarity Sprints step headings became bold-led paragraphs. Internal 60 has
  no old page, so it uses the Internal Sync text.
- Removed the old markdown copies in `src/content/pages/` (13 files: the booking
  pages and their thank-you pages). `[...slug].astro` keeps a guard list.
- `public/_redirects`: 301s /pre-frp, /claritysprints, /claritysprints-thankyou,
  /orientation-call, /orientation-call-thankyou, /internal-60, /internal-60-thankyou.
- Internal links updated: `/exit-prep` "Book a free call" (both) → **/prefrp**
  (Seb); FAQs and `stage1-tc.md` → /clarity and /orientation.
- `astro.config.mjs` sitemap filter: new slugs plus `clarity`.
- **/clarity is not for Google** (Seb): `noindex, nofollow`, out of the sitemap,
  removed from `llms.txt`. Added three client testimonials (new
  `src/components/BookingTestimonials.astro`; Michael R, Christian V, Manfred T,
  quotes word for word from `src/data/homepage.ts`) above the case study.
- `booking.css`: lower band (testimonials, case study) now sits on the purple side
  on desktop; numbered lists styled. `thankyou.css`: text after the map.
- **Seb, in TidyCal:** set each booking type's redirect to the new thank-you
  address (prefrp-thankyou, frpfit-thankyou, clarity-thankyou,
  orientation-thankyou, internal-thankyou, internal60-thankyou, catchup-thankyou).
  The old ones still work through the 301s.

### 2. New method pages (Seb: content from the PDFs for now)

- `/clarityvalue-shift` (Stage 1) and `/nextlife-passage` (Stage 2): new
  `src/components/FrameworkPage.astro` + `src/styles/framework.css`, built on
  the Exit-Prep look. Hero, the 4 steps, what you get, what to expect, where it
  fits (both stages, linked to each other), call to action. Step texts, purpose
  and deliverables from the 1-page PDFs (ClarityValue Shift v3.3, NextLife
  Passage v2.2) and `src/data/how-it-works.ts`; a few framing lines are Claude's
  first draft for Seb to review. HowTo structured data.
- Indexable (in the sitemap once launched), linked under **Explore** in the
  footer, and added to `llms.txt`.

### 3. /for-advisors buttons (Seb)

- Hero: "Book an intro call" removed.
- "Become a partner" → two buttons: **Exit advisors: become a partner** (/exit)
  and **Wealth advisors: become a partner** (/wealth).
- Closing "Book an intro call" (Claude's call): same split, **Exit advisors: book
  an intro call** / **Wealth advisors: book an intro call**, email link kept. It
  used to go to /internal, the private internal-sync calendar. No page now links
  to /internal.

### 4. SEO meta pass (titles and descriptions only, no page copy changed)

From the keyword map. Home, /exit-prep, /the-reset, /for-advisors,
/for-advisors/client-tools, /faqs, /wayfinders/seb, /newsletter, /insights, the
three category pages, /apply-stage-1, /clarity-first-guarantee-terms, /privacy,
/terms, /wayfinders/clientfit, /dogood-insider. Articles got a shorter
`seoTitle` (new optional field in `src/content.config.ts`; the H1 is unchanged).
Categories got optional `seoTitle`/`seoDescription` in `src/data/blog.ts`.
Newsletter title: "The DoGood newsletter: life after the sale, in your inbox";
its description no longer reuses the page's hero line. Image alts checked across
the build: every image has an alt; empty alts are decorative icons next to text.

### 5. Keyboard and mobile menu check (Playwright + axe-core, WCAG 2 A/AA)

- Skip link works; every link and button shows a focus style.
- **Fixed:** desktop mega menus ("How it works", "Advisor Center") couldn't be
  reached with Tab. `Header.astro`: Tab from the open trigger goes into the
  menu, Tab past the last link goes on; Shift+Tab goes back. `home.css`: the menu
  becomes visible at once on open (a transitioned `visibility` blocked focus).
- Mobile menu: opens with Enter, focus goes into it and stays there, Escape
  closes it and returns focus to the button; hidden when closed.
- **Fixed contrast** (small pink and grey text below 4.5:1): pink eyebrows and
  labels on /the-reset, /how-it-works, /exit-prep and /wayfinders now PINK 600
  `#c10e46`; homepage grey captions `#8b7dae` → `#6b5c93`.
- axe: 0 violations on the 24 pages checked.

### 6. Crawler lockdown (Seb: not discoverable by any crawler until launch)

- `public/robots.txt`: Screaming Frog exception and the `Sitemap:` line removed;
  `Disallow: /` for all.
- `netlify.toml`: `X-Robots-Tag = "noindex, nofollow"`.
- `src/layouts/Base.astro`: default robots meta `"noindex, nofollow"`.

### Launch day changes to the list above

- `public/robots.txt`: replace the whole file with `User-agent: *`, `Allow: /`
  and the `Sitemap:` line (instructions are in the file).
- Keep `noindex` on /clarity, all booking and thank-you pages (they set it themselves).
- **Before launch (Seb, 20 Nov 2026):** delete the /foundrland page (`src/pages/foundrland.astro`) and point the
  nav foundr.land logo (`Header.astro`, `nav-apply--brand`) to the new foundr.land website instead. Add a 301
  from /foundrland to that website in `public/_redirects`. Also: new DoGood branding is planned for launch
  (new logo, then favicon and app icon).
- **Before launch:** GA4 is done (update 37). Still to add: Microsoft Clarity (Seb chose Clarity over PostHog,
  20 Nov 2026) and the LinkedIn Insight Tag, each behind CookieYes consent and allowed in the CSP in `netlify.toml`.
- **About a week before launch:** Seb signs up for Warmly (free plan) for person-level visitor identification
  (US visitors only). Install its script behind CookieYes "marketing" consent and add a line to the privacy policy
  (draft for Seb's approval).

---

## Preview 6, update 7: TidyCal purple row covered, article 5 (18 Nov 2026, night)

**Made by:** Claude (claude.ai). **Branch:** `claude/preview-6`. **Commits:** `c47e2a1`, `c9f675c`, `3df60ce`.

- **Seb approved** the new booking layout and the /exit, /wealth and thank-you
  pages ("The pages look good"), and article 5.
- `src/styles/booking.css` (desktop): TidyCal paints its own purple background
  under its white details card (the "Powered by TidyCal" row), which showed as a
  purple band across the white strip. `.bk-panel::after` lays a white patch over
  that corner: 43.1% of the embed wide (stops just left of the badge), 80px
  tall; 478px wide at 1368px and wider. `pointer-events: none`. Checked live at
  1288px in Seb's browser.
- **Article 5** `src/content/blog/why-deals-stall-when-the-founder-isnt-ready.md`:
  audience advisor, category Working with founders (that category and the
  advisor section on /insights show again). Body and FAQs from Seb's voice note,
  no deal examples or statistics invented; takeaways, "Is this you?", tags and
  hero sketch (`for-advisors-after-the-deal-sketch`) drafted by Claude.
  Google Doc copy in Drive, SEO/AEO › Articles.
- `src/content/blog/emotions-of-selling-a-business.md`: re-added the sentence
  linking to article 5 (removed in update 4 while it didn't exist).
- `public/llms.txt`: article 5 added.

---

## Preview 6, update 6: Seb's booking and thank-you layout, advisor pages, Teams removed (18 Nov 2026, night)

**Made by:** Claude (claude.ai), from Seb's two mockups (screenshots of /pre-frp and /prefrp-thankyou).
**Branch:** `claude/preview-6` (pull request #6). **Commit:** `67d881b`.

### Layout (all booking pages, via the shared component)

- New `src/components/BookingHero.astro`: purple hero with the H1 (same size as
  the other page heroes, `clamp(34px, 5vw, 56px)`; suffix 0.6em, 900 on
  desktop), then a wavy line (same curve as `Wave.astro`, with a 1px #C2B7DD
  line).
- `src/components/BookingPage.astro`: H1 moved from the copy column into the
  hero. Below the wave the page is split on desktop: **white strip on the left**
  (sized to TidyCal's white details pane, 43.33% of the embed) and purple on the
  right, down to the footer's wave, which uses the same split and now draws the
  line too (`footerEdge="#C2B7DD"`). Below 1024px everything is purple.
  Note: this brings back the white strip on desktop that update 5 had turned
  purple; it matches Seb's mockup. On phones the panel round TidyCal stays purple.
- 140px of space under the calendar on desktop (72px on phones). TidyCal's
  iframe grows when a date, time or the form opens, and the page grows with it,
  so the calendar never runs into the footer.
- Phone: the wave is 36px tall so it doesn't look steep.
- `src/styles/booking.css`: split background via `--bk-split` on
  `body:has(.bk-page)` (so the footer can use it), hero and wave styles;
  removed the old `.bk-strip` element and the 60/46px desktop H1 sizes.

### Thank-you pages

- New `src/components/ThankYouPage.astro` + rewritten `src/styles/thankyou.css`:
  hero + wave as above, H1 centred over the purple side; then one column as wide
  as the case study card (640px): "You're booked" (GRASS 500, centred), the
  text, optional ClarityValue Shift map (`map`), optional extras (slot
  `extra`), optional case study (`caseStudy="j" | "v"`).
- `/prefrp-thankyou` moved onto it (same copy; map + case study V).

### New pages (all noindex, out of the sitemap)

- `/exit`: Exit Advisor Sync (TidyCal `dogoodagency/dogood-x-exit-advisors-sync`, 45 min).
- `/wealth`: Wealth Advisor Sync (TidyCal `dogoodagency/dogood-x-exit-advisors-sync-3z7njrj`, 45 min).
- `/exit-thankyou`, `/wealth-thankyou`: "Before our call" advisor resources,
  new `src/components/AdvisorResources.astro`: two Insights article cards
  (exit: Before you sign + Emotions of selling; wealth: Sudden wealth syndrome +
  First 90 days) and links to the Advisor Center, #adv-how, #adv-conf, #adv-faq.
- **Copy on these four pages was drafted by Claude** from the TidyCal
  descriptions and Advisor Center wording. **Seb to review.**
- Sitemap filter (`astro.config.mjs`): `exit` and `wealth` added; `teams` removed.

### Removed

- Teams booking page (Seb deleted the TidyCal booking type):
  `src/pages/teams.astro`, `src/content/pages/teams.md`,
  `src/content/pages/teams-thankyou.md`, their entries in `[...slug].astro`.

### Next, after Seb approves the /exit and /wealth pages

Apply the thank-you layout and rename to Seb's slugs (add 301s from the old
ones, update internal links):

| Booking page | Thank-you page | Thank-you extras |
|---|---|---|
| /pre-frp | /prefrp-thankyou | map + case study (done) |
| /frpfit | /frpfit-thankyou | same layout as Pre-FRP |
| /claritysprints → **/clarity** | /claritysprints-thankyou → **/clarity-thankyou** | testimonials and other elements (booking page too) |
| /internal | /internal-thankyou | |
| /internal-60 → **/internal60** | **/internal60-thankyou** (new) | |
| /orientation-call → **/orientation** | /orientation-call-thankyou → **/orientation-thankyou** | case study (alternate J/V), no map |
| /catchup | /catchup-thankyou | no map, no case study |

`/orientation-call` and `/orientation-call-thankyou` were live on Wix (Search
Console), so they need 301s to the new slugs.

---

## Preview 6, update 5: thank-you design, purple booking pages, speed, llms.txt (18 Nov 2026, evening)

**Made by:** Claude (claude.ai), at Seb's request. **Branch:** `claude/preview-6`
(pull request #6). **Commits:** `b217515`, `8c46326`. Design rules from Seb's
"DoGood Website Rulebook v7" (14 Nov 2026).

### 1. Pre-FRP thank-you page redesigned (first of the thank-you pages)

- New route `src/pages/prefrp-thankyou.astro` with `src/styles/thankyou.css`
  (plus `booking.css`). The markdown `src/content/pages/prefrp-thankyou.md` is
  no longer rendered: `prefrp-thankyou` was added to the own-route list in
  `src/pages/[...slug].astro`. Copy is word for word from that markdown.
- Design: the purple booking-page style (DREAM 500 page, white text), with the
  content and order of the old Wix page (dogoodagency.co/prefrp-thankyou):
  H1 "Pre-FRP Call (with Seb)", "You're booked" as a GRASS 500 H2, the
  paragraphs with the old page's teal emphasis, the ClarityValue Shift 1-Page
  Map preview linking to the Google Drive file, its teal button, then the
  case study V card. Desktop: map left, copy right (like the booking pages);
  phone: copy, map and button, case study. H1 46px on desktop (rulebook).
- Map image copied from the Wix page:
  `public/media/clarityvalue-shift-map@1x.webp` (603×337) and `@2x.webp`
  (1206×674). Note: the image itself still says "DoGood Founders".
- `src/components/BookingCaseCard.astro` now takes `study="j" | "v"`
  (default "j", so /orientation-call and /claritysprints are unchanged).
- **Waiting for Seb's sign-off.** Then apply the same design to the other nine
  thank-you pages (application, catchup, claritysprints, frpfit, internal,
  orientation-call, teams, thank-you, newsletter/thanks).

### 2. Booking pages: purple behind the TidyCal embed

- `src/styles/booking.css`: the panel around the TidyCal embed (`.bk-panel`,
  phone and tablet) and the desktop strip (`.bk-strip`, was a white strip
  copied from Wix) are now DREAM 500 #2A0B4F, so the whole page is purple and
  TidyCal's own purple frame no longer sits on white. Applies to all eight
  booking pages. Removed the shadow on the case study card (rulebook: no
  shadows). Checked live on /pre-frp in Seb's browser.

### 3. Images and speed

- Homepage client logos (`src/pages/index.astro`): were 288px-tall PNGs shown
  at 44px; now built by Astro as WebP at 44px and 88px (1x/2x) with
  width/height. Example: Novartis 67 KB → 6 KB (1x) / 13 KB (2x).
- Homepage sparkles: width/height added. **Every `<img>` on the site now has
  width and height (0 of 1,007 missing).**
- Homepage door glow: new `public/sketches/hero-door-glow@1x.webp/.png`
  (970×673) and srcset/sizes, so phones and normal screens no longer load the
  341 KB @2x file.
- `src/layouts/Base.astro`: preloads Montserrat 400, 800 and 900 (fontsource
  files) to reduce the font swap.
- **Lighthouse** (local build served with compression; lab values, not real
  visitors; SEO score is low only because of the pre-launch noindex):

  | Page | Mobile perf | Desktop perf | Accessibility |
  |---|---|---|---|
  | / (before → after) | 88 → 98 (1,196 → 889 KB) | 99 → 100 | 96 |
  | /the-reset | 97 | 99 | 96 |
  | /exit-prep | 98 | 100 | 96 |
  | /insights/first-90-days-after-the-sale | 86 → 88 | 100 | 100 |
  | /pre-frp | 99 | 100 | 100 |
  | /prefrp-thankyou | 96 | 100 | 96 |

  Left open: on mobile the article page shows a 0.13 layout shift in the
  simulated slow connection (the breadcrumb line reflows when the font
  arrives); none in an unthrottled test. Accessibility 96 comes from the
  10px captions (rulebook colours) and the "Let's Connect" link label. Re-run
  PageSpeed Insights on the live domain after launch (handover Task 5).

### 4. `/llms.txt` (new, `public/llms.txt`)

- A short plain-text guide for AI tools: what DoGood does, the offers, the
  advisor page, team, FAQs and the four articles, with links. No prices.
  **Keep it up to date:** add each new article and any offer change.

### Launch checklist additions

- Domain: in Netlify, set **www.dogoodagency.co** as the primary domain (it is
  already used in every canonical tag, the sitemap and structured data).
  `dogoodagency.co` and every `http://` address must 301 to
  `https://www.dogoodagency.co`. Netlify does this automatically once the
  primary domain is set and HTTPS is on; check with `curl -I`.

---

## Checks and decisions, no code change (18 Nov 2026, evening)

**Made by:** Claude (claude.ai), at Seb's request.

- **Search Console addresses:** all 163 page addresses from Seb's Search
  Console export (Wix, last 16 months) tested on preview 6 in Seb's browser,
  plus trailing-"/" and query-string variants. Every one returns what was
  decided: 410 for old SME content (all `/post/*`, `/blog/categories/*`,
  `/team/*` except Seb, old service and utility pages), 301 for `/founders`,
  `/team/seb`, `/blog`, the two podcast slugs with special characters, and 200
  for kept pages and podcast episodes. The high-traffic `/post/` articles
  (e.g. business-development-sop, shared-accountability-model) return 410 as
  Seb decided: the old SME content is retired.
- **Orphan check (built site):** 71 pages, 53 in the sitemap. Every sitemap
  page is linked from somewhere, and no internal link points to a missing
  page. Pages linked from nowhere: the booking and thank-you pages
  (shared directly), including `/pre-frp` and `/frpfit`.
- **Image dimensions:** 56 of 1,006 `<img>` tags have no width/height
  (possible layout shift). Not fixed yet.
- **Seb's decisions:** the drafted article takeaways and "Is this you?" lines
  are fine for now; the case study call to action, the podcast pages and the
  wider copy will be done in a second iteration. The podcast archive stays
  online for now (no new episodes planned in the next 2–3 months; the
  conversations are valuable but don't fit the founder focus exactly).

---

## Preview 6, update 4: pages removed, markup, brand name, link previews, speed, real articles (18 Nov 2026)

**Made by:** Claude (claude.ai), at Seb's request and with his decisions.
**Branch:** `claude/preview-6` (pull request #6). Main and preview 5 untouched.
**Commits:** `f0aa1f7`, `467630c`, `f4a0295`, `b87883a`.

### 1. Pages removed (Seb's decision)

- **`/casestudies`** (old Wix "Clients" page, Synergy Plus, SME copy):
  deleted `src/content/pages/casestudies.md`; its entries removed from
  `src/pages/[...slug].astro`; `/casestudies` now 301s to `/stories` in
  `public/_redirects`. The two real case studies `/casestudies/j` and
  `/casestudies/v` are unchanged, and `/stories` stays the case study page.
- **Founder Diagnostic, all of it:** deleted `src/content/pages/diagnostics.md`
  and the folder `src/content/pages/diagnostics/` (founder-check and the five
  results pages), their entries in `[...slug].astro`, and the unused
  `diagnostic` and `diagnosticForm` links in `src/data/homepage.ts`.
  Buttons and links removed:
  - `src/pages/faqs.astro`: "Not sure where you stand? Take the Founder
    Diagnostic" block (the newsletter block stays).
  - `src/data/faqs.ts`: the whole FAQ "What is the Founder Diagnostic?", and
    the Diagnostic sentence in "I sold my company a few years ago. Am I too
    late?" (it now reads only "You can apply for Stage 1 when you are ready.").
  - `src/components/CaseStudy.astro`: both "Start the Founder Diagnostic" call
    to action blocks (after the snapshot and at the end). **The case studies
    now have no call to action; Seb to decide whether to add one** (e.g. the
    FRP-Fit call).
  - Leftover, never-displayed button lines in the markdown sources of
    how-it-works, faqs, the case studies and the five Wayfinders.
  - Not removed on purpose: "Recovery & Stress diagnostics" (WHOOP) in the
    FAQs, and a client testimonial that uses the word "diagnostic".

### 2. Brand name and link previews

- Every page title now ends in **"| DoGood Agency"** (was a mix of DoGood
  Founders, DoGood, DoGood Insights and DoGood Insider). Changed in the
  markdown front matter, the .astro pages, `src/data/wayfinder-profiles.ts`,
  the podcast and Insights templates. Product names (the "DoGood Insider"
  podcast, the "DoGood Insights" blog name in markup and RSS) are unchanged.
  The internal pages keep "DoGood Agency (Private)". Titles that have no brand
  suffix at all (/about, /the-reset, /insights, /dogood-insider) were left for
  the SEO rewording pass.
- `src/layouts/Base.astro`: og:title (the title WhatsApp, LinkedIn and Slack
  show) now defaults to the page title instead of "DoGood Founders" on every
  page; og:site_name is "DoGood Agency"; default page title is
  "A 30-Day Engagement for Life After Exit | DoGood Agency".
- `public/og.jpg` (default share image): replaced. The old one was an outdated
  screenshot ("30-day intensive", old hero) saved as a PNG with a .jpg name,
  250 KB. The new one is a real 1200×630 JPEG (57 KB) of the current homepage
  hero: headline, teal line, the two walking figures and the door. Seb may
  want a designed version later, and per-page share images can be added with
  the `ogImage` prop.
- **Note:** share images use the live domain (www.dogoodagency.co/og.jpg), so
  links shared before launch show Wix's image or none. After launch they show
  the new one. WhatsApp and LinkedIn cache previews; use LinkedIn Post
  Inspector to refresh if an old preview sticks.

### 3. Structured data (invisible to visitors)

- Organization (`Base.astro`): `@id` https://www.dogoodagency.co/#organization,
  `name` "DoGood Agency", `legalName` "DoGood Agency LLC", `url` and `logo`
  always the homepage (was each page's own address), fixed description.
- Service markup on `/exit-prep` (six weekly sessions, founders preparing to
  sell) and `/the-reset` (30 days Stage 1, 12 weeks Stage 2 by invitation),
  linked to the Organization by `@id`. No prices in the markup.
- Wayfinder Person markup: `worksFor` name "DoGood Agency"; Seb's page adds
  `sameAs` LinkedIn. Other Wayfinders have no LinkedIn in the data yet.
- Article markup (`src/pages/insights/[slug].astro`): author links to
  `/wayfinders/seb` with `@id` `/wayfinders/seb#person` when the author is
  Seb; publisher references the Organization `@id`.

### 4. Sitemap and noindex

- Out of the sitemap (filter in `astro.config.mjs`) and noindex permanently:
  every thank-you page (`*-thankyou`, `/thank-you`, `/newsletter/thanks`),
  `/stage1-tc`, and the booking pages `/internal`, `/internal-60`,
  `/catchup`, `/pre-frp`, `/frpfit`, `/orientation-call`, `/teams`.
  The thank-you pages and `/stage1-tc` get noindex in `[...slug].astro`;
  `pre-frp`, `frpfit`, `orientation-call` and `teams` got `robots="noindex"`.
  **These stay noindex after launch** (they don't depend on the Base.astro
  default). `/claritysprints` stays in the sitemap: it is the offer page for
  Weekly 1:1 Clarity Sprints.
- The article exclusion was removed from the sitemap filter, because the
  placeholders are gone. One fewer launch-day step.

### 5. One H1 per page

- `src/content/pages/teams-thankyou.md` and `stage1-tc.md`: second "#"
  heading changed to "##". Every built page now has exactly one H1.

### 6. Speed

- `netlify.toml`: Cache-Control headers. `/_astro/*` (hashed names): one year,
  immutable. `/sketches/*`, `/media/*`, `/nav/*`, `/fonts/*`: one week (names
  stay the same when files are replaced).
- Images: measured what browsers actually download (Playwright, desktop):
  homepage about 2 MB of images, every other page 0.06–0.7 MB. Pages already
  serve WebP/AVIF through `<picture>`, so the PNG files are fallbacks most
  browsers never load. Re-encoding the WebPs saved too little to be worth it
  (only one image over 15%). **No resizing done or needed now.**
- CookieYes script left loading in `<head>`: it must run before other scripts
  to block cookies until consent.

### 7. Insights: the four real articles replace the placeholders

- Deleted the six placeholder articles: dont-fill-the-calendar-yet,
  raising-the-personal-side-of-exit-with-a-client,
  talking-about-the-next-chapter-at-home, who-am-i-without-the-company,
  why-deals-stall-when-the-founder-isnt-ready,
  why-your-body-crashes-after-the-deal-closes.
- Added from Seb's Google Drive folder "SEO/AEO / Articles":
  - `sudden-wealth-syndrome-after-selling-a-business` (new, After the sale)
  - `emotions-of-selling-a-business` (new, Preparing for exit)
  - `first-90-days-after-the-sale` (existing address, new content)
  - `before-you-sign-preparing-yourself` (existing address, new content)
- Mapping: draft H1 → `title`; opening paragraph → `shortAnswer`; H2s →
  `questions`; FAQ section → `faq` (rendered by the template, with FAQPage
  markup); meta description from the draft's publishing notes; byline and
  publishing notes dropped. Body text is word for word from the drafts.
- **Drafted by Claude, for Seb to approve:** `takeaways` (5 per article),
  `isThisYou`, `tags`, and the hero image choice (existing sketches).
- Small differences from the drafts, all from the drafts' own publishing
  notes: removed the sentence linking to "Why deals stall…" in the emotions
  article (that placeholder is deleted; re-add when the real article exists);
  added a link to Exit-Prep in the sudden-wealth article's last section; added
  one line linking the two new articles at the end of the first-90-days
  article; added one sentence linking the emotions article in "How we help"
  in the before-you-sign article. In the first-90-days FAQ the two article
  names are plain text (FAQ answers can't hold links).
- Insights pages now show only categories that hold an article (After the
  sale, Preparing for exit): the topic list, the founder/advisor pill rows and
  "All categories" on category pages, and category pages are only built for
  those. The advisor section on /insights shows no article grid until there
  is an advisor article.
- `netlify.toml`: the old preview slugs `/insights/who-are-you-now` and
  `/insights/after-the-deal` now 301 to `/insights` (their targets were
  deleted placeholders). `/insights/first-months-after-exit` still goes to
  `/insights/first-90-days-after-the-sale`.
- Checked: no "Sample article", "lorem ipsum" or "TODO" in the built site.

### Checked

- Build passes: 72 pages. Screenshots of /insights, an article, /faqs,
  /casestudies/j and a thank-you page look right.
- Live check in Seb's browser on the deployed preview (commit `b87883a`):
  67 addresses (53 in the sitemap plus every internal link). All load with
  200 and no redirect, except as intended: `/casestudies` → `/stories`,
  `/insights/who-are-you-now` → `/insights`, `/diagnostics` and
  `/insights/category/whats-next` 404 (deleted), and the two newsletter PDFs
  404 (not created yet). No page has the old "DoGood Founders" share title.
  Booking and thank-you pages show noindex and "… | DoGood Agency".
  `/og.jpg` is served as image/jpeg (56,810 bytes). Cache-Control:
  `/_astro/*` one year immutable, `/sketches/*` one week, pages unchanged.

### Open for Seb

- Approve the drafted takeaways and "Is this you?" lines on the four articles.
- Case studies: add a call to action now that the Diagnostic buttons are gone?
- The two newsletter PDFs (still to be created).
- Advisor TidyCal booking page (to be created; `/internal` is used for now).
- Client tools on `/for-advisors/client-tools` (still "Coming soon").

---

## Preview 6, update 3: trailing "/" fixed; Screaming Frog findings (18 Nov 2026)

**Made by:** Claude (claude.ai), at Seb's request. **Branch:** `claude/preview-6`
(pull request #6). Main and preview 5 untouched.

### Screaming Frog crawl of preview 6 (Seb, free version, before this fix)

Crawl stopped at the free limit of 500 addresses (327 internal: 135 HTML,
161 images, 16 JS, 15 CSS). Results:

- 67 pages 200, all "noindex" as intended for pre-launch.
- **66 internal links returned 301**, all of them the trailing "/" redirect
  (e.g. `/the-reset` → `/the-reset/`, `/insights` → `/insights/`, every
  `/podcast/...`, `/wayfinders/...` and `/insights/...` page). Fixed below.
- **2 broken links (404):** `/downloads/before-and-after-the-sale-prologue.pdf`
  and `/downloads/first-90-days-7-questions.pdf`, linked from
  `src/pages/newsletter.astro`. The `public/downloads/` folder does not exist.
  **Not fixed: Seb to supply the two PDFs**, then add them to
  `public/downloads/` with exactly those names (or remove the links).

### What changed

1. **`astro.config.mjs`: added `format: "file"` to the existing top-level
   `build` block** (next to `inlineStylesheets`). Astro now builds
   `dist/the-reset.html` instead of `dist/the-reset/index.html`, so Netlify
   serves `/the-reset` directly. Note: the file has two `build` blocks (one
   under `vite`, one top-level); a second top-level `build` key would silently
   override the first, so keep these settings together.
2. Canonical tags, sitemap and internal links were already without "/", so no
   other code changed. Redirect targets in `_redirects` and `netlify.toml`
   already had no trailing "/".

### Checked

- Build passes: 90 pages. Only `dist/index.html` (homepage) is still a folder
  index, as expected.
- `dist/the-reset.html` canonical: `https://www.dogoodagency.co/the-reset`.
- No relative `./` or `../` links in the built pages that the change could
  break.
- Live on deploy preview: see "Browser check" below.

### Update 3b (same day, commit `8ab594f`)

- `src/content/pages/privacy.md`: link `/cookies/` → `/cookies`.
- `src/content/pages/cookies.md`: link `/privacy/` → `/privacy`.
- `public/_redirects`: added `/team/sebastian` → `/wayfinders/seb` (301),
  right after `/team/seb`. It must stay above the `/team/*` 410 rule, because
  the first matching rule wins. `/team/sebastian` was in the live Wix sitemap.

### Browser check (Claude, in Seb's browser, on the deployed preview 6)

- **Whole-site crawl** from `sitemap-0.xml` (81 pages) plus every internal
  link found on them: 211 addresses. 205 loaded with 200 and no redirect
  (before the fix: 66 internal 301s). The rest were the four items below,
  two of which are now fixed (`/privacy/`, `/cookies/`).
- **Old Wix addresses:** all 169 addresses in the live Wix sitemap
  (`https://www.dogoodagency.co/sitemap.xml`, 6 sub-sitemaps), plus the old
  static pages listed in `_redirects`: 167 return 410; `/blog` → `/insights`,
  `/team/seb` and `/team/sebastian` → `/wayfinders/seb`, both podcast
  episodes with special characters → their clean addresses, 18 podcast
  episodes 200. Also: `/founders` → `/the-reset`, `/podcast` →
  `/dogood-insider`, `/sitemap.xml` → `/sitemap-index.xml`, `/the-reset/` →
  `/the-reset`. Nothing returns 404 or lands on the wrong page.
- Note: the Wix sitemap does not list Wix's static pages, so these were
  taken from the 410 list in `_redirects`.

### Found, for Seb to decide (not changed)

- **`/casestudies` page** (`src/content/pages/casestudies.md`) still holds old
  SME copy ("Clients", Synergy Plus, "mid-sized startups and digital
  agencies") and a "READ MORE" button to the retired
  `/case/empowering-synergy-plus...` page, which returns 410. Rewrite, remove
  the old block, or remove the page.
- **`/diagnostics` page** (`src/content/pages/diagnostics.md`, line 63): the
  "continue here" link for HR leaders points to `/culture-teams`, which now
  returns 410. Remove the link, or point it somewhere else.
- **Two missing PDFs** on `/newsletter` (see above).

---

## Preview 6, update 2: let the free Screaming Frog crawl; trailing "/" plan (18 Nov 2026)

**Made by:** Claude (claude.ai), at Seb's request. **Branch:** `claude/preview-6`
(pull request #6). Main and preview 5 untouched.

### What changed

1. **Removed "nofollow" from the site-wide "don't index" settings.**
   The free Screaming Frog cannot switch on "Follow internal nofollow", so it
   stopped after the homepage. "noindex" stays, so pages are still kept out
   of Google; robots.txt still blocks every crawler except Screaming Frog.
   - `netlify.toml`, `[[headers]]`: `X-Robots-Tag = "noindex, nofollow"` →
     `X-Robots-Tag = "noindex"` (with a comment).
   - `src/layouts/Base.astro`: default meta robots `"noindex, nofollow"` →
     `"noindex"` (with a comment).
   - Not changed: `src/pages/internal.astro`, `internal-60.astro` and
     `catchup.astro` keep `"noindex, nofollow"` on purpose (private booking
     pages that stay out of search after launch too).
   - Checked: build passes (90 pages); `dist/index.html` and
     `dist/the-reset/index.html` show `<meta name="robots" content="noindex">`.

### Found, not yet changed: trailing "/" on addresses

- **Problem:** `astro.config.mjs` has `trailingSlash: "never"`, and the
  canonical tags, sitemap and internal links all use addresses without "/"
  (e.g. `https://www.dogoodagency.co/the-reset`). But Astro builds each page
  as a folder (`dist/the-reset/index.html`), so Netlify redirects
  `/the-reset` → `/the-reset/`. Every internal link and every sitemap entry
  therefore goes through a 301, and the canonical points at an address that
  redirects. Google sees two versions of each page.
- **Decision (Claude, delegated by Seb):** tidy it before launch, keeping the
  no-"/" addresses as the official ones.
- **Planned fix:** in `astro.config.mjs` add `build: { format: "file" }` so
  Astro builds `dist/the-reset.html`, which Netlify serves at `/the-reset`
  with no redirect. Then: check that `/` and nested pages (e.g.
  `/casestudies/j`, `/insights/...`, `/podcast/...`) still load; check that
  `/the-reset/` (with "/") 301s to `/the-reset`; check the `_redirects`
  targets and the 301 targets in `netlify.toml` (several end in "/" today,
  e.g. `/the-reset/` in test results, change them to no "/"); re-run the
  Screaming Frog crawl and confirm no internal 301s remain.
- **When:** after Seb's first Screaming Frog crawl of preview 6 (the
  "before"), on `claude/preview-6`, logged here as a new entry.

### Launch day (full list, also in the update below)

- `public/robots.txt`: remove the two Screaming Frog lines, delete
  `Disallow: /`, add `Allow: /` (keep the `Sitemap:` line).
- `netlify.toml`: delete the whole `X-Robots-Tag` line from `[[headers]]`.
  **If left in, the live site stays out of Google.**
- `src/layouts/Base.astro`: change the default to `"index, follow"`. Keep
  `"noindex, nofollow"` on `internal`, `internal-60`, `catchup` and the other
  pages excluded in the handover's Task 2.
- `astro.config.mjs` sitemap filter: **no longer needed** (done in update 4;
  articles are in the sitemap, booking/thank-you pages stay out).
- Trailing "/" fix: done in update 3. On launch day, confirm `/the-reset`
  returns 200 with no redirect on the live domain.
- After deploying: `curl -I https://www.dogoodagency.co/` shows no
  `X-Robots-Tag`; view source shows `index, follow`; robots.txt allows all;
  submit `sitemap-index.xml` in Google Search Console and Bing Webmaster Tools.

### Next steps for Seb (Screaming Frog, free version)

1. Spider mode: crawl `https://deploy-preview-6--dogoodagency.netlify.app`
   with default settings; export the Internal tab (All) as CSV.
2. Crawl `https://dogoodagency.co` (live Wix); export the Internal tab.
3. Send both to Claude, who builds the old-address list for a List-mode run
   against preview 6.

---

## Preview 6: redirect clean-up and pre-launch audit setup (18 Nov 2026)

**Made by:** Claude (claude.ai), at Seb's request.
**Branch:** `claude/preview-6`, copied from `cursor/all-pages-v1` (preview 5)
at commit `2e990aa`. Preview 5 and its branch are untouched, so they are the
rollback.
**Background:** "DoGood website launch: SEO & AEO handover" (Google Doc),
Tasks 1 and 8.

### What changed

1. **Old-site redirects now live in one place: `public/_redirects` (new file).**
   - Old Wix SME content returns **410 Gone**, as Seb decided: `/post/*`,
     `/blog/*`, `/team/*`, `/case/*`, `/case-studies/*`, the old service,
     pricing and utility pages, `/cleansudaji` and the `copy-of-*` pages.
   - 301s kept: `/sitemap.xml` → `/sitemap-index.xml`, `/blog` → `/insights`,
     `/team/seb` → `/wayfinders/seb`, the two podcast episode slugs with
     special characters, and **`/founders` → `/the-reset`** (Seb's decision in
     the handover's "Decisions already made" table).
   - The 410 rules and `/founders` use `!` (forced), so they apply even if a
     page with that address exists.

2. **Removed the `redirects` block from `astro.config.mjs`.**
   Astro builds these as small HTML pages that redirect in the browser
   (meta refresh with a 200 status), not real 301s. On Netlify a page that
   exists wins over a `_redirects` rule, so they would have stopped the 410s
   from working. They also sent old SME pages to the homepage, which Google
   treats as "soft 404s".

3. **Removed conflicting rules from `netlify.toml`.**
   Removed: old SME pages → `/` (301), `/founders` → `/how-it-works`, all
   `/blog/...` rules (including `/blog/*` → `/insights/:splat`, which would
   have sent old Wix blog categories to non-existent pages), and the two
   podcast slug rules (now in `_redirects`).
   Kept: `/for-advisors/resources`, `/stories/j` and `/stories/v`,
   `/wayfinders/client-fit`, the three old `/insights/...` slugs, and
   `/podcast` → `/dogood-insider`. A comment at the top explains the split.

4. **Deleted the Sudaji page** (`src/content/pages/cleansudaji.md`) and its
   name entry in `src/pages/[...slug].astro`. Seb decided to drop it; while
   the page existed its 410 rule could not apply.

5. **`public/robots.txt`: allowed Screaming Frog on this preview only.**
   Added `User-agent: Screaming Frog SEO Spider` / `Allow: /` above the
   existing `Disallow: /`, so the free version of Screaming Frog can crawl
   preview 6 for the pre-launch audit. Every other crawler is still blocked,
   and the pages keep their noindex tags.

6. **`docs/INSIGHTS.md`:** updated the note on `/blog` redirects to match.

### Checked

- `npm run build` passes: 90 pages.
- `dist/` no longer contains `founders/`, `culture-teams/`, `sop-development/`,
  `blog/`, `cleansudaji/`, `benchmark/` or `chat/`.
- `dist/_redirects` and the new `robots.txt` are in the build output.
- `/wayfinders/seb`, `/podcast/no-compromise-just-care` and
  `/podcast/building-tomorrows-culture` exist, so their 301 targets are valid.

### Still to check on the deploy preview

- `curl -I` on: `/post/sop-development` (expect 410), `/blog/categories/hiring`
  (410), `/culture-teams` (410), `/founders` (301 → `/the-reset`), `/team/seb`
  (301 → `/wayfinders/seb`), `/blog` (301 → `/insights`), and one podcast
  episode (200). If Netlify will not return 410, switch those rules to 404 and
  tell Seb.
- Screaming Frog, two runs:
  1. Crawl preview 6 (Spider mode). (Superseded by update 2: nofollow was
     removed, so default settings work in the free version.)
  2. List mode: paste the full list of old Wix addresses, with the domain
     swapped for the preview address, and confirm every one returns the
     intended 200, 301 or 410.

### Launch checklist additions (do NOT do these on preview 6)

- `public/robots.txt`: remove the two Screaming Frog lines, delete
  `Disallow: /`, add `Allow: /`.
- `netlify.toml`: remove `X-Robots-Tag = "noindex, nofollow"` from the
  `[[headers]]` block. **As written it would also apply to the live site and
  keep the whole site out of Google.**
- `src/layouts/Base.astro`: remove the noindex meta tag (keep it on pages that
  should stay out of search, see the handover's Task 2).
- `astro.config.mjs` sitemap filter: **no longer needed** (done in update 4;
  articles are in the sitemap, booking/thank-you pages stay out).

### Not changed in preview 6 (on purpose)

- Articles: the eight sample articles stay as they are (noindex) until the
  real drafts are added.
- Everything else in the handover's Tasks 2, 2b, 6 and 7.

### For GrokBot and Claude Code

Continue work on `claude/preview-6`, not on `cursor/all-pages-v1`. Pull first.
