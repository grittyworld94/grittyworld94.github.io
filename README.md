# grittyworld94.github.io

Official website for **grittyworld** (그릿한세상).

Live: https://grittyworld94.github.io/

## Stack

- Next.js 16 (App Router, `output: 'export'` — fully static)
- MDX for policy pages
- Plain CSS (`app/globals.css`), no UI framework

## Development

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # static output -> out/
```

## Adding a privacy policy for a new app

1. Create `app/privacy/<app-slug>/page.mdx`
2. Copy the structure from an existing policy (e.g. `app/privacy/globepedia/page.mdx`)
3. Add a link to it in `app/privacy/page.mdx`
4. Add the app to the `apps` array in `app/page.tsx`

The route is generated automatically from the folder name — no config needed.

Store submission URLs:

- Privacy Policy: `https://grittyworld94.github.io/privacy/<app-slug>/`
- Support: `https://grittyworld94.github.io/`

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.
