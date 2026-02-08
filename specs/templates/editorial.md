# T5 — Editorial (Print/Magazine)

**Philosophy:** The web as a printed page. Typography-driven.

**References:** nytimes.com, medium.com, stripe.com/press

**Fonts:** `@fontsource/fraunces` (headings, weights 400/600/700) + `@fontsource/source-serif-4` (body, weights 400/500) + `@fontsource/jetbrains-mono` (code/data, weight 400)

---

## Colors

| Token         | Dark    | Light   |
|---------------|---------|---------|
| background    | #1c1917 | #fffdf8 |
| foreground    | #fafaf9 | #1c1917 |
| primary (ink) | #c084fc | #7c3aed |
| primary-fg    | #ffffff | #ffffff |
| secondary     | #a3a3a3 | #525252 |
| secondary-fg  | #1c1917 | #ffffff |
| muted         | #292524 | #f5f0eb |
| muted-fg      | #a8a29e | #78716c |
| accent        | #c084fc | #7c3aed |
| accent-fg     | #ffffff | #ffffff |
| destructive   | #ef4444 | #dc2626 |
| border        | #3f3f3e | #d6d3d1 |
| card          | #211f1d | #fffdf8 |
| card-fg       | #fafaf9 | #1c1917 |
| ring          | #c084fc | #7c3aed |

---

## Surface Treatment

- Minimal borders
- Whitespace and typographic hierarchy separate content
- Thin hairline dividers (1px, low opacity)
- Drop caps on hero paragraphs
- Pull quotes styled distinctly

---

## Radius

`--radius: 0.125rem` (2px). Almost imperceptible.

---

## Typography

- Large serif headings (56px+)
- Line-height 1.7+ for body
- Drop cap first letter

---

## Motion

- Elegant fades
- 400ms ease-in-out
- No bounce
- Page-turn elegance

---

## Sidebar

- 220px
- No border — separated by whitespace only
- Serif nav labels

---

## Visual Signature

- Drop caps
- Hairline dividers
- Pull quotes
- Serif typography dominance
- Editorial white space
- Dashboard presented as a "weekly engineering report" — prose summaries alongside data tables

---

## Component Overrides

| Component | Editorial Styling                                                     |
|-----------|-----------------------------------------------------------------------|
| Button    | Very subtle, thin 1px border, small-caps label, gentle hover bg shift |
| Card      | No border, separated by whitespace, subtle bottom hairline            |
| Input     | Bottom-border only (1px), serif placeholder, elegant focus underline  |

---

## AVOID

- Heavy UI chrome
- Thick borders
- Neon colors
- Sans-serif headings
- Justified text
- Mixing serif/sans in same text block
