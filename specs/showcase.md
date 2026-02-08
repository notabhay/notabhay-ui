# Showcase App — Landing Page Spec

Single landing page at `apps/showcase/`. Same Vite + React stack. Port: 3000.

---

## Visual Direction

Neutral dark (`#0a0a0a` bg, `#fafafa` text). Inter for body, Space Grotesk for the heading. 

No template's aesthetic should leak into this page — it's the neutral frame that makes the 9 templates pop by contrast. Minimal chrome: no navbar, no footer, just the heading block and the grid.

---

## Layout

### Top section
- "notabhay-ui" heading (large, bold)
- "9 opinionated UI templates. Same components, same data, 9 radically different presentations." as subtitle
- Keep it tight, no hero image

### Grid: 3×3 of template preview cards

Each cell:
- Template name (bold)
- One-line aesthetic description
- Colored preview block showing the template's `background` + `primary` colors as a simple gradient/swatch (NOT live iframes — running 10 dev servers simultaneously is too heavy)
- On click: opens template at its port in a new tab
- On hover: scale 1.03 + subtle border highlight using the template's primary color

### Optional live preview
Add a "Live Preview" toggle button per card. When clicked, replace the static block with a `loading="lazy"` iframe pointing to the template's dev server port. Only one iframe active at a time (clicking another closes the previous). Include a small note: "Start the template's dev server first."

### Responsive
- 3 cols desktop
- 2 cols tablet
- 1 col mobile

### Bottom
Small footer with "Built with shadcn/ui + Tailwind v4 + Vite + React 19" in muted text.

---

## Template Metadata

| Slug      | Name         | Description                          | Port |
|-----------|--------------|--------------------------------------|------|
| void      | Void         | Minimal Dark                         | 3001 |
| neon      | Neon         | Cyberpunk/Terminal                   | 3002 |
| brutalist | Brutalist    | Raw/Industrial                       | 3003 |
| bloom     | Bloom        | Soft/Organic                         | 3004 |
| editorial | Editorial    | Print/Magazine                       | 3005 |
| glass     | Glass        | Glassmorphism                        | 3006 |
| swiss     | Swiss        | International/Grid                   | 3007 |
| ember     | Ember        | Dark Luxury                          | 3008 |
| candy     | Candy        | Playful/Bold                         | 3009 |
