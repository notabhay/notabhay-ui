# Shared Packages — packages/tokens/ and packages/ui/

This file contains the structure and code for the two shared packages.

---

## packages/tokens/

Shared structural tokens exported as a simple TypeScript module. NOT a Tailwind preset (v4 doesn't use JS presets the same way). Instead, export constants that templates can reference.

```
packages/tokens/
├── src/
│   ├── index.ts
│   └── screens.ts
├── package.json
└── tsconfig.json
```

### packages/tokens/src/screens.ts
```ts
export const screens = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;
```

### packages/tokens/src/index.ts
```ts
export { screens } from './screens';
```

### packages/tokens/package.json
```json
{
  "name": "@notabhay-ui/tokens",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "build": "tsc --noEmit",
    "lint": "eslint src/"
  }
}
```

### packages/tokens/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "noEmit": true
  },
  "include": ["src"]
}
```

---

## packages/ui/

Shared components built on shadcn/Radix + shared ThemeProvider + shared mock data types.

```
packages/ui/
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       ├── table.tsx
│   │       ├── badge.tsx
│   │       └── tabs.tsx
│   ├── lib/
│   │   ├── utils.ts          # cn() helper
│   │   └── theme-provider.tsx # Dark/light mode provider
│   ├── types/
│   │   └── mock-data.ts      # Shared TypeScript types
│   └── index.ts              # Barrel export
├── components.json
├── package.json
├── tsconfig.json
└── src/index.css              # Base shadcn CSS (imported by consumers)
```

### packages/ui/tsconfig.json
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
    "noEmit": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

### packages/ui/components.json
```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

**IMPORTANT:** `"rsc": false` — we're NOT using React Server Components.

### packages/ui/package.json
```json
{
  "name": "@notabhay-ui/ui",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./components/*": "./src/components/ui/*.tsx",
    "./lib/*": "./src/lib/*.ts",
    "./lib/theme-provider": "./src/lib/theme-provider.tsx",
    "./types/*": "./src/types/*.ts",
    "./index.css": "./src/index.css"
  },
  "scripts": {
    "build": "tsc --noEmit",
    "lint": "eslint src/"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@radix-ui/react-dialog": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.0",
    "@radix-ui/react-slot": "^1.1.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0",
    "lucide-react": "^0.400.0",
    "sonner": "^1.4.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0"
  },
  "peerDependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  }
}
```

### packages/ui/src/lib/utils.ts
```ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### packages/ui/src/lib/theme-provider.tsx (Shared ThemeProvider)

This replaces `next-themes`. Simple React context that toggles `.dark` class on `<html>`.

```tsx
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
}

interface ThemeProviderState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "notabhay-ui-theme",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<"dark" | "light">(() =>
    theme === "system" ? getSystemTheme() : theme
  );

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      localStorage.setItem(storageKey, newTheme);
    },
    [storageKey]
  );

  // Apply resolved theme to DOM
  useEffect(() => {
    const resolved = theme === "system" ? getSystemTheme() : theme;
    setResolvedTheme(resolved);
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolved);
  }, [theme]);

  // Listen for OS theme changes when in "system" mode
  useEffect(() => {
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const resolved = e.matches ? "dark" : "light";
      setResolvedTheme(resolved);
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(resolved);
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, [theme]);

  return (
    <ThemeProviderContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeProviderContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
```

### 8 Shared Components

| Component | Variants                                                                    | Sizes      |
|-----------|-----------------------------------------------------------------------------|------------|
| Button    | default, outline, ghost, destructive                                        | sm, md, lg |
| Input     | default, error                                                              | sm, md, lg |
| Card      | default (+ CardHeader, CardTitle, CardDescription, CardContent, CardFooter) | —          |
| Dialog    | default                                                                     | sm, md, lg |
| Toast     | default, success, error, warning (via sonner)                               | —          |
| Table     | default, striped (+ TableHeader, TableBody, TableRow, TableHead, TableCell) | —          |
| Badge     | default, outline, success, warning, error                                   | sm, md     |
| Tabs      | default, underlined, pills                                                  | —          |

Install shadcn in `packages/ui/`:

```bash
cd packages/ui
bunx shadcn@3.8.4 init
# Select: New York style, Neutral base, CSS variables: yes
bunx shadcn@3.8.4 add button input card dialog table badge tabs
bun add sonner
```

**Pin shadcn CLI to 3.8.4.** Do NOT use `@latest` — CLI updates can introduce breaking changes mid-build. If 3.8.4 is unavailable, use the latest 3.x release.

Components use `bg-primary`, `text-foreground` etc. — they automatically adapt to each template's CSS variables via the `@theme inline` mapping.

### packages/ui/src/index.ts (barrel export)
```ts
// Components
export { Button, buttonVariants } from "./components/ui/button";
export { Input } from "./components/ui/input";
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";
export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./components/ui/dialog";
export {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "./components/ui/table";
export { Badge, badgeVariants } from "./components/ui/badge";
export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "./components/ui/tabs";

// Theme
export { ThemeProvider, useTheme } from "./lib/theme-provider";

// Utils
export { cn } from "./lib/utils";

// Types
export type { StatCard, Deploy, WeeklyDeploys } from "./types/mock-data";
```

### Mock Data Types

```ts
// packages/ui/src/types/mock-data.ts
export interface StatCard {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface Deploy {
  service: string;
  environment: "production" | "staging";
  status: "success" | "failed" | "pending";
  author: string;
  timestamp: string;
}

export interface WeeklyDeploys {
  day: string;
  count: number;
}
```
