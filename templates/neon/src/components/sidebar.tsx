import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  BarChart3,
  GitBranch,
  AlertTriangle,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@notabhay-ui/ui";

const sidebarItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Deploys", href: "/dashboard", icon: GitBranch },
  { label: "Analytics", href: "/dashboard", icon: BarChart3 },
  { label: "Incidents", href: "/dashboard", icon: AlertTriangle },
  { label: "Team", href: "/dashboard", icon: Users },
  { label: "Settings", href: "/dashboard", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden md:flex w-16 lg:w-64 flex-col border-r border-l-2 border-l-primary/70 bg-card shrink-0"
      aria-label="Dashboard sidebar"
    >
      <div className="flex flex-col gap-1 p-2 lg:p-3">
        <div className="hidden lg:block px-3 py-2 mb-2">
          <p className="text-[10px] font-heading uppercase tracking-widest text-muted-foreground">
            Navigation
          </p>
        </div>
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive =
            location.pathname === item.href &&
            item.label === "Overview";
          return (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-sm px-3 py-2 text-xs font-heading transition-colors duration-250 ease-out-expo focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isActive
                  ? "bg-muted text-primary neon-text-glow"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              )}
              title={item.label}
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden lg:inline">{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* System info block */}
      <div className="mt-auto hidden lg:block p-3 border-t">
        <div className="rounded-sm bg-muted/50 p-3 space-y-1.5">
          <p className="text-[10px] font-heading text-muted-foreground uppercase tracking-wider">
            System
          </p>
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-heading">
              <span className="text-muted-foreground">CPU</span>
              <span className="text-secondary">23%</span>
            </div>
            <div className="h-1 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-secondary"
                style={{ width: "23%" }}
              />
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-[10px] font-heading">
              <span className="text-muted-foreground">Memory</span>
              <span className="text-primary">67%</span>
            </div>
            <div className="h-1 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: "67%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
