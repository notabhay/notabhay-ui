# Architecture — Config Files & Boilerplate

This file contains all the required configuration files for the monorepo and templates.

---

## Root Configuration Files

### Root `package.json`
```json
{
  "name": "notabhay-ui",
  "private": true,
  "workspaces": [
    "apps/*",
    "templates/*",
    "packages/*"
  ],
  "scripts": {
    "build": "bun run --filter '*' build",
    "dev": "bun run --filter '*' dev",
    "lint": "bun run --filter '*' lint",
    "build:packages": "bun run --filter '@notabhay-ui/tokens' build && bun run --filter '@notabhay-ui/ui' build"
  },
  "devDependencies": {
    "typescript": "^5.7",
    "eslint": "^9.0",
    "@eslint/js": "^9.0",
    "typescript-eslint": "^8.0",
    "globals": "^15.0"
  }
}
```

### Root `tsconfig.json`
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
    "declaration": true,
    "declarationMap": true,
    "composite": true
  },
  "exclude": ["node_modules", "dist"]
}
```

### Root `eslint.config.mjs`
```js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2022,
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    ignores: ['**/dist/**', '**/node_modules/**'],
  }
);
```

### Root `.gitignore`
```
node_modules
dist
.vite
*.local
bun.lock
```

---

## Core Stack Dependencies

| Dependency               | Version  | Notes                                               |
|--------------------------|----------|-----------------------------------------------------|
| Vite                     | ^6.x     | With `@vitejs/plugin-react` and `@tailwindcss/vite` |
| React                    | ^19.x    | Latest React 19                                     |
| React DOM                | ^19.x    | Matches React                                       |
| React Router             | ^7.x     | `react-router` (v7 has createBrowserRouter)         |
| Tailwind CSS             | ^4.x     | CSS-first config. No `tailwind.config.ts`.          |
| @tailwindcss/vite        | ^4.x     | Vite plugin for Tailwind v4                         |
| motion                   | ^12.x    | `import from "motion/react"` (NOT framer-motion)    |
| Lucide React             | ^0.400.0 | Icons                                               |
| cmdk                     | ^1.0.0   | Command palette (templates that use it)             |
| sonner                   | ^1.4.0   | Toast notifications                                 |
| Radix UI                 | ^1.1.0   | Primitives (via packages/ui)                        |
| class-variance-authority | ^0.7.0   | Component variant management (shadcn dependency)    |
| clsx                     | ^2.0     | Conditional class joining                           |
| tailwind-merge           | ^2.0     | Merge Tailwind classes                              |

**IMPORTANT:** `framer-motion` is NOT compatible with React 19. Use the `motion` package instead. Import from `motion/react`. The API is nearly identical but the package is React 19 compatible.

**IMPORTANT:** No PostCSS config file needed. Tailwind v4 with `@tailwindcss/vite` handles everything via the Vite plugin. No `postcss.config.js`.

**SPA Routing note:** All templates use `BrowserRouter` (client-side routing). Vite's dev server and `vite preview` handle SPA fallback automatically — direct URL access to `/dashboard` etc. works. If deploying built files to a static host (Netlify, Vercel, Cloudflare Pages), add the appropriate SPA redirect rule (`/* → /index.html`). For local development this is not an issue.

---

## Template Configuration Files

Every template needs these configuration files. Use the exact patterns below.

### Every Template's `vite.config.ts`

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
    port: PORT_NUMBER, // Replace with template's port
  },
  preview: {
    port: PORT_NUMBER, // Same port for `vite preview` after build
  },
  build: {
    outDir: "dist",
  },
});
```

### Every Template's `tsconfig.json`
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

### Every Template's `tsconfig.app.json`
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

### Every Template's `tsconfig.node.json`
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

### Template `package.json` pattern
```json
{
  "name": "@notabhay-ui/[slug]",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --port [PORT]",
    "build": "tsc -b && vite build",
    "lint": "eslint src/",
    "preview": "vite preview"
  },
  "dependencies": {
    "@notabhay-ui/ui": "workspace:*",
    "@notabhay-ui/tokens": "workspace:*",
    "@fontsource/[heading-font]": "^5.0.0",
    "@fontsource/[body-font]": "^5.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router": "^7.0.0",
    "motion": "^12.0.0",
    "lucide-react": "^0.400.0",
    "sonner": "^1.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.7.0",
    "vite": "^6.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0"
  }
}
```

---

## Template Source File Patterns

Every template needs these source files. Use these exact patterns.

### `index.html` (every template)
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

### `src/main.tsx` (every template)
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

### `src/App.tsx` (every template — React Router)
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

### `src/components/layout.tsx` (every template)
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

### `src/components/error-boundary.tsx` (every template)
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

---

## Font Loading via Fontsource

Instead of `next/font/google`, use Fontsource packages. Install as dependencies and import in CSS.

```bash
# Example for Void template:
bun add @fontsource/jetbrains-mono @fontsource/inter
```

Then in `src/index.css`:
```css
@import "tailwindcss";
@import "@fontsource/jetbrains-mono/400.css";
@import "@fontsource/jetbrains-mono/600.css";
@import "@fontsource/jetbrains-mono/700.css";
@import "@fontsource/inter/400.css";
@import "@fontsource/inter/500.css";
@import "@fontsource/inter/600.css";

:root {
  --font-heading: "JetBrains Mono", monospace;
  --font-body: "Inter", sans-serif;
  /* ... all CSS variables ... */
}
```

And register font families in `@theme inline`:
```css
@theme inline {
  --font-heading: var(--font-heading);
  --font-body: var(--font-body);
  /* ... all color mappings ... */
}
```

Now `font-heading` and `font-body` utility classes are available.

---

## Theme Toggle Component (every template)

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

## Dashboard Sidebar (every template)

Every template's dashboard has a sidebar:
- **Desktop (lg+):** Fixed sidebar, full height. Width varies per template aesthetic.
- **Tablet (md):** Collapsed to icons-only (56-64px).
- **Mobile (sm):** Off-canvas drawer, triggered by hamburger.
- Sidebar state managed with `useState` + `React.createContext`.

---

## Installation Sequence (IMPORTANT)

Bun workspace dependency resolution requires packages to exist before they can be referenced. Follow this order:

1. Create ALL `package.json` files first — root, `packages/tokens`, `packages/ui`, ALL 9 `templates/*`, and `apps/showcase`. This happens in Phase 1 (steps 2-7).
2. Run `bun install` ONCE at the root (Phase 1 step 8) — this resolves all workspaces
3. Build shared packages: `cd packages/tokens && bun run build && cd ../ui && bun run build` (Phase 1 step 9)
4. Sub-agents fill out template source files (Phase 2) — `package.json` stubs already exist
5. After all templates complete, build everything from root (Phase 3)

**Do NOT run `bun install` in individual workspace directories.** Bun workspaces handle resolution from the root. The only exception is `bun add` for Fontsource packages inside a template dir.

**Do NOT run multiple `bun install` commands simultaneously.** Sequential only.
