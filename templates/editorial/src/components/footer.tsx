import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background" role="contentinfo">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Masthead column */}
          <div className="space-y-3">
            <h3 className="font-heading text-lg font-semibold text-foreground">Flux</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Real-time developer analytics for engineering teams that ship.
            </p>
          </div>

          {/* Navigation column */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold small-caps tracking-wide text-foreground">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              <Link
                to="/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/dashboard"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Dashboard
              </Link>
              <Link
                to="/components"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Components
              </Link>
            </nav>
          </div>

          {/* Legal column */}
          <div className="space-y-3">
            <h4 className="font-heading text-sm font-semibold small-caps tracking-wide text-foreground">
              Legal
            </h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground">Privacy Policy</span>
              <span className="text-sm text-muted-foreground">Terms of Service</span>
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <hr className="hairline mt-10 mb-6" />
        <p className="text-xs text-muted-foreground text-center font-heading">
          &copy; {new Date().getFullYear()} Flux Analytics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
