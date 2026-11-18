# Change log

A record of changes to this site, newest first. Read this before you start
work, and add an entry for every change you make: what changed, which files,
why, and anything the next person needs to check.

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
- `astro.config.mjs`: change the sitemap filter so it excludes only articles
  marked noindex, once real articles replace the samples.
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
- `astro.config.mjs`: change the sitemap filter so it excludes only articles
  marked noindex, once real articles replace the samples.

### Not changed in preview 6 (on purpose)

- Articles: the eight sample articles stay as they are (noindex) until the
  real drafts are added.
- Everything else in the handover's Tasks 2, 2b, 6 and 7.

### For GrokBot and Claude Code

Continue work on `claude/preview-6`, not on `cursor/all-pages-v1`. Pull first.
