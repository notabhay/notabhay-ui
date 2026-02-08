# Quality Standards & AVOID List

This file contains the global AVOID list and quality guidance.

---

## Global AVOID List (all templates)

- AVOID: default shadcn component styling without visual overrides
- AVOID: gray-on-slightly-different-gray as the only surface differentiation
- AVOID: identical card layouts across templates
- AVOID: same spacing rhythm across templates (some dense, some airy)
- AVOID: generic centered hero (heading + subtitle + CTA button) — vary hero layouts
- AVOID: `any` types, `eslint-disable`, `console.log`, commented-out code
- AVOID: `@media (prefers-color-scheme)` for dark mode — use `.dark` class only
- AVOID: inline styles for colors — always use CSS variables via Tailwind utilities
- AVOID: importing from `framer-motion` — use `motion/react` only
- AVOID: `tailwind.config.ts` or `tailwind.config.js` — Tailwind v4 is CSS-first

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
