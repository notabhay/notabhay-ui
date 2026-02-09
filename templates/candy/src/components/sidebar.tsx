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

const springPlayful = {
  type: "spring" as const,
  stiffness: 400,
  damping: 10,
};

const wobble = {
  rotate: [0, -6, 6, -4, 4, 0],
  scale: [1, 1.2, 1.1, 1.15, 1.05, 1],
  transition: { duration: 0.5 },
};

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden lg:flex w-[240px] flex-col border-r border-border/50 bg-muted/20 p-4 candy-dots">
      <nav className="flex flex-col gap-1.5">
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
                  "flex items-center gap-3 px-4 py-2.5 rounded-full text-sm font-bold transition-all",
                  isActive
                    ? "candy-gradient-bg text-white candy-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-primary/10"
                )}
              >
                <motion.div
                  whileHover={wobble}
                  transition={springPlayful}
                >
                  <Icon className="h-4 w-4" />
                </motion.div>
                <span>{item.label}</span>
                {isActive && (
                  <div className="ml-auto w-2 h-2 rounded-full bg-white/80" aria-hidden="true" />
                )}
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </aside>
  );
}
