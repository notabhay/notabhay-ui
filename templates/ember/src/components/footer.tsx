export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <hr className="gold-rule mb-8" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold text-foreground tracking-wide">
              Flux
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
                <span className="transition-colors duration-400 hover:text-primary cursor-default">
                  Dashboards
                </span>
              </li>
              <li>
                <span className="transition-colors duration-400 hover:text-primary cursor-default">
                  Deploy Tracking
                </span>
              </li>
              <li>
                <span className="transition-colors duration-400 hover:text-primary cursor-default">
                  Review Velocity
                </span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold text-foreground mb-3">
              Company
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="transition-colors duration-400 hover:text-primary cursor-default">
                  About
                </span>
              </li>
              <li>
                <span className="transition-colors duration-400 hover:text-primary cursor-default">
                  Blog
                </span>
              </li>
              <li>
                <span className="transition-colors duration-400 hover:text-primary cursor-default">
                  Careers
                </span>
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
