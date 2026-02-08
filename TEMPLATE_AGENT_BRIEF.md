# Template Agent Brief

You are building one template for the notabhay-ui project. This document contains everything you need.

---

## Architecture

Each template lives at `templates/[slug]/` and is a standalone Vite + React 19 + TypeScript SPA.

### Directory Structure
```
templates/[slug]/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css              # CSS variables + Tailwind + Fontsource imports
│   ├── pages/
│   │   ├── home.tsx
│   │   ├── dashboard.tsx
│   │   ├── components.tsx
│   │   ├── login.tsx
│   │   └── signup.tsx
│   ├── components/
│   │   ├── layout.tsx
│   │   ├── error-boundary.tsx
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   └── theme-toggle.tsx
│   └── lib/
│       └── mock-data.ts
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.node.json
```

**package.json already exists as a stub. Do NOT recreate or modify it.**

### vite.config.ts
```ts
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: PORT_NUMBER, // Use your template's assigned port
  },
  preview: {
    port: PORT_NUMBER,
  },
  build: {
    outDir: "dist",
  },
});
```

### tsconfig.json
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### tsconfig.app.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "composite": true,
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### tsconfig.node.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "composite": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}
```

### index.html
```html
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Flux — [Template Name]</title>
  </head>
  <body class="font-body antialiased bg-background text-foreground">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### src/main.tsx
```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "@notabhay-ui/ui";
import { Toaster } from "sonner";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <App />
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
```

### src/App.tsx
```tsx
import { Routes, Route } from "react-router";
import { Layout } from "@/components/layout";
import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import Components from "@/pages/components";
import Login from "@/pages/login";
import Signup from "@/pages/signup";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="components" element={<Components />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
    </Routes>
  );
}
```

### src/components/layout.tsx
```tsx
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { Sidebar } from "./sidebar";
import { ErrorBoundary } from "./error-boundary";

export function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === "/dashboard";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {isDashboard ? (
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1">
            <ErrorBoundary>
              <Outlet />
            </ErrorBoundary>
          </main>
        </div>
      ) : (
        <main className="flex-1">
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </main>
      )}
      {!isDashboard && <Footer />}
    </div>
  );
}
```

### src/components/error-boundary.tsx
```tsx
import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="flex flex-1 items-center justify-center p-8">
            <div className="text-center space-y-2">
              <p className="text-lg font-heading text-destructive">Something went wrong</p>
              <p className="text-sm text-muted-foreground">{this.state.error?.message}</p>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
```

### src/components/theme-toggle.tsx
```tsx
import { Moon, Sun } from "lucide-react";
import { useTheme, Button } from "@notabhay-ui/ui";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
```

---

## CSS Variable Contract (CRITICAL)

Every template MUST define ALL of these variables in `src/index.css`. The shared components from `@notabhay-ui/ui` depend on them.

```css
@import "tailwindcss";
/* Import Fontsource packages here */

:root {
  --radius: [value];
  --font-heading: "[Font Name]", [fallback];
  --font-body: "[Font Name]", [fallback];
  --background: oklch(L C H);
  --foreground: oklch(L C H);
  --card: oklch(L C H);
  --card-foreground: oklch(L C H);
  --popover: oklch(L C H);
  --popover-foreground: oklch(L C H);
  --primary: oklch(L C H);
  --primary-foreground: oklch(L C H);
  --secondary: oklch(L C H);
  --secondary-foreground: oklch(L C H);
  --muted: oklch(L C H);
  --muted-foreground: oklch(L C H);
  --accent: oklch(L C H);
  --accent-foreground: oklch(L C H);
  --destructive: oklch(L C H);
  --destructive-foreground: oklch(L C H);
  --border: oklch(L C H);
  --input: oklch(L C H);
  --ring: oklch(L C H);
  --chart-1: oklch(L C H);
  --chart-2: oklch(L C H);
  --chart-3: oklch(L C H);
  --chart-4: oklch(L C H);
  --chart-5: oklch(L C H);
  --sidebar: oklch(L C H);
  --sidebar-foreground: oklch(L C H);
  --sidebar-primary: oklch(L C H);
  --sidebar-primary-foreground: oklch(L C H);
  --sidebar-accent: oklch(L C H);
  --sidebar-accent-foreground: oklch(L C H);
  --sidebar-border: oklch(L C H);
  --sidebar-ring: oklch(L C H);
}

.dark {
  /* Same variables, dark mode values */
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --font-heading: var(--font-heading);
  --font-body: var(--font-body);
}
```

