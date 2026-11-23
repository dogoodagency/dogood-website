# Launch-day indexing switch

**Preview remains hidden. Do not enable this until launch is approved.** Merging or building this branch does not enable indexing.

On launch day, make one setting change in the intended live site's build environment: set `SITE_INDEXABLE` to exactly `true`, then rebuild/deploy that site. Do not enable it on a preview or commit it to this repository, `netlify.toml`, or a production context. Unset, `false`, and any value other than the exact lowercase string `true` all mean OFF.

The same build flag controls all three layers:

| Layer | OFF (today) | ON (launch only) |
| --- | --- | --- |
| `dist/robots.txt` | Disallow all; no Sitemap line | Allow all; canonical sitemap listed |
| Base robots meta default | `noindex, nofollow` | `index, follow` |
| `dist/_headers` | Site-wide `X-Robots-Tag: noindex, nofollow` | No site-wide indexing header |

The committed `public/robots.txt` and `public/_headers` remain safe preview defaults. The Astro integration writes the final files into the build output without changing those sources. Other security and caching headers remain in `netlify.toml`. There are no special restrictions for AI crawlers.

Keep explicit noindex on **every booking page**, **every thank-you/acknowledgement page** (including newsletter thanks and stage1-tc), **/clarity**, **404**, and any diagnostic-results page added in future. Existing article noindex overrides also remain effective. No local diagnostic-results page exists today; `/recovery-stress-diagnostics` describes an offer, and `/diagnostics` is gone (410). Do not remove the robots meta tag from Base: page-specific overrides must survive launch. Keep these private routes out of the sitemap.

## Exact fallback patch if the environment flag cannot be used

Apply this single-line change in `astro.config.mjs` **only on launch day**, then rebuild/deploy. It selects the same policy for all three layers without an environment setting:

```diff
-const siteIndexable = process.env.SITE_INDEXABLE === "true";
+const siteIndexable = true;
```

The generated launch `dist/robots.txt` will be exactly:

```text
User-agent: *
Allow: /

Sitemap: https://www.dogoodagency.co/sitemap-index.xml
```

The generated launch `dist/_headers` will be exactly:

```text
# Public launch: private pages retain their explicit noindex meta tags.
```

The compiled Base default will be `index, follow`. Explicit per-page values still take precedence. Do not manually edit only robots.txt: the meta default and header would still block indexing.

## Verify and roll back

After a normal preview build, inspect `dist/robots.txt`, `dist/_headers`, and the robots meta in `dist/index.html`: all three must block indexing. After launch, inspect those same files for the ON values above, plus a booking page, a thank-you page, /clarity and 404 for their retained noindex. Check that the sitemap excludes private routes.

On the actual intended deployment, use `curl -I` on the home page and a normal marketing page to check the HTTP header; Astro's local preview server does not apply Netlify `_headers` or `_redirects`. Confirm `/diagnostics`, `/diagnostics/`, `/diagnostics.html` and the retired blog feed return 410, and the old Wix sitemaps return 301 with the canonical sitemap destination. This requires a Netlify deployment; local file checks cannot prove edge behavior.

To restore lockdown, remove the flag (or set it to `false`) and rebuild/deploy. If the manual fallback was used, revert its one-line patch too. A setting change alone cannot change an already deployed static build.
