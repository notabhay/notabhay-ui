import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { TrendingUp, TrendingDown } from "lucide-react";
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

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const maxDeploy = Math.max(...weeklyDeploys.map((d) => d.count));

export default function Dashboard() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="px-6 lg:px-8 py-8 max-w-5xl">
      {/* Report masthead */}
      <AnimatedSection>
        <motion.div variants={fadeUp} className="mb-10">
          <p className="font-heading text-xs small-caps tracking-[0.2em] text-primary mb-2">
            Weekly Engineering Report
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
            Deployment Overview
          </h1>
          <p className="text-sm text-muted-foreground font-mono">
            {formattedDate}
          </p>
        </motion.div>
      </AnimatedSection>

      <hr className="hairline mb-8" />

      {/* Stat cards */}
      <AnimatedSection>
        <motion.div variants={fadeUp} className="mb-2">
          <p className="font-heading text-xs small-caps tracking-[0.2em] text-muted-foreground mb-4">
            Key Metrics
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {statCards.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <Card className="border-0 shadow-none rounded-none border-b border-border/30 pb-4">
                <CardHeader className="px-0 pb-2">
                  <CardTitle className="font-heading text-xs small-caps tracking-wider text-muted-foreground font-normal">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading text-3xl font-semibold text-foreground">
                      {stat.value}
                    </span>
                    <span
                      className={cn(
                        "flex items-center gap-1 text-xs font-mono",
                        stat.trend === "up"
                          ? "text-primary"
                          : "text-muted-foreground"
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
          ))}
        </div>
      </AnimatedSection>

      <hr className="hairline mb-8" />

      {/* Deploys chart + prose summary */}
      <AnimatedSection>
        <motion.div variants={fadeUp} className="mb-2">
          <p className="font-heading text-xs small-caps tracking-[0.2em] text-muted-foreground mb-4">
            Weekly Deploy Activity
          </p>
        </motion.div>
        <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* CSS Bar Chart */}
          <div className="md:col-span-7">
            <div className="flex items-end gap-2 h-48">
              {weeklyDeploys.map((day) => (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {day.count}
                  </span>
                  <div
                    className="w-full bg-primary/80 rounded-sm transition-all duration-500"
                    style={{ height: `${(day.count / maxDeploy) * 100}%` }}
                    role="img"
                    aria-label={`${day.day}: ${day.count} deploys`}
                  />
                  <span className="font-mono text-xs text-muted-foreground">
                    {day.day}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3 font-mono">
              Deploys This Week
            </p>
          </div>

          {/* Prose summary */}
          <div className="md:col-span-5">
            <p className="text-muted-foreground leading-relaxed text-sm">
              Midweek surge: Wednesday peaked at 31 deploys, the highest
              this period. Weekend activity dropped to expected levels with
              minimal staging pushes. Overall volume is tracking 12.5% above
              the prior week, suggesting healthy velocity across the
              engineering organization.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mt-4">
              Average review time continues to decrease at 4.2 hours,
              down 8.3% from last week. The team resolved 7 incidents
              this month, a 22.2% reduction. Active PRs remain steady at 23.
            </p>
          </div>
        </motion.div>
      </AnimatedSection>

      <hr className="hairline mb-8" />

      {/* Recent deploys table */}
      <AnimatedSection>
        <motion.div variants={fadeUp} className="mb-2">
          <p className="font-heading text-xs small-caps tracking-[0.2em] text-muted-foreground mb-4">
            Recent Deploys
          </p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <Table>
            <TableHeader>
              <TableRow className="border-border/30">
                <TableHead className="font-heading small-caps tracking-wide text-xs">
                  Service
                </TableHead>
                <TableHead className="font-heading small-caps tracking-wide text-xs">
                  Environment
                </TableHead>
                <TableHead className="font-heading small-caps tracking-wide text-xs">
                  Status
                </TableHead>
                <TableHead className="font-heading small-caps tracking-wide text-xs">
                  Author
                </TableHead>
                <TableHead className="font-heading small-caps tracking-wide text-xs">
                  Timestamp
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentDeploys.map((deploy, index) => (
                <TableRow key={index} className="border-border/20">
                  <TableCell className="font-mono text-sm">{deploy.service}</TableCell>
                  <TableCell>
                    <Badge
                      variant={deploy.environment === "production" ? "default" : "secondary"}
                      className="font-mono text-xs"
                    >
                      {deploy.environment}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={deploy.status === "success" ? "outline" : "destructive"}
                      className="font-mono text-xs"
                    >
                      {deploy.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{deploy.author}</TableCell>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {deploy.timestamp}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </AnimatedSection>
    </div>
  );
}
