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

const springBouncy = {
  type: "spring" as const,
  stiffness: 300,
  damping: 15,
};

function SectionHeader({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      id={id}
      initial={{ y: 15, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={springBouncy}
      className="scroll-mt-20"
    >
      <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-1">
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
        <Badge variant="secondary" className="rounded-full mb-4 px-3 py-1">
          Component Library
        </Badge>
        <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          Components
        </h1>
        <p className="text-muted-foreground mt-2 max-w-xl">
          Every shared component with all variants, sizes, and states.
        </p>

        {/* Quick nav */}
        <nav className="flex flex-wrap gap-2 mt-6" aria-label="Component sections">
          {[
            "button",
            "input",
            "card",
            "dialog",
            "table",
            "badge",
            "tabs",
            "toast",
          ].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Button Section */}
      <section>
        <SectionHeader
          id="button"
          title="Button"
          description="Pill-shaped buttons with gradient fills and bouncy interactions."
        />
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Variants
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button className="rounded-full candy-gradient-bg text-white border-0 candy-glow">
                Default
              </Button>
              <Button variant="outline" className="rounded-full">
                Outline
              </Button>
              <Button variant="ghost" className="rounded-full">
                Ghost
              </Button>
              <Button variant="destructive" className="rounded-full">
                Destructive
              </Button>
              <Button variant="secondary" className="rounded-full">
                Secondary
              </Button>
              <Button variant="link">Link</Button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Sizes
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" className="rounded-full candy-gradient-bg text-white border-0">
                Small
              </Button>
              <Button className="rounded-full candy-gradient-bg text-white border-0">
                Default
              </Button>
              <Button size="lg" className="rounded-full candy-gradient-bg text-white border-0">
                Large
              </Button>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
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
      <section>
        <SectionHeader
          id="input"
          title="Input"
          description="Rounded inputs with colored focus rings."
        />
        <div className="space-y-6 max-w-md">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Default
            </h3>
            <Input
              placeholder="Enter your email..."
              className="rounded-full"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Error State
            </h3>
            <Input
              placeholder="Invalid input"
              aria-invalid="true"
              className="rounded-full"
              defaultValue="bad-email"
            />
            <p className="text-xs text-destructive mt-1.5">
              Please enter a valid email address.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Sizes
            </h3>
            <div className="space-y-3">
              <Input placeholder="Small" className="rounded-full h-8 text-sm" />
              <Input placeholder="Default" className="rounded-full" />
              <Input placeholder="Large" className="rounded-full h-11 text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* Card Section */}
      <section>
        <SectionHeader
          id="card"
          title="Card"
          description="Rounded cards with colored shadows and playful rotation."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.02, rotate: 0 }}
            initial={{ rotate: -1 }}
            transition={springBouncy}
          >
            <Card className="candy-glow border-border/50">
              <CardHeader>
                <CardTitle className="font-heading font-bold">
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
                <Button
                  size="sm"
                  className="rounded-full candy-gradient-bg text-white border-0"
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, rotate: 0 }}
            initial={{ rotate: 1.5 }}
            transition={springBouncy}
          >
            <Card className="candy-glow-pink border-border/50">
              <CardHeader>
                <CardTitle className="font-heading font-bold">
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
                <Button variant="outline" size="sm" className="rounded-full">
                  See All
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Dialog Section */}
      <section>
        <SectionHeader
          id="dialog"
          title="Dialog"
          description="Modal dialogs with rounded corners and smooth transitions."
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button className="rounded-full candy-gradient-bg text-white border-0 candy-glow">
              Open Dialog
            </Button>
          </DialogTrigger>
          <DialogContent className="rounded-[20px]">
            <DialogHeader>
              <DialogTitle className="font-heading font-bold">
                Confirm Action
              </DialogTitle>
              <DialogDescription>
                This action will deploy the latest changes to production. Are you
                sure you want to continue?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" className="rounded-full">
                  Cancel
                </Button>
              </DialogClose>
              <DialogClose asChild>
                <Button className="rounded-full candy-gradient-bg text-white border-0">
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
          description="Data tables with rounded containers and playful badges."
        />
        <Card className="candy-glow border-border/50">
          <CardContent className="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Service</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Version</TableHead>
                  <TableHead className="hidden sm:table-cell">
                    Updated
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">api-gateway</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="rounded-full border-accent/50 text-accent"
                    >
                      Healthy
                    </Badge>
                  </TableCell>
                  <TableCell>v2.4.1</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    2 hours ago
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">auth-service</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className="rounded-full border-accent/50 text-accent"
                    >
                      Healthy
                    </Badge>
                  </TableCell>
                  <TableCell>v1.8.3</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    5 hours ago
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">web-app</TableCell>
                  <TableCell>
                    <Badge variant="destructive" className="rounded-full">
                      Down
                    </Badge>
                  </TableCell>
                  <TableCell>v3.1.0</TableCell>
                  <TableCell className="hidden sm:table-cell text-muted-foreground">
                    1 hour ago
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">data-pipeline</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className="rounded-full"
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
      <section>
        <SectionHeader
          id="badge"
          title="Badge"
          description="Pill-shaped badges in every color of the rainbow."
        />
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Variants
            </h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section>
        <SectionHeader
          id="tabs"
          title="Tabs"
          description="Tabbed interfaces with default and line variants."
        />
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
              Default Variant
            </h3>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <Card className="candy-glow border-border/50">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Overview tab content showing general metrics and summaries.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <Card className="candy-glow border-border/50">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground">
                      Analytics tab with detailed charts and data breakdowns.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <Card className="candy-glow border-border/50">
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
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">
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
      <section>
        <SectionHeader
          id="toast"
          title="Toast"
          description="Notification toasts in multiple flavors."
        />
        <div className="flex flex-wrap gap-3">
          <Button
            onClick={() => toast("Deploy started", { description: "api-gateway v2.4.2" })}
            className="rounded-full candy-gradient-bg text-white border-0"
          >
            Default Toast
          </Button>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() =>
              toast.success("Deploy successful", {
                description: "api-gateway is now live.",
              })
            }
          >
            Success Toast
          </Button>
          <Button
            variant="destructive"
            className="rounded-full"
            onClick={() =>
              toast.error("Deploy failed", {
                description: "web-app build error on line 42.",
              })
            }
          >
            Error Toast
          </Button>
          <Button
            variant="secondary"
            className="rounded-full"
            onClick={() =>
              toast.warning("Rate limit approaching", {
                description: "85% of API quota used.",
              })
            }
          >
            Warning Toast
          </Button>
        </div>
      </section>
    </div>
  );
}
