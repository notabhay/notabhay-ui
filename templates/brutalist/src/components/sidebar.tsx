import { Link, useLocation } from "react-router";
import {
  BarChart3,
  Activity,
  GitPullRequest,
  AlertTriangle,
  Settings,
  LayoutDashboard,
} from "lucide-react";

const sidebarItems = [
  { label: "OVERVIEW", href: "/dashboard", icon: LayoutDashboard },
  { label: "DEPLOYS", href: "/dashboard", icon: Activity },
  { label: "PULL REQUESTS", href: "/dashboard", icon: GitPullRequest },
  { label: "INCIDENTS", href: "/dashboard", icon: AlertTriangle },
  { label: "ANALYTICS", href: "/dashboard", icon: BarChart3 },
  { label: "SETTINGS", href: "/dashboard", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden lg:flex w-[280px] shrink-0 flex-col border-r-4 border-border bg-background"
      role="complementary"
      aria-label="Dashboard sidebar"
    >
      {/* Sidebar header */}
      <div className="border-b-4 border-border p-6">
        <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground">
          PANEL: NAVIGATION
        </p>
      </div>

      {/* Nav items */}
      <nav className="flex-1 py-2" aria-label="Dashboard navigation">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.href && item.label === "OVERVIEW";
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.href}
              className={`flex items-center gap-3 border-b-2 border-border px-6 py-4 font-heading text-xs uppercase tracking-[0.1em] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-[-2px] ${
                isActive
                  ? "bg-foreground text-background border-b-foreground"
                  : "hover:bg-muted hover:text-foreground text-muted-foreground"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Sidebar footer */}
      <div className="border-t-4 border-border p-6">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-heading">
          V2.4.1 // PROD
        </p>
      </div>
    </aside>
  );
}
