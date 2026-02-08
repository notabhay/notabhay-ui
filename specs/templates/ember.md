# T8 — Ember (Dark Luxury)

**Philosophy:** Premium, rich, exclusive.

**References:** stripe.com, notion.so dark, luxury brand sites

**Fonts:** `@fontsource/cormorant-garamond` (headings, weights 400/600/700) + `@fontsource/inter` (body, weights 400/500)

**Font note:** Using Cormorant Garamond instead of Instrument Serif (which only has weight 400 and can't do bold headings).

---

## Colors

| Token          | Dark    | Light   |
|----------------|---------|---------|
| background     | #09090b | #faf9f6 |
| foreground     | #fafaf9 | #09090b |
| primary (gold) | #d4a574 | #92400e |
| primary-fg     | #09090b | #ffffff |
| secondary      | #27272a | #f0ebe4 |
| secondary-fg   | #fafaf9 | #09090b |
| muted          | #18181b | #f5f0eb |
| muted-fg       | #a1a1aa | #78716c |
| accent         | #d4a574 | #92400e |
| accent-fg      | #09090b | #ffffff |
| destructive    | #ef4444 | #dc2626 |
| border         | #27272a | #d6cec4 |
| card           | #0f0f11 | #faf9f6 |
| card-fg        | #fafaf9 | #09090b |
| ring           | #d4a574 | #92400e |

**Accessibility note:** Light mode gold darkened to `#92400e` for AA compliance. Light muted and border adjusted for better surface differentiation.

---

## Surface Treatment

- Very subtle warm gradients (near-imperceptible)
- Fine 1px borders
- Extremely subtle shadows (`0 1px 2px rgba(0,0,0,0.2)`)
- CSS grain/noise texture overlay (subtle)
- Fine gold horizontal rules between sections

---

## Radius

`--radius: 0.5rem` (8px). Buttons 6px, modals 12px.

---

## Typography

- Serif headings are the statement (56px+ hero)
- Generous spacing
- Subtle letter-spacing

---

## Motion

- Slow, luxurious
- 400ms ease-out-expo
- Scale 1.01 on hover (barely perceptible)
- Everything feels expensive

---

## Sidebar

- 240px
- Separated by thin gold rule (not border)
- Serif nav labels

---

## Visual Signature

- CSS grain/noise texture overlay
- Gold horizontal rules as section dividers
- Warm gradients
- The serif headings + gold accent combo is the identity

---

## Differentiator from Void

Ember has GRAIN TEXTURE, gold accent rules, warm serif headings, and subtle gradients. Void has NONE of these — it's clean, cold, sans-serif. Ember is warm luxury, Void is cold minimalism.

---

## Component Overrides

| Component | Ember Styling                                                             |
|-----------|---------------------------------------------------------------------------|
| Button    | Subtle warm gradient bg, 1px border, very soft shadow, refined hover glow |
| Card      | 1px border, subtle grain texture, gold top-border (2px) as accent         |
| Input     | 1px border, warm bg-muted, focus: gold ring, serif labels                 |

---

## AVOID

- Bright neon colors
- Thick borders
- Childish elements
- All-caps (luxury is subtle not shouty)
- Cheap speed (all transitions slow)
- Cold blues
- Monospace fonts
