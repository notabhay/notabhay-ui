import { useState } from "react";
import { motion } from "motion/react";
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
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@notabhay-ui/ui";

const transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

function SectionHeading({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-8" id={id}>
      <h2 className="font-heading text-2xl font-semibold text-foreground">
        {title}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground font-body">
        {description}
      </p>
      <hr className="gold-rule mt-4" />
    </div>
  );
}

export default function Components() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <span className="text-xs font-body tracking-widest text-primary">
          Component Library
        </span>
        <h1 className="mt-2 font-heading text-3xl sm:text-4xl font-semibold text-foreground">
          Design System
        </h1>
        <p className="mt-3 text-muted-foreground font-body max-w-2xl">
          Every component from the shared library, styled with the Ember
          aesthetic. Warm, premium, and intentional.
        </p>
      </motion.div>

      {/* Navigation */}
      <nav className="mt-8 mb-16 flex flex-wrap gap-2" aria-label="Component sections">
        {["button", "input", "card", "dialog", "table", "badge", "tabs", "toast"].map(
          (item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-xs font-body px-3 py-1.5 rounded-md border border-border/50 text-muted-foreground transition-colors duration-400 hover:text-primary hover:border-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          )
        )}
      </nav>

      <div className="space-y-20">
        {/* Button */}
        <section aria-labelledby="button-heading">
          <SectionHeading
            id="button"
            title="Button"
            description="Primary actions with warm gradient styling and refined hover effects."
          />
          <div className="space-y-6">
            <div>
              <p className="text-xs font-body text-muted-foreground mb-3 tracking-wide">
                Variants
              </p>
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div>
              <p className="text-xs font-body text-muted-foreground mb-3 tracking-wide">
                Sizes
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <p className="text-xs font-body text-muted-foreground mb-3 tracking-wide">
                Disabled
              </p>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </section>

        {/* Input */}
        <section aria-labelledby="input-heading">
          <SectionHeading
            id="input"
            title="Input"
            description="Text inputs with warm backgrounds and gold focus rings."
          />
          <div className="space-y-6 max-w-md">
            <div>
              <p className="text-xs font-body text-muted-foreground mb-3 tracking-wide">
                Default
              </p>
              <Input placeholder="Enter your email..." type="email" />
            </div>
            <div>
              <p className="text-xs font-body text-muted-foreground mb-3 tracking-wide">
                With Label
              </p>
              <label className="block mb-2 text-sm font-heading text-foreground">
                Full Name
              </label>
              <Input placeholder="Jane Doe" />
            </div>
            <div>
              <p className="text-xs font-body text-muted-foreground mb-3 tracking-wide">
                Error State
              </p>
              <Input
                placeholder="Invalid input"
                aria-invalid="true"
                defaultValue="bad@"
              />
              <p className="mt-1.5 text-xs text-destructive font-body">
                Please enter a valid email address.
              </p>
            </div>
            <div>
              <p className="text-xs font-body text-muted-foreground mb-3 tracking-wide">
                Disabled
              </p>
              <Input placeholder="Disabled" disabled />
            </div>
          </div>
        </section>

        {/* Card */}
        <section aria-labelledby="card-heading">
          <SectionHeading
            id="card"
            title="Card"
            description="Elevated surfaces with grain texture and gold accent borders."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Card className="card-grain gold-accent-top border-border/50">
              <CardHeader>
                <CardTitle className="font-heading">Deploy Summary</CardTitle>
                <CardDescription>
                  Weekly overview of your deployment pipeline.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-body">
                  Your team shipped 135 deploys this week, with a 98.5% success
                  rate across all environments.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">View Details</Button>
              </CardFooter>
            </Card>
            <Card className="card-grain gold-accent-top border-border/50">
              <CardHeader>
                <CardTitle className="font-heading">Review Metrics</CardTitle>
                <CardDescription>
                  Code review performance indicators.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-body">
                  Average review time is down 8.3% this month. The team is
                  shipping faster without compromising quality.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Dialog */}
        <section aria-labelledby="dialog-heading">
          <SectionHeading
            id="dialog"
            title="Dialog"
            description="Modal overlays for confirmations and focused interactions."
          />
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-heading">
                  Confirm Deployment
                </DialogTitle>
                <DialogDescription>
                  You are about to deploy to production. This action will update
                  all live services.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={() => setDialogOpen(false)}>
                  Deploy Now
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>

        {/* Table */}
        <section aria-labelledby="table-heading">
          <SectionHeading
            id="table"
            title="Table"
            description="Data tables with refined borders and warm hover states."
          />
          <Card className="card-grain gold-accent-top border-border/50">
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead className="font-heading text-xs tracking-wide">
                      Service
                    </TableHead>
                    <TableHead className="font-heading text-xs tracking-wide">
                      Status
                    </TableHead>
                    <TableHead className="font-heading text-xs tracking-wide">
                      Uptime
                    </TableHead>
                    <TableHead className="font-heading text-xs tracking-wide text-right">
                      Requests
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      service: "api-gateway",
                      status: "Healthy",
                      uptime: "99.99%",
                      requests: "1.2M",
                    },
                    {
                      service: "auth-service",
                      status: "Healthy",
                      uptime: "99.95%",
                      requests: "890K",
                    },
                    {
                      service: "data-pipeline",
                      status: "Degraded",
                      uptime: "98.40%",
                      requests: "340K",
                    },
                    {
                      service: "web-app",
                      status: "Healthy",
                      uptime: "99.98%",
                      requests: "2.1M",
                    },
                  ].map((row) => (
                    <TableRow key={row.service} className="border-border/30">
                      <TableCell className="font-body font-medium text-sm">
                        {row.service}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            row.status === "Healthy" ? "outline" : "destructive"
                          }
                          className={
                            row.status === "Healthy"
                              ? "text-primary border-primary/30"
                              : ""
                          }
                        >
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {row.uptime}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground text-right">
                        {row.requests}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* Badge */}
        <section aria-labelledby="badge-heading">
          <SectionHeading
            id="badge"
            title="Badge"
            description="Status indicators and labels with muted elegance."
          />
          <div className="space-y-4">
            <div>
              <p className="text-xs font-body text-muted-foreground mb-3 tracking-wide">
                Variants
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section aria-labelledby="tabs-heading">
          <SectionHeading
            id="tabs"
            title="Tabs"
            description="Segmented navigation with default and line variants."
          />
          <div className="space-y-8">
            <div>
              <p className="text-xs font-body text-muted-foreground mb-3 tracking-wide">
                Default Variant
              </p>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <Card className="card-grain border-border/50">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground font-body">
                        Overview content with project summary and quick actions.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <Card className="card-grain border-border/50">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground font-body">
                        Analytics content with charts and performance metrics.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="settings" className="mt-4">
                  <Card className="card-grain border-border/50">
                    <CardContent className="pt-6">
                      <p className="text-sm text-muted-foreground font-body">
                        Settings content for team and project configuration.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <div>
              <p className="text-xs font-body text-muted-foreground mb-3 tracking-wide">
                Line Variant
              </p>
              <Tabs defaultValue="deploys">
                <TabsList variant="line">
                  <TabsTrigger value="deploys">Deploys</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="incidents">Incidents</TabsTrigger>
                </TabsList>
                <TabsContent value="deploys" className="mt-4">
                  <p className="text-sm text-muted-foreground font-body">
                    Deploy history and pipeline status.
                  </p>
                </TabsContent>
                <TabsContent value="reviews" className="mt-4">
                  <p className="text-sm text-muted-foreground font-body">
                    Code review velocity and reviewer assignments.
                  </p>
                </TabsContent>
                <TabsContent value="incidents" className="mt-4">
                  <p className="text-sm text-muted-foreground font-body">
                    Incident timeline and MTTR analysis.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Toast */}
        <section aria-labelledby="toast-heading">
          <SectionHeading
            id="toast"
            title="Toast"
            description="Ephemeral notifications for user feedback."
          />
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => toast("Deploy initiated", {
                description: "Your changes are being deployed to staging.",
              })}
            >
              Default Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.success("Deploy successful", {
                description: "All services are running the latest version.",
              })}
            >
              Success Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error("Deploy failed", {
                description: "The api-gateway service failed health checks.",
              })}
            >
              Error Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning("Rate limit approaching", {
                description: "You have used 90% of your monthly quota.",
              })}
            >
              Warning Toast
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
