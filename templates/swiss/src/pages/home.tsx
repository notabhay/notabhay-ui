import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { Button, cn } from "@notabhay-ui/ui";
import { ArrowRight, BarChart3, GitBranch, Clock, AlertTriangle } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Real-time Dashboards",
    description: "Live metrics that update as your team ships.",
    icon: BarChart3,
  },
  {
    number: "02",
    title: "Deploy Tracking",
    description: "Every deploy, tagged and tracked.",
    icon: GitBranch,
  },
  {
    number: "03",
    title: "Review Velocity",
    description: "PR open \u2192 review \u2192 merge timelines. Find bottlenecks.",
    icon: Clock,
  },
  {
    number: "04",
    title: "Incident Timeline",
    description: "MTTR, severity trends, and on-call load in one view.",
    icon: AlertTriangle,
  },
];

function AnimatedSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -24, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -24, opacity: 0 }}
      transition={{ duration: 0.2, ease: "linear" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Left: section number */}
          <div className="hidden md:flex md:col-span-1 border-r border-border items-start justify-center pt-12">
            <span className="swiss-label text-muted-foreground swiss-section-number">00</span>
          </div>

          {/* Main content */}
          <div className="md:col-span-7 p-8 md:p-12 lg:p-16">
            <AnimatedSection>
              <p className="swiss-label text-primary mb-6">DEVELOPER ANALYTICS PLATFORM</p>
              <h1 className="swiss-heading text-4xl md:text-6xl lg:text-7xl font-heading text-foreground mb-8">
                Ship faster with real-time developer analytics
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 font-body">
                Flux gives engineering teams visibility into deploy frequency,
                code review velocity, and incident response — so you can
                measure what matters.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  className="rounded-none border border-foreground bg-foreground text-background uppercase text-xs tracking-widest px-8 py-5 swiss-mechanical hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <Link to="/dashboard">
                    VIEW DASHBOARD
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="rounded-none border border-border uppercase text-xs tracking-widest px-8 py-5 swiss-mechanical hover:bg-foreground hover:text-background"
                >
                  <Link to="/components">
                    COMPONENTS
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          {/* Right decorative grid */}
          <div className="hidden md:block md:col-span-4 border-l border-border swiss-grid-overlay relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-px w-32 h-32">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "border border-border",
                      i === 0 || i === 4 || i === 8
                        ? "bg-primary/20"
                        : "bg-transparent"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Section number */}
          <div className="hidden md:flex md:col-span-1 border-r border-border items-start justify-center pt-8">
            <span className="swiss-label text-muted-foreground swiss-section-number">01</span>
          </div>

          <div className="md:col-span-11 p-8 md:p-12">
            <AnimatedSection>
              <p className="swiss-label text-muted-foreground mb-2">01 — FEATURES</p>
              <h2 className="swiss-heading text-2xl md:text-4xl font-heading text-foreground mb-12">
                Everything you need to measure engineering velocity
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {features.map((feature) => (
                <AnimatedSection key={feature.number}>
                  <div className="bg-background p-8">
                    <div className="flex items-start gap-4">
                      <span className="swiss-section-number text-3xl font-heading font-bold text-border">
                        {feature.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <feature.icon className="h-4 w-4 text-primary" />
                          <h3 className="font-heading font-bold text-lg uppercase tracking-wide text-foreground">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground font-body leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border">
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Section number */}
          <div className="hidden md:flex md:col-span-1 border-r border-border items-start justify-center pt-8">
            <span className="swiss-label text-muted-foreground swiss-section-number">02</span>
          </div>

          <div className="md:col-span-11 p-8 md:p-12">
            <AnimatedSection>
              <p className="swiss-label text-muted-foreground mb-8">02 — METRICS</p>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
              {[
                { label: "DEPLOYS / DAY", value: "42" },
                { label: "REVIEW TIME", value: "4.2h" },
                { label: "UPTIME", value: "99.9%" },
                { label: "TEAM SIZE", value: "128" },
              ].map((stat) => (
                <AnimatedSection key={stat.label}>
                  <div className="bg-background p-6 md:p-8">
                    <p className="swiss-label text-muted-foreground mb-3">{stat.label}</p>
                    <p className="swiss-heading text-3xl md:text-5xl font-heading text-foreground">
                      {stat.value}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-12">
          {/* Section number */}
          <div className="hidden md:flex md:col-span-1 border-r border-border items-start justify-center pt-8">
            <span className="swiss-label text-muted-foreground swiss-section-number">03</span>
          </div>

          <div className="md:col-span-11 p-8 md:p-12 lg:p-16">
            <AnimatedSection>
              <p className="swiss-label text-muted-foreground mb-4">03 — GET STARTED</p>
              <h2 className="swiss-heading text-2xl md:text-4xl font-heading text-foreground mb-6">
                Start measuring what matters
              </h2>
              <p className="text-muted-foreground font-body mb-8 max-w-xl">
                Join thousands of engineering teams already using Flux
                to ship faster and with greater confidence.
              </p>
              <Button
                asChild
                className="rounded-none border border-primary bg-primary text-primary-foreground uppercase text-xs tracking-widest px-8 py-5 swiss-mechanical hover:bg-foreground hover:text-background hover:border-foreground"
              >
                <Link to="/signup">
                  CREATE ACCOUNT
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
