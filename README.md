# notabhay-ui

A Bun monorepo with:
- `apps/showcase` (catalog app)
- `templates/*` (9 production-ready UI templates)
- `packages/ui` and `packages/tokens` (shared packages)

## Prerequisites

- Bun `>=1.1`

## Quick Start

```bash
bun install
bun run dev
```

## Quality Gates

```bash
bun run lint
bun run typecheck
bun run build
bun run check:bundle
bun run test:unit
bun run test:e2e
```

Run all local CI checks:

```bash
bun run ci
```

## Repository Layout

- `apps/showcase` - template showcase app
- `templates/*` - individual template apps (void, neon, brutalist, bloom, editorial, glass, swiss, ember, candy)
- `packages/ui` - shared UI components and theme provider
- `packages/tokens` - shared design tokens/types
- `tests/e2e` - Playwright smoke/accessibility/visual tests
- `specs` - architecture and design requirements

## Deployment

See `docs/deployment.md` for production deployment guidance, SPA routing fallback rules, and host-specific examples.

## CI

GitHub Actions workflow is at `.github/workflows/ci.yml` and runs:
- lint
- typecheck
- build
- bundle budget checks
- unit tests
- E2E (including visual regression)
