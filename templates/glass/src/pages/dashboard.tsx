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

/* Accent colors for each stat card — mini orb tints */
const statAccents = [
  "oklch(0.65 0.30 275 / 12%)",
  "oklch(0.72 0.28 330 / 10%)",
  "oklch(0.70 0.26 200 / 10%)",
  "oklch(0.68 0.22 150 / 10%)",
];

/* Glass card entry: materialize from atmosphere */
const glassEntry = {
  initial: { opacity: 0, scale: 1.05, filter: "blur(12px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

export default function Dashboard() {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="relative p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Background orbs for glass diffusion */}
      <div className="orb orb-1 top-[-10%] right-[15%]" aria-hidden="true" />
      <div className="orb orb-3 bottom-[10%] left-[5%]" aria-hidden="true" />
      <div className="orb orb-4 top-[40%] right-[60%]" aria-hidden="true" />
      <div className="orb orb-2 top-[60%] right-[10%]" aria-hidden="true" />

      {/* Header */}
      <div className="relative z-10">
        <h1 className="font-heading text-2xl">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1 tracking-wide">
          Monitor your team&apos;s deployment pipeline and performance.
        </p>
      </div>

      {/* Stat Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={shouldReduceMotion ? undefined : glassEntry.initial}
            animate={glassEntry.animate}
            transition={{
              ...transition,
              delay: shouldReduceMotion ? 0 : i * 0.1,
            }}
            whileHover={shouldReduceMotion ? undefined : { y: -4, transition: { duration: 0.2 } }}
            className="group glass-shimmer"
          >
            <Card
              className="rounded-2xl glass-glow"
              style={{
                background: `linear-gradient(135deg, ${statAccents[i]}, transparent 60%), var(--card)`,
              }}
            >
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-heading mt-1">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "flex items-center gap-1 text-xs font-medium rounded-full px-2 py-0.5 glass-subtle",
                      stat.trend === "up"
                        ? "text-primary"
                        : "text-destructive"
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
          initial={shouldReduceMotion ? undefined : glassEntry.initial}
          animate={glassEntry.animate}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.3 }}
        >
          <Card className="rounded-2xl h-full">
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
                      className="w-full rounded-t-lg relative overflow-hidden"
                      style={{
                        height: `${(d.count / maxDeploys) * 100}%`,
                        background: "oklch(0.545 0.25 275 / 30%)",
                        backdropFilter: "blur(4px) saturate(180%)",
                        WebkitBackdropFilter: "blur(4px) saturate(180%)",
                        border: "1px solid oklch(1 0 0 / 15%)",
                        borderBottom: "none",
                        boxShadow: "inset 0 1px 0 0 oklch(1 0 0 / 18%), 0 0 20px oklch(0.545 0.25 275 / 15%)",
                      }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(to top, oklch(0.545 0.25 275 / 45%), oklch(0.545 0.25 275 / 15%))",
                        }}
                      />
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
          initial={shouldReduceMotion ? undefined : glassEntry.initial}
          animate={glassEntry.animate}
          transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.35 }}
        >
          <Card className="rounded-2xl">
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
