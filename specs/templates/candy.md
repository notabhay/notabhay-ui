# T9 — Candy (Playful/Bold)

**Philosophy:** Fun, energetic, unapologetic.

**References:** vercel.com/geist, figma.com, linear.app/features

**Fonts:** `@fontsource/outfit` (headings, weights 600/700/800) + `@fontsource/plus-jakarta-sans` (body, weights 400/500/600)

**Font note:** Using Plus Jakarta Sans instead of DM Sans for better contrast with Outfit headings and to differentiate from Bloom (which uses DM Sans).

---

## Colors

| Token            | Dark    | Light   |
|------------------|---------|---------|
| background       | #1a1025 | #fffbfe |
| foreground       | #faf5ff | #1a1025 |
| primary (violet) | #a855f7 | #9333ea |
| primary-fg       | #ffffff | #ffffff |
| secondary (pink) | #f472b6 | #ec4899 |
| secondary-fg     | #1a1025 | #ffffff |
| accent (cyan)    | #22d3ee | #06b6d4 |
| accent-fg        | #1a1025 | #ffffff |
| muted            | #251835 | #f5eeff |
| muted-fg         | #a78bfa | #7c3aed |
| destructive      | #ef4444 | #dc2626 |
| border           | #2e1f3e | #f0e4ff |
| card             | #1f1330 | #fffbfe |
| card-fg          | #faf5ff | #1a1025 |
| ring             | #a855f7 | #9333ea |

---

## Surface Treatment

- Colored shadows (`0 4px 14px rgba(168,85,247,0.15)`)
- Gradient accents on buttons/hero (violet→pink)
- Subtle gradient wash backgrounds
- Playful but not chaotic

---

## Radius

`--radius: 1rem` (16px). Buttons: 999px (pill). Modals 20px.

---

## Typography

- Bold headings (60px+, weight 800)
- Tight line-height headings (1.05)
- Weight contrast: heading 800, body 400

---

## Motion

- Bouncy spring physics
- 350ms with overshoot
- Scale 1.03 on hover
- Slight rotation on click (-2deg)
- Playful stagger

---

## Sidebar

- 240px
- Pill-shaped nav items
- Colored shadow
- Playful hover animation

---

## Visual Signature

- Tilted/rotated cards (-2° to 2°)
- Gradient blob backgrounds
- Pill-shaped everything
- Bold weight contrast
- Gradient button fills
- The playful rotation + pill shapes + gradients combo is the identity

---

## Layout Strategy (differentiator from Bloom)

Candy uses **strict grid layouts** with playful styling. Cards in even rows/columns, pill buttons in rows, structured sections. The structure is rigid but the elements within are playful (rotation, color, pills). Bloom is the opposite: organic flowing layout with soft styling.

---

## Content Note

Error/incident states should be slightly more restrained — don't make failures look celebratory.

---

## Component Overrides

| Component | Candy Styling                                                                               |
|-----------|---------------------------------------------------------------------------------------------|
| Button    | Pill shape (999px radius), gradient bg (violet→pink), colored shadow, scale+rotate on hover |
| Card      | 16px radius, colored shadow, slight rotation (-1° to 1°), hover: scale 1.02                 |
| Input     | Pill radius, colored border, playful focus ring (multi-color?)                              |

---

## AVOID

- Muted colors
- Thin type
- Serious tone
- Corporate stiffness
- Monospace fonts
- More than 3 colors on screen simultaneously
- Animated gradients (cheap-looking)
- Organic/flowing layouts (that's Bloom)
