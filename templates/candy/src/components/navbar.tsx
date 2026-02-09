import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, Sparkles } from "lucide-react";
import { Button, cn } from "@notabhay-ui/ui";
import { motion, AnimatePresence } from "motion/react";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Components", href: "/components" },
  { label: "Login", href: "/login" },
];

const springPlayful = {
  type: "spring" as const,
  stiffness: 400,
  damping: 10,
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.div
              whileHover={{ rotate: 20, scale: 1.15 }}
              transition={springPlayful}
              className="flex items-center justify-center w-9 h-9 rounded-full candy-gradient-bg candy-glow"
            >
              <Sparkles className="h-4.5 w-4.5 text-white" />
            </motion.div>
            <span className="font-heading font-extrabold text-xl tracking-tight candy-gradient-text">
              Flux
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link key={item.href} to={item.href}>
                  <motion.div
                    whileHover={{ scale: 1.06, y: -1 }}
                    whileTap={{ scale: 0.94, rotate: -2 }}
                    transition={springPlayful}
                  >
                    <span
                      className={cn(
                        "inline-flex items-center px-4 py-2 rounded-full text-sm font-bold transition-colors",
                        isActive
                          ? "candy-gradient-bg text-white candy-glow"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                      )}
                    >
                      {item.label}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                className="rounded-full w-9 h-9 p-0"
              >
                {mobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="md:hidden overflow-hidden border-t border-border/50"
          >
            <div className="px-4 py-4 space-y-1.5">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 15,
                      delay: index * 0.05,
                    }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block px-4 py-3 rounded-2xl text-sm font-bold transition-colors",
                        isActive
                          ? "candy-gradient-bg text-white candy-glow"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
