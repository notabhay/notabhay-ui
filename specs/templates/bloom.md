# T4 — Bloom (Soft/Organic)

**Philosophy:** Warm, inviting, human. Software that feels like a greenhouse.

**References:** notion.so (soft parts), cal.com, the quiet web

**Fonts:** `@fontsource/dm-sans` (headings, weights 400/500/600/700) + `@fontsource/inter` (body, weights 400/500)

---

## Colors

| Token            | Dark    | Light   |
|------------------|---------|---------|
| background       | #1a1518 | #fef7f0 |
| foreground       | #f5ede6 | #2d1f1a |
| primary (rose)   | #f472b6 | #e11d48 |
| primary-foreground       | #1a1518 | #ffffff |
| secondary (sage) | #86efac | #16a34a |
| secondary-foreground     | #1a1518 | #ffffff |
| muted            | #2a2025 | #faebd7 |
| muted-foreground | #a89090 | #8b7355 |
| accent           | #f472b6 | #e11d48 |
| accent-foreground        | #1a1518 | #ffffff |
| destructive      | #ef4444 | #dc2626 |
| border           | #3d2f35 | #e8c9a8 |
| card             | #211a1e | #fff5eb |
| card-foreground          | #f5ede6 | #2d1f1a |
| ring             | #f472b6 | #e11d48 |

**Accessibility note:** Light sage changed to `#16a34a` for WCAG AA. Light border darkened to `#e8c9a8` for visible contrast. Rose accent limited to <15% of visible surface.

---

## Surface Treatment

- Soft shadows (`0 1px 3px rgba(0,0,0,0.08)`)
- Organic blob SVG shapes as subtle background decoration
- Very subtle warm gradients allowed
- Generous roundness

---

## Radius

`--radius: 0.75rem` (12px). Buttons 8px, modals 16px.

---

## Motion

- Spring physics
- 300ms with slight overshoot
- Scale 1.02 on card hover

---

## Sidebar

- 240px
- Rounded inner edges
- Soft shadow separator (no hard border)

---

## Visual Signature

- Organic blob shapes in background (SVG, low opacity)
- Gradient mesh as page background
- Rounded everything
- Warm tinted surfaces
- The softness IS the brand

---

## Content Note

Style error/incident states with warm tones (soft red, not harsh). Keep the nurturing tone even when showing failures.

---

## Component Overrides

| Component | Bloom Styling                                                        |
|-----------|----------------------------------------------------------------------|
| Button    | Soft shadow, rounded-lg, scale 1.02 on hover, no hard border         |
| Card      | Rounded-xl, soft shadow, warm tinted background, hover: shadow grows |
| Input     | Rounded-lg, soft border, warm bg-muted, focus: ring-rose             |

---

## Layout Strategy (differentiator from Candy)

Bloom uses **asymmetric, flowing layouts**. Content sections offset left/right. Cards in masonry-like arrangements. Nothing on a strict grid. Organic flow.

---

## AVOID

- Sharp corners
- Stark contrasts
- Cold blues
- Heavy borders
- Clinical/sterile vibes
- Grid-based card layouts (use masonry/flowing instead)
