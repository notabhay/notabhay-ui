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
import { motion } from "motion/react";

const springPlayful = {
  type: "spring" as const,
  stiffness: 400,
  damping: 10,
};

const springBouncy = {
  type: "spring" as const,
  stiffness: 300,
  damping: 12,
};

function SectionHeader({
  id,
  title,
  description,
  color = "violet",
}: {
  id: string;
  title: string;
  description: string;
  color?: "violet" | "pink" | "cyan";
}) {
  const textColor =
    color === "violet"
      ? "text-primary"
      : color === "pink"
        ? "text-secondary"
        : "text-accent";

  return (
    <motion.div
      id={id}
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={springBouncy}
      className="scroll-mt-20"
    >
      <h2 className={`font-heading font-bold text-2xl sm:text-3xl mb-1 ${textColor}`}>
        {title}
      </h2>
      <p className="text-muted-foreground mb-6">{description}</p>
    </motion.div>
  );
}

export default function Components() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={springBouncy}
      >
        <Badge variant="secondary" className="rounded-full mb-4 px-4 py-1.5 font-semibold">
          Component Library
        </Badge>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-foreground">
          Components
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Every shared component with all variants, sizes, and states.
        </p>

        {/* Quick nav — colorful pills */}
        <nav className="flex flex-wrap gap-2 mt-6" aria-label="Component sections">
          {[
            { id: "button", color: "bg-primary/10 text-primary hover:bg-primary/20" },
            { id: "input", color: "bg-secondary/10 text-secondary hover:bg-secondary/20" },
            { id: "card", color: "bg-accent/10 text-accent hover:bg-accent/20" },
            { id: "dialog", color: "bg-primary/10 text-primary hover:bg-primary/20" },
            { id: "table", color: "bg-secondary/10 text-secondary hover:bg-secondary/20" },
            { id: "badge", color: "bg-accent/10 text-accent hover:bg-accent/20" },
            { id: "tabs", color: "bg-primary/10 text-primary hover:bg-primary/20" },
            { id: "toast", color: "bg-secondary/10 text-secondary hover:bg-secondary/20" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-4 py-1.5 text-xs font-bold rounded-full transition-colors ${item.color}`}
            >
              {item.id.charAt(0).toUpperCase() + item.id.slice(1)}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Button Section */}
      <section>
        <SectionHeader
          id="button"
          title="Button"
          description="Pill-shaped buttons with gradient fills, shimmer on hover, and bouncy interactions."
          color="violet"
        />
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">
              Variants
            </h3>
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95, rotate: -3 }} transition={springPlayful}>
                <Button className="rounded-full candy-gradient-bg text-white border-0 candy-glow candy-shimmer font-bold">
                  Default
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={springPlayful}>
                <Button variant="outline" className="rounded-full border font-bold">
                  Outline
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={springPlayful}>
                <Button variant="ghost" className="rounded-full font-bold">
                  Ghost
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={springPlayful}>
                <Button variant="destructive" className="rounded-full font-bold">
                  Destructive
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={springPlayful}>
                <Button variant="secondary" className="rounded-full font-bold">
                  Secondary
                </Button>
              </motion.div>
              <Button variant="link" className="font-bold">Link</Button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-secondary mb-3 uppercase tracking-wide">
              Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: -2 }} transition={springPlayful}>
                <Button size="sm" className="rounded-full candy-gradient-bg text-white border-0 candy-shimmer font-bold">
                  Small
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: -2 }} transition={springPlayful}>
                <Button className="rounded-full candy-gradient-bg text-white border-0 candy-shimmer font-bold">
                  Default
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: -2 }} transition={springPlayful}>
                <Button size="lg" className="rounded-full candy-gradient-bg text-white border-0 candy-glow candy-shimmer font-bold">
                  Large
                </Button>
              </motion.div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-accent mb-3 uppercase tracking-wide">
              States
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button className="rounded-full candy-gradient-bg text-white border-0" disabled>
                Disabled
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Input Section */}
      <section className="candy-section-pink rounded-3xl p-8 -mx-4 sm:-mx-6 lg:-mx-8">
        <SectionHeader
          id="input"
          title="Input"
          description="Chunky 2px borders with vivid colored focus rings."
          color="pink"
        />
        <div className="space-y-6 max-w-md">
          <div>
            <h3 className="text-sm font-bold text-secondary mb-3 uppercase tracking-wide">
              Default
            </h3>
            <Input
              placeholder="Enter your email..."
              className="rounded-full candy-input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            <h3 className="text-sm font-bold text-destructive mb-3 uppercase tracking-wide">
              Error State
            </h3>
            <Input
              placeholder="Invalid input"
              aria-invalid="true"
              className="rounded-full candy-input"
              defaultValue="bad-email"
            />
            <p className="text-xs text-destructive mt-1.5 font-medium">
              Please enter a valid email address.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-accent mb-3 uppercase tracking-wide">
              Sizes
            </h3>
            <div className="space-y-3">
              <Input placeholder="Small" className="rounded-full candy-input h-8 text-sm" />
              <Input placeholder="Default" className="rounded-full candy-input" />
              <Input placeholder="Large" className="rounded-full candy-input h-11 text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section>
        <SectionHeader
          id="card"
          title="Card"
          description="Rounded cards with VISIBLE rotations, gradient borders, and colored shadows."
          color="cyan"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.04, rotate: 0, y: -8 }}
            initial={{ rotate: -3 }}
            transition={springPlayful}
          >
            <Card className="candy-glow border border-primary/40 overflow-hidden candy-gradient-border">
              <div className="h-1.5 candy-gradient-bg w-full" aria-hidden="true" />
              <CardHeader>
                <CardTitle className="font-heading font-bold text-primary">
                  Analytics Overview
                </CardTitle>
                <CardDescription>
                  Your team&apos;s performance metrics for this week.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Deploy frequency is up 12.5% compared to last week. Review
                  velocity has improved by 8.3%.
                </p>
              </CardContent>
              <CardFooter>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95, rotate: -2 }} transition={springPlayful}>
                  <Button
                    size="sm"
                    className="rounded-full candy-gradient-bg text-white border-0 candy-shimmer font-bold"
                  >
                    View Details
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.04, rotate: 0, y: -8 }}
            initial={{ rotate: 2.5 }}
            transition={springPlayful}
          >
            <Card className="candy-glow-pink border border-secondary/40 overflow-hidden candy-gradient-border">
              <div className="h-1.5 bg-secondary w-full" aria-hidden="true" />
              <CardHeader>
                <CardTitle className="font-heading font-bold text-secondary">
                  Team Activity
                </CardTitle>
                <CardDescription>
                  Recent activity across all services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  23 active pull requests with an average review time of 4.2
                  hours. 7 incidents in the last 30 days.
                </p>
              </CardContent>
              <CardFooter>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={springPlayful}>
                  <Button variant="outline" size="sm" className="rounded-full border font-bold">
                    See All
                  </Button>
                </motion.div>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Dialog Section */}
      <section className="candy-section-violet rounded-3xl p-8 -mx-4 sm:-mx-6 lg:-mx-8">
        <SectionHeader
          id="dialog"
          title="Dialog"
          description="Modal dialogs with rounded corners and smooth transitions."
          color="violet"
        />
        <Dialog>
          <DialogTrigger asChild>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95, rotate: -3 }} transition={springPlayful} className="inline-block">
              <Button className="rounded-full candy-gradient-bg text-white border-0 candy-glow candy-shimmer font-bold">
                Open Dialog
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogContent className="rounded-[20px] border border-primary/30">
            <DialogHeader>
              <DialogTitle className="font-heading font-bold candy-gradient-text">
                Confirm Action
              </DialogTitle>
              <DialogDescription>
                This action will deploy the latest changes to production. Are you
                sure you want to continue?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="rounded-full border font-bold">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button className="rounded-full candy-gradient-bg text-white border-0 candy-shimmer font-bold">
                  Deploy Now
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* Table Section */}
      <section>
        <SectionHeader
          id="table"
          title="Table"
          description="Gradient headers, alternating colored rows, and playful badges."
          color="pink"
        />
        <Card className="candy-glow-pink border border-secondary/30 candy-gradient-border overflow-hidden">
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow className="candy-table-header">
                  <TableHead className="font-bold">Service</TableHead>
                  <TableHead className="font-bold">Status</TableHead>
                  <TableHead className="font-bold">Version</TableHead>
                  <TableHead className="hidden sm:table-cell font-bold">
                    Updated
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="candy-row-alt hover:bg-primary/5 transition-colors">
                  <TableCell className="font-medium">api-gateway</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="rounded-full border-accent/50 text-accent border font-semibold"
                    >
                      Healthy
                    </Badge>
                  </TableCell>
                  <TableCell>v2.4.1</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    2 hours ago
                  </TableCell>
                </TableRow>
                <TableRow className="candy-row-alt hover:bg-primary/5 transition-colors">
                  <TableCell className="font-medium">auth-service</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="rounded-full border-accent/50 text-accent border font-semibold"
                    >
                      Healthy
                    </Badge>
                  </TableCell>
                  <TableCell>v1.8.3</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    5 hours ago
                  </TableCell>
                </TableRow>
                <TableRow className="candy-row-alt hover:bg-primary/5 transition-colors">
                  <TableCell className="font-medium">web-app</TableCell>
                  <TableCell>
                    <Badge variant="destructive" className="rounded-full font-semibold">
                      Down
                    </Badge>
                  </TableCell>
                  <TableCell>v3.1.0</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    1 hour ago
                  </TableCell>
                </TableRow>
                <TableRow className="candy-row-alt hover:bg-primary/5 transition-colors">
                  <TableCell className="font-medium">data-pipeline</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="rounded-full font-semibold"
                    >
                      Deploying
                    </Badge>
                  </TableCell>
                  <TableCell>v1.2.0</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    Just now
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Badge Section */}
      <section className="candy-section-cyan rounded-3xl p-8 -mx-4 sm:-mx-6 lg:-mx-8">
        <SectionHeader
          id="badge"
          title="Badge"
          description="Pill-shaped badges in every flavor of candy."
          color="cyan"
        />
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-bold text-accent mb-3 uppercase tracking-wide">
              Variants
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge className="rounded-full px-4 py-1 font-bold">Default</Badge>
              <Badge variant="secondary" className="rounded-full px-4 py-1 font-bold">Secondary</Badge>
              <Badge variant="destructive" className="rounded-full px-4 py-1 font-bold">Destructive</Badge>
              <Badge variant="outline" className="rounded-full px-4 py-1 border font-bold">Outline</Badge>
              {/* Gradient badge */}
              <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-bold text-white candy-gradient-bg candy-glow">
                Gradient
              </span>
              {/* Cyan badge */}
              <span className="inline-flex items-center rounded-full px-4 py-1 text-xs font-bold bg-accent text-accent-foreground candy-glow-cyan">
                Accent
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section>
        <SectionHeader
          id="tabs"
          title="Tabs"
          description="Tabbed interfaces with gradient indicators."
          color="violet"
        />
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">
              Default Variant
            </h3>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <Card className="candy-glow border border-primary/30 candy-gradient-border">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Overview tab content showing general metrics and summaries.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <Card className="candy-glow border border-primary/30 candy-gradient-border">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Analytics tab with detailed charts and data breakdowns.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <Card className="candy-glow border border-primary/30 candy-gradient-border">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Settings tab for configuring dashboard preferences.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <h3 className="text-sm font-bold text-secondary mb-3 uppercase tracking-wide">
              Line Variant
            </h3>
            <Tabs defaultValue="deploys">
              <TabsList variant="line">
                <TabsTrigger value="deploys">Deploys</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="incidents">Incidents</TabsTrigger>
              </TabsList>
              <TabsContent value="deploys" className="mt-4">
                <p className="text-muted-foreground">
                  Deploy history and frequency charts.
                </p>
              </TabsContent>
              <TabsContent value="reviews" className="mt-4">
                <p className="text-muted-foreground">
                  Code review metrics and velocity data.
                </p>
              </TabsContent>
              <TabsContent value="incidents" className="mt-4">
                <p className="text-muted-foreground">
                  Incident timelines and severity analysis.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Toast Section */}
      <section className="candy-section-pink rounded-3xl p-8 -mx-4 sm:-mx-6 lg:-mx-8">
        <SectionHeader
          id="toast"
          title="Toast"
          description="Notification toasts in multiple candy flavors."
          color="pink"
        />
        <div className="flex flex-wrap gap-3">
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95, rotate: -2 }} transition={springPlayful}>
            <Button
              onClick={() => toast("Deploy started", { description: "api-gateway v2.4.2" })}
              className="rounded-full candy-gradient-bg text-white border-0 candy-shimmer font-bold"
            >
              Default Toast
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={springPlayful}>
            <Button
              variant="outline"
              className="rounded-full border font-bold"
              onClick={() =>
                toast.success("Deploy successful", {
                  description: "api-gateway is now live.",
                })
              }
            >
              Success Toast
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={springPlayful}>
            <Button
              variant="destructive"
              className="rounded-full font-bold"
              onClick={() =>
                toast.error("Deploy failed", {
                  description: "web-app build error on line 42.",
                })
              }
            >
              Error Toast
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={springPlayful}>
            <Button
              variant="secondary"
              className="rounded-full font-bold"
              onClick={() =>
                toast.warning("Rate limit approaching", {
                  description: "85% of API quota used.",
                })
              }
            >
              Warning Toast
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