### Color Derivation Rules

Your template spec lists core tokens. You MUST also define these additional tokens. Derive them as follows:

| Missing Token              | Derive From                                                |
|----------------------------|------------------------------------------------------------|
| popover                    | Same as `card`                                             |
| popover-foreground         | Same as `card-foreground`                                  |
| destructive-foreground     | `oklch(1 0 0)` (white)                                    |
| input                      | Same as `border`                                           |
| chart-1                    | Same as `primary`                                          |
| chart-2                    | Same as `secondary` (if too muted, shift chroma +0.05)     |
| chart-3                    | Same as `accent`                                           |
| chart-4                    | Blend of primary + secondary (average L, C, H)             |
| chart-5                    | Same as `muted-foreground`                                 |
| sidebar                    | Same as `secondary`                                        |
| sidebar-foreground         | Same as `secondary-foreground`                             |
| sidebar-primary            | Same as `primary`                                          |
| sidebar-primary-foreground | Same as `primary-foreground`                               |
| sidebar-accent             | Same as `accent`                                           |
| sidebar-accent-foreground  | Same as `accent-foreground`                                |
| sidebar-border             | Same as `border`                                           |
| sidebar-ring               | Same as `ring`                                             |

### Hex to OKLCH Reference
```
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
#3b82f6 → oklch(0.623 0.214 259.1)
#2563eb → oklch(0.546 0.245 262.9)
#818cf8 → oklch(0.672 0.176 277)
#6366f1 → oklch(0.585 0.233 277)
#22d3ee → oklch(0.789 0.154 194.8)
#06b6d4 → oklch(0.679 0.141 199.7)
#a3e635 → oklch(0.841 0.238 128.8)
#4d7c0f → oklch(0.516 0.136 131.6)
#86efac → oklch(0.871 0.15 156)
#16a34a → oklch(0.59 0.18 152)
#dc2626 → oklch(0.577 0.245 27.3)
#ef4444 → oklch(0.637 0.237 25.3)
#ff0000 → oklch(0.628 0.258 29.2)
#c084fc → oklch(0.714 0.185 305)
#7c3aed → oklch(0.541 0.281 293)
#a855f7 → oklch(0.627 0.265 303.9)
#9333ea → oklch(0.553 0.288 296)
#f472b6 → oklch(0.718 0.18 349)
#e11d48 → oklch(0.57 0.255 15.2)
#ec4899 → oklch(0.645 0.246 16.4)
#d4a574 → oklch(0.756 0.088 72)
#92400e → oklch(0.447 0.114 52)
#ca8a04 → oklch(0.667 0.16 83)
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

---

## Demo Content — Flux

All templates use the same fictional product: **Flux — an analytics platform for developer teams.**

### Flux Copy
- **Tagline:** "Ship faster with real-time developer analytics"
- **Subtitle:** "Flux gives engineering teams visibility into deploy frequency, code review velocity, and incident response — so you can measure what matters."
- **Features:**
  1. Real-time Dashboards — "Live metrics that update as your team ships."
  2. Deploy Tracking — "Every deploy, tagged and tracked."
  3. Review Velocity — "PR open → review → merge timelines. Find bottlenecks."
  4. Incident Timeline — "MTTR, severity trends, and on-call load in one view."
- **Nav items:** Home, Dashboard, Components, Login

### Dashboard Mock Data

#### Stat cards (4)
| Label           | Value | Change | Trend |
|-----------------|-------|--------|-------|
| Total Deploys   | 1,284 | +12.5% | up    |
| Avg Review Time | 4.2h  | -8.3%  | down  |
| Active PRs      | 23    | +2     | up    |
| Incidents (30d) | 7     | -22.2% | down  |

#### Recent Deploys table (8 rows)
| Service       | Environment | Status  | Author      | Timestamp        |
|---------------|-------------|---------|-------------|------------------|
| api-gateway   | production  | success | Sarah Chen  | 2024-01-15 14:32 |
| auth-service  | staging     | success | Marcus Webb | 2024-01-15 14:18 |
| web-app       | production  | failed  | Priya Patel | 2024-01-15 13:55 |
| data-pipeline | production  | success | Alex Kojima | 2024-01-15 12:41 |
| api-gateway   | staging     | success | Sarah Chen  | 2024-01-15 11:22 |
| web-app       | staging     | success | Jordan Lee  | 2024-01-15 10:08 |
| auth-service  | production  | success | Marcus Webb | 2024-01-15 09:45 |
| notifications | production  | success | Priya Patel | 2024-01-15 08:30 |

#### Chart: Deploys This Week (Pure CSS bar chart)
- Mon: 18, Tue: 24, Wed: 31, Thu: 22, Fri: 28, Sat: 8, Sun: 4

### Auth Pages
**Login:** Email + password + "Remember me" checkbox + submit. Validate email format and password min 8 chars on blur. Errors below fields in destructive color.

**Signup:** Full name + email + password (with strength indicator: weak/medium/strong) + confirm password + submit. Validate on blur.

### Mock Data File (src/lib/mock-data.ts)
Import types from `@notabhay-ui/ui`:
```ts
import type { StatCard, Deploy, WeeklyDeploys } from "@notabhay-ui/ui";
```

---

## Available Shared Components

Import from `@notabhay-ui/ui`:

```ts
import {
  Button, buttonVariants,
  Input,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, CardAction,
  Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose,
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell, TableCaption,
  Badge, badgeVariants,
  Tabs, TabsList, TabsTrigger, TabsContent,
  ThemeProvider, useTheme,
  cn,
} from "@notabhay-ui/ui";
```

### Components Page Requirements
Display ALL 8 components with every variant, size, and state. Organize as vertical sections with anchor IDs (`#button`, `#card`, etc.):
- **Button:** default, outline, ghost, destructive, secondary, link variants × sm, default, lg sizes
- **Input:** default, error states × sm, default, lg sizes
- **Card:** full card with header, title, description, content, footer
- **Dialog:** trigger button + dialog content
- **Table:** with headers, rows, and data
- **Badge:** default, secondary, destructive, outline variants
- **Tabs:** default and line variants
- **Toast:** buttons that trigger toast variants (use `import { toast } from "sonner"`)

