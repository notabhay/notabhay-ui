import { motion, useReducedMotion } from "motion/react";
import {
  TrendingUp,
  TrendingDown,
  Clock,
  GitBranch,
  AlertTriangle,
  Rocket,
} from "lucide-react";
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
} from "@notabhay-ui/ui";
import { statCards, recentDeploys, weeklyDeploys } from "@/lib/mock-data";

const statIcons = [Rocket, Clock, GitBranch, AlertTriangle];

export default function Dashboard() {
  const prefersReduced = useReducedMotion();
  const maxDeploys = Math.max(...weeklyDeploys.map((d) => d.count));

  return (
    <div className="p-4 md:p-6 lg:p-8 space-y-6">
      {/* Header with status bar */}
      <div className="space-y-2">
        <div className="rounded-sm bg-muted/50 px-3 py-1.5 text-[10px] font-heading text-muted-foreground flex items-center gap-2 flex-wrap">
          <span className="text-secondary neon-text-glow-green">[LIVE]</span>
          <span>Connected to flux cluster</span>
          <span className="text-primary">|</span>
          <span>48ms latency</span>
          <span className="text-primary">|</span>
          <span>12 services monitored</span>
        </div>
        <h1 className="text-lg font-heading font-semibold">
          <span className="text-primary">{">"}</span> Dashboard
        </h1>
        <p className="text-xs font-heading text-muted-foreground">
          Last synced: 2 minutes ago | pid: 48291
        </p>
      </div>

      {/* Stat cards — alternating cyan/green accents */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => {
          const Icon = statIcons[i];
          const isPositive = stat.trend === "up";
          const isGreen = i % 2 === 1;
          return (
            <motion.div
              key={stat.label}
              {...(prefersReduced
                ? {}
                : {
                    initial: { opacity: 0, y: 12 },
                    animate: { opacity: 1, y: 0 },
                  })}
              transition={{
                duration: 0.4,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Card className={`${isGreen ? "neon-card-accent-green" : "neon-card-accent"} neon-glow-sm`}>
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className={`text-2xl font-heading font-bold ${isGreen ? "text-secondary neon-text-glow-green" : "text-primary neon-text-glow"}`}>
                        {stat.value}
                      </p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-muted">
                      <Icon className={`h-4 w-4 ${isGreen ? "text-secondary" : "text-primary"}`} />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-1">
                    {isPositive ? (
                      <TrendingUp className="h-3 w-3 text-secondary" />
                    ) : (
                      <TrendingDown className="h-3 w-3 text-primary" />
                    )}
                    <span
                      className={`text-[10px] font-heading ${
                        stat.label === "Incidents (30d)" || stat.label === "Avg Review Time"
                          ? "text-secondary"
                          : isPositive
                            ? "text-secondary"
                            : "text-primary"
                      }`}
                    >
                      {stat.change}
                    </span>
                    <span className="text-[10px] font-heading text-muted-foreground">
                      vs last period
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Chart + Table layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Chart */}
        <motion.div
          {...(prefersReduced
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
              })}
          transition={{
            duration: 0.4,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Card className="neon-card-accent neon-glow-sm h-full">
            <CardHeader>
              <CardTitle className="text-xs font-heading uppercase tracking-wider text-muted-foreground">
                Deploys This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="flex items-end gap-2 h-40"
                role="img"
                aria-label="Bar chart showing deploys this week: Monday 18, Tuesday 24, Wednesday 31, Thursday 22, Friday 28, Saturday 8, Sunday 4"
              >
                {weeklyDeploys.map((d, i) => (
                  <div
                    key={d.day}
                    className="flex-1 flex flex-col items-center gap-1.5"
                  >
                    <span className={`text-[10px] font-heading ${i % 2 === 0 ? "text-primary neon-text-glow" : "text-secondary neon-text-glow-green"}`}>
                      {d.count}
                    </span>
                    <div
                      className={`w-full rounded-sm ${i % 2 === 0 ? "bg-primary/80 hover:bg-primary" : "bg-secondary/80 hover:bg-secondary"} transition-colors duration-250 neon-bar`}
                      style={{
                        height: `${(d.count / maxDeploys) * 100}%`,
                        minHeight: "4px",
                      }}
                    />
                    <span className="text-[10px] font-heading text-muted-foreground">
                      {d.day}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Deploys table */}
        <motion.div
          className="lg:col-span-2"
          {...(prefersReduced
            ? {}
            : {
                initial: { opacity: 0, y: 12 },
                animate: { opacity: 1, y: 0 },
              })}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <Card className="neon-card-accent neon-glow-sm">
            <CardHeader>
              <CardTitle className="text-xs font-heading uppercase tracking-wider text-muted-foreground">
                Recent Deploys
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[10px] font-heading uppercase tracking-wider">
                      Service
                    </TableHead>
                    <TableHead className="text-[10px] font-heading uppercase tracking-wider">
                      Env
                    </TableHead>
                    <TableHead className="text-[10px] font-heading uppercase tracking-wider">
                      Status
                    </TableHead>
                    <TableHead className="text-[10px] font-heading uppercase tracking-wider hidden sm:table-cell">
                      Author
                    </TableHead>
                    <TableHead className="text-[10px] font-heading uppercase tracking-wider hidden md:table-cell">
                      Timestamp
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentDeploys.map((deploy, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-xs font-heading">
                        <span className="text-secondary">$</span>{" "}
                        {deploy.service}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            deploy.environment === "production"
                              ? "default"
                              : "secondary"
                          }
                          className="text-[10px] font-heading"
                        >
                          {deploy.environment}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-heading ${
                            deploy.status === "success"
                              ? "text-secondary"
                              : "text-destructive"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              deploy.status === "success"
                                ? "bg-secondary"
                                : "bg-destructive"
                            }`}
                          />
                          {deploy.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-xs font-heading text-muted-foreground hidden sm:table-cell">
                        {deploy.author}
                      </TableCell>
                      <TableCell className="text-[10px] font-heading text-muted-foreground hidden md:table-cell">
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
