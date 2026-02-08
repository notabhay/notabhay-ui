# Template Boilerplate — Structure & Sub-Agent Coordination

This file contains the directory structure every template needs, the checklist of required files, and the sub-agent prompt template.

---

## Template Directory Structure

Every template follows this structure:

```
templates/[slug]/
├── src/
│   ├── main.tsx               # React entry point
│   ├── App.tsx                # Router setup
│   ├── index.css              # CSS variables + Tailwind import + Fontsource imports
│   ├── pages/
│   │   ├── home.tsx
│   │   ├── dashboard.tsx
│   │   ├── components.tsx
│   │   ├── login.tsx
│   │   └── signup.tsx
│   ├── components/            # Template-specific layout components
│   │   ├── layout.tsx         # Root layout wrapper
│   │   ├── error-boundary.tsx # React error boundary (catches bad renders)
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   └── theme-toggle.tsx
│   └── lib/
│       └── mock-data.ts       # Flux demo data (use shared types from @notabhay-ui/ui)
├── index.html                 # Vite HTML entry
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── package.json
```

---

## Every Template Must Include

1. **Home page** (`/`) — hero + 3-4 content sections with Flux copy
2. **Dashboard page** (`/dashboard`) — sidebar + 4 stat cards + deploys table + CSS bar chart
3. **Components page** (`/components`) — all 8 shared components with every variant, size, and state. Organized as vertical sections with anchor IDs (`#button`, `#card`, etc.)
4. **Auth pages** (`/login`, `/signup`) — forms with client-side validation
5. **Layout shell** — responsive navbar (hamburger on mobile) + footer
6. **Dark/light toggle** — via ThemeProvider, `.dark` class on `<html>`
7. **Motion** — scroll animations, hover states. Use `motion/react`. Respect `prefers-reduced-motion`.
8. **Mobile responsive** — test at 375px width
9. **Error boundary** — wrap `<Outlet />` in a React error boundary component so a bad page render shows a fallback instead of white-screening the entire template

---

## Sub-Agent Prompt Template

When spawning template sub-agents, give each agent this context structure:

```markdown
## Your Task
Build the [TEMPLATE_NAME] template at `templates/[slug]/`.

## Rules
- Do NOT modify anything outside `templates/[slug]/`
- Do NOT run `bun install` at the root (main agent handles this)
- Do NOT recreate or modify `package.json` — it already exists as a stub from Phase 1
- You CAN run `bun add` inside your template dir to install fonts and any template-specific deps mentioned in your spec (e.g., cmdk for Neon)
- Do NOT create a `tailwind.config.ts` file (Tailwind v4 is CSS-first)
- Import shared components from `@notabhay-ui/ui`
- Import ThemeProvider from `@notabhay-ui/ui`
- Use Fontsource for fonts, NOT Google Fonts CDN
- Use `motion/react` for animations, NOT `framer-motion`
- All colors as OKLCH values in CSS variables
- Define ALL tokens from the CSS Variable Contract — use the Color Derivation Rules for any token not in your template spec

## Architecture Brief
[Include: file structure, vite.config.ts, tsconfig files, index.html, main.tsx, App.tsx, layout.tsx patterns]

## CSS Variable Contract + Color Derivation Rules
[Include: the full @theme inline block, :root variable list, AND the derivation rules table for missing tokens]

## Demo Content
[Include: all Flux content, mock data, auth page specs]

## Your Template Spec
[Include: the specific template's design spec]

## Quality Bar & AVOID List
[Include: quality bar from CLAUDE.md + global AVOID list from specs/quality.md]

## Definition of Done for Your Template
- [ ] `bun run build` succeeds with zero errors
- [ ] All 5 pages render: `/`, `/dashboard`, `/components`, `/login`, `/signup`
- [ ] Dark/light toggle works
- [ ] Dashboard has 4 stat cards, deploys table, CSS bar chart
- [ ] Login and signup have client-side validation with error display
- [ ] Responsive navbar with hamburger on mobile
- [ ] All 8 shared components render on `/components` with all variants
- [ ] ALL CSS variables from the contract are defined (including derived tokens)
- [ ] Zero hardcoded hex/oklch in component files (use CSS variables only)
- [ ] Motion uses `motion/react` and respects `prefers-reduced-motion`
- [ ] Error boundary wraps route outlet (bad page = fallback, not white screen)
```

---

## Sub-Agent Definition of Done Checklist

Each sub-agent must verify all of these before reporting completion:

- [ ] `bun run build` succeeds with zero errors
- [ ] All 5 pages render: `/`, `/dashboard`, `/components`, `/login`, `/signup`
- [ ] Dark/light toggle works
- [ ] Dashboard has 4 stat cards, deploys table, CSS bar chart
- [ ] Login and signup have client-side validation with error display
- [ ] Responsive navbar with hamburger on mobile
- [ ] All 8 shared components render on `/components` with all variants
- [ ] ALL CSS variables from the contract are defined (including derived tokens)
- [ ] Zero hardcoded hex/oklch in component files (use CSS variables only)
- [ ] Motion uses `motion/react` and respects `prefers-reduced-motion`
- [ ] Error boundary wraps route outlet (bad page = fallback, not white screen)
