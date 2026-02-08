# notabhay-ui — Build Instructions

## Workspace File Structure

This workspace is organized for Claude Code + Ralph Wiggum loop compatibility:
- **CLAUDE.md** (this file) — Core instructions, critical constraints, execution plan, architecture overview, CSS variable contract, quality bar, Definition of Done
- **PROMPT.md** — Ralph loop iteration prompt (fed each cycle)
- **specs/** — Detailed specifications read on-demand via file tools
  - `architecture.md` — Config file contents (package.json, tsconfig, etc.) — read on-demand during Phase 1
  - `quality.md` — AVOID lists, quality details (imported into this file via @import)
  - `shared-packages.md` — packages/tokens/ and packages/ui/ structure
  - `boilerplate.md` — Template directory structure, common files, sub-agent coordination
  - `demo-content.md` — Flux product copy and mock data
  - `showcase.md` — Showcase landing page spec
  - `css-contract.md` — Full CSS variable contract + OKLCH conversion reference
  - `templates/[slug].md` — Individual template design specs (9 files)

**When building:** Read the relevant spec file(s) from `specs/` for details. This file contains the critical context that must survive compaction.

---

## Critical Constraints (NON-NEGOTIABLE)

1. **Use Claude Code's Agent Teams / sub-agent delegation.** Spawn parallel agents for templates.
2. **Use the frontend design skill.** Every template must be intentionally designed.
3. **Bun is the package manager AND runtime.** No npm, no pnpm, no yarn. `bun install`, `bun run`, `bunx`.
4. **Tailwind v4 CSS-first config.** No `tailwind.config.ts`. All theming via `@theme` and `:root` variables.
5. **shadcn/ui is installed once in `packages/ui/`.** Templates import from there. Do NOT run `bunx shadcn@3.8.4 init` inside templates. Pin to 3.8.4.
6. **Vite for everything.** No Next.js. These are SPAs with client-side routing via React Router.
7. **OKLCH color format.** shadcn/ui with Tailwind v4 uses OKLCH, not HSL. All CSS variable values use `oklch(L C H)` format.
8. **All sub-agents and teammates MUST use Opus.** No Sonnet, no Haiku. Set model explicitly when spawning.
9. **motion/react for animations.** NOT framer-motion (React 19 incompatibility).
10. **Fontsource for fonts.** No Google Fonts CDN, no next/font.

---

## Execution Plan (3 Phases)

### Phase 1: Main Agent — Monorepo Foundation

1. `git init` + `.gitignore`
2. Create root `package.json` (Bun workspaces), root `tsconfig.json`, root `eslint.config.mjs` — read `specs/architecture.md` for exact file contents
3. Create `packages/tokens/` — shared structural tokens — see `@specs/shared-packages.md`
4. Create `packages/ui/` (including its `tsconfig.json` with `@/` path aliases) — install shadcn via `bunx shadcn@3.8.4 init`, build all 8 components with full variant support — see `@specs/shared-packages.md`
5. Create shared mock data types in `packages/ui/src/types/mock-data.ts` — see `@specs/shared-packages.md`
6. Create `packages/ui/src/lib/theme-provider.tsx` — shared ThemeProvider — see `@specs/shared-packages.md`
7. Create stub `package.json` files for ALL 9 templates AND `apps/showcase/package.json` — these MUST exist before `bun install`. Use template `package.json` pattern from `specs/architecture.md`
8. Run `bun install` ONCE at root — all workspaces resolve
9. Verify: `bun run build` passes for `@notabhay-ui/tokens` and `@notabhay-ui/ui`
10. Write `TEMPLATE_AGENT_BRIEF.md` to disk (shared context for sub-agents — architecture, CSS variable contract, page requirements, demo content, quality bar). Target ~15KB. Strip orchestration notes.

### Phase 2: Template Agents — Parallel (spawn AFTER Phase 1 completes)

**DO NOT spawn template agents until Phase 1 is fully complete and buildable.**

Spawn agents in 3 batches of 3 to avoid overwhelming the system:
- **Batch 1:** void, neon, brutalist
- **Batch 2:** bloom, editorial, glass
- **Batch 3:** swiss, ember, candy

Wait for each batch to complete before spawning the next.

Each sub-agent receives:
- The `TEMPLATE_AGENT_BRIEF.md` file (shared context)
- Its specific template spec from `specs/templates/[slug].md`
- Instruction: "Do NOT modify anything outside `templates/[your-slug]/`"

Each sub-agent:
1. Fills out the stub `templates/[slug]/` with full Vite + React + TypeScript app (scaffold already has `package.json` from Phase 1 — do NOT recreate or modify it)
2. Defines ALL CSS variables in `src/index.css` using OKLCH format (MUST follow the CSS Variable Contract below, including derived colors from the Derivation Rules)
3. Sets up fonts via Fontsource packages (install with `bun add` inside the template dir)
4. Sets up React Router with all 5 routes
5. Builds all 5 pages (home, dashboard, components, login, signup)
6. Builds layout shell (navbar, footer, dashboard sidebar)
7. Integrates ThemeProvider from `@notabhay-ui/ui` for dark/light toggle
8. Adds template-specific motion using `motion/react`
9. Runs `bun run build` in its template directory to verify

### Phase 3: Main Agent — Showcase + Verification

1. Build `apps/showcase/` — landing page with 3×3 grid (see `specs/showcase.md`)
2. Run `bun run build` for all workspaces
3. Run `bun run lint` — fix any errors
4. Verify against Definition of Done checklist

---

## Architecture Overview

```
notabhay-ui/
├── apps/
│   └── showcase/              # Landing page with 3×3 grid of previews
├── templates/
│   ├── void/                  # T1 — Minimal Dark
│   ├── neon/                  # T2 — Cyberpunk/Terminal
│   ├── brutalist/             # T3 — Brutalist/Industrial
│   ├── bloom/                 # T4 — Soft/Organic
│   ├── editorial/             # T5 — Editorial/Print
│   ├── glass/                 # T6 — Glassmorphism
│   ├── swiss/                 # T7 — Swiss/International
│   ├── ember/                 # T8 — Dark Luxury
│   └── candy/                 # T9 — Playful/Bold
├── packages/
│   ├── tokens/                # Shared structural tokens
│   └── ui/                    # Shared components (shadcn/Radix) + ThemeProvider
├── package.json               # Bun workspace root
├── tsconfig.json              # Root TypeScript config
├── eslint.config.mjs          # Root ESLint config
└── README.md
```

### Package Naming

All packages use the `@notabhay-ui/` scope:
- `@notabhay-ui/tokens`
- `@notabhay-ui/ui`
- Templates: `@notabhay-ui/void`, `@notabhay-ui/neon`, etc.
- Showcase: `@notabhay-ui/showcase`

### Port Assignments

| App       | Port |
|-----------|------|
| showcase  | 3000 |
| void      | 3001 |
| neon      | 3002 |
| brutalist | 3003 |
| bloom     | 3004 |
| editorial | 3005 |
| glass     | 3006 |
| swiss     | 3007 |
| ember     | 3008 |
| candy     | 3009 |

Each template's `package.json`: `"dev": "vite --port [PORT]"`

For complete config file contents (root package.json, tsconfig, eslint, template configs, boilerplate code), read `specs/architecture.md`. This file is NOT @imported to save system prompt space — read it with file tools during Phase 1.

---

## CSS Variable Contract (CRITICAL — Tailwind v4 + OKLCH)

shadcn/ui with Tailwind v4 uses **OKLCH** color format and a **two-layer system**:

1. **`:root` / `.dark`** — Define semantic CSS variables with oklch values
2. **`@theme inline`** — Map those variables to Tailwind's `--color-*` namespace so utility classes work

Every template MUST define ALL of these CSS variables in its `src/index.css`. The shared `packages/ui/` components depend on them.

```css
@import "tailwindcss";
@import "@fontsource/[heading-font]/[weights].css";
@import "@fontsource/[body-font]/[weights].css";

:root {
  --radius: 0.625rem;
  --background: oklch(L C H);
  --foreground: oklch(L C H);
  --card: oklch(L C H);
  --card-foreground: oklch(L C H);
  --popover: oklch(L C H);
  --popover-foreground: oklch(L C H);
  --primary: oklch(L C H);
  --primary-foreground: oklch(L C H);
  --secondary: oklch(L C H);
  --secondary-foreground: oklch(L C H);
  --muted: oklch(L C H);
  --muted-foreground: oklch(L C H);
  --accent: oklch(L C H);
  --accent-foreground: oklch(L C H);
  --destructive: oklch(L C H);
  --destructive-foreground: oklch(L C H);
  --border: oklch(L C H);
  --input: oklch(L C H);
  --ring: oklch(L C H);
  --chart-1: oklch(L C H);
  --chart-2: oklch(L C H);
  --chart-3: oklch(L C H);
  --chart-4: oklch(L C H);
  --chart-5: oklch(L C H);
  --sidebar: oklch(L C H);
  --sidebar-foreground: oklch(L C H);
  --sidebar-primary: oklch(L C H);
  --sidebar-primary-foreground: oklch(L C H);
  --sidebar-accent: oklch(L C H);
  --sidebar-accent-foreground: oklch(L C H);
  --sidebar-border: oklch(L C H);
  --sidebar-ring: oklch(L C H);
}

.dark {
  /* Same variables, dark mode values */
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --font-heading: var(--font-heading);
  --font-body: var(--font-body);
}
```

**How this works in Tailwind v4:**
- `:root` defines raw CSS variables (mode-specific via `.dark` class)
- `@theme inline` tells Tailwind "these are design tokens, generate utility classes for them"
- `inline` keyword means "use the value of the referenced variable at runtime, don't embed statically"
- Now `bg-primary`, `text-foreground`, `border-border` etc. all work as utility classes
- The `--color-*` namespace maps to color utilities, `--radius-*` to border-radius utilities, `--font-*` to font-family utilities

Templates can add ADDITIONAL custom variables (e.g., `--glow`, `--noise-opacity`, `--grain-url`) but MUST NOT skip any of the above.

### Color Derivation Rules (for tokens NOT in template specs)

Template color tables only list the core tokens. Sub-agents MUST also define these additional tokens. Derive them as follows:

| Missing Token              | Derive From                                                          |
|----------------------------|----------------------------------------------------------------------|
| popover                    | Same as `card`                                                       |
| popover-foreground         | Same as `card-foreground`                                            |
| destructive-foreground     | `oklch(1 0 0)` (white) in dark mode, `oklch(1 0 0)` (white) in light |
| input                      | Same as `border`                                                     |
| chart-1                    | Same as `primary`                                                    |
| chart-2                    | Same as `secondary` (if too muted, shift chroma +0.05)               |
| chart-3                    | Same as `accent`                                                     |
| chart-4                    | Blend of primary + secondary (average the L, C, H values)            |
| chart-5                    | Same as `muted-foreground`                                           |
| sidebar                    | Same as `secondary`                                                  |
| sidebar-foreground         | Same as `secondary-foreground`                                       |
| sidebar-primary            | Same as `primary`                                                    |
| sidebar-primary-foreground | Same as `primary-foreground`                                         |
| sidebar-accent             | Same as `accent`                                                     |
| sidebar-accent-foreground  | Same as `accent-foreground`                                          |
| sidebar-border             | Same as `border`                                                     |
| sidebar-ring               | Same as `ring`                                                       |

**Do NOT skip any token from the contract.** If a template spec doesn't list it, derive it using this table.

For hex-to-OKLCH conversion reference, see `specs/css-contract.md`.

---

## Quality Bar (NON-NEGOTIABLE)

- Each template MUST be visually distinguishable at a glance
- Semantic HTML (`nav`, `main`, `section`, `article`, `aside`, `footer`)
- Focus-visible states on ALL interactive elements
- WCAG AA contrast minimum (4.5:1 body text, 3:1 large text)
- Keyboard nav: Tab order, Enter/Space activation, Escape closes modals
- No trap modals
- No `any` types, no `eslint-disable`, no `console.log`
- Mobile-first: 375px base, enhance for desktop
- `bun run build` must succeed with zero errors for every workspace

See `specs/quality.md` for the global AVOID list and additional quality guidance.

---

## Definition of Done

The project is complete when ALL of these are true:

- [ ] `bun install` succeeds with zero errors at root
- [ ] `bun run build` succeeds for all workspaces with zero errors
- [ ] `bun run lint` passes with zero warnings
- [ ] Each template has all 5 pages: `/`, `/dashboard`, `/components`, `/login`, `/signup`
- [ ] Each template has working dark/light mode toggle
- [ ] Each template's `/dashboard` has 4 stat cards, deploys table, and CSS bar chart
- [ ] Each template's `/login` and `/signup` have client-side validation with error display
- [ ] Each template has responsive navbar with hamburger menu on mobile
- [ ] Each template uses ONLY CSS variables for colors (zero hardcoded color values in components)
- [ ] All 8 shared components render on each template's `/components` page with all variants
- [ ] Showcase app at :3000 shows 3×3 grid with all 9 template names and descriptions
- [ ] Zero TypeScript `any` types
- [ ] All interactive elements have visible focus states
- [ ] No `tailwind.config.ts` files anywhere (Tailwind v4 CSS-first only)
- [ ] All templates use `@theme inline` with the full variable contract
- [ ] All templates use Fontsource for fonts (no CDN, no next/font)
- [ ] All templates use `motion/react` (not framer-motion)
- [ ] All templates have an error boundary wrapping route outlet

---

## When Building Templates

1. Read `specs/templates/[slug].md` for your template's design spec (colors, fonts, philosophy, visual signature, component overrides)
2. Read `specs/boilerplate.md` for the required directory structure and common files every template needs
3. Read `specs/demo-content.md` for Flux product copy and mock data
4. Read `specs/shared-packages.md` to understand what components are available from `@notabhay-ui/ui`
5. Implement the CSS Variable Contract above (all 38 tokens, derived if not in your spec)
6. Build all 5 pages with template-specific styling
7. Verify against the "Every Template Must Include" checklist in `specs/boilerplate.md`

When building shared packages, read `specs/shared-packages.md`.
When building showcase, read `specs/showcase.md`.

---

## Notes for Agent Teams / Sub-Agent Coordination

- **Batch spawning:** 3 batches of 3 sub-agents. Wait for each batch to report completion before spawning the next.
- **Sub-agent scope:** Each sub-agent ONLY creates/modifies files inside `templates/[slug]/`. Nothing else.
- **Shared package consumption:** Sub-agents import from `@notabhay-ui/ui` — these packages must be built by the main agent BEFORE spawning.
- **Build verification:** Each sub-agent runs `bun run build` in its template directory as the last step.
- **No global installs:** Sub-agents do NOT run `bun install`. The main agent runs it once at the root after creating all package.json stubs (Phase 1 step 8).
- **Font installs are the exception:** Sub-agents CAN run `bun add @fontsource/...` inside their template directory to install Fontsource packages. This is safe because the workspace already exists.
- **If a sub-agent fails:** The main agent should review the error and fix it. Don't re-spawn the agent.
- **Opus enforcement:** Claude Code may default sub-agents/teammates to Sonnet for cost reasons. If Agent Teams has a model setting, explicitly set it to Opus for every spawned agent. The prompt instruction alone may not be enough — check your Claude Code settings.

---

## Collision Pair Reference

These template pairs risk looking too similar. Keep these differentiators in mind:

| Pair          | Risk                   | Solution                                                             |
|---------------|------------------------|----------------------------------------------------------------------|
| Void ↔ Ember  | Both dark minimal      | Ember: grain texture, gold rules, serif headings, warm tones         |
| Void ↔ Swiss  | Both stark, geometric  | Swiss: visible grid overlays, numbered sections, red accent          |
| Bloom ↔ Candy | Both colorful, rounded | Bloom: organic flowing layout. Candy: strict grid + pills + rotation |

---

@specs/quality.md
