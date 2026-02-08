import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30" role="contentinfo">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
          {/* Brand */}
          <div className="space-y-3 md:max-w-xs">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-heading text-lg font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
            >
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 text-primary"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 007.92 12.446A9 9 0 1112 2.992z"
                  />
                </svg>
              </span>
              Flux
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Real-time developer analytics to help your team ship faster and
              smarter.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 md:gap-16">
            <div className="space-y-3">
              <h3 className="font-heading text-sm font-semibold">Product</h3>
              <ul className="space-y-2">
                {["Dashboard", "Components", "Pricing"].map((item) => (
                  <li key={item}>
                    <Link
                      to={
                        item === "Dashboard"
                          ? "/dashboard"
                          : item === "Components"
                            ? "/components"
                            : "/"
                      }
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-sm font-semibold">Company</h3>
              <ul className="space-y-2">
                {["About", "Blog", "Careers"].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-muted-foreground cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-heading text-sm font-semibold">Legal</h3>
              <ul className="space-y-2">
                {["Privacy", "Terms"].map((item) => (
                  <li key={item}>
                    <span className="text-sm text-muted-foreground cursor-default">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground">
            Built with care. Bloom template for notabhay-ui.
          </p>
        </div>
      </div>
    </footer>
  );
}
