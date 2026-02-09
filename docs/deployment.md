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
