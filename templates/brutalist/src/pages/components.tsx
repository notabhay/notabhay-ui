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

function SectionLabel({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="border-b-4 border-border pb-4 mb-8">
      <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground mb-1">
        COMPONENT: {tag}
      </p>
      <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-tight">
        {title}
      </h2>
    </div>
  );
}

export default function Components() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="p-6 md:p-8 lg:p-12">
      {/* Page header */}
      <div className="mb-12">
        <p className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-2">
          VIEW: COMPONENT_LIBRARY
        </p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4">
          ALL COMPONENTS
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Every shared component from @notabhay-ui/ui rendered with brutalist overrides.
          Thick borders, sharp corners, ALL CAPS labels.
        </p>
      </div>

      {/* ── BUTTON ────────────────────────────────────────── */}
      <section id="button" className="mb-16">
        <SectionLabel tag="BUTTON" title="Button" />

        <div className="space-y-8">
          {/* Variants */}
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              VARIANTS
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="default">DEFAULT</Button>
              <Button variant="outline" className="border-3 border-foreground hover:bg-foreground hover:text-background">
                OUTLINE
              </Button>
              <Button variant="ghost">GHOST</Button>
              <Button variant="destructive">DESTRUCTIVE</Button>
              <Button variant="secondary">SECONDARY</Button>
              <Button variant="link">LINK</Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              SIZES
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">SMALL</Button>
              <Button size="default">DEFAULT</Button>
              <Button size="lg">LARGE</Button>
            </div>
          </div>

          {/* Disabled */}
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              DISABLED
            </p>
            <div className="flex flex-wrap gap-3">
              <Button disabled>DISABLED DEFAULT</Button>
              <Button variant="outline" disabled className="border-3">DISABLED OUTLINE</Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── INPUT ─────────────────────────────────────────── */}
      <section id="input" className="mb-16">
        <SectionLabel tag="INPUT" title="Input" />

        <div className="space-y-8 max-w-md">
          {/* Default */}
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              DEFAULT
            </p>
            <Input
              placeholder="ENTER YOUR EMAIL"
              value={inputValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
            />
          </div>

          {/* Error */}
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              ERROR STATE
            </p>
            <Input placeholder="INVALID INPUT" aria-invalid="true" />
            <p className="text-destructive text-xs uppercase tracking-wider mt-2 font-heading">
              ERROR: FIELD REQUIRED
            </p>
          </div>

          {/* Disabled */}
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              DISABLED
            </p>
            <Input placeholder="DISABLED INPUT" disabled />
          </div>

          {/* Sizes */}
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              SIZES
            </p>
            <div className="space-y-3">
              <Input placeholder="SMALL INPUT" className="h-8 text-xs" />
              <Input placeholder="DEFAULT INPUT" />
              <Input placeholder="LARGE INPUT" className="h-12 text-base" />
            </div>
          </div>
        </div>
      </section>

      {/* ── CARD ──────────────────────────────────────────── */}
      <section id="card" className="mb-16">
        <SectionLabel tag="CARD" title="Card" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <Card className="border-4 border-border md:border-r-0">
            <CardHeader>
              <CardTitle className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground font-normal">
                CARD: EXAMPLE_METRIC
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-heading text-3xl font-bold">2,847</p>
              <CardDescription className="mt-2 uppercase tracking-wider text-xs">
                TOTAL REQUESTS IN THE LAST 24 HOURS
              </CardDescription>
            </CardContent>
            <CardFooter className="border-t-2 border-border pt-4">
              <Button
                variant="outline"
                size="sm"
                className="border-2 border-foreground hover:bg-foreground hover:text-background"
              >
                VIEW DETAILS
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-4 border-border">
            <CardHeader>
              <CardTitle className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground font-normal">
                CARD: SYSTEM_STATUS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b-2 border-border pb-3">
                  <span className="font-heading text-xs uppercase tracking-wider">API</span>
                  <span className="text-xs uppercase font-heading text-secondary tracking-wider">OPERATIONAL</span>
                </div>
                <div className="flex justify-between items-center border-b-2 border-border pb-3">
                  <span className="font-heading text-xs uppercase tracking-wider">DATABASE</span>
                  <span className="text-xs uppercase font-heading text-secondary tracking-wider">OPERATIONAL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-heading text-xs uppercase tracking-wider">CDN</span>
                  <span className="text-xs uppercase font-heading text-destructive tracking-wider">DEGRADED</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── DIALOG ────────────────────────────────────────── */}
      <section id="dialog" className="mb-16">
        <SectionLabel tag="DIALOG" title="Dialog" />

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="border-3 border-foreground hover:bg-foreground hover:text-background"
            >
              OPEN DIALOG
            </Button>
          </DialogTrigger>
          <DialogContent className="border-4 border-border">
            <DialogHeader>
              <DialogTitle className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground font-normal">
                DIALOG: CONFIRM_ACTION
              </DialogTitle>
              <DialogDescription className="mt-4 text-sm">
                This action cannot be undone. This will permanently delete the selected deployment record.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-4">
              <DialogClose asChild>
                <Button variant="ghost">CANCEL</Button>
              </DialogClose>
              <DialogClose asChild>
                <Button variant="destructive">CONFIRM DELETE</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      {/* ── TABLE ─────────────────────────────────────────── */}
      <section id="table" className="mb-16">
        <SectionLabel tag="TABLE" title="Table" />

        <div className="border-4 border-border">
          <Table>
            <TableHeader>
              <TableRow className="border-b-3 border-border">
                <TableHead>SERVICE</TableHead>
                <TableHead>STATUS</TableHead>
                <TableHead>LATENCY</TableHead>
                <TableHead className="text-right">REQUESTS/S</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { service: "API-GATEWAY", status: "HEALTHY", latency: "12MS", rps: "4,200" },
                { service: "AUTH-SERVICE", status: "HEALTHY", latency: "8MS", rps: "1,800" },
                { service: "DATA-PIPELINE", status: "WARNING", latency: "145MS", rps: "950" },
                { service: "WEB-APP", status: "HEALTHY", latency: "23MS", rps: "12,400" },
                { service: "NOTIFICATIONS", status: "HEALTHY", latency: "5MS", rps: "680" },
              ].map((row, i) => (
                <TableRow
                  key={row.service}
                  className={`border-b-2 border-border ${i % 2 === 0 ? "bg-muted/30" : ""}`}
                >
                  <TableCell className="font-heading text-xs uppercase tracking-wider font-semibold">
                    {row.service}
                  </TableCell>
                  <TableCell>
                    <span
                      className={`font-heading text-xs uppercase tracking-wider ${
                        row.status === "HEALTHY" ? "text-secondary" : "text-destructive"
                      }`}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground text-xs font-mono">
                    {row.latency}
                  </TableCell>
                  <TableCell className="text-right font-heading text-xs font-semibold">
                    {row.rps}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </section>

      {/* ── BADGE ─────────────────────────────────────────── */}
      <section id="badge" className="mb-16">
        <SectionLabel tag="BADGE" title="Badge" />

        <div className="space-y-6">
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              VARIANTS
            </p>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">DEFAULT</Badge>
              <Badge variant="secondary">SECONDARY</Badge>
              <Badge variant="destructive">DESTRUCTIVE</Badge>
              <Badge variant="outline">OUTLINE</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* ── TABS ──────────────────────────────────────────── */}
      <section id="tabs" className="mb-16">
        <SectionLabel tag="TABS" title="Tabs" />

        <div className="space-y-10">
          {/* Default variant */}
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              DEFAULT VARIANT
            </p>
            <Tabs defaultValue="overview">
              <TabsList>
                <TabsTrigger value="overview">OVERVIEW</TabsTrigger>
                <TabsTrigger value="analytics">ANALYTICS</TabsTrigger>
                <TabsTrigger value="reports">REPORTS</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="border-4 border-border p-6 mt-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  CONTENT: OVERVIEW TAB IS ACTIVE. DISPLAYING SUMMARY DATA.
                </p>
              </TabsContent>
              <TabsContent value="analytics" className="border-4 border-border p-6 mt-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  CONTENT: ANALYTICS TAB SHOWING DETAILED METRICS.
                </p>
              </TabsContent>
              <TabsContent value="reports" className="border-4 border-border p-6 mt-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  CONTENT: REPORTS TAB WITH EXPORTABLE DATA.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          {/* Line variant */}
          <div>
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
              LINE VARIANT
            </p>
            <Tabs defaultValue="daily">
              <TabsList variant="line">
                <TabsTrigger value="daily">DAILY</TabsTrigger>
                <TabsTrigger value="weekly">WEEKLY</TabsTrigger>
                <TabsTrigger value="monthly">MONTHLY</TabsTrigger>
              </TabsList>
              <TabsContent value="daily" className="border-4 border-border p-6 mt-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  CONTENT: DAILY VIEW SELECTED.
                </p>
              </TabsContent>
              <TabsContent value="weekly" className="border-4 border-border p-6 mt-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  CONTENT: WEEKLY AGGREGATION VIEW.
                </p>
              </TabsContent>
              <TabsContent value="monthly" className="border-4 border-border p-6 mt-2">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  CONTENT: MONTHLY TRENDS VIEW.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* ── TOAST ─────────────────────────────────────────── */}
      <section id="toast" className="mb-16">
        <SectionLabel tag="TOAST" title="Toast" />

        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            className="border-3 border-foreground hover:bg-foreground hover:text-background"
            onClick={() => toast("NOTIFICATION: Default toast message")}
          >
            DEFAULT TOAST
          </Button>
          <Button
            variant="outline"
            className="border-3 border-foreground hover:bg-foreground hover:text-background"
            onClick={() => toast.success("SUCCESS: Deploy completed successfully")}
          >
            SUCCESS TOAST
          </Button>
          <Button
            variant="outline"
            className="border-3 border-foreground hover:bg-foreground hover:text-background"
            onClick={() => toast.error("ERROR: Build failed — check logs")}
          >
            ERROR TOAST
          </Button>
          <Button
            variant="outline"
            className="border-3 border-foreground hover:bg-foreground hover:text-background"
            onClick={() => toast.warning("WARNING: Rate limit approaching threshold")}
          >
            WARNING TOAST
          </Button>
        </div>
      </section>
    </div>
  );
}
