# Deployment Guide

This repository contains multiple SPA apps (showcase + templates). Each app can be deployed independently.

## Build Targets

- Showcase: `apps/showcase/dist`
- Templates: `templates/<slug>/dist`

Build everything from the repo root:

```bash
bun install
bun run build
```

Build a single app:

```bash
bun run --cwd apps/showcase build
# or
bun run --cwd templates/neon build
```

## Host Configuration (SPA)

All apps use `BrowserRouter`, so production hosting must rewrite unknown routes to `index.html`.

Use one of these rules:

- Netlify / static hosts with `_redirects` support:
  - `/* /index.html 200`
- Vercel `vercel.json` rewrites:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

- Nginx:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Example Deploy Settings

For each app deployment target:

- Install command: `bun install`
- Build command: `bun run build`
- Output directory:
  - `dist` (when deploying from app subdirectory)
  - `apps/showcase/dist` or `templates/<slug>/dist` (when deploying from repo root)

## CI Compatibility

Use `.github/workflows/ci.yml` as the canonical quality gate. It runs lint, typecheck, build, bundle budget checks, unit tests, and smoke E2E.

## Vercel (Showcase)

The repository includes a production deploy workflow for the showcase app at `.github/workflows/deploy-vercel-showcase.yml`.

### One-time setup

1. Install and authenticate Vercel CLI:

```bash
npm install --global vercel@latest
vercel login
```

2. Link the showcase app to a Vercel project:

```bash
cd apps/showcase
vercel link
```

3. Create a Vercel token (Dashboard -> Settings -> Tokens) and add these GitHub repository secrets:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID_SHOWCASE`

4. Get `orgId` and `projectId` from `apps/showcase/.vercel/project.json` after linking.

### Deployment triggers

- Automatic: publish a GitHub release with a tag that starts with `v` (for example, `v0.0.2`).
- Manual: run the `Deploy Showcase to Vercel` workflow from the GitHub Actions UI.

### Local CLI deploy (optional)

```bash
cd apps/showcase
vercel pull --yes --environment=production
vercel build --prod
vercel deploy --prebuilt --prod
```
