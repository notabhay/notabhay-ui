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

function SectionHeader({
  number,
  title,
  id,
}: {
  number: string;
  title: string;
  id: string;
}) {
  return (
    <div id={id} className="mb-8 scroll-mt-24">
      <div className="flex items-baseline gap-4 border-b border-border pb-4">
        <span className="swiss-section-number text-3xl font-heading font-bold text-border">
          {number}
        </span>
        <h2 className="swiss-heading text-xl md:text-2xl font-heading text-foreground uppercase tracking-wide">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default function Components() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="p-6 md:p-8 lg:p-12">
      {/* Page header */}
      <div className="mb-12">
        <p className="swiss-label text-muted-foreground mb-2">REFERENCE</p>
        <h1 className="swiss-heading text-3xl md:text-4xl font-heading text-foreground mb-4">
          Component Library
        </h1>
        <p className="text-muted-foreground font-body max-w-2xl">
          All shared components with every variant, size, and state.
          Swiss styling: 0px radius, 1px borders, uppercase labels, mechanical interactions.
        </p>
      </div>

      {/* Table of Contents */}
      <nav className="mb-12 border border-border p-6" aria-label="Component navigation">
        <p className="swiss-label text-muted-foreground mb-4">INDEX</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {[
            { id: "button", label: "BUTTON", num: "01" },
            { id: "input", label: "INPUT", num: "02" },
            { id: "card", label: "CARD", num: "03" },
            { id: "dialog", label: "DIALOG", num: "04" },
            { id: "table", label: "TABLE", num: "05" },
            { id: "badge", label: "BADGE", num: "06" },
            { id: "tabs", label: "TABS", num: "07" },
            { id: "toast", label: "TOAST", num: "08" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center gap-2 px-3 py-2 text-xs tracking-widest uppercase text-muted-foreground swiss-mechanical hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="swiss-section-number opacity-50">{item.num}</span>
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div className="space-y-16">
        {/* 01 — Button */}
        <section>
          <SectionHeader number="01" title="Button" id="button" />
          <div className="space-y-8">
            <div>
              <p className="swiss-label text-muted-foreground mb-4">VARIANTS</p>
              <div className="flex flex-wrap gap-3">
                <Button className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  DEFAULT
                </Button>
                <Button variant="outline" className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  OUTLINE
                </Button>
                <Button variant="ghost" className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  GHOST
                </Button>
                <Button variant="destructive" className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  DESTRUCTIVE
                </Button>
                <Button variant="secondary" className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  SECONDARY
                </Button>
                <Button variant="link" className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  LINK
                </Button>
              </div>
            </div>
            <div>
              <p className="swiss-label text-muted-foreground mb-4">SIZES</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm" className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  SMALL
                </Button>
                <Button className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  DEFAULT
                </Button>
                <Button size="lg" className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  LARGE
                </Button>
              </div>
            </div>
            <div>
              <p className="swiss-label text-muted-foreground mb-4">STATES</p>
              <div className="flex flex-wrap items-center gap-3">
                <Button disabled className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  DISABLED
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Input */}
        <section>
          <SectionHeader number="02" title="Input" id="input" />
          <div className="space-y-8 max-w-md">
            <div>
              <p className="swiss-label text-muted-foreground mb-4">DEFAULT</p>
              <div className="space-y-3">
                <Input
                  placeholder="ENTER TEXT"
                  className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
                />
                <Input
                  placeholder="EMAIL ADDRESS"
                  type="email"
                  className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
                />
                <Input
                  placeholder="PASSWORD"
                  type="password"
                  className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
                />
              </div>
            </div>
            <div>
              <p className="swiss-label text-muted-foreground mb-4">ERROR STATE</p>
              <Input
                placeholder="INVALID INPUT"
                aria-invalid="true"
                className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
              />
            </div>
            <div>
              <p className="swiss-label text-muted-foreground mb-4">SIZES</p>
              <div className="space-y-3">
                <Input
                  placeholder="SMALL"
                  className="rounded-none h-8 text-xs uppercase placeholder:uppercase placeholder:tracking-widest"
                />
                <Input
                  placeholder="DEFAULT"
                  className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
                />
                <Input
                  placeholder="LARGE"
                  className="rounded-none h-11 uppercase placeholder:uppercase placeholder:tracking-widest"
                />
              </div>
            </div>
            <div>
              <p className="swiss-label text-muted-foreground mb-4">DISABLED</p>
              <Input
                placeholder="DISABLED"
                disabled
                className="rounded-none uppercase placeholder:uppercase placeholder:tracking-widest"
              />
            </div>
          </div>
        </section>

        {/* 03 — Card */}
        <section>
          <SectionHeader number="03" title="Card" id="card" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="rounded-none">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <span className="swiss-section-number text-2xl font-heading font-bold text-border">
                    01
                  </span>
                  <div>
                    <CardTitle className="uppercase tracking-wider text-sm font-heading">
                      Card Title
                    </CardTitle>
                    <CardDescription className="uppercase tracking-wider text-xs">
                      Card description with details
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-body">
                  Card content with information. Swiss style: 0px radius,
                  1px border, strict padding grid, visible structure.
                </p>
              </CardContent>
              <CardFooter className="border-t border-border pt-4">
                <Button className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                  ACTION
                </Button>
              </CardFooter>
            </Card>

            <Card className="rounded-none">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <span className="swiss-section-number text-2xl font-heading font-bold text-border">
                    02
                  </span>
                  <div>
                    <CardTitle className="uppercase tracking-wider text-sm font-heading">
                      Analytics Card
                    </CardTitle>
                    <CardDescription className="uppercase tracking-wider text-xs">
                      Performance metrics
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-border pb-2">
                    <span className="swiss-label text-muted-foreground">METRIC</span>
                    <span className="swiss-label text-foreground">VALUE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Uptime</span>
                    <span className="text-sm text-foreground swiss-section-number">99.9%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Response</span>
                    <span className="text-sm text-foreground swiss-section-number">142ms</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 04 — Dialog */}
        <section>
          <SectionHeader number="04" title="Dialog" id="dialog" />
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                OPEN DIALOG
              </Button>
            </DialogTrigger>
            <DialogContent className="rounded-none">
              <DialogHeader>
                <DialogTitle className="uppercase tracking-wider font-heading">
                  Dialog Title
                </DialogTitle>
                <DialogDescription className="text-left">
                  This is a dialog description. Swiss style: sharp corners,
                  precise typography, no ornament.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground font-body">
                  Dialog content area with relevant information. Form follows function.
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="rounded-none uppercase text-xs tracking-widest swiss-mechanical">
                    CANCEL
                  </Button>
                </DialogClose>
                <Button
                  onClick={() => setDialogOpen(false)}
                  className="rounded-none uppercase text-xs tracking-widest swiss-mechanical"
                >
                  CONFIRM
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </section>

        {/* 05 — Table */}
        <section>
          <SectionHeader number="05" title="Table" id="table" />
          <div className="border border-border">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border">
                  <TableHead className="swiss-label text-muted-foreground py-3 px-4">ID</TableHead>
                  <TableHead className="swiss-label text-muted-foreground py-3 px-4">NAME</TableHead>
                  <TableHead className="swiss-label text-muted-foreground py-3 px-4">STATUS</TableHead>
                  <TableHead className="swiss-label text-muted-foreground py-3 px-4">VALUE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { id: "001", name: "Alpha", status: "Active", value: "1,284" },
                  { id: "002", name: "Beta", status: "Pending", value: "842" },
                  { id: "003", name: "Gamma", status: "Active", value: "2,103" },
                  { id: "004", name: "Delta", status: "Inactive", value: "391" },
                ].map((row) => (
                  <TableRow key={row.id} className="border-b border-border">
                    <TableCell className="py-3 px-4 swiss-section-number text-muted-foreground">
                      {row.id}
                    </TableCell>
                    <TableCell className="py-3 px-4 uppercase tracking-wider text-sm">
                      {row.name}
                    </TableCell>
                    <TableCell className="py-3 px-4 swiss-label text-xs">
                      {row.status.toUpperCase()}
                    </TableCell>
                    <TableCell className="py-3 px-4 swiss-section-number">
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* 06 — Badge */}
        <section>
          <SectionHeader number="06" title="Badge" id="badge" />
          <div className="space-y-6">
            <div>
              <p className="swiss-label text-muted-foreground mb-4">VARIANTS</p>
              <div className="flex flex-wrap gap-3">
                <Badge className="rounded-none uppercase tracking-widest text-[10px]">
                  DEFAULT
                </Badge>
                <Badge variant="secondary" className="rounded-none uppercase tracking-widest text-[10px]">
                  SECONDARY
                </Badge>
                <Badge variant="destructive" className="rounded-none uppercase tracking-widest text-[10px]">
                  DESTRUCTIVE
                </Badge>
                <Badge variant="outline" className="rounded-none uppercase tracking-widest text-[10px]">
                  OUTLINE
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — Tabs */}
        <section>
          <SectionHeader number="07" title="Tabs" id="tabs" />
          <div className="space-y-8">
            <div>
              <p className="swiss-label text-muted-foreground mb-4">DEFAULT VARIANT</p>
              <Tabs defaultValue="tab1">
                <TabsList className="rounded-none">
                  <TabsTrigger value="tab1" className="rounded-none uppercase text-xs tracking-widest">
                    TAB ONE
                  </TabsTrigger>
                  <TabsTrigger value="tab2" className="rounded-none uppercase text-xs tracking-widest">
                    TAB TWO
                  </TabsTrigger>
                  <TabsTrigger value="tab3" className="rounded-none uppercase text-xs tracking-widest">
                    TAB THREE
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="tab1" className="border border-border p-6 mt-0">
                  <p className="text-sm text-muted-foreground font-body">
                    Content for tab one. Swiss design: content follows form.
                  </p>
                </TabsContent>
                <TabsContent value="tab2" className="border border-border p-6 mt-0">
                  <p className="text-sm text-muted-foreground font-body">
                    Content for tab two. The grid determines the content placement.
                  </p>
                </TabsContent>
                <TabsContent value="tab3" className="border border-border p-6 mt-0">
                  <p className="text-sm text-muted-foreground font-body">
                    Content for tab three. Mathematical precision in every detail.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <p className="swiss-label text-muted-foreground mb-4">LINE VARIANT</p>
              <Tabs defaultValue="lineTab1">
                <TabsList variant="line" className="rounded-none">
                  <TabsTrigger value="lineTab1" className="rounded-none uppercase text-xs tracking-widest">
                    OVERVIEW
                  </TabsTrigger>
                  <TabsTrigger value="lineTab2" className="rounded-none uppercase text-xs tracking-widest">
                    ANALYTICS
                  </TabsTrigger>
                  <TabsTrigger value="lineTab3" className="rounded-none uppercase text-xs tracking-widest">
                    SETTINGS
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="lineTab1" className="border border-border p-6 mt-2">
                  <p className="text-sm text-muted-foreground font-body">
                    Overview panel content. Clear hierarchy, no ornament.
                  </p>
                </TabsContent>
                <TabsContent value="lineTab2" className="border border-border p-6 mt-2">
                  <p className="text-sm text-muted-foreground font-body">
                    Analytics panel content. Data over decoration.
                  </p>
                </TabsContent>
                <TabsContent value="lineTab3" className="border border-border p-6 mt-2">
                  <p className="text-sm text-muted-foreground font-body">
                    Settings panel content. Every element serves a purpose.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* 08 — Toast */}
        <section>
          <SectionHeader number="08" title="Toast" id="toast" />
          <div className="flex flex-wrap gap-3">
            <Button
              className="rounded-none uppercase text-xs tracking-widest swiss-mechanical"
              onClick={() => toast("Default notification")}
            >
              DEFAULT TOAST
            </Button>
            <Button
              className="rounded-none uppercase text-xs tracking-widest swiss-mechanical"
              onClick={() => toast.success("Operation completed successfully")}
            >
              SUCCESS TOAST
            </Button>
            <Button
              className="rounded-none uppercase text-xs tracking-widest swiss-mechanical"
              onClick={() => toast.error("An error has occurred")}
            >
              ERROR TOAST
            </Button>
            <Button
              className="rounded-none uppercase text-xs tracking-widest swiss-mechanical"
              onClick={() => toast.warning("Warning: check your configuration")}
            >
              WARNING TOAST
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
