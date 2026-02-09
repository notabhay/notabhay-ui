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
      className="hidden lg:flex w-60 flex-col relative overflow-hidden"
      role="complementary"
      aria-label="Dashboard sidebar"
      style={{
        borderRight: "1px solid oklch(1 0 0 / 15%)",
      }}
    >
      {/* Bright gradient orb behind sidebar — bleeds into main content */}
      <div className="orb orb-2 -left-32 top-[20%]" aria-hidden="true" />
      <div className="orb orb-4 left-10 bottom-[10%]" aria-hidden="true" />

      {/* Glass overlay with stronger effect + noise */}
      <div
        className="absolute inset-0"
        style={{
          background: "oklch(1 0 0 / 15%)",
          backdropFilter: "blur(20px) saturate(200%)",
          WebkitBackdropFilter: "blur(20px) saturate(200%)",
          boxShadow: "inset -1px 0 0 0 oklch(1 0 0 / 10%), inset 0 1px 0 0 oklch(1 0 0 / 12%)",
        }}
      />

      {/* Subtle gradient accent — vertical color bleed */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, oklch(0.65 0.30 275 / 6%) 0%, transparent 40%, oklch(0.68 0.22 150 / 4%) 100%)",
        }}
        aria-hidden="true"
      />

      <nav className="relative z-10 flex flex-col gap-1 p-4" aria-label="Dashboard navigation">
        <p className="px-3 py-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Navigation
        </p>
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === 0 && location.pathname === "/dashboard";
          return (
            <Link
              key={item.label}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "glass-subtle text-primary shadow-[0_0_16px_oklch(0.545_0.25_275/12%)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-[oklch(1_0_0/10%)]"
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
