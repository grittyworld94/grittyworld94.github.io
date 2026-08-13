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

## Adding an app's privacy policy

`/privacy/` lists every app and links to its policy. The list is driven by
`PRIVACY_POLICIES` in `app/links.ts` — append one row and the page picks it up.

**Policy hosted externally (Notion, etc.):**

```ts
{ name: "발품 (balpoom)", href: "https://...", external: true }
```

**Policy hosted in this repo:**

1. Create `app/privacy/<app-slug>/page.mdx` (MDX is enabled; the route comes
   from the folder name, no config needed)
2. Add the row without `external`:

```ts
{ name: "발품 (balpoom)", href: "/privacy/balpoom/" }
```

`app/privacy/layout.tsx` wraps every policy page with the back-link and prose
styling. `app/globals.css` already carries styles for policy pages
(`.backlink`, `.updated`, tables) and for the app list (`.apps`, `.badge`).

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and
publishes to GitHub Pages.

Note: GitHub Pages must stay on `build_type: workflow`. If it reverts to
`legacy`, Jekyll will render this README as the homepage.