---

## Rules

1. Do NOT modify anything outside `templates/[your-slug]/`
2. Do NOT run `bun install` at the root
3. Do NOT recreate or modify `package.json` — it already exists
4. You CAN run `bun add` inside your template dir for Fontsource packages and template-specific deps
5. Do NOT create a `tailwind.config.ts` (Tailwind v4 is CSS-first)
6. Import shared components from `@notabhay-ui/ui`
7. Use Fontsource for fonts, NOT Google Fonts CDN
8. Use `motion/react` for animations, NOT `framer-motion`
9. All colors as OKLCH values in CSS variables
10. Define ALL tokens from the CSS Variable Contract
11. No `any` types, no `eslint-disable`, no `console.log` (except in error boundary)
12. Semantic HTML: `nav`, `main`, `section`, `article`, `aside`, `footer`
13. Focus-visible states on ALL interactive elements
14. Mobile-first: 375px base, enhance for desktop
15. Respect `prefers-reduced-motion` for animations
16. Use the `frontend-design` skill for designing your template

---

## Quality Bar

- Each template MUST be visually distinguishable at a glance
- WCAG AA contrast minimum (4.5:1 body, 3:1 large text)
- Keyboard nav: Tab order, Enter/Space activation, Escape closes modals
- `bun run build` must succeed with zero errors

### AVOID (global)
- Default shadcn styling without visual overrides
- Gray-on-gray as only surface differentiation
- Identical card layouts across templates
- Generic centered hero (heading + subtitle + CTA)
- `@media (prefers-color-scheme)` for dark mode — use `.dark` class only
- Inline styles for colors — use CSS variables via Tailwind utilities
- `framer-motion` — use `motion/react`
- `tailwind.config.ts` — Tailwind v4 is CSS-first

---

## Definition of Done (Your Template)

- [ ] `bun run build` succeeds with zero errors
- [ ] All 5 pages render: `/`, `/dashboard`, `/components`, `/login`, `/signup`
- [ ] Dark/light toggle works
- [ ] Dashboard has 4 stat cards, deploys table, CSS bar chart
- [ ] Login and signup have client-side validation with error display
- [ ] Responsive navbar with hamburger on mobile
- [ ] All 8 shared components render on `/components` with all variants
- [ ] ALL CSS variables from the contract are defined (including derived tokens)
- [ ] Zero hardcoded color values in component files
- [ ] Motion uses `motion/react` and respects `prefers-reduced-motion`
- [ ] Error boundary wraps route outlet
