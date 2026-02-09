import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@notabhay-ui/ui";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "DASHBOARD", href: "/dashboard" },
  { label: "COMPONENTS", href: "/components" },
  { label: "LOGIN", href: "/login" },
  { label: "SIGNUP", href: "/signup" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="border-b border-border" aria-label="Main navigation">
      <div className="flex items-stretch">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center border-r border-border px-6 py-4 font-heading font-bold text-lg tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="text-primary">FLUX</span>
        </Link>

        {/* Desktop nav items */}
        <div className="hidden md:flex items-stretch flex-1">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center border-r border-border px-5 py-4 text-xs font-medium tracking-widest uppercase swiss-mechanical focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-foreground hover:text-background"
                )}
              >
                <span
                  className={cn(
                    "mr-2 swiss-section-number",
                    isActive ? "text-background" : "text-muted-foreground"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            );
          })}
          <div className="flex-1" />
        </div>

        {/* Right side: theme toggle + mobile menu */}
        <div className="ml-auto flex items-stretch">
          <div className="border-l border-border flex items-center px-2">
            <ThemeToggle />
          </div>
          <button
            className="md:hidden border-l border-border px-4 py-4 text-foreground swiss-mechanical hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "flex items-center border-b border-border px-6 py-4 text-xs font-medium tracking-widest uppercase swiss-mechanical focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-foreground hover:text-background"
                )}
              >
                <span
                  className={cn(
                    "mr-3 swiss-section-number",
                    isActive ? "text-background" : "text-muted-foreground"
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
