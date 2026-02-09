import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Terminal, Search } from "lucide-react";
import { Button, cn } from "@notabhay-ui/ui";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Components", href: "/components" },
  { label: "Login", href: "/login" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav
      className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur-sm"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 font-heading text-sm font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          <Terminal className="h-4 w-4 text-primary" />
          <span className="text-foreground">flux</span>
          <span className="text-primary neon-text-glow">_</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "px-3 py-1.5 text-xs font-heading rounded-sm transition-colors duration-250 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                location.pathname === item.href
                  ? "text-primary bg-muted neon-text-glow"
                  : "text-muted-foreground hover:text-foreground neon-glitch"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Cmd+K hint */}
          <button
            type="button"
            className="hidden md:flex items-center gap-2 rounded-sm border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => {
              document.dispatchEvent(
                new KeyboardEvent("keydown", {
                  key: "k",
                  metaKey: true,
                  bubbles: true,
                })
              );
            }}
            aria-label="Open command palette"
          >
            <Search className="h-3 w-3" />
            <span className="font-heading">Search...</span>
            <kbd className="rounded border bg-background px-1 py-0.5 text-[10px] font-heading">
              {"\u2318"}K
            </kbd>
          </button>

          <ThemeToggle />

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="flex flex-col p-4 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-2 text-xs font-heading rounded-sm transition-colors duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  location.pathname === item.href
                    ? "text-primary bg-muted neon-text-glow"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span className="text-primary mr-2">{">"}</span>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
