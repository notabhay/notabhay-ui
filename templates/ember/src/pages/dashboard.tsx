import { motion } from "motion/react";
import { ArrowDown, ArrowUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  cn,
} from "@notabhay-ui/ui";
import { statCards, recentDeploys, weeklyDeploys } from "@/lib/mock-data";

const transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

const maxDeploys = Math.max(...weeklyDeploys.map((d) => d.count));

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <h1 className="font-heading text-2xl sm:text-3xl font-semibold text-foreground">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-muted-foreground font-body">
          Your engineering metrics at a glance.
        </p>
      </motion.div>

      <hr className="gold-rule" />

      {/* Stat cards */}
      <section aria-labelledby="stats-heading">
        <h2 id="stats-heading" className="sr-only">
          Statistics
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: index * 0.08 }}
            >
              <Card className="card-grain gold-accent-top border-border/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-body font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-end justify-between">
                    <span className="font-heading text-3xl font-bold text-foreground">
                      {stat.value}
                    </span>
                    <span
                      className={cn(
                        "flex items-center gap-1 text-xs font-body font-medium",
                        stat.trend === "up"
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {stat.trend === "up" ? (
                        <ArrowUp className="h-3 w-3" />
                      ) : (
                        <ArrowDown className="h-3 w-3" />
                      )}
                      {stat.change}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Deploys chart */}
      <motion.section
        aria-labelledby="chart-heading"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.4 }}
      >
        <Card className="card-grain gold-accent-top border-border/50">
          <CardHeader>
            <CardTitle className="font-heading text-lg font-semibold">
              Deploys This Week
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className="flex items-end gap-3 sm:gap-4 h-48"
              role="img"
              aria-label={`Bar chart showing deploys this week: ${weeklyDeploys
                .map((d) => `${d.day}: ${d.count}`)
                .join(", ")}`}
            >
              {weeklyDeploys.map((day) => (
                <div
                  key={day.day}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <span className="text-xs text-muted-foreground font-body">
                    {day.count}
                  </span>
                  <div className="w-full relative" style={{ height: "140px" }}>
                    <div
                      className="bar-chart-bar absolute bottom-0 w-full"
                      style={{
                        height: `${(day.count / maxDeploys) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground font-body">
                    {day.day}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Recent deploys table */}
      <motion.section
        aria-labelledby="deploys-heading"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transition, delay: 0.5 }}
      >
        <Card className="card-grain gold-accent-top border-border/50">
          <CardHeader>
            <CardTitle className="font-heading text-lg font-semibold">
              Recent Deploys
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-border/50">
                  <TableHead className="font-heading text-xs tracking-wide">
                    Service
                  </TableHead>
                  <TableHead className="font-heading text-xs tracking-wide">
                    Environment
                  </TableHead>
                  <TableHead className="font-heading text-xs tracking-wide">
                    Status
                  </TableHead>
                  <TableHead className="font-heading text-xs tracking-wide">
                    Author
                  </TableHead>
                  <TableHead className="font-heading text-xs tracking-wide hidden sm:table-cell">
                    Timestamp
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentDeploys.map((deploy, index) => (
                  <TableRow
                    key={`${deploy.service}-${deploy.timestamp}-${index}`}
                    className="border-border/30"
                  >
                    <TableCell className="font-body text-sm font-medium">
                      {deploy.service}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          deploy.environment === "production"
                            ? "default"
                            : "secondary"
                        }
                        className="text-xs"
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
                          "text-xs",
                          deploy.status === "success" && "text-primary border-primary/30"
                        )}
                      >
                        {deploy.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {deploy.author}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground hidden sm:table-cell">
                      {deploy.timestamp}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
