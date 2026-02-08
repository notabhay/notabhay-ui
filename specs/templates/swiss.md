# T7 — Swiss (International/Grid)

**Philosophy:** Form follows function. The grid IS the design.

**References:** swissted.com, dieter rams, helveticascene.com

**Fonts:** `@fontsource/space-grotesk` (headings + body, weights 400/500/600/700). One font family — weight variations do the work.

**Font note:** Using Space Grotesk instead of Helvetica Neue (not available on Fontsource/Google Fonts).

---

## Colors

| Token         | Dark    | Light   |
|---------------|---------|---------|
| background    | #111111 | #ffffff |
| foreground    | #ffffff | #111111 |
| primary (red) | #ff0000 | #dc2626 |
| primary-foreground    | #ffffff | #ffffff |
| secondary     | #666666 | #999999 |
| secondary-foreground  | #ffffff | #111111 |
| muted         | #1a1a1a | #f5f5f5 |
| muted-foreground      | #888888 | #666666 |
| accent        | #ff0000 | #dc2626 |
| accent-foreground     | #ffffff | #ffffff |
| destructive   | #ef4444 | #dc2626 |
| border        | #333333 | #dddddd |
| card          | #161616 | #ffffff |
| card-foreground       | #ffffff | #111111 |
| ring          | #ff0000 | #dc2626 |

**Accessibility note:** Light mode red changed to `#dc2626` for WCAG AA body text compliance. Pure `#ff0000` only for large headings/decorative use.

---

## Surface Treatment

- Flat. Zero shadows. Zero gradients.
- Visible CSS grid lines as design elements
- Strong horizontal/vertical alignment
- Red used sparingly — mostly black/white/gray

---

## Radius

`--radius: 0rem` (0px). Zero.

---

## Typography

- Strict modular scale
- UPPERCASE labels
- Tight letter-spacing (-0.03em headings)
- Numbered sections ("01 — Features", "02 — Dashboard")
- Generous whitespace

---

## Motion

- Precise 200ms linear
- No easing
- Slide transitions, not fades

---

## Sidebar

- 200px
- Visible left-aligned grid
- Numbered nav items ("01 Home", "02 Dashboard")

---

## Visual Signature

- Visible baseline grid lines (CSS)
- Section numbers in fixed left column
- Strong left-alignment — no center-aligned text
- Grid overlays as decoration
- The mathematical precision IS the identity

---

## Differentiator from Void

Swiss has VISIBLE grid structure (CSS grid lines, numbered sections, explicit column layouts). Void has NO visible structure — it's negative space. Swiss is ordered, Void is empty.

---

## Component Overrides

| Component | Swiss Styling                                                                                 |
|-----------|-----------------------------------------------------------------------------------------------|
| Button    | 0px radius, 1px border, UPPERCASE label, no shadow, mechanical hover (bg swap, no transition) |
| Card      | 0px radius, 1px border, visible label/number, strict padding grid                             |
| Input     | 0px radius, 1px border, uppercase placeholder, no rounded corners                             |

---

## AVOID

- Center-aligned text
- Decoration
- Organic shapes
- Multiple accent colors
- Rounded anything
- Playfulness
- Thick borders (that's Brutalist)
- Curves
- Ornament
