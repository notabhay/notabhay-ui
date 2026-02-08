import { useRef } from "react";
import { motion, useInView } from "motion/react";
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
  DialogClose,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@notabhay-ui/ui";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
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

function SectionHeading({ id, number, title }: { id: string; number: string; title: string }) {
  return (
    <motion.div variants={fadeUp} className="mb-6">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-muted-foreground">{number}</span>
        <h2 id={id} className="font-heading text-2xl font-semibold text-foreground">
          {title}
        </h2>
      </div>
      <hr className="hairline mt-4" />
    </motion.div>
  );
}

export default function Components() {
  return (
    <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 md:py-16">
      {/* Page heading */}
      <AnimatedSection>
        <motion.div variants={fadeUp} className="mb-12">
          <p className="font-heading text-xs small-caps tracking-[0.2em] text-primary mb-3">
            Component Library
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
            Design System
          </h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            A comprehensive reference of all shared UI components with their variants,
            sizes, and states. Each element is designed with editorial restraint
            and typographic precision.
          </p>
        </motion.div>
      </AnimatedSection>

      <div className="space-y-16">
        {/* ── Button ── */}
        <AnimatedSection>
          <SectionHeading id="button" number="01" title="Button" />
          <motion.div variants={fadeUp} className="space-y-6">
            <div>
              <p className="font-heading text-xs small-caps tracking-wider text-muted-foreground mb-3">
                Variants
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default" className="small-caps border border-border/50">Default</Button>
                <Button variant="outline" className="small-caps">Outline</Button>
                <Button variant="ghost" className="small-caps">Ghost</Button>
                <Button variant="destructive" className="small-caps">Destructive</Button>
                <Button variant="secondary" className="small-caps">Secondary</Button>
                <Button variant="link" className="small-caps">Link</Button>
              </div>
            </div>
            <div>
              <p className="font-heading text-xs small-caps tracking-wider text-muted-foreground mb-3">
                Sizes
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm" className="small-caps border border-border/50">Small</Button>
                <Button size="default" className="small-caps border border-border/50">Default</Button>
                <Button size="lg" className="small-caps border border-border/50">Large</Button>
              </div>
            </div>
            <div>
              <p className="font-heading text-xs small-caps tracking-wider text-muted-foreground mb-3">
                States
              </p>
              <div className="flex flex-wrap gap-3">
                <Button disabled className="small-caps border border-border/50">Disabled</Button>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* ── Input ── */}
        <AnimatedSection>
          <SectionHeading id="input" number="02" title="Input" />
          <motion.div variants={fadeUp} className="space-y-6 max-w-md">
            <div>
              <p className="font-heading text-xs small-caps tracking-wider text-muted-foreground mb-3">
                Default
              </p>
              <div className="space-y-3">
                <Input placeholder="Enter your email" className="border-0 border-b border-border rounded-none font-body placeholder:font-body focus-visible:ring-0 focus-visible:border-primary" />
              </div>
            </div>
            <div>
              <p className="font-heading text-xs small-caps tracking-wider text-muted-foreground mb-3">
                Sizes
              </p>
              <div className="space-y-3">
                <Input placeholder="Small input" className="h-8 text-sm border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary" />
                <Input placeholder="Default input" className="border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary" />
                <Input placeholder="Large input" className="h-11 text-base border-0 border-b border-border rounded-none focus-visible:ring-0 focus-visible:border-primary" />
              </div>
            </div>
            <div>
              <p className="font-heading text-xs small-caps tracking-wider text-muted-foreground mb-3">
                Error State
              </p>
              <Input
                placeholder="Invalid input"
                aria-invalid="true"
                className="border-0 border-b border-destructive rounded-none focus-visible:ring-0 focus-visible:border-destructive"
              />
              <p className="text-xs text-destructive mt-1">This field is required</p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* ── Card ── */}
        <AnimatedSection>
          <SectionHeading id="card" number="03" title="Card" />
          <motion.div variants={fadeUp}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-none border-b border-border/30 rounded-none">
                <CardHeader className="px-0">
                  <CardTitle className="font-heading">Deploy Summary</CardTitle>
                  <CardDescription>
                    Weekly deployment overview with status breakdown
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This week saw a total of 135 deployments across all services,
                    with a 94% success rate. The api-gateway service led with 42
                    successful deploys.
                  </p>
                </CardContent>
                <CardFooter className="px-0">
                  <Button variant="ghost" className="small-caps text-xs">
                    View full report
                  </Button>
                </CardFooter>
              </Card>

              <Card className="border-0 shadow-none border-b border-border/30 rounded-none">
                <CardHeader className="px-0">
                  <CardTitle className="font-heading">Review Insights</CardTitle>
                  <CardDescription>
                    Code review velocity and bottleneck analysis
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Average time to first review dropped to 2.1 hours, a 15%
                    improvement. Backend services continue to see the fastest
                    turnaround.
                  </p>
                </CardContent>
                <CardFooter className="px-0">
                  <Button variant="ghost" className="small-caps text-xs">
                    Explore trends
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* ── Dialog ── */}
        <AnimatedSection>
          <SectionHeading id="dialog" number="04" title="Dialog" />
          <motion.div variants={fadeUp}>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="small-caps">
                  Open Dialog
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="font-heading">Confirm Deployment</DialogTitle>
                  <DialogDescription>
                    You are about to deploy api-gateway to production. This action
                    will trigger a rolling update across all instances.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost" className="small-caps">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button className="small-caps border border-border/50">Deploy</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </motion.div>
        </AnimatedSection>

        {/* ── Table ── */}
        <AnimatedSection>
          <SectionHeading id="table" number="05" title="Table" />
          <motion.div variants={fadeUp}>
            <Table>
              <TableHeader>
                <TableRow className="border-border/30">
                  <TableHead className="font-heading small-caps tracking-wide text-xs">
                    Service
                  </TableHead>
                  <TableHead className="font-heading small-caps tracking-wide text-xs">
                    Status
                  </TableHead>
                  <TableHead className="font-heading small-caps tracking-wide text-xs">
                    Uptime
                  </TableHead>
                  <TableHead className="font-heading small-caps tracking-wide text-xs">
                    Latency
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-border/20">
                  <TableCell className="font-mono text-sm">api-gateway</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono text-xs">healthy</Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">99.97%</TableCell>
                  <TableCell className="font-mono text-sm">42ms</TableCell>
                </TableRow>
                <TableRow className="border-border/20">
                  <TableCell className="font-mono text-sm">auth-service</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono text-xs">healthy</Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">99.99%</TableCell>
                  <TableCell className="font-mono text-sm">18ms</TableCell>
                </TableRow>
                <TableRow className="border-border/20">
                  <TableCell className="font-mono text-sm">web-app</TableCell>
                  <TableCell>
                    <Badge variant="destructive" className="font-mono text-xs">degraded</Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">98.42%</TableCell>
                  <TableCell className="font-mono text-sm">156ms</TableCell>
                </TableRow>
                <TableRow className="border-border/20">
                  <TableCell className="font-mono text-sm">data-pipeline</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="font-mono text-xs">healthy</Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">99.95%</TableCell>
                  <TableCell className="font-mono text-sm">89ms</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </motion.div>
        </AnimatedSection>

        {/* ── Badge ── */}
        <AnimatedSection>
          <SectionHeading id="badge" number="06" title="Badge" />
          <motion.div variants={fadeUp} className="space-y-6">
            <div>
              <p className="font-heading text-xs small-caps tracking-wider text-muted-foreground mb-3">
                Variants
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* ── Tabs ── */}
        <AnimatedSection>
          <SectionHeading id="tabs" number="07" title="Tabs" />
          <motion.div variants={fadeUp} className="space-y-8">
            <div>
              <p className="font-heading text-xs small-caps tracking-wider text-muted-foreground mb-3">
                Default Variant
              </p>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview" className="font-heading small-caps text-xs">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="deploys" className="font-heading small-caps text-xs">
                    Deploys
                  </TabsTrigger>
                  <TabsTrigger value="incidents" className="font-heading small-caps text-xs">
                    Incidents
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    A high-level overview of your engineering metrics, deployment frequency,
                    and team health indicators for the current reporting period.
                  </p>
                </TabsContent>
                <TabsContent value="deploys" className="mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Detailed deployment logs with service breakdowns, environment targeting,
                    and historical comparison charts.
                  </p>
                </TabsContent>
                <TabsContent value="incidents" className="mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Incident response timeline with MTTR analysis, severity distribution,
                    and on-call rotation load balancing.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <p className="font-heading text-xs small-caps tracking-wider text-muted-foreground mb-3">
                Line Variant
              </p>
              <Tabs defaultValue="weekly">
                <TabsList variant="line">
                  <TabsTrigger value="weekly" className="font-heading small-caps text-xs">
                    Weekly
                  </TabsTrigger>
                  <TabsTrigger value="monthly" className="font-heading small-caps text-xs">
                    Monthly
                  </TabsTrigger>
                  <TabsTrigger value="quarterly" className="font-heading small-caps text-xs">
                    Quarterly
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="weekly" className="mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Week-over-week trends with granular daily breakdowns.
                  </p>
                </TabsContent>
                <TabsContent value="monthly" className="mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Monthly aggregate with rolling averages and trend lines.
                  </p>
                </TabsContent>
                <TabsContent value="quarterly" className="mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Quarterly business review data with OKR alignment.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* ── Toast ── */}
        <AnimatedSection>
          <SectionHeading id="toast" number="08" title="Toast" />
          <motion.div variants={fadeUp}>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                className="small-caps"
                onClick={() => toast("Deploy initiated", { description: "api-gateway rolling out to production" })}
              >
                Default Toast
              </Button>
              <Button
                variant="outline"
                className="small-caps"
                onClick={() => toast.success("Deploy successful", { description: "All instances healthy" })}
              >
                Success Toast
              </Button>
              <Button
                variant="outline"
                className="small-caps"
                onClick={() => toast.error("Deploy failed", { description: "Rollback initiated automatically" })}
              >
                Error Toast
              </Button>
              <Button
                variant="outline"
                className="small-caps"
                onClick={() => toast.warning("High latency detected", { description: "web-app p99 above threshold" })}
              >
                Warning Toast
              </Button>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}
