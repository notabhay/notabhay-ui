# T2 — Neon (Cyberpunk/Terminal)

**Philosophy:** The terminal is the interface. Data-dense, alive.

**References:** warp.dev, Blade Runner 2049 UI, cool-retro-term

**Fonts:** `@fontsource/jetbrains-mono` (everything) + `@fontsource/inter` (paragraphs >2 lines only)

---

## Colors

| Token             | Dark    | Light   |
|-------------------|---------|---------|
| background        | #0c0c14 | #f8fafc |
| foreground        | #e2e8f0 | #0f172a |
| primary (cyan)    | #22d3ee | #0891b2 |
| primary-fg        | #0c0c14 | #ffffff |
| secondary (green) | #a3e635 | #4d7c0f |
| secondary-fg      | #0c0c14 | #ffffff |
| muted             | #131320 | #f1f5f9 |
| muted-foreground  | #64748b | #475569 |
| accent            | #a3e635 | #4d7c0f |
| accent-fg         | #0c0c14 | #ffffff |
| destructive       | #ef4444 | #dc2626 |
| border            | #1e293b | #e2e8f0 |
| card              | #10101c | #ffffff |
| card-fg           | #e2e8f0 | #0f172a |
| ring              | #22d3ee | #0891b2 |

**Accessibility note:** Light mode green changed to `#4d7c0f` for WCAG AA compliance on light backgrounds.

---

## Surface Treatment

- Inset panels (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.03)`)
- Glow via box-shadow on focus/hover (never CSS filter)
- Scanline CSS overlay (barely perceptible)
- **Remove glows in light mode**

---

## Radius

`--radius: 0.25rem` (4px)

---

## Motion

- 250ms ease-out-expo
- Glow intensifies on hover

---

## Sidebar

- 256px with 1px cyan left-border at 30% opacity
- Collapses to 56px at md

---

## Visual Signature

- Command palette (⌘K via cmdk) is first-class
- Blinking cursor on hero heading (CSS only)
- Terminal-style metrics section
- 2px colored left-border accent on cards
- Scanline overlay

---

## Component Overrides

| Component | Neon Styling                                                                        |
|-----------|-------------------------------------------------------------------------------------|
| Button    | Default: bg-primary with subtle glow on hover. Ghost: border-primary, glow on hover |
| Card      | bg inset panel, 1px border, 2px left accent border (primary color)                  |
| Input     | bg muted, 1px border, focus: border-primary + glow shadow                           |

---

## AVOID

- Matrix rain
- Neon-on-neon combos
- Cursor trails
- Excessive glow (limit to focus states + ONE hero element)
- CSS filters for glow
