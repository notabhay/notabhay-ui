import { useState } from "react";
import { toast } from "sonner";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@notabhay-ui/ui";

function SectionHeader({
  id,
  index,
  title,
}: {
  id: string;
  index: number;
  title: string;
}) {
  return (
    <div id={id} className="scroll-mt-20 space-y-1">
      <p className="text-[10px] font-heading uppercase tracking-widest text-muted-foreground">
        Component {String(index).padStart(2, "0")}
      </p>
      <h2 className="text-lg font-heading font-semibold">
        <span className="text-primary">{">"}</span> {title}
      </h2>
    </div>
  );
}

export default function Components() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 md:py-12 lg:px-6">
      {/* Page header */}
      <div className="mb-10 space-y-2">
        <h1 className="text-2xl font-heading font-bold">
          <span className="text-primary">$</span> component-library
          <span className="cursor-blink text-primary ml-1">_</span>
        </h1>
        <p className="text-xs font-heading text-muted-foreground">
          All 8 shared components with every variant, size, and state.
        </p>
      </div>

      <div className="space-y-16">
        {/* ── Button ── */}
        <section className="space-y-6">
          <SectionHeader id="button" index={1} title="Button" />
          <Card className="neon-card-accent neon-glow-sm">
            <CardContent className="pt-6 space-y-6">
              {/* Variants */}
              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Variants
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default" className="neon-glow-hover">
                    Default
                  </Button>
                  <Button variant="outline" className="neon-glow-hover">
                    Outline
                  </Button>
                  <Button variant="ghost" className="neon-glow-hover">
                    Ghost
                  </Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Sizes
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm" className="neon-glow-hover">
                    Small
                  </Button>
                  <Button size="default" className="neon-glow-hover">
                    Default
                  </Button>
                  <Button size="lg" className="neon-glow-hover">
                    Large
                  </Button>
                </div>
              </div>

              {/* Disabled */}
              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Disabled
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>
                    Disabled Outline
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Input ── */}
        <section className="space-y-6">
          <SectionHeader id="input" index={2} title="Input" />
          <Card className="neon-card-accent neon-glow-sm">
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Default
                </p>
                <div className="max-w-sm space-y-3">
                  <Input
                    placeholder="flux search --query"
                    className="neon-glow-focus"
                  />
                  <Input
                    type="email"
                    placeholder="user@flux.dev"
                    className="neon-glow-focus"
                  />
                  <Input
                    type="password"
                    placeholder="Enter password"
                    className="neon-glow-focus"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Error State
                </p>
                <div className="max-w-sm">
                  <Input
                    placeholder="Invalid input"
                    aria-invalid="true"
                    className="neon-glow-focus"
                  />
                  <p className="mt-1 text-[10px] font-heading text-destructive">
                    Error: invalid input format
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Disabled
                </p>
                <div className="max-w-sm">
                  <Input
                    placeholder="Disabled input"
                    disabled
                    className="neon-glow-focus"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Card ── */}
        <section className="space-y-6">
          <SectionHeader id="card" index={3} title="Card" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="neon-card-accent neon-glow-sm">
              <CardHeader>
                <CardTitle className="text-sm font-heading">
                  Deploy Status
                </CardTitle>
                <CardDescription className="text-xs font-heading">
                  Real-time monitoring of your services
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xs font-prose text-muted-foreground">
                  All systems operational. Last deploy: 2 minutes ago to
                  production environment.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="neon-glow-hover">
                  View Details
                </Button>
              </CardFooter>
            </Card>

            <Card className="neon-card-accent neon-glow-sm">
              <CardHeader>
                <CardTitle className="text-sm font-heading">
                  Incident Report
                </CardTitle>
                <CardDescription className="text-xs font-heading">
                  Weekly incident summary
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-xs font-heading">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total</span>
                    <span>7 incidents</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">MTTR</span>
                    <span className="text-secondary">12m avg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Severity</span>
                    <span className="text-primary">P3 majority</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" className="neon-glow-hover">
                  Full Report
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* ── Dialog ── */}
        <section className="space-y-6">
          <SectionHeader id="dialog" index={4} title="Dialog" />
          <Card className="neon-card-accent neon-glow-sm">
            <CardContent className="pt-6">
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="neon-glow-hover">Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="neon-card-accent neon-glow-sm">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-sm">
                      <span className="text-primary">{">"}</span> Confirm
                      Deploy
                    </DialogTitle>
                    <DialogDescription className="text-xs font-heading">
                      You are about to deploy api-gateway to production. This
                      action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="rounded-sm bg-muted/50 p-3 my-2">
                    <code className="text-[10px] font-heading text-muted-foreground">
                      $ flux deploy api-gateway --env production --confirm
                    </code>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      className="neon-glow-hover"
                      onClick={() => setDialogOpen(false)}
                    >
                      Deploy
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </section>

        {/* ── Table ── */}
        <section className="space-y-6">
          <SectionHeader id="table" index={5} title="Table" />
          <Card className="neon-card-accent neon-glow-sm">
            <CardContent className="pt-6">
              <Table>
                <TableCaption className="text-[10px] font-heading">
                  Recent service metrics
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[10px] font-heading uppercase tracking-wider">
                      Service
                    </TableHead>
                    <TableHead className="text-[10px] font-heading uppercase tracking-wider">
                      Latency
                    </TableHead>
                    <TableHead className="text-[10px] font-heading uppercase tracking-wider">
                      Uptime
                    </TableHead>
                    <TableHead className="text-[10px] font-heading uppercase tracking-wider">
                      Status
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "api-gateway",
                      latency: "12ms",
                      uptime: "99.99%",
                      status: "healthy",
                    },
                    {
                      name: "auth-service",
                      latency: "8ms",
                      uptime: "99.97%",
                      status: "healthy",
                    },
                    {
                      name: "data-pipeline",
                      latency: "45ms",
                      uptime: "99.91%",
                      status: "degraded",
                    },
                    {
                      name: "web-app",
                      latency: "23ms",
                      uptime: "99.95%",
                      status: "healthy",
                    },
                  ].map((row) => (
                    <TableRow key={row.name}>
                      <TableCell className="text-xs font-heading">
                        <span className="text-primary">$</span> {row.name}
                      </TableCell>
                      <TableCell className="text-xs font-heading text-muted-foreground">
                        {row.latency}
                      </TableCell>
                      <TableCell className="text-xs font-heading text-muted-foreground">
                        {row.uptime}
                      </TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center gap-1 text-[10px] font-heading ${
                            row.status === "healthy"
                              ? "text-secondary"
                              : "text-destructive"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              row.status === "healthy"
                                ? "bg-secondary"
                                : "bg-destructive"
                            }`}
                          />
                          {row.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* ── Badge ── */}
        <section className="space-y-6">
          <SectionHeader id="badge" index={6} title="Badge" />
          <Card className="neon-card-accent neon-glow-sm">
            <CardContent className="pt-6 space-y-4">
              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Variants
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Contextual
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">production</Badge>
                  <Badge variant="secondary">staging</Badge>
                  <Badge variant="destructive">failed</Badge>
                  <Badge variant="outline">pending</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Tabs ── */}
        <section className="space-y-6">
          <SectionHeader id="tabs" index={7} title="Tabs" />
          <Card className="neon-card-accent neon-glow-sm">
            <CardContent className="pt-6 space-y-6">
              {/* Default variant */}
              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Default Variant
                </p>
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="metrics">Metrics</TabsTrigger>
                    <TabsTrigger value="logs">Logs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="pt-4">
                    <p className="text-xs font-heading text-muted-foreground">
                      System overview: all services operational.
                    </p>
                  </TabsContent>
                  <TabsContent value="metrics" className="pt-4">
                    <p className="text-xs font-heading text-muted-foreground">
                      CPU: 23% | Memory: 67% | Network: 12Mbps
                    </p>
                  </TabsContent>
                  <TabsContent value="logs" className="pt-4">
                    <p className="text-xs font-heading text-muted-foreground">
                      [INFO] Request processed in 12ms
                    </p>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Line variant */}
              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Line Variant
                </p>
                <Tabs defaultValue="deploys">
                  <TabsList variant="line">
                    <TabsTrigger value="deploys">Deploys</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                    <TabsTrigger value="incidents">Incidents</TabsTrigger>
                  </TabsList>
                  <TabsContent value="deploys" className="pt-4">
                    <p className="text-xs font-heading text-muted-foreground">
                      1,284 deploys this month across 12 services.
                    </p>
                  </TabsContent>
                  <TabsContent value="reviews" className="pt-4">
                    <p className="text-xs font-heading text-muted-foreground">
                      Average review time: 4.2 hours. 23 active PRs.
                    </p>
                  </TabsContent>
                  <TabsContent value="incidents" className="pt-4">
                    <p className="text-xs font-heading text-muted-foreground">
                      7 incidents in the last 30 days. MTTR: 12 minutes.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ── Toast ── */}
        <section className="space-y-6">
          <SectionHeader id="toast" index={8} title="Toast" />
          <Card className="neon-card-accent neon-glow-sm">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <p className="text-[10px] font-heading uppercase tracking-wider text-muted-foreground">
                  Variants
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="neon-glow-hover"
                    onClick={() =>
                      toast("Deploy initiated", {
                        description: "api-gateway → production",
                      })
                    }
                  >
                    Default Toast
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="neon-glow-hover"
                    onClick={() =>
                      toast.success("Deploy successful", {
                        description: "api-gateway is now live",
                      })
                    }
                  >
                    Success Toast
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="neon-glow-hover"
                    onClick={() =>
                      toast.error("Deploy failed", {
                        description: "Check logs for details",
                      })
                    }
                  >
                    Error Toast
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="neon-glow-hover"
                    onClick={() =>
                      toast.warning("Rate limit approaching", {
                        description: "85% of quota used",
                      })
                    }
                  >
                    Warning Toast
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
