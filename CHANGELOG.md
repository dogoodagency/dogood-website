# Change log

A record of changes to this site, newest first. Read this before you start
work, and add an entry for every change you make: what changed, which files,
why, and anything the next person needs to check.

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
