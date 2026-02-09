import { motion, useReducedMotion } from "motion/react";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
  cn,
} from "@notabhay-ui/ui";
import { statCards, recentDeploys, weeklyDeploys } from "@/lib/mock-data";
import { BlobBackground } from "@/components/blob-background";

export default function Dashboard() {
  const shouldReduceMotion = useReducedMotion();

  const maxDeploys = Math.max(...weeklyDeploys.map((d) => d.count));

  return (
    <div className="relative p-4 sm:p-6 lg:p-8 space-y-6">
      <BlobBackground variant="subtle" />

      {/* Page header */}
      <div className="relative">
        <motion.div
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 12 } as const,
                animate: { opacity: 1, y: 0 } as const,
                transition: {
                  duration: 0.4,
                  type: "spring" as const,
                  stiffness: 100,
                },
              })}
        >
          <h1 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
            Dashboard
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Your team&apos;s deployment overview at a glance.
          </p>
        </motion.div>
      </div>

      {/* Stat Cards — asymmetric flowing layout on 12-col grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-12 gap-4">
        {statCards.map((stat, i) => {
          const colSpans = [
            "xl:col-span-3",
            "xl:col-span-4",
            "xl:col-span-5",
            "xl:col-span-4 xl:col-start-9",
          ];
          return (
            <motion.div
              key={stat.label}
              className={colSpans[i]}
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 16 } as const,
                    animate: { opacity: 1, y: 0 } as const,
                    transition: {
                      duration: 0.4,
                      delay: i * 0.08,
                      type: "spring" as const,
                      stiffness: 100,
                    },
                    whileHover: { scale: 1.02 } as const,
                  })}
            >
              <Card className="rounded-2xl border-border/60 shadow-sm hover:shadow-md transition-shadow h-full">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="font-heading text-2xl font-bold">
                        {stat.value}
                      </p>
                    </div>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium",
                        stat.trend === "up"
                          ? "bg-secondary/10 text-secondary"
                          : "bg-primary/10 text-primary"
                      )}
                    >
                      {stat.trend === "up" ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {stat.change}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Chart and Table side by side on large screens */}
      <div className="relative grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Bar Chart */}
        <motion.div
          className="xl:col-span-5"
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 16 } as const,
                animate: { opacity: 1, y: 0 } as const,
                transition: {
                  duration: 0.5,
                  delay: 0.3,
                  type: "spring" as const,
                  stiffness: 100,
                },
              })}
        >
          <Card className="rounded-2xl border-border/60 shadow-sm h-full">
            <CardHeader>
              <CardTitle className="font-heading text-base font-semibold">
                Deploys This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2 h-48">
                {weeklyDeploys.map((day, i) => (
                  <div
                    key={day.day}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <span className="text-xs font-medium text-muted-foreground">
                      {day.count}
                    </span>
                    <motion.div
                      className="w-full rounded-xl bg-secondary/70"
                      style={{
                        height: `${(day.count / maxDeploys) * 140}px`,
                      }}
                      {...(shouldReduceMotion
                        ? {}
                        : {
                            initial: { scaleY: 0 } as const,
                            animate: { scaleY: 1 } as const,
                            transition: {
                              duration: 0.5,
                              delay: 0.4 + i * 0.06,
                              type: "spring" as const,
                              stiffness: 100,
                            },
                            style: {
                              height: `${(day.count / maxDeploys) * 140}px`,
                              transformOrigin: "bottom",
                            },
                          })}
                    />
                    <span className="text-xs text-muted-foreground">
                      {day.day}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Deploys Table */}
        <motion.div
          className="xl:col-span-7"
          {...(shouldReduceMotion
            ? {}
            : {
                initial: { opacity: 0, y: 16 } as const,
                animate: { opacity: 1, y: 0 } as const,
                transition: {
                  duration: 0.5,
                  delay: 0.35,
                  type: "spring" as const,
                  stiffness: 100,
                },
              })}
        >
          <Card className="rounded-2xl border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle className="font-heading text-base font-semibold">
                Recent Deploys
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead className="hidden sm:table-cell">
                      Environment
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">
                      Author
                    </TableHead>
                    <TableHead className="hidden lg:table-cell">
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
                      <TableCell className="hidden sm:table-cell">
                        <Badge
                          variant={
                            deploy.environment === "production"
                              ? "default"
                              : "secondary"
                          }
                          className="rounded-full text-[10px]"
                        >
                          {deploy.environment}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 text-xs font-medium",
                            deploy.status === "success"
                              ? "text-secondary"
                              : deploy.status === "failed"
                                ? "text-destructive"
                                : "text-muted-foreground"
                          )}
                        >
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              deploy.status === "success"
                                ? "bg-secondary"
                                : deploy.status === "failed"
                                  ? "bg-destructive"
                                  : "bg-muted-foreground"
                            )}
                          />
                          {deploy.status}
                        </span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground">
                        {deploy.author}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell text-muted-foreground text-xs">
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
