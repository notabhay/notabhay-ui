# T6 — Glass (Glassmorphism)

**Philosophy:** Layers of translucent surfaces floating in space.

**References:** apple.com (macOS UI), cosmos.so, ui.glass

**Fonts:** `@fontsource/inter` (everything, weights 400/500/600/700). Clean sans-serif lets the glass be the star.

---

## Colors

| Token        | Dark               | Light              |
|--------------|--------------------|--------------------|
| background   | #0f0f23            | #f0f4ff            |
| foreground   | #f1f5f9            | #0f172a            |
| primary      | #818cf8            | #6366f1            |
| primary-foreground   | #ffffff            | #ffffff            |
| secondary    | #334155            | #e2e8f0            |
| secondary-foreground | #f1f5f9            | #0f172a            |
| muted        | #1a1a30            | #e8ecf4            |
| muted-foreground     | #94a3b8            | #475569            |
| accent       | #818cf8            | #6366f1            |
| accent-foreground    | #ffffff            | #ffffff            |
| destructive  | #ef4444            | #dc2626            |
| border       | oklch(1 0 0 / 10%) | oklch(0 0 0 / 8%)  |
| card         | oklch(1 0 0 / 6%)  | oklch(1 0 0 / 70%) |
| card-foreground      | #f1f5f9            | #0f172a            |
| ring         | #818cf8            | #6366f1            |

**Accessibility note:** Minimum card background opacity: 0.06 dark / 0.6 light (text MUST be readable through glass). Max 2 glass layers stacked.

---

## Surface Treatment

- `backdrop-filter: blur(16px)` on cards, dialogs, sidebar
- Semi-transparent backgrounds
- Background MUST have a gradient mesh/abstract gradient orbs so blur has something to diffuse against

---

## Radius

`--radius: 1rem` (16px). Buttons 12px, modals 20px.

---

## Motion

- Smooth 250ms ease-out
- Scale + fade on entry
- Subtle shadow shift on hover

---

## Sidebar

- 240px
- Glass effect
- Gradient orb behind it

---

## Visual Signature

Gradient orbs (2-3 abstract colored blobs, blurred, positioned behind glass surfaces). Required — without these the glass has nothing to show through. The frosted glass + floating orbs combo is the identity.

---

## Component Overrides

| Component | Glass Styling                                                      |
|-----------|--------------------------------------------------------------------|
| Button    | Glass bg + blur, white border at 10% opacity, glow shadow on hover |
| Card      | Glass bg + blur, white border at 10%, gradient orb visible behind  |
| Input     | Glass bg, subtle border, focus: ring + glow                        |

---

## AVOID

- Opaque flat surfaces
- Heavy borders
- Sharp corners
- Stacking >2 blur layers
- Text on glass without semi-opaque backing
- Dark text on dark glass
