import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@notabhay-ui/ui";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "DASHBOARD", href: "/dashboard" },
  { label: "COMPONENTS", href: "/components" },
  { label: "LOGIN", href: "/login" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="border-b-4 border-border bg-background" role="navigation" aria-label="Main navigation">
      <div className="flex items-stretch">
        {/* Logo block */}
        <Link
          to="/"
          className="flex items-center border-r-4 border-border px-6 py-4 font-heading text-lg font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-2px]"
        >
          FLUX
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-stretch flex-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center border-r-4 border-border px-6 py-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-2px] ${
                  isActive
                    ? "bg-foreground text-background"
                    : "hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="flex-1" />
          <div className="flex items-center border-l-4 border-border px-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile hamburger */}
        <div className="flex md:hidden items-center ml-auto border-l-4 border-border">
          <div className="flex items-center border-r-4 border-border px-3">
            <ThemeToggle />
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="px-4 py-4 h-full border-0"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-border">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block border-b-2 border-border px-6 py-4 font-heading text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-2px] ${
                  isActive
                    ? "bg-foreground text-background"
                    : "hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
