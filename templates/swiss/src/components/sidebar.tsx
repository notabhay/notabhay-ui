import { Link, useLocation } from "react-router";
import { cn } from "@notabhay-ui/ui";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  Users,
  Activity,
  Bell,
} from "lucide-react";

const sidebarItems = [
  { label: "OVERVIEW", href: "/dashboard", icon: LayoutDashboard, number: "01" },
  { label: "ANALYTICS", href: "/dashboard", icon: BarChart3, number: "02" },
  { label: "TEAM", href: "/dashboard", icon: Users, number: "03" },
  { label: "ACTIVITY", href: "/dashboard", icon: Activity, number: "04" },
  { label: "ALERTS", href: "/dashboard", icon: Bell, number: "05" },
  { label: "SETTINGS", href: "/dashboard", icon: Settings, number: "06" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside
      className="hidden md:flex flex-col w-[200px] border-r border-border shrink-0"
      aria-label="Dashboard sidebar"
    >
      {/* Sidebar header */}
      <div className="border-b border-border p-4">
        <p className="swiss-label text-muted-foreground">DASHBOARD</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.href && item.number === "01";
          return (
            <Link
              key={item.number}
              to={item.href}
              className={cn(
                "flex items-center gap-3 border-b border-border px-4 py-3 text-xs tracking-widest uppercase swiss-mechanical focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset",
                isActive
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:bg-foreground hover:text-background"
              )}
            >
              <span className="swiss-section-number opacity-50">{item.number}</span>
              <item.icon className="h-3.5 w-3.5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar footer: grid decoration */}
      <div className="border-t border-border p-4 flex-shrink-0">
        <div className="grid grid-cols-4 gap-px">
          {Array.from({ length: 16 }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "aspect-square border border-border",
                i % 5 === 0 ? "bg-primary/10" : "bg-transparent"
              )}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
