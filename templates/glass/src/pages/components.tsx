import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
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
    <div className="space-y-1 mb-6">
      <h2 id={id} className="font-heading text-xl font-bold scroll-mt-20">
        {title}
      </h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Components() {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const };

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative">
      {/* Background orbs */}
      <div className="orb orb-1 top-[10%] left-[5%]" aria-hidden="true" />
      <div className="orb orb-2 top-[50%] right-[10%]" aria-hidden="true" />
      <div className="orb orb-3 bottom-[10%] left-[40%]" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <h1 className="font-heading text-3xl font-bold">Components</h1>
          <p className="text-muted-foreground mt-2">
            All shared components with every variant, size, and state — rendered
            through glass.
          </p>
        </motion.div>

        {/* ===== BUTTON ===== */}
        <section aria-labelledby="button">
          <SectionHeading
            id="button"
            title="Button"
            description="Actions and navigation triggers with glass-enhanced styling."
          />
          <Card className="rounded-xl">
            <CardContent className="pt-6 space-y-6">
              {/* Variants */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  Variants
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="default">Default</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="link">Link</Button>
                </div>
              </div>
              {/* Sizes */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  Sizes
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              {/* States */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  States
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button disabled>Disabled</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ===== INPUT ===== */}
        <section aria-labelledby="input">
          <SectionHeading
            id="input"
            title="Input"
            description="Text fields with glass blur and glow focus."
          />
          <Card className="rounded-xl">
            <CardContent className="pt-6 space-y-6">
              {/* Default */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  Default
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  <Input placeholder="Small" className="h-8 text-sm" />
                  <Input
                    placeholder="Default"
                    value={inputValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                  />
                  <Input placeholder="Large" className="h-11 text-base" />
                </div>
              </div>
              {/* Error */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  Error state
                </p>
                <Input
                  placeholder="Invalid email"
                  aria-invalid="true"
                  defaultValue="not-an-email"
                />
                <p className="text-xs text-destructive mt-1">
                  Please enter a valid email address.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ===== CARD ===== */}
        <section aria-labelledby="card">
          <SectionHeading
            id="card"
            title="Card"
            description="Glass containers with translucent backgrounds and blur."
          />
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Glass Card</CardTitle>
              <CardDescription>
                A frosted glass surface floating above gradient orbs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cards use semi-transparent backgrounds with backdrop blur to
                create a layered, depth-rich interface. The gradient orbs behind
                them become softly visible through the frosted surface.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button size="sm">Save</Button>
              <Button size="sm" variant="outline">
                Cancel
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* ===== DIALOG ===== */}
        <section aria-labelledby="dialog">
          <SectionHeading
            id="dialog"
            title="Dialog"
            description="Modal overlays with glass blur and backdrop."
          />
          <Card className="rounded-xl">
            <CardContent className="pt-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Open Dialog</Button>
                </DialogTrigger>
                <DialogContent className="rounded-2xl">
                  <DialogHeader>
                    <DialogTitle>Confirm Action</DialogTitle>
                    <DialogDescription>
                      This dialog uses a glass surface with increased blur for
                      modal focus. The background dims while the dialog floats.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Input placeholder="Enter something..." />
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                      <Button>Confirm</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </section>

        {/* ===== TABLE ===== */}
        <section aria-labelledby="table">
          <SectionHeading
            id="table"
            title="Table"
            description="Data tables rendered through glass surfaces."
          />
          <Card className="rounded-xl">
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Deploys</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[
                    {
                      name: "Sarah Chen",
                      role: "Staff Engineer",
                      status: "Active",
                      deploys: 142,
                    },
                    {
                      name: "Marcus Webb",
                      role: "Senior SRE",
                      status: "Active",
                      deploys: 89,
                    },
                    {
                      name: "Priya Patel",
                      role: "Tech Lead",
                      status: "Away",
                      deploys: 67,
                    },
                    {
                      name: "Alex Kojima",
                      role: "Platform Eng",
                      status: "Active",
                      deploys: 53,
                    },
                  ].map((row) => (
                    <TableRow key={row.name}>
                      <TableCell className="font-medium">{row.name}</TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            row.status === "Active" ? "default" : "secondary"
                          }
                        >
                          {row.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{row.deploys}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </section>

        {/* ===== BADGE ===== */}
        <section aria-labelledby="badge">
          <SectionHeading
            id="badge"
            title="Badge"
            description="Status indicators and labels."
          />
          <Card className="rounded-xl">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ===== TABS ===== */}
        <section aria-labelledby="tabs">
          <SectionHeading
            id="tabs"
            title="Tabs"
            description="Tabbed navigation with default and line variants."
          />
          <Card className="rounded-xl">
            <CardContent className="pt-6 space-y-8">
              {/* Default variant */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  Default variant
                </p>
                <Tabs defaultValue="overview">
                  <TabsList>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Overview content with default glass-styled tabs above.
                    </p>
                  </TabsContent>
                  <TabsContent value="analytics" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Analytics view with real-time data.
                    </p>
                  </TabsContent>
                  <TabsContent value="reports" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Generated reports and exports.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Line variant */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                  Line variant
                </p>
                <Tabs defaultValue="weekly">
                  <TabsList variant="line">
                    <TabsTrigger value="weekly">Weekly</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                  </TabsList>
                  <TabsContent value="weekly" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Weekly metrics and trends.
                    </p>
                  </TabsContent>
                  <TabsContent value="monthly" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Monthly performance overview.
                    </p>
                  </TabsContent>
                  <TabsContent value="yearly" className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Year-over-year comparisons.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* ===== TOAST ===== */}
        <section aria-labelledby="toast">
          <SectionHeading
            id="toast"
            title="Toast"
            description="Notification messages triggered by actions."
          />
          <Card className="rounded-xl">
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="outline"
                  onClick={() => toast("Default toast notification")}
                >
                  Default Toast
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    toast.success("Deploy completed successfully")
                  }
                >
                  Success Toast
                </Button>
                <Button
                  variant="outline"
                  onClick={() => toast.error("Deploy failed — rollback initiated")}
                >
                  Error Toast
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    toast.info("New deploy queued for review")
                  }
                >
                  Info Toast
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
