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
  cn,
} from "@notabhay-ui/ui";
import { statCards, recentDeploys, weeklyDeploys } from "@/lib/mock-data";

export default function Dashboard() {
  const maxDeploys = Math.max(...weeklyDeploys.map((d) => d.count));

  return (
    <div className="p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="swiss-label text-muted-foreground mb-2">01 — OVERVIEW</p>
        <h1 className="swiss-heading text-2xl md:text-3xl font-heading text-foreground">
          Dashboard
        </h1>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border mb-8">
        {statCards.map((stat, index) => (
          <Card
            key={stat.label}
            className="rounded-none border-0 shadow-none bg-card"
          >
            <CardHeader className="p-4 pb-2">
              <div className="flex items-start justify-between">
                <span className="swiss-section-number text-2xl font-heading font-bold text-border">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "swiss-label text-xs",
                    stat.trend === "up" ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {stat.change}
                </span>
              </div>
              <CardTitle className="swiss-label text-muted-foreground mt-2">
                {stat.label.toUpperCase()}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="flex items-end gap-2">
                <span className="swiss-heading text-3xl font-heading text-foreground">
                  {stat.value}
                </span>
                {stat.trend === "up" ? (
                  <ArrowUp className="h-4 w-4 text-primary mb-1" />
                ) : (
                  <ArrowDown className="h-4 w-4 text-muted-foreground mb-1" />
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Two-column layout: Chart + Table */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bar Chart */}
        <div className="lg:col-span-1">
          <div className="border border-border">
            <div className="border-b border-border p-4">
              <p className="swiss-label text-muted-foreground">02 — DEPLOYS THIS WEEK</p>
            </div>
            <div className="p-4">
              <div className="flex items-end gap-2 h-48">
                {weeklyDeploys.map((day) => (
                  <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                    <span className="text-xs text-muted-foreground swiss-section-number">
                      {day.count}
                    </span>
                    <div className="w-full relative" style={{ height: "160px" }}>
                      <div
                        className="absolute bottom-0 left-0 right-0 bg-primary swiss-bar"
                        style={{
                          height: `${(day.count / maxDeploys) * 100}%`,
                        }}
                      />
                    </div>
                    <span className="swiss-label text-muted-foreground text-[10px]">
                      {day.day}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Deploys Table */}
        <div className="lg:col-span-2">
          <div className="border border-border">
            <div className="border-b border-border p-4">
              <p className="swiss-label text-muted-foreground">03 — RECENT DEPLOYS</p>
            </div>
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border">
                  <TableHead className="swiss-label text-muted-foreground py-3 px-4">
                    SERVICE
                  </TableHead>
                  <TableHead className="swiss-label text-muted-foreground py-3 px-4">
                    ENV
                  </TableHead>
                  <TableHead className="swiss-label text-muted-foreground py-3 px-4">
                    STATUS
                  </TableHead>
                  <TableHead className="swiss-label text-muted-foreground py-3 px-4">
                    AUTHOR
                  </TableHead>
                  <TableHead className="swiss-label text-muted-foreground py-3 px-4 hidden md:table-cell">
                    TIMESTAMP
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentDeploys.map((deploy) => (
                  <TableRow
                    key={`${deploy.service}-${deploy.timestamp}`}
                    className="border-b border-border"
                  >
                    <TableCell className="py-3 px-4 font-body text-sm text-foreground uppercase tracking-wide">
                      {deploy.service}
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <Badge
                        variant={deploy.environment === "production" ? "default" : "secondary"}
                        className="rounded-none text-[10px] uppercase tracking-widest"
                      >
                        {deploy.environment === "production" ? "PROD" : "STG"}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-3 px-4">
                      <span
                        className={cn(
                          "swiss-label text-xs",
                          deploy.status === "success"
                            ? "text-foreground"
                            : deploy.status === "failed"
                              ? "text-destructive"
                              : "text-muted-foreground"
                        )}
                      >
                        {deploy.status.toUpperCase()}
                      </span>
                    </TableCell>
                    <TableCell className="py-3 px-4 text-sm text-muted-foreground">
                      {deploy.author}
                    </TableCell>
                    <TableCell className="py-3 px-4 text-sm text-muted-foreground swiss-section-number hidden md:table-cell">
                      {deploy.timestamp}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
