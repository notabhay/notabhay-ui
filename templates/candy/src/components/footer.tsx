import { Link } from "react-router";
import { Sparkles } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Dashboard", href: "/dashboard" },
      { label: "Components", href: "/components" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full candy-gradient-bg">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="font-heading font-bold text-lg">Flux</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Ship faster with real-time developer analytics.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading font-semibold text-sm mb-3">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Built with Flux. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">Made with</span>
            <span className="inline-block text-secondary">&#9829;</span>
            <span className="text-xs text-muted-foreground">and too much caffeine</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
