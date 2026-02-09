import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Zap } from "lucide-react";
import { Button, cn } from "@notabhay-ui/ui";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Dashboard", path: "/dashboard" },
  { label: "Components", path: "/components" },
  { label: "Login", path: "/login" },
  { label: "Signup", path: "/signup" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <nav
      className="sticky top-0 z-50 relative"
      role="navigation"
      aria-label="Main navigation"
      style={{
        background: "oklch(1 0 0 / 22%)",
        backdropFilter: "blur(28px) saturate(200%)",
        WebkitBackdropFilter: "blur(28px) saturate(200%)",
        borderBottom: "1px solid oklch(1 0 0 / 20%)",
        boxShadow:
          "0 2px 20px oklch(0 0 0 / 5%), inset 0 -1px 0 0 oklch(1 0 0 / 8%), inset 0 1px 0 0 oklch(1 0 0 / 15%)",
      }}
    >
      {/* Top-edge highlight */}
      <div
        className="absolute top-0 left-[5%] right-[5%] h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 40%), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 font-heading text-lg text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-1"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl glass-subtle">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            Flux
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "px-3 py-2 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  location.pathname === item.path
                    ? "glass-subtle text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-[oklch(1_0_0/10%)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu — animated glass panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden"
            style={{
              borderTop: "1px solid oklch(1 0 0 / 12%)",
              background: "oklch(1 0 0 / 18%)",
              backdropFilter: "blur(24px) saturate(200%)",
              WebkitBackdropFilter: "blur(24px) saturate(200%)",
            }}
            initial={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    location.pathname === item.path
                      ? "glass-subtle text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-[oklch(1_0_0/10%)]"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
