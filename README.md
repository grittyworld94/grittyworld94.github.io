# grittyworld94.github.io

Official website for **grittyworld** (그릿한세상).

Live: https://grittyworld94.github.io/

## Stack

- Next.js 16 (App Router, `output: 'export'` — fully static)
- MDX enabled for future prose pages
- Plain CSS (`app/globals.css`), no UI framework

## Development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static output -> out/
```

## App introductions and legal links

The home page lists published apps using `APPS` in `app/links.ts`.
Each app has its own introduction page under `/apps/<slug>/`, with key features,
download information, and an **이용 안내와 문의** section containing that app's
privacy policy and terms links. Global navigation links to the app list.

- Globepedia: `/apps/globepedia/` — App Store and Google Play downloads,
  with its existing privacy policy. No separate terms URL was found in the
  app's settings or release documentation. Add a terms link here when an
  approved document is available.

Existing Notion document URLs are unchanged. `/privacy/` remains available for
old links and directs visitors to each app's support section. It is not a
company-wide policy or a shared set of terms for all apps.

To add an app, define its information in `app/links.ts`, include it in `APPS`,
and create its introduction page. The home page, sitemap, and legacy privacy
index then pick up the app automatically. The legal links live on the app page.

App screenshots are managed in the stores only; the website does not duplicate
them. Both Globepedia public store links were opened and verified on 2026-10-30.

## Unpublished apps

Keep unpublished app drafts outside this public repository. Do not add their
routes under `app/` or include their metadata in `APPS` until publication is
approved. Hiding only the home-page link does not prevent direct URL access.

At launch, restore the approved introduction page, set the release label and
real store URLs, and register the app in `APPS`. Check that advertised features
are available before publishing. App screenshots remain managed in the stores.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.

Note: GitHub Pages must stay on `build_type: workflow`. If it reverts to
`legacy`, Jekyll will render this README as the homepage.
