import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  Rocket,
  Clock,
  AlertTriangle,
  Settings,
  BarChart3,
} from "lucide-react";
import { cn } from "@notabhay-ui/ui";
import { motion } from "motion/react";

const sidebarItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Deploys", href: "/dashboard", icon: Rocket },
  { label: "Reviews", href: "/dashboard", icon: Clock },
  { label: "Incidents", href: "/dashboard", icon: AlertTriangle },
  { label: "Analytics", href: "/dashboard", icon: BarChart3 },
  { label: "Settings", href: "/dashboard", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex w-[240px] flex-col border-r border-border/50 bg-muted/20 p-4">
      <nav className="flex flex-col gap-1">
        {sidebarItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === 0 && location.pathname === "/dashboard";

          return (
            <motion.div
              key={item.label}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.04,
              }}
            >
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-medium transition-all",
                  isActive
                    ? "bg-primary text-primary-foreground candy-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Icon className="h-4 w-4" />
                </motion.div>
                <span>{item.label}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </aside>
  );
}
