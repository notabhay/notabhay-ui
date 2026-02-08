# CSS Variable Contract — OKLCH Color Reference

This file contains the full CSS variable contract, color derivation rules, and hex-to-OKLCH conversion reference.

---

## Hex to OKLCH Conversion

Convert hex colors to OKLCH. Here's the approach:

```
#0a0a0a → oklch(0.145 0 0)        // near-black
#fafafa → oklch(0.985 0 0)        // near-white
#3b82f6 → oklch(0.623 0.214 259.1) // blue
#dc2626 → oklch(0.577 0.245 27.3)  // red
#22d3ee → oklch(0.789 0.154 194.8) // cyan
```

Use an OKLCH color converter tool or CSS `oklch()` directly. The format is `oklch(Lightness Chroma Hue)` where:
- Lightness: 0 (black) to 1 (white)
- Chroma: 0 (gray) to ~0.4 (vivid)
- Hue: 0-360 degrees

---

## OKLCH Color Reference Table

Common hex-to-OKLCH conversions used across templates:

```
/* Grays */
#0a0a0a → oklch(0.145 0 0)
#0f0f0f → oklch(0.16 0 0)
#111111 → oklch(0.175 0 0)
#18181b → oklch(0.21 0.006 285.8)
#1a1a1a → oklch(0.22 0 0)
#27272a → oklch(0.278 0.006 285.8)
#333333 → oklch(0.313 0 0)
#404040 → oklch(0.371 0 0)
#525252 → oklch(0.439 0 0)
#666666 → oklch(0.506 0 0)
#737373 → oklch(0.556 0 0)
#888888 → oklch(0.617 0 0)
#999999 → oklch(0.66 0 0)
#a1a1aa → oklch(0.708 0.013 286)
#a3a3a3 → oklch(0.71 0 0)
#d6d3d1 → oklch(0.878 0.005 56)
#dddddd → oklch(0.894 0 0)
#e2e8f0 → oklch(0.929 0.013 255)
#e4e4e7 → oklch(0.922 0.004 286)
#f5f5f5 → oklch(0.97 0 0)
#fafafa → oklch(0.985 0 0)
#fafaf9 → oklch(0.985 0.002 106)
#ffffff → oklch(1 0 0)

/* Blues */
#3b82f6 → oklch(0.623 0.214 259.1)
#2563eb → oklch(0.546 0.245 262.9)
#818cf8 → oklch(0.672 0.176 277)
#6366f1 → oklch(0.585 0.233 277)

/* Cyans/Teals */
#22d3ee → oklch(0.789 0.154 194.8)
#06b6d4 → oklch(0.679 0.141 199.7)

/* Greens */
#a3e635 → oklch(0.841 0.238 128.8)
#4d7c0f → oklch(0.516 0.136 131.6)
#86efac → oklch(0.871 0.15 156)
#16a34a → oklch(0.59 0.18 152)

/* Reds */
#dc2626 → oklch(0.577 0.245 27.3)
#ef4444 → oklch(0.637 0.237 25.3)
#ff0000 → oklch(0.628 0.258 29.2)

/* Purples/Violets */
#c084fc → oklch(0.714 0.185 305)
#7c3aed → oklch(0.541 0.281 293)
#a855f7 → oklch(0.627 0.265 303.9)
#9333ea → oklch(0.553 0.288 296)

/* Pinks */
#f472b6 → oklch(0.718 0.18 349)
#e11d48 → oklch(0.57 0.255 15.2)
#ec4899 → oklch(0.645 0.246 16.4)

/* Yellows/Oranges */
#d4a574 → oklch(0.756 0.088 72)
#92400e → oklch(0.447 0.114 52)
#ca8a04 → oklch(0.667 0.16 83)

/* Special (template-specific backgrounds) */
#0c0c14 → oklch(0.16 0.015 284)
#f8fafc → oklch(0.985 0.005 255)
#0f172a → oklch(0.208 0.042 265)
#1c1917 → oklch(0.216 0.006 56)
#fffdf8 → oklch(0.996 0.005 84)
#0f0f23 → oklch(0.178 0.029 284)
#f0f4ff → oklch(0.97 0.014 255)
#09090b → oklch(0.145 0.005 286)
#faf9f6 → oklch(0.982 0.005 84)
#f5f0eb → oklch(0.959 0.01 74)
#1a1518 → oklch(0.2 0.012 340)
#fef7f0 → oklch(0.98 0.015 74)
#2d1f1a → oklch(0.254 0.03 52)
#faebd7 → oklch(0.947 0.027 80)
#e8c9a8 → oklch(0.853 0.055 72)
#1a1025 → oklch(0.19 0.04 300)
#fffbfe → oklch(0.993 0.005 340)
#faf5ff → oklch(0.98 0.015 305)
#f0e4ff → oklch(0.93 0.04 300)
#2e1f3e → oklch(0.25 0.05 300)
```

**Note:** These are approximations. Use a converter for exact values. For grays, C=0 and H is irrelevant.
