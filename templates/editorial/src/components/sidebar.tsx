import { Link, useLocation } from "react-router";
import {
  BarChart3,
  GitPullRequest,
  AlertTriangle,
  Clock,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@notabhay-ui/ui";

const sidebarItems = [
  { label: "Overview", path: "/dashboard", icon: LayoutDashboard },
  { label: "Deploys", path: "/dashboard", icon: BarChart3 },
  { label: "Reviews", path: "/dashboard", icon: GitPullRequest },
  { label: "Incidents", path: "/dashboard", icon: AlertTriangle },
  { label: "Timeline", path: "/dashboard", icon: Clock },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden lg:block w-[220px] shrink-0 pt-8 pl-6 lg:pl-8"
      aria-label="Dashboard sidebar"
    >
      <nav className="space-y-1">
        <p className="font-heading text-xs small-caps tracking-widest text-muted-foreground mb-4 pl-3">
          Sections
        </p>
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path && item.label === "Overview";
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 font-heading text-sm transition-colors duration-300 rounded-sm",
                isActive
                  ? "text-primary bg-muted/50"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              )}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
