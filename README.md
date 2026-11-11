# DoGood Agency website

A one-page preview of the DoGood Agency home page. It uses the same wording and the same section order as the live site at [dogoodagency.co](https://www.dogoodagency.co/), with a cleaner layout. There is no backend, CMS, analytics, chat widget, or cookie banner.

This is a preview. Search engines are asked not to index it. See the note in `public/robots.txt` and the `noindex` tag in `src/layouts/Base.astro` for how to turn that off at launch.

## Run it locally

You need Node 22.

```bash
npm install
npm run dev
```

The site opens at `http://localhost:4321`.

`npm run build` writes the static site to `dist/`. `npm run preview` serves that folder.

## Deploy on Netlify

Import this GitHub repository into Netlify. The `netlify.toml` file already sets the build command (`npm run build`), the publish folder (`dist`), and the Node version. You do not need to type those in the Netlify dashboard.

Netlify’s free plan is enough. The site is static files only.

Links that leave this page still point at the current live URLs (application, diagnostic, case studies, TidyCal is not on this page, and the newsletter posts to the same MailerLite form the live site uses).
