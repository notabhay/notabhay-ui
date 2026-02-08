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
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Badge,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@notabhay-ui/ui";
import { BlobBackground } from "@/components/blob-background";

export default function Components() {
  return (
    <div className="relative py-10 sm:py-14">
      <BlobBackground variant="subtle" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative space-y-16">
        {/* Page Header */}
        <div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
            Components
          </h1>
          <p className="mt-2 text-muted-foreground max-w-lg">
            All shared UI components with every variant, size, and state.
            Styled with the Bloom aesthetic.
          </p>
          <nav className="mt-6 flex flex-wrap gap-2" aria-label="Component sections">
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
                className="text-xs font-medium text-muted-foreground hover:text-primary rounded-full bg-muted/50 px-3 py-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </nav>
        </div>

        {/* Button */}
        <ComponentSection id="button" title="Button" description="Buttons trigger actions and navigation.">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Variants</h4>
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Sizes</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">States</h4>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
              </div>
            </div>
          </div>
        </ComponentSection>

        {/* Input */}
        <ComponentSection id="input" title="Input" description="Text inputs for forms and data entry.">
          <div className="space-y-6 max-w-md">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Default</h4>
              <div className="space-y-3">
                <Input placeholder="Default input" className="rounded-lg" />
                <Input placeholder="With value" defaultValue="hello@flux.dev" className="rounded-lg" />
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Error State</h4>
              <Input
                placeholder="Error input"
                aria-invalid="true"
                defaultValue="invalid@"
                className="rounded-lg"
              />
              <p className="mt-1.5 text-xs text-destructive">Please enter a valid email address.</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Disabled</h4>
              <Input placeholder="Disabled" disabled className="rounded-lg" />
            </div>
          </div>
        </ComponentSection>

        {/* Card */}
        <ComponentSection id="card" title="Card" description="Cards group related content and actions.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card className="rounded-2xl border-border/40 shadow-sm">
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  A description of the card content that provides context.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  This is the main card content area where you can place any content.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm" className="rounded-lg">Action</Button>
              </CardFooter>
            </Card>
            <Card className="rounded-2xl border-border/40 shadow-sm">
              <CardHeader>
                <CardTitle>Metric Card</CardTitle>
                <CardDescription>Weekly summary</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-heading text-3xl font-bold text-primary">
                  1,284
                </p>
                <p className="text-sm text-muted-foreground mt-1">Total deploys this month</p>
              </CardContent>
            </Card>
          </div>
        </ComponentSection>

        {/* Dialog */}
        <ComponentSection id="dialog" title="Dialog" description="Modal dialogs for confirmations and focused tasks.">
          <div className="flex flex-wrap gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-lg">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="rounded-2xl">
                <DialogHeader>
                  <DialogTitle>Confirm Action</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to proceed? This action cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className="rounded-lg">Cancel</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button className="rounded-lg">Confirm</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </ComponentSection>

        {/* Table */}
        <ComponentSection id="table" title="Table" description="Tables display structured data in rows and columns.">
          <Card className="rounded-2xl border-border/40 shadow-sm">
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Role</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Sarah Chen</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="rounded-full text-[10px]">Active</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">Engineer</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Marcus Webb</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className="rounded-full text-[10px]">Active</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">SRE</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Priya Patel</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="rounded-full text-[10px]">Away</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">Lead</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </ComponentSection>

        {/* Badge */}
        <ComponentSection id="badge" title="Badge" description="Badges indicate status, category, or count.">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Variants</h4>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
          </div>
        </ComponentSection>

        {/* Tabs */}
        <ComponentSection id="tabs" title="Tabs" description="Tabs organize content into switchable panels.">
          <div className="space-y-8">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Default Variant</h4>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    This is the overview tab content. It shows a summary of your data.
                  </p>
                </TabsContent>
                <TabsContent value="analytics" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Analytics data and charts would appear here.
                  </p>
                </TabsContent>
                <TabsContent value="reports" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Generated reports and exports are listed here.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-3">Line Variant</h4>
              <Tabs defaultValue="tab1">
                <TabsList variant="line">
                  <TabsTrigger value="tab1">First</TabsTrigger>
                  <TabsTrigger value="tab2">Second</TabsTrigger>
                  <TabsTrigger value="tab3">Third</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Content for the first tab section.
                  </p>
                </TabsContent>
                <TabsContent value="tab2" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Content for the second tab section.
                  </p>
                </TabsContent>
                <TabsContent value="tab3" className="mt-4">
                  <p className="text-sm text-muted-foreground">
                    Content for the third tab section.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </ComponentSection>

        {/* Toast */}
        <ComponentSection id="toast" title="Toast" description="Toasts provide brief feedback notifications.">
          <ToastDemo />
        </ComponentSection>
      </div>
    </div>
  );
}

function ComponentSection({
  id,
  title,
  description,
  children,
}: {
  id: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-6">
        <h2 className="font-heading text-xl font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      {children}
    </section>
  );
}

function ToastDemo() {
  const [, setCount] = useState(0);
  const forceUpdate = () => setCount((c) => c + 1);

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="outline"
        className="rounded-lg"
        onClick={() => {
          toast("Default notification", {
            description: "This is a default toast message.",
          });
          forceUpdate();
        }}
      >
        Default Toast
      </Button>
      <Button
        variant="outline"
        className="rounded-lg"
        onClick={() => {
          toast.success("Deployment successful", {
            description: "Your changes are now live.",
          });
          forceUpdate();
        }}
      >
        Success Toast
      </Button>
      <Button
        variant="outline"
        className="rounded-lg"
        onClick={() => {
          toast.error("Deployment failed", {
            description: "Check your build logs for details.",
          });
          forceUpdate();
        }}
      >
        Error Toast
      </Button>
      <Button
        variant="outline"
        className="rounded-lg"
        onClick={() => {
          toast.warning("Rate limit approaching", {
            description: "You have 10 requests remaining.",
          });
          forceUpdate();
        }}
      >
        Warning Toast
      </Button>
    </div>
  );
}
