// Type declarations for workspace packages to prevent tsc from traversing
// into raw source files that use their own path aliases.

declare module "@notabhay-ui/ui" {
  import type { ComponentProps, ReactNode } from "react";

  // Button
  export const buttonVariants: (props?: {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  }) => string;

  export function Button(
    props: ComponentProps<"button"> & {
      variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
      size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
      asChild?: boolean;
    }
  ): ReactNode;

  // Input
  export function Input(props: ComponentProps<"input">): ReactNode;

  // Card
  export function Card(props: ComponentProps<"div">): ReactNode;
  export function CardHeader(props: ComponentProps<"div">): ReactNode;
  export function CardTitle(props: ComponentProps<"div">): ReactNode;
  export function CardDescription(props: ComponentProps<"div">): ReactNode;
  export function CardContent(props: ComponentProps<"div">): ReactNode;
  export function CardFooter(props: ComponentProps<"div">): ReactNode;
  export function CardAction(props: ComponentProps<"div">): ReactNode;

  // Dialog
  export function Dialog(props: { children?: ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void }): ReactNode;
  export function DialogTrigger(props: ComponentProps<"button"> & { asChild?: boolean }): ReactNode;
  export function DialogContent(props: ComponentProps<"div"> & { showCloseButton?: boolean }): ReactNode;
  export function DialogHeader(props: ComponentProps<"div">): ReactNode;
  export function DialogTitle(props: ComponentProps<"h2">): ReactNode;
  export function DialogDescription(props: ComponentProps<"p">): ReactNode;
  export function DialogFooter(props: ComponentProps<"div"> & { showCloseButton?: boolean }): ReactNode;
  export function DialogClose(props: ComponentProps<"button"> & { asChild?: boolean }): ReactNode;
  export function DialogOverlay(props: ComponentProps<"div">): ReactNode;
  export function DialogPortal(props: { children?: ReactNode }): ReactNode;

  // Table
  export function Table(props: ComponentProps<"table">): ReactNode;
  export function TableHeader(props: ComponentProps<"thead">): ReactNode;
  export function TableBody(props: ComponentProps<"tbody">): ReactNode;
  export function TableRow(props: ComponentProps<"tr">): ReactNode;
  export function TableHead(props: ComponentProps<"th">): ReactNode;
  export function TableCell(props: ComponentProps<"td">): ReactNode;
  export function TableFooter(props: ComponentProps<"tfoot">): ReactNode;
  export function TableCaption(props: ComponentProps<"caption">): ReactNode;

  // Badge
  export const badgeVariants: (props?: {
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  }) => string;

  export function Badge(
    props: ComponentProps<"span"> & {
      variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
      asChild?: boolean;
    }
  ): ReactNode;

  // Tabs
  export const tabsListVariants: (props?: {
    variant?: "default" | "line";
  }) => string;

  export function Tabs(
    props: {
      children?: ReactNode;
      defaultValue?: string;
      value?: string;
      onValueChange?: (value: string) => void;
      orientation?: "horizontal" | "vertical";
      className?: string;
    }
  ): ReactNode;
  export function TabsList(
    props: ComponentProps<"div"> & {
      variant?: "default" | "line";
    }
  ): ReactNode;
  export function TabsTrigger(
    props: ComponentProps<"button"> & {
      value: string;
    }
  ): ReactNode;
  export function TabsContent(
    props: ComponentProps<"div"> & {
      value: string;
    }
  ): ReactNode;

  // Theme
  export function ThemeProvider(props: {
    children: ReactNode;
    defaultTheme?: "dark" | "light" | "system";
    storageKey?: string;
  }): ReactNode;

  export function useTheme(): {
    theme: "dark" | "light" | "system";
    setTheme: (theme: "dark" | "light" | "system") => void;
    resolvedTheme: "dark" | "light";
  };

  // Utils
  export function cn(...inputs: (string | undefined | null | false | Record<string, boolean>)[]): string;

  // Types
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
}

declare module "@notabhay-ui/tokens" {
  export const screens: {
    readonly sm: "640px";
    readonly md: "768px";
    readonly lg: "1024px";
    readonly xl: "1280px";
    readonly "2xl": "1536px";
  };
}
