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

## Links

External URLs live in `app/links.ts`. The privacy policy currently points to a
Notion page; update `PRIVACY_POLICY_URL` there to change it everywhere.

## Adding a privacy policy in-repo

When policies should be versioned here instead of Notion:

1. Create `app/privacy/<app-slug>/page.mdx`
2. Add a wrapper at `app/privacy/layout.tsx` for prose styling
3. Point `PRIVACY_POLICY_URL` (or per-app links) at `/privacy/<app-slug>/`

The route is generated automatically from the folder name — no config needed.
`app/globals.css` already carries the styles for policy pages (`.backlink`,
`.updated`, tables) and for the app list (`.apps`, `.badge`).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.

Note: GitHub Pages must stay on `build_type: workflow`. If it reverts to
`legacy`, Jekyll will render this README as the homepage.
