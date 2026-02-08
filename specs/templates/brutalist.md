# T3 — Brutalist (Raw/Industrial)

**Philosophy:** Raw, deliberate, exposed bones.

**References:** bloomberg.com, brutalistwebsites.com, area17.com

**Fonts:** `@fontsource/space-grotesk` (headings, weights 500/600/700) + `@fontsource/inter` (body, weights 400/500)

---

## Colors

| Token            | Dark    | Light           |
|------------------|---------|-----------------|
| background       | #1a1a1a | #f5f0eb (cream) |
| foreground       | #f5f0eb | #1a1a1a         |
| primary (red)    | #dc2626 | #dc2626         |
| primary-foreground       | #ffffff | #ffffff         |
| secondary (blue) | #2563eb | #2563eb         |
| secondary-foreground     | #ffffff | #ffffff         |
| muted            | #262626 | #ebe5de         |
| muted-foreground | #a1a1a1 | #666666         |
| accent           | #dc2626 | #dc2626         |
| accent-foreground        | #ffffff | #ffffff         |
| destructive      | #ef4444 | #dc2626         |
| border           | #404040 | #1a1a1a         |
| card             | #222222 | #ede8e2         |
| card-foreground          | #f5f0eb | #1a1a1a         |
| ring             | #dc2626 | #dc2626         |

**Accessibility note:** Ochre (#ca8a04) allowed for decorative/large text ONLY. Fails AA for body text on cream.

---

## Surface Treatment

- Thick borders (3-4px)
- Boxed sections with visible ALL CAPS labels ("SECTION: FEATURES")
- CSS noise texture on backgrounds
- No shadows
- Asymmetric layouts — not everything centered

---

## Radius

`--radius: 0rem` (0px). Sharp rectangles.

---

## Typography

- Oversized headings (64px+ h1)
- Visible grid structure

---

## Motion

- Minimal
- Hard cuts
- 150ms linear — no easing

---

## Sidebar

- 280px
- Thick 4px right border
- ALL CAPS nav labels

---

## Visual Signature

- Thick borders everywhere
- ALL CAPS section labels
- Noise texture
- Asymmetric grid layouts
- Raw structural exposure — the layout IS the design

---

## Component Overrides

| Component | Brutalist Styling                                                                        |
|-----------|------------------------------------------------------------------------------------------|
| Button    | 3px border, no fill (outline only), ALL CAPS label, hover: invert (fill + contrast text) |
| Card      | 4px border, visible header label ("CARD: [title]"), no shadow                            |
| Input     | 2px bottom-border only, no outline, uppercase placeholder                                |

---

## AVOID

- Soft rounded shapes
- Glossy anything
- Thin borders (<3px)
- Centered-everything layouts
- Numbered section pattern (that's Swiss)
- Shadows of any kind
