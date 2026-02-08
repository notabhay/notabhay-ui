import {
  LayoutDashboard,
  BarChart3,
  GitPullRequest,
  AlertTriangle,
  Settings,
  Bell,
} from "lucide-react";
import { cn } from "@notabhay-ui/ui";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Overview", active: true },
  { icon: BarChart3, label: "Analytics", active: false },
  { icon: GitPullRequest, label: "Pull Requests", active: false },
  { icon: AlertTriangle, label: "Incidents", active: false },
  { icon: Bell, label: "Notifications", active: false },
  { icon: Settings, label: "Settings", active: false },
];

export function Sidebar() {
  return (
    <aside
      className="hidden lg:flex w-[240px] flex-col border-r-0 bg-card/60 p-4 shadow-[4px_0_12px_-4px_var(--border)]"
      role="complementary"
      aria-label="Dashboard sidebar"
    >
      <div className="space-y-1 mt-2">
        {sidebarItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              item.active
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
            )}
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {item.label}
          </button>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <div className="rounded-xl bg-muted/50 p-3 space-y-2">
          <p className="text-xs font-heading font-semibold">Need help?</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Check out our docs or reach out to support.
          </p>
        </div>
      </div>
    </aside>
  );
}
