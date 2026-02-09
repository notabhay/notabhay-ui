import {
  TrendingUp,
  TrendingDown,
  Clock,
  Rocket,
  GitPullRequest,
  AlertTriangle,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  cn,
} from "@notabhay-ui/ui";
import { motion } from "motion/react";
import { statCards, recentDeploys, weeklyDeploys } from "@/lib/mock-data";

const statIcons = [Rocket, Clock, GitPullRequest, AlertTriangle];
const statColors = ["violet", "pink", "cyan", "violet"] as const;

const springPlayful = {
  type: "spring" as const,
  stiffness: 400,
  damping: 10,
};

const springBouncy = {
  type: "spring" as const,
  stiffness: 300,
  damping: 12,
};

const wobble = {
  rotate: [0, -5, 5, -3, 3, 0],
  transition: { duration: 0.5 },
};

const maxDeploys = Math.max(...weeklyDeploys.map((d) => d.count));

const colorMap = {
  violet: {
    shadow: "candy-glow",
    border: "border-primary/40",
    topBorder: "bg-primary",
    iconBg: "bg-primary/15",
    iconColor: "text-primary",
    trendBg: "bg-primary/10",
    trendText: "text-primary",
    valueText: "text-primary",
  },
  pink: {
    shadow: "candy-glow-pink",
    border: "border-secondary/40",
    topBorder: "bg-secondary",
    iconBg: "bg-secondary/15",
    iconColor: "text-secondary",
    trendBg: "bg-secondary/10",
    trendText: "text-secondary",
    valueText: "text-secondary",
  },
  cyan: {
    shadow: "candy-glow-cyan",
    border: "border-accent/40",
    topBorder: "bg-accent",
    iconBg: "bg-accent/15",
    iconColor: "text-accent",
    trendBg: "bg-accent/10",
    trendText: "text-accent",
    valueText: "text-accent",
  },
};

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header — solid text, no gradient */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springBouncy}
      >
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-foreground">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Your team&apos;s shipping pulse at a glance.
        </p>
      </motion.div>

      {/* Stat Cards Grid — tilt on hover only, reduced stagger (0.3s total) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((stat, index) => {
          const Icon = statIcons[index];
          const isPositive = stat.trend === "up";
          const c = colorMap[statColors[index]];

          return (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              whileHover={{ scale: 1.04, rotate: [-2.5, 1.5, -1.5, 3][index], y: -8 }}
              transition={{ ...springPlayful, delay: index * 0.075 }}
            >
              <Card
                className={`${c.shadow} border ${c.border} overflow-hidden candy-gradient-border hover:candy-glow-intense transition-shadow`}
              >
                {/* Colored top accent */}
                <div className={`h-1 ${c.topBorder} w-full`} aria-hidden="true" />
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <motion.div
                      whileHover={wobble}
                      className={`w-10 h-10 rounded-2xl ${c.iconBg} flex items-center justify-center`}
                    >
                      <Icon className={`h-5 w-5 ${c.iconColor}`} />
                    </motion.div>
                    <div
                      className={cn(
                        "flex items-center gap-1 text-xs font-semibold rounded-full px-2.5 py-1",
                        isPositive
                          ? "bg-accent/15 text-accent"
                          : "bg-secondary/15 text-secondary"
                      )}
                    >
                      {isPositive ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {stat.change}
                    </div>
                  </div>
                  <p className={`font-heading font-extrabold text-3xl sm:text-4xl ${c.valueText}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5 font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Two-column layout: chart + table — fade together after 0.2s */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...springBouncy, delay: 0.2 }}
          className="xl:col-span-1"
        >
          <Card className="h-full candy-glow border border-primary/30 candy-gradient-border">
            <CardHeader>
              <CardTitle className="font-heading font-bold text-lg text-primary">
                Deploys This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2 h-48">
                {weeklyDeploys.map((day, index) => {
                  const height = (day.count / maxDeploys) * 100;
                  return (
                    <motion.div
                      key={day.day}
                      className="flex flex-col items-center gap-2 flex-1"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 8,
                        delay: 0.3 + index * 0.08,
                      }}
                      style={{ transformOrigin: "bottom" }}
                    >
                      <span className="text-xs font-bold text-primary">
                        {day.count}
                      </span>
                      <motion.div
                        className="w-full rounded-full candy-gradient-bg min-h-[4px]"
                        style={{ height: `${height}%` }}
                        whileHover={{ scaleX: 1.15 }}
                        transition={springPlayful}
                      />
                      <span className="text-xs text-muted-foreground font-medium">
                        {day.day}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Deploys Table — no per-row animation */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...springBouncy, delay: 0.2 }}
          className="xl:col-span-2"
        >
          <Card className="candy-glow-pink border border-secondary/30 candy-gradient-border">
            <CardHeader>
              <CardTitle className="font-heading font-bold text-lg text-secondary">
                Recent Deploys
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="candy-table-header">
                    <TableHead className="font-bold">Service</TableHead>
                    <TableHead className="font-bold">Environment</TableHead>
                    <TableHead className="font-bold">Status</TableHead>
                    <TableHead className="hidden sm:table-cell font-bold">
                      Author
                    </TableHead>
                    <TableHead className="hidden md:table-cell font-bold">
                      Timestamp
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentDeploys.map((deploy) => (
                    <TableRow
                      key={`${deploy.service}-${deploy.timestamp}`}
                      className="candy-row-alt hover:bg-primary/5 transition-colors"
                    >
                      <TableCell className="font-medium">
                        {deploy.service}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            deploy.environment === "production"
                              ? "default"
                              : "secondary"
                          }
                          className="rounded-full text-xs font-semibold"
                        >
                          {deploy.environment}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            deploy.status === "success"
                              ? "outline"
                              : "destructive"
                          }
                          className={cn(
                            "rounded-full text-xs font-semibold",
                            deploy.status === "success" &&
                              "border-accent/50 text-accent border"
                          )}
                        >
                          {deploy.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell text-muted-foreground">
                        {deploy.author}
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground text-xs">
                        {deploy.timestamp}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
