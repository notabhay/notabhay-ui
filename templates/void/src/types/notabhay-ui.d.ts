declare module "@notabhay-ui/ui" {
  import type { ComponentProps, ReactNode } from "react";

  // Button
  export function Button(
    props: ComponentProps<"button"> & {
      variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
      size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
      asChild?: boolean;
      className?: string;
    }
  ): ReactNode;
  export declare const buttonVariants: (props?: {
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
    className?: string;
  }) => string;

  // Input
  export function Input(props: ComponentProps<"input"> & { className?: string }): ReactNode;

  // Card
  export function Card(props: ComponentProps<"div"> & { className?: string }): ReactNode;
  export function CardHeader(props: ComponentProps<"div"> & { className?: string }): ReactNode;
  export function CardTitle(props: ComponentProps<"div"> & { className?: string }): ReactNode;
  export function CardDescription(props: ComponentProps<"div"> & { className?: string }): ReactNode;
  export function CardContent(props: ComponentProps<"div"> & { className?: string }): ReactNode;
  export function CardFooter(props: ComponentProps<"div"> & { className?: string }): ReactNode;
  export function CardAction(props: ComponentProps<"div"> & { className?: string }): ReactNode;

  // Dialog
  export function Dialog(props: { children: ReactNode; open?: boolean; onOpenChange?: (open: boolean) => void }): ReactNode;
  export function DialogTrigger(props: { children: ReactNode; asChild?: boolean; className?: string }): ReactNode;
  export function DialogContent(props: ComponentProps<"div"> & { className?: string }): ReactNode;
  export function DialogHeader(props: ComponentProps<"div"> & { className?: string }): ReactNode;
  export function DialogTitle(props: ComponentProps<"h2"> & { className?: string }): ReactNode;
  export function DialogDescription(props: ComponentProps<"p"> & { className?: string }): ReactNode;
  export function DialogFooter(props: ComponentProps<"div"> & { className?: string }): ReactNode;
  export function DialogClose(props: { children: ReactNode; asChild?: boolean; className?: string }): ReactNode;
  export function DialogOverlay(props: ComponentProps<"div"> & { className?: string }): ReactNode;
  export function DialogPortal(props: { children: ReactNode }): ReactNode;

  // Table
  export function Table(props: ComponentProps<"table"> & { className?: string }): ReactNode;
  export function TableHeader(props: ComponentProps<"thead"> & { className?: string }): ReactNode;
  export function TableBody(props: ComponentProps<"tbody"> & { className?: string }): ReactNode;
  export function TableRow(props: ComponentProps<"tr"> & { className?: string }): ReactNode;
  export function TableHead(props: ComponentProps<"th"> & { className?: string }): ReactNode;
  export function TableCell(props: ComponentProps<"td"> & { className?: string }): ReactNode;
  export function TableFooter(props: ComponentProps<"tfoot"> & { className?: string }): ReactNode;
  export function TableCaption(props: ComponentProps<"caption"> & { className?: string }): ReactNode;

  // Badge
  export function Badge(
    props: ComponentProps<"span"> & {
      variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
      asChild?: boolean;
      className?: string;
    }
  ): ReactNode;
  export declare const badgeVariants: (props?: {
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
    className?: string;
  }) => string;

  // Tabs
  export function Tabs(props: { children: ReactNode; defaultValue?: string; value?: string; onValueChange?: (value: string) => void; orientation?: "horizontal" | "vertical"; className?: string }): ReactNode;
  export function TabsList(props: { children: ReactNode; variant?: "default" | "line"; className?: string }): ReactNode;
  export function TabsTrigger(props: { children: ReactNode; value: string; className?: string; disabled?: boolean }): ReactNode;
  export function TabsContent(props: { children: ReactNode; value: string; className?: string }): ReactNode;
  export declare const tabsListVariants: (props?: {
    variant?: "default" | "line";
    className?: string;
  }) => string;

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
