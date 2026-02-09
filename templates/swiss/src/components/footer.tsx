import { Link } from "react-router";

const footerNavItems = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Components", href: "/components" },
  { label: "Login", href: "/login" },
  { label: "Signup", href: "/signup" },
];

export function Footer() {
  return (
    <footer className="border-t border-border" aria-label="Footer">
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Column 1: Brand */}
        <div className="border-b md:border-b-0 md:border-r border-border p-6">
          <p className="swiss-label text-muted-foreground mb-2">01 — BRAND</p>
          <p className="font-heading font-bold text-lg tracking-tight">FLUX</p>
          <p className="text-sm text-muted-foreground mt-2">
            Real-time developer analytics
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div className="border-b md:border-b-0 md:border-r border-border p-6">
          <p className="swiss-label text-muted-foreground mb-4">02 — NAVIGATION</p>
          <ul className="space-y-2">
            {footerNavItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className="text-sm text-foreground uppercase tracking-wider swiss-mechanical hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring px-2"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div className="border-b md:border-b-0 md:border-r border-border p-6">
          <p className="swiss-label text-muted-foreground mb-4">03 — RESOURCES</p>
          <ul className="space-y-2">
            {["Documentation", "API Reference", "Changelog", "Status"].map((item) => (
              <li key={item}>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Meta */}
        <div className="p-6">
          <p className="swiss-label text-muted-foreground mb-4">04 — META</p>
          <p className="text-sm text-muted-foreground font-body">
            Built with mathematical precision.
          </p>
          <p className="text-sm text-muted-foreground font-body mt-2">
            Form follows function.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 py-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          &copy; 2026 Flux Analytics
        </p>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          Swiss / International
        </p>
      </div>
    </footer>
  );
}
