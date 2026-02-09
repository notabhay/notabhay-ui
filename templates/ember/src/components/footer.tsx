import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <hr className="gold-rule mb-8" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground tracking-wide">
              Flux{" "}
              <span className="text-xs text-primary font-body tracking-widest">
                ember
              </span>
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Real-time developer analytics for teams that ship.
            </p>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold text-foreground mb-3">
              Product
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link
                  to="/dashboard"
                  className="transition-colors duration-400 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Dashboards
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="transition-colors duration-400 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Deploy Tracking
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="transition-colors duration-400 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Review Velocity
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold text-foreground mb-3">
              Company
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="#about"
                  className="transition-colors duration-400 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="transition-colors duration-400 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="transition-colors duration-400 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="gold-rule my-8" />
        <p className="text-center text-xs text-muted-foreground tracking-wider">
          Built with precision. Designed for those who notice the details.
        </p>
      </div>
    </footer>
  );
}
