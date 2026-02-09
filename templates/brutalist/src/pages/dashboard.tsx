import { motion } from "motion/react";
import { ArrowUp, ArrowDown } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
} from "@notabhay-ui/ui";
import { statCards, deploys, weeklyDeploys } from "@/lib/mock-data";

const motionConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.15, ease: "linear" as const },
};

export default function Dashboard() {
  const maxDeploys = Math.max(...weeklyDeploys.map((d) => d.count));

  return (
    <div className="p-6 md:p-8 lg:p-10">
      {/* Header */}
      <motion.div className="mb-8" {...motionConfig}>
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
          VIEW: DASHBOARD_OVERVIEW
        </p>
        <h1 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-tight">
          SYSTEM STATUS
        </h1>
      </motion.div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0">
        {statCards.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: i * 0.05, ease: "linear" }}
          >
            <Card
              className={`border-4 border-border ${
                i < 3 ? "xl:border-r-0" : ""
              } ${i < 2 ? "sm:border-r-0 xl:border-r-0" : ""} ${
                i === 2 ? "sm:border-r-4 xl:border-r-0" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground font-normal">
                  METRIC: {stat.label.toUpperCase()}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <p className="font-heading text-4xl font-bold">{stat.value}</p>
                  <div
                    className={`flex items-center gap-1 font-heading text-sm ${
                      stat.trend === "up" ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUp className="h-4 w-4" />
                    ) : (
                      <ArrowDown className="h-4 w-4" />
                    )}
                    <span className="uppercase">{stat.change}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Chart + Table grid */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_2fr] gap-0 mt-0">
        {/* Bar Chart — hatched bars */}
        <motion.div
          {...motionConfig}
          transition={{ duration: 0.15, delay: 0.2, ease: "linear" }}
        >
          <Card className="border-4 border-border xl:border-r-0">
            <CardHeader>
              <CardTitle className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground font-normal">
                CHART: DEPLOYS_THIS_WEEK
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2 h-48">
                {weeklyDeploys.map((day) => (
                  <div
                    key={day.day}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <span className="font-heading text-xs font-bold">
                      {day.count}
                    </span>
                    <div className="w-full relative" style={{ height: "140px" }}>
                      <div
                        className="absolute bottom-0 w-full border-2 border-foreground"
                        style={{
                          height: `${(day.count / maxDeploys) * 100}%`,
                          backgroundImage: `repeating-linear-gradient(45deg, var(--primary) 0px, var(--primary) 3px, transparent 3px, transparent 6px)`,
                        }}
                      />
                    </div>
                    <span className="font-heading text-[10px] uppercase tracking-wider text-muted-foreground">
                      {day.day}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Deploys Table */}
        <motion.div
          {...motionConfig}
          transition={{ duration: 0.15, delay: 0.25, ease: "linear" }}
        >
          <Card className="border-4 border-border">
            <CardHeader>
              <CardTitle className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground font-normal">
                TABLE: RECENT_DEPLOYS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-b-3 border-border">
                    <TableHead>SERVICE</TableHead>
                    <TableHead>ENV</TableHead>
                    <TableHead>STATUS</TableHead>
                    <TableHead className="hidden md:table-cell">AUTHOR</TableHead>
                    <TableHead className="hidden lg:table-cell">TIMESTAMP</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deploys.map((deploy, i) => (
                    <TableRow
                      key={`${deploy.service}-${deploy.timestamp}`}
                      className={`border-b-2 border-border ${
                        i % 2 === 0 ? "bg-muted/30" : ""
                      }`}
                    >
                      <TableCell className="font-heading text-xs uppercase tracking-wider font-semibold">
                        {deploy.service}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            deploy.environment === "production"
                              ? "default"
                              : "secondary"
                          }
                          className="font-heading text-[10px] uppercase tracking-wider"
                        >
                          {deploy.environment === "production" ? "PROD" : "STG"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center gap-2 font-heading text-xs uppercase tracking-wider ${
                            deploy.status === "success"
                              ? "text-foreground"
                              : deploy.status === "failed"
                                ? "text-destructive"
                                : "text-muted-foreground"
                          }`}
                        >
                          <span
                            className={`h-2 w-2 ${
                              deploy.status === "success"
                                ? "bg-foreground"
                                : deploy.status === "failed"
                                  ? "bg-destructive"
                                  : "bg-muted-foreground"
                            }`}
                          />
                          {deploy.status.toUpperCase()}
                        </span>
                      </TableCell>
                      <TableCell className="hidden md:table-cell text-muted-foreground text-xs uppercase tracking-wider">
                        {deploy.author.toUpperCase()}
                      </TableCell>
                      <TableCell className="hidden lg:table-cell text-muted-foreground text-xs tracking-wider font-mono">
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
