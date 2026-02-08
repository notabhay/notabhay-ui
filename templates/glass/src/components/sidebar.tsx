import { Link, useLocation } from "react-router";
import {
  BarChart3,
  Home,
  Settings,
  Activity,
  GitPullRequest,
  AlertTriangle,
  Layers,
} from "lucide-react";
import { cn } from "@notabhay-ui/ui";

const sidebarItems = [
  { label: "Overview", path: "/dashboard", icon: Home },
  { label: "Deploys", path: "/dashboard", icon: Layers },
  { label: "Analytics", path: "/dashboard", icon: BarChart3 },
  { label: "Pull Requests", path: "/dashboard", icon: GitPullRequest },
  { label: "Incidents", path: "/dashboard", icon: AlertTriangle },
  { label: "Activity", path: "/dashboard", icon: Activity },
  { label: "Settings", path: "/dashboard", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden lg:flex w-60 flex-col border-r border-border relative overflow-hidden"
      role="complementary"
      aria-label="Dashboard sidebar"
    >
      {/* Gradient orb behind sidebar */}
      <div className="orb orb-2 -left-20 top-1/3" aria-hidden="true" />

      {/* Glass overlay */}
      <div className="absolute inset-0 glass-subtle" />

      <nav className="relative z-10 flex flex-col gap-1 p-4" aria-label="Dashboard navigation">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === 0 && location.pathname === "/dashboard";
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "bg-primary/15 text-primary backdrop-blur-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-card"
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
