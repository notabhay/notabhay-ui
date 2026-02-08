# T1 — Void (Minimal Dark)

**Philosophy:** The design disappears. Content speaks.

**References:** linear.app, vercel.com, raycast.com

**Fonts:** `@fontsource/jetbrains-mono` (headings, weights 400/600/700) + `@fontsource/inter` (body, weights 400/500/600)

---

## Colors (hex → convert to OKLCH for CSS vars)

| Token            | Dark    | Light   |
|------------------|---------|---------|
| background       | #0a0a0a | #fafafa |
| foreground       | #fafafa | #0a0a0a |
| primary          | #3b82f6 | #3b82f6 |
| primary-fg       | #ffffff | #ffffff |
| secondary        | #18181b | #f5f5f5 |
| secondary-fg     | #fafafa | #0a0a0a |
| muted            | #18181b | #f5f5f5 |
| muted-foreground | #a1a1aa | #737373 |
| accent           | #18181b | #f5f5f5 |
| accent-fg        | #fafafa | #0a0a0a |
| destructive      | #ef4444 | #dc2626 |
| border           | #27272a | #e4e4e7 |
| input            | #27272a | #e4e4e7 |
| ring             | #3b82f6 | #3b82f6 |
| card             | #0f0f0f | #ffffff |
| card-fg          | #fafafa | #0a0a0a |

---

## Surface Treatment

- No shadows
- No gradients
- 1px borders only
- Differentiate via background shade

---

## Radius

`--radius: 0.375rem` (6px)

---

## Motion

- Fade-in
- 200ms ease-out
- Stagger 80ms

---

## Sidebar

- 240px wide
- Collapses to 64px icons at md
- Drawer at sm

---

## Component Overrides

| Component | Void Styling                                                |
|-----------|-------------------------------------------------------------|
| Button    | 1px border, no shadow, opacity 0.8 on hover, 2px focus ring |
| Card      | 1px border, bg-card, no shadow, no hover effect             |
| Input     | 1px border, bg transparent, focus: ring-2 ring-primary      |

---

## Visual Signature

Nothing. The absence of decoration IS the signature. Monospace headings against sans-serif body create the only visual tension.

---

## AVOID

- Decorative elements
- Shadows
- Gradients
- Rounded corners >8px
- Any hover effect beyond opacity change
- Color beyond primary blue
