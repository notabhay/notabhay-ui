import { ArrowUpRight, ArrowDownRight } from "lucide-react";
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
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

const maxDeploys = Math.max(...weeklyDeploys.map((d) => d.count));

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-6">
      {/* Header */}
      <FadeIn>
        <div>
          <h1 className="font-heading text-xl font-bold tracking-tighter">
            Dashboard
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Overview of your team&apos;s engineering metrics.
          </p>
        </div>
      </FadeIn>

      {/* Stat Cards */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <StaggerItem key={stat.label}>
            <Card className="border border-border bg-card shadow-none">
              <CardHeader className="pb-2">
                <CardTitle className="text-xs text-muted-foreground font-normal">
                  {stat.label}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <span className="font-heading text-2xl font-bold tracking-tighter tabular-nums">
                    {stat.value}
                  </span>
                  <span
                    className={cn(
                      "flex items-center gap-0.5 text-xs font-medium",
                      stat.trend === "up"
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {stat.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3" />
                    )}
                    {stat.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Deploys Table */}
        <FadeIn delay={0.1} className="lg:col-span-2">
          <Card className="border border-border bg-card shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-sm font-semibold tracking-tighter">
                Recent Deploys
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="text-xs">Service</TableHead>
                    <TableHead className="text-xs">Environment</TableHead>
                    <TableHead className="text-xs">Status</TableHead>
                    <TableHead className="text-xs hidden sm:table-cell">
                      Author
                    </TableHead>
                    <TableHead className="text-xs hidden md:table-cell">
                      Time
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentDeploys.map((deploy, idx) => (
                    <TableRow key={idx} className="border-border">
                      <TableCell className="font-heading text-xs">
                        {deploy.service}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="text-xs font-normal"
                        >
                          {deploy.environment}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 text-xs",
                            deploy.status === "success"
                              ? "text-primary"
                              : deploy.status === "failed"
                                ? "text-destructive"
                                : "text-muted-foreground"
                          )}
                        >
                          <span
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              deploy.status === "success"
                                ? "bg-primary"
                                : deploy.status === "failed"
                                  ? "bg-destructive"
                                  : "bg-muted-foreground"
                            )}
                          />
                          {deploy.status}
                        </span>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground hidden sm:table-cell">
                        {deploy.author}
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground hidden md:table-cell">
                        {deploy.timestamp}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Bar Chart */}
        <FadeIn delay={0.2}>
          <Card className="border border-border bg-card shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-sm font-semibold tracking-tighter">
                Deploys This Week
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2 h-40">
                {weeklyDeploys.map((day) => (
                  <div
                    key={day.day}
                    className="flex-1 flex flex-col items-center gap-1"
                  >
                    <span className="text-xs text-muted-foreground font-heading tabular-nums">
                      {day.count}
                    </span>
                    <div className="w-full relative" style={{ height: "120px" }}>
                      <div
                        className="absolute bottom-0 w-full bg-primary rounded-sm transition-all duration-300"
                        style={{
                          height: `${(day.count / maxDeploys) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {day.day}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </div>
  );
}
