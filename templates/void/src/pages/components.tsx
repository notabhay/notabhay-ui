import { useState, type ChangeEvent } from "react";
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
  TableCaption,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@notabhay-ui/ui";
import { FadeIn } from "@/components/fade-in";

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
    <div className="mb-6">
      <h2
        id={id}
        className="font-heading text-lg font-bold tracking-tight scroll-mt-20"
      >
        {title}
      </h2>
      <p className="text-sm text-muted-foreground mt-1">{description}</p>
    </div>
  );
}

function ComponentSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <section className="border-b border-border pb-10 mb-10 last:border-b-0 last:pb-0">
        {children}
      </section>
    </FadeIn>
  );
}

export default function Components() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-10 sm:py-16">
      <FadeIn>
        <div className="mb-12">
          <h1 className="font-heading text-2xl font-bold tracking-tight">
            Components
          </h1>
          <p className="text-sm text-muted-foreground mt-2">
            All shared components from @notabhay-ui/ui, rendered with Void
            styling.
          </p>
          <nav className="mt-4 flex flex-wrap gap-2" aria-label="Component navigation">
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
                className="text-xs text-muted-foreground hover:opacity-80 transition-opacity border border-border rounded-sm px-2 py-1 font-heading focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {id}
              </a>
            ))}
          </nav>
        </div>
      </FadeIn>

      {/* Button */}
      <ComponentSection delay={0.05}>
        <SectionHeading
          id="button"
          title="Button"
          description="All variants and sizes."
        />
        <div className="space-y-6">
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
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
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
              Sizes
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
              States
            </p>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button variant="outline" disabled>
                Disabled Outline
              </Button>
            </div>
          </div>
        </div>
      </ComponentSection>

      {/* Input */}
      <ComponentSection delay={0.1}>
        <SectionHeading
          id="input"
          title="Input"
          description="Text inputs with states."
        />
        <div className="space-y-6 max-w-sm">
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
              Default
            </p>
            <Input
              placeholder="Enter text..."
              value={inputValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
              With label
            </p>
            <label className="block text-sm mb-1.5">Email address</label>
            <Input type="email" placeholder="you@example.com" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
              Error state
            </p>
            <Input
              type="email"
              placeholder="invalid-email"
              aria-invalid="true"
              defaultValue="not-an-email"
            />
            <p className="text-xs text-destructive mt-1.5">
              Please enter a valid email address.
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
              Disabled
            </p>
            <Input placeholder="Disabled input" disabled />
          </div>
        </div>
      </ComponentSection>

      {/* Card */}
      <ComponentSection delay={0.15}>
        <SectionHeading
          id="card"
          title="Card"
          description="Card with all sub-components."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="border border-border shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-sm font-semibold">
                Deploy Metrics
              </CardTitle>
              <CardDescription>
                Overview of recent deployment activity.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Your team has shipped 47 deploys this week, a 12% increase from
                last week.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View details
              </Button>
            </CardFooter>
          </Card>
          <Card className="border border-border shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-sm font-semibold">
                Review Velocity
              </CardTitle>
              <CardDescription>
                PR review performance this sprint.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Average time to first review is 4.2 hours, down 8.3% from last
                sprint.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View details
              </Button>
            </CardFooter>
          </Card>
        </div>
      </ComponentSection>

      {/* Dialog */}
      <ComponentSection delay={0.2}>
        <SectionHeading
          id="dialog"
          title="Dialog"
          description="Modal dialog with content."
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="font-heading">
                Confirm deployment
              </DialogTitle>
              <DialogDescription>
                You are about to deploy api-gateway to production. This action
                cannot be undone.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button>Deploy</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </ComponentSection>

      {/* Table */}
      <ComponentSection delay={0.25}>
        <SectionHeading
          id="table"
          title="Table"
          description="Data table with headers and rows."
        />
        <div className="border border-border rounded-sm overflow-hidden">
          <Table>
            <TableCaption className="text-xs">
              Recent team activity
            </TableCaption>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-xs">Member</TableHead>
                <TableHead className="text-xs">Role</TableHead>
                <TableHead className="text-xs">Commits</TableHead>
                <TableHead className="text-xs text-right">PRs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                {
                  member: "Sarah Chen",
                  role: "Backend",
                  commits: 142,
                  prs: 18,
                },
                {
                  member: "Marcus Webb",
                  role: "Frontend",
                  commits: 98,
                  prs: 12,
                },
                {
                  member: "Priya Patel",
                  role: "Full Stack",
                  commits: 115,
                  prs: 15,
                },
                {
                  member: "Alex Kojima",
                  role: "DevOps",
                  commits: 67,
                  prs: 8,
                },
              ].map((row) => (
                <TableRow key={row.member} className="border-border">
                  <TableCell className="font-medium text-sm">
                    {row.member}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {row.role}
                  </TableCell>
                  <TableCell className="text-sm font-heading">
                    {row.commits}
                  </TableCell>
                  <TableCell className="text-sm text-right font-heading">
                    {row.prs}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </ComponentSection>

      {/* Badge */}
      <ComponentSection delay={0.3}>
        <SectionHeading
          id="badge"
          title="Badge"
          description="Status and label badges in all variants."
        />
        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
              Variants
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline">Outline</Badge>
            </div>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
              Use cases
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="default">production</Badge>
              <Badge variant="outline">staging</Badge>
              <Badge variant="destructive">failed</Badge>
              <Badge variant="secondary">pending</Badge>
            </div>
          </div>
        </div>
      </ComponentSection>

      {/* Tabs */}
      <ComponentSection delay={0.35}>
        <SectionHeading
          id="tabs"
          title="Tabs"
          description="Default and line variants."
        />
        <div className="space-y-8">
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
              Default variant
            </p>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="deploys">Deploys</TabsTrigger>
                <TabsTrigger value="metrics">Metrics</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Overview content: Your team shipped 1,284 deploys this month.
                </p>
              </TabsContent>
              <TabsContent value="deploys" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Deploys content: Latest deploy was api-gateway to production.
                </p>
              </TabsContent>
              <TabsContent value="metrics" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Metrics content: Average review time is 4.2 hours.
                </p>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-3 font-heading">
              Line variant
            </p>
            <Tabs defaultValue="daily">
              <TabsList variant="line">
                <TabsTrigger value="daily">Daily</TabsTrigger>
                <TabsTrigger value="weekly">Weekly</TabsTrigger>
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
              </TabsList>
              <TabsContent value="daily" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Daily view: 47 deploys today.
                </p>
              </TabsContent>
              <TabsContent value="weekly" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Weekly view: 135 deploys this week.
                </p>
              </TabsContent>
              <TabsContent value="monthly" className="mt-4">
                <p className="text-sm text-muted-foreground">
                  Monthly view: 1,284 deploys this month.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </ComponentSection>

      {/* Toast */}
      <ComponentSection delay={0.4}>
        <SectionHeading
          id="toast"
          title="Toast"
          description="Notification toasts triggered by buttons."
        />
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            onClick={() =>
              toast("Deploy started", {
                description: "api-gateway is deploying to production.",
              })
            }
          >
            Default Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.success("Deploy successful", {
                description: "api-gateway deployed to production.",
              })
            }
          >
            Success Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.error("Deploy failed", {
                description: "web-app failed to deploy to production.",
              })
            }
          >
            Error Toast
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.warning("High memory usage", {
                description: "data-pipeline is using 92% of allocated memory.",
              })
            }
          >
            Warning Toast
          </Button>
        </div>
      </ComponentSection>
    </div>
  );
}
