# Change log

A record of changes to this site, newest first. Read this before you start
work, and add an entry for every change you make: what changed, which files,
why, and anything the next person needs to check.

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
- Trailing "/" fix above must be done and tested **before** launch.
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
