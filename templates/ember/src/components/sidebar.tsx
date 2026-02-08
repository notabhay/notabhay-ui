import { Link, useLocation } from "react-router";
import {
  BarChart3,
  LayoutDashboard,
  GitPullRequest,
  AlertTriangle,
  Settings,
} from "lucide-react";
import { cn } from "@notabhay-ui/ui";

const sidebarItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Deploys", href: "/dashboard", icon: BarChart3 },
  { label: "Pull Requests", href: "/dashboard", icon: GitPullRequest },
  { label: "Incidents", href: "/dashboard", icon: AlertTriangle },
  { label: "Settings", href: "/dashboard", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden lg:flex w-60 flex-col border-r border-primary/20 bg-background/50"
      role="complementary"
      aria-label="Dashboard sidebar"
    >
      <div className="flex flex-col gap-1 px-3 py-6">
        <p className="px-3 mb-4 font-heading text-xs font-semibold tracking-widest text-muted-foreground">
          Navigation
        </p>
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-heading transition-all duration-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span className="tracking-wide">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div className="mt-auto px-3 pb-6">
        <hr className="gold-rule mb-4" />
        <p className="px-3 text-xs text-muted-foreground font-body">
          Ember v0.1
        </p>
      </div>
    </aside>
  );
}
