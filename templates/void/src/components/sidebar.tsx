import { useState, useCallback } from "react";
import {
  BarChart3,
  GitPullRequest,
  AlertTriangle,
  Settings,
  Rocket,
  PanelLeftClose,
  PanelLeft,
  LayoutDashboard,
} from "lucide-react";
import { Button, cn } from "@notabhay-ui/ui";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: Rocket, label: "Deploys", active: false },
  { icon: BarChart3, label: "Metrics", active: false },
  { icon: GitPullRequest, label: "Pull Requests", active: false },
  { icon: AlertTriangle, label: "Incidents", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = useCallback(() => {
    setCollapsed((prev) => !prev);
  }, []);

  return (
    <aside
      className={cn(
        "hidden md:flex flex-col border-r border-border bg-sidebar transition-all duration-200",
        collapsed ? "w-16" : "w-60"
      )}
    >
      <div className="flex items-center justify-end p-2 border-b border-sidebar-border">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleCollapse}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? (
            <PanelLeft className="h-4 w-4" />
          ) : (
            <PanelLeftClose className="h-4 w-4" />
          )}
        </Button>
      </div>
      <nav className="flex-1 py-2 space-y-0.5 px-2" aria-label="Dashboard navigation">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex items-center gap-3 w-full rounded-sm px-3 py-2 text-sm transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              item.active
                ? "text-primary bg-sidebar-accent"
                : "text-muted-foreground hover:opacity-80"
            )}
            aria-current={item.active ? "page" : undefined}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>
      <div className="border-t border-sidebar-border px-3 py-3">
        {collapsed ? (
          <div className="flex justify-center">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="font-heading tracking-tight">v2.4.1</span>
            <span className="text-muted-foreground/50">//</span>
            <span>prod</span>
          </div>
        )}
      </div>
    </aside>
  );
}
