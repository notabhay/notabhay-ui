import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-card" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-heading text-sm font-semibold">
              <Terminal className="h-4 w-4 text-primary" />
              <span>flux</span>
              <span className="text-primary neon-text-glow">_</span>
            </div>
            <p className="text-xs text-muted-foreground font-heading leading-relaxed">
              Real-time developer analytics for engineering teams.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-3">
            <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
              Product
            </h3>
            <ul className="space-y-2">
              {["Dashboards", "Deploy Tracking", "Review Velocity", "Incidents"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-xs font-heading text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      <span className="text-primary mr-1">$</span>
                      {item.toLowerCase().replace(" ", "-")}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
              Resources
            </h3>
            <ul className="space-y-2">
              {["Documentation", "API Reference", "Changelog", "Status"].map(
                (item) => (
                  <li key={item}>
                    <span className="text-xs font-heading text-muted-foreground hover:text-foreground transition-colors cursor-default">
                      <span className="text-primary mr-1">$</span>
                      {item.toLowerCase().replace(" ", "-")}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h3 className="text-xs font-heading font-semibold uppercase tracking-wider text-muted-foreground">
              Company
            </h3>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <span className="text-xs font-heading text-muted-foreground hover:text-foreground transition-colors cursor-default">
                    <span className="text-primary mr-1">$</span>
                    {item.toLowerCase()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-heading text-muted-foreground">
            <span className="text-secondary neon-text-glow-green">{">"}</span> &copy; 2024 Flux
            Analytics. All rights reserved.
          </p>
          <p className="text-[10px] font-heading text-muted-foreground">
            <span className="text-primary neon-text-glow">v2.4.1</span> | pid: 48291 | uptime: <span className="text-secondary">99.97%</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
