import { Zap } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="relative"
      style={{
        borderTop: "1px solid oklch(1 0 0 / 15%)",
        background: "oklch(1 0 0 / 12%)",
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
      }}
    >
      {/* Top-edge highlight */}
      <div
        className="absolute top-0 left-[10%] right-[10%] h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 25%), transparent)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-heading text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl glass-subtle">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              Flux
            </div>
            <p className="text-sm text-muted-foreground">
              Real-time developer analytics for engineering teams.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Product</h3>
            <ul className="space-y-2">
              {["Dashboards", "Deploy Tracking", "Review Velocity", "Incidents"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      {item}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Company</h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-foreground">Legal</h3>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Security"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(1 0 0 / 12%)" }}
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Flux. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              to="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1"
            >
              Dashboard
            </Link>
            <Link
              to="/components"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm px-1"
            >
              Components
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
