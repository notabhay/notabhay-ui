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

const springBouncy = {
  type: "spring" as const,
  stiffness: 300,
  damping: 15,
};

const maxDeploys = Math.max(...weeklyDeploys.map((d) => d.count));

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springBouncy}
      >
        <h1 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight">
          Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Your team&apos;s shipping pulse at a glance.
        </p>
      </motion.div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statCards.map((stat, index) => {
          const Icon = statIcons[index];
          const isPositive = stat.trend === "up";
          const rotations = [-1, 0.5, -0.5, 1];

          return (
            <motion.div
              key={stat.label}
              initial={{ y: 20, opacity: 0, rotate: 0 }}
              animate={{ y: 0, opacity: 1, rotate: rotations[index] }}
              whileHover={{ scale: 1.02, rotate: 0 }}
              transition={{ ...springBouncy, delay: index * 0.08 }}
            >
              <Card className="candy-glow border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div
                      className={cn(
                        "flex items-center gap-1 text-xs font-semibold rounded-full px-2.5 py-1",
                        isPositive
                          ? "bg-accent/10 text-accent"
                          : "bg-secondary/10 text-secondary"
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
                  <p className="font-heading font-extrabold text-2xl sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Two-column layout: chart + table */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...springBouncy, delay: 0.35 }}
          className="xl:col-span-1"
        >
          <Card className="h-full candy-glow border-border/50">
            <CardHeader>
              <CardTitle className="font-heading font-bold text-lg">
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
                        ...springBouncy,
                        delay: 0.4 + index * 0.06,
                      }}
                      style={{ transformOrigin: "bottom" }}
                    >
                      <span className="text-xs font-semibold text-foreground">
                        {day.count}
                      </span>
                      <div
                        className="w-full rounded-full candy-gradient-bg min-h-[4px]"
                        style={{ height: `${height}%` }}
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

        {/* Deploys Table */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...springBouncy, delay: 0.45 }}
          className="xl:col-span-2"
        >
          <Card className="candy-glow border-border/50">
            <CardHeader>
              <CardTitle className="font-heading font-bold text-lg">
                Recent Deploys
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead>Environment</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Author
                    </TableHead>
                    <TableHead className="hidden md:table-cell">
                      Timestamp
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentDeploys.map((deploy, index) => (
                    <TableRow key={`${deploy.service}-${deploy.timestamp}`}>
                      <TableCell>
                        <motion.span
                          initial={{ x: -5, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{
                            ...springBouncy,
                            delay: 0.5 + index * 0.04,
                          }}
                          className="font-medium"
                        >
                          {deploy.service}
                        </motion.span>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            deploy.environment === "production"
                              ? "default"
                              : "secondary"
                          }
                          className="rounded-full text-xs"
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
                            "rounded-full text-xs",
                            deploy.status === "success" &&
                              "border-accent/50 text-accent"
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
