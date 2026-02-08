import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
  cn,
} from "@notabhay-ui/ui";
import { statCards, recentDeploys, weeklyDeploys } from "@/lib/mock-data";

const maxDeploys = Math.max(...weeklyDeploys.map((d) => d.count));

export default function Dashboard() {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="relative p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Background orbs */}
      <div className="orb orb-1 top-0 right-[20%] opacity-50" aria-hidden="true" />
      <div className="orb orb-3 bottom-[20%] left-[10%] opacity-40" aria-hidden="true" />

      {/* Header */}
      <div className="relative z-10">
        <h1 className="font-heading text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Monitor your team&apos;s deployment pipeline and performance.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ...transition,
              delay: shouldReduceMotion ? 0 : i * 0.08,
            }}
          >
            <Card className="rounded-xl">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold font-heading mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-1 text-xs font-medium rounded-full px-2 py-0.5",
                      stat.trend === "up"
                        ? "bg-primary/10 text-primary"
                        : "bg-primary/10 text-primary"
                    )}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUp className="h-3 w-3" />
                    ) : (
                      <ArrowDown className="h-3 w-3" />
                    )}
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Chart + Table */}
      <div className="relative z-10 grid lg:grid-cols-3 gap-6">
        {/* CSS Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.3 }}
        >
          <Card className="rounded-xl h-full">
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Deploys This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="flex items-end gap-2 h-40"
                role="img"
                aria-label="Bar chart showing deploys this week: Monday 18, Tuesday 24, Wednesday 31, Thursday 22, Friday 28, Saturday 8, Sunday 4"
              >
                {weeklyDeploys.map((d) => (
                  <div
                    key={d.day}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {d.count}
                    </span>
                    <div
                      className="w-full rounded-t-md bg-primary/20 relative overflow-hidden"
                      style={{
                        height: `${(d.count / maxDeploys) * 100}%`,
                      }}
                    >
                      <div className="absolute inset-0 bg-primary/40 backdrop-blur-sm" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {d.day}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Deploys Table */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.35 }}
        >
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-sm font-medium">
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
                    <TableHead>Author</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Timestamp
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentDeploys.map((deploy, i) => (
                    <TableRow key={`${deploy.service}-${deploy.timestamp}-${i}`}>
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
                          className={
                            deploy.status === "success"
                              ? "border-primary/30 text-primary"
                              : ""
                          }
                        >
                          {deploy.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{deploy.author}</TableCell>
                      <TableCell className="hidden sm:table-cell text-muted-foreground">
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
