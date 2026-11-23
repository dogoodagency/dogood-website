# DoGood Insights: how to add and manage articles

Articles are plain text files. You do not need to touch any code to publish one.

Naming note: the public name is "Insights" and the web address is `/insights`. Internally the content collection is still called `blog`, and the folder is still `src/content/blog/`, along with `src/data/blog.ts`, `src/styles/blog*.css` and the `Blog*` components. Those are internal names only and visitors never see them, so they were left as they are.

`/blog` redirects (301) to `/insights`. Every other `/blog/...` address returns 410 Gone, because on the old Wix site those were SME blog categories that were retired on purpose. The rules live in `public/_redirects` (see CHANGELOG.md, preview 6).

Where things live:

- Articles: `src/content/blog/*.md` (one file per article)
- Categories and helper code: `src/data/blog.ts`
- Look and feel: `src/styles/blog.css`
- Pages: `src/pages/insights/index.astro` (Insights home), `src/pages/insights/[slug].astro` (article), `src/pages/insights/category/[category].astro` (category pages), `src/pages/insights/rss.xml.ts` (RSS feed)

## Add an article

1. Copy an existing file in `src/content/blog/`, for example `first-90-days-after-the-sale.md`.
2. Rename it. The file name becomes the web address: `my-new-article.md` is published at `/insights/my-new-article`. Use lowercase words joined with hyphens.
3. Change the fields between the two `---` lines at the top (the "frontmatter", explained below).
4. Replace the text underneath with your article.
5. Run `npm run build` to check nothing is wrong. If a field is missing or has a typo, the build says which one.

### Writing the body

- Use `##` for main headings. Write them as questions where you can ("## What happens to my days?"). They become the table of contents.
- Use `###` for a smaller heading under a `##`. These do not appear in the table of contents.
- Link to other pages with normal markdown: `[Exit-Prep](/exit-prep)`.
- Aim for 600 to 1,500 words. Short sentences. Plain, warm tone.
- Do not put prices, medical, financial, legal or tax advice, or claims about the founder's own exit in articles.

## Frontmatter fields

| Field | What it is |
| --- | --- |
| `title` | The article headline. Also the `<h1>` and the search result title. |
| `description` | One or two sentences, **160 characters or fewer**. Shown under the title, on cards and in search results. |
| `audience` | `founder`, `advisor` or `both`. Controls the badge on cards ("For founders", "For advisors", "Founders & advisors"). |
| `category` | One category slug from the list below. It must match exactly. |
| `tags` | A list of 3 to 5 short lowercase words, e.g. `["identity", "after exit"]`. |
| `date` | Publish date, written `2026-11-12`. Newest articles show first. |
| `updated` | Optional. The date you last changed the article, same format. |
| `author` | Optional. Defaults to "Seb Wichmann". |
| `authorRole` | Optional. Defaults to "Founder, DoGood". |
| `readTime` | Minutes to read, as a number. Roughly words divided by 220. |
| `featured` | `true` makes it the big featured article on the Insights index. Only one article should be `true` at a time. |
| `pick` | Optional number 1, 2 or 3. Puts the article in the "Most read in FOUNDERland" card, in that order. Use each number once, or leave it out. |
| `heroImage` | The sketch to show, as a path **without** `@1x` or `.webp` or `.png`, e.g. `"/sketches/insights-open-journals"`. See image rules below. |
| `heroAlt` | A short plain description of the picture, for screen readers. |
| `heroBg` | Colour behind the sketch: `purple`, `teal`, `pink` or `lilac` (default). Vary these so cards next to each other do not match. |
| `shortAnswer` | Two or three sentences that answer the headline question directly. Shown in "The short answer" box. Search engines and AI tools often quote this. |
| `questions` | A list of 2 to 4 questions the article answers. Shown under "Questions this answers". |
| `takeaways` | A list of 3 or 4 short points. Shown under "Key takeaways" after the article. |
| `isThisYou` | One line that helps the right reader recognise themselves. |
| `faq` | 2 or 3 question and answer pairs, each written as `- q: "..."` then `a: "..."` on the next line. Shown as "Common questions" and also sent to search engines. |
| `sample` | `true` shows a "Sample article" notice at the top. Delete the line (or set `false`) for real articles. |
| `noindex` | `true` asks search engines not to list the page. Delete the line (or set `false`) for real articles. |

Text containing a colon or quotes should be wrapped in double quotes. To put a double quote inside, write `\"`.

## Featured and most read

- **Featured:** set `featured: true` on one article. Set it back to `false` on the previous one.
- **Most read in FOUNDERland:** give up to three articles `pick: 1`, `pick: 2` and `pick: 3`.

## Going live: remove the sample and noindex flags

The eight starter articles are placeholders. For each one you keep:

1. Rewrite the text.
2. Delete `sample: true` and `noindex: true` from the frontmatter (or set both to `false`).
3. Check `date`, `readTime` and the `description`.

Note that the whole site currently sends a "noindex, nofollow" robots tag, which is the preview setting in `src/layouts/Base.astro`. That is removed once, at launch, for the whole site. Article pages that are not marked `noindex` will follow the site default until then.

## Categories

| Slug | Name | Audience |
| --- | --- | --- |
| `preparing-for-exit` | Preparing for exit | founder |
| `after-the-sale` | The first 90 days after the sale | founder |
| `identity-and-purpose` | Identity & purpose | founder |
| `health-and-energy` | Health & energy | founder |
| `relationships-and-family` | Relationships & family | founder |
| `whats-next` | Freedom & what's next | founder |
| `working-with-founders` | Working with founders | advisor |
| `personal-side-of-exit-planning` | Exit planning: the personal side | advisor |

Each category has its own page at `/insights/category/<slug>`. Empty categories still get a page, with a "New articles are on their way" message.

The "Call to action" box at the end of each article is chosen from the category:

- `preparing-for-exit` points to Exit-Prep (`/exit-prep`).
- Other founder categories point to The Reset (`/the-reset`).
- Advisor articles point to the Advisor Center (`/for-advisors`).

### Add a category

1. Open `src/data/blog.ts` and add a new object to the `categories` list: `slug`, `name`, `audience`, a one-sentence `description`, a two or three sentence `intro` for the archive page, and a `sketch` path.
2. Open `src/content.config.ts` and add the same slug to the `categorySlugs` list. The build will fail if a slug is in one place and not the other, which is intentional.
3. Run `npm run build`. The new category page is created automatically.

## Images

- Use the existing hand-drawn sketches in `public/sketches/`. Each one comes as `name@1x.png`, `name@2x.png`, `name@1x.webp` and `name@2x.webp`. In the frontmatter, write only the base path: `"/sketches/name"`.
- Before using a sketch, check all four files exist and that the `@1x` version is a reasonable size (a few sketches, such as `wayfinders-compass`, are very small and look blurry when enlarged).
- The sketch is shown on top of a coloured background (`heroBg`) inside a rounded frame. Sketches with a transparent background work best.
- Always write a `heroAlt` that describes what is in the picture.
- To add a new sketch, put all four files in `public/sketches/` using the same naming pattern.

## The RSS feed

The feed is at `/insights/rss.xml` and lists every article automatically. Nothing to maintain.

## Newsletter sign-up

The sign-up box at the bottom of each Insights page uses the same MailerLite form as the footer and `/newsletter`. The form address is set once in `src/data/blog.ts` (`NEWSLETTER_ACTION`). Do not create a new form.
