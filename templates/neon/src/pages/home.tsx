import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  BarChart3,
  GitBranch,
  Timer,
  AlertTriangle,
  ArrowRight,
  Terminal,
  Zap,
} from "lucide-react";
import { Button, Card, CardContent } from "@notabhay-ui/ui";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Dashboards",
    description: "Live metrics that update as your team ships.",
    command: "flux metrics --live",
  },
  {
    icon: GitBranch,
    title: "Deploy Tracking",
    description: "Every deploy, tagged and tracked.",
    command: "flux deploys --tail",
  },
  {
    icon: Timer,
    title: "Review Velocity",
    description:
      "PR open \u2192 review \u2192 merge timelines. Find bottlenecks.",
    command: "flux reviews --bottlenecks",
  },
  {
    icon: AlertTriangle,
    title: "Incident Timeline",
    description: "MTTR, severity trends, and on-call load in one view.",
    command: "flux incidents --summary",
  },
];

const terminalLines = [
  { prefix: "$", text: "flux init --team engineering", delay: 0 },
  {
    prefix: ">",
    text: "Connecting to analytics cluster...",
    delay: 0.1,
    muted: true,
  },
  {
    prefix: ">",
    text: "Indexing 1,284 deploys across 12 services",
    delay: 0.2,
    muted: true,
  },
  {
    prefix: ">",
    text: "Calculating review velocity metrics",
    delay: 0.3,
    muted: true,
  },
  {
    prefix: "\u2713",
    text: "Dashboard ready at https://flux.dev/dashboard",
    delay: 0.4,
    success: true,
  },
];

export default function Home() {
  const prefersReduced = useReducedMotion();
  const animateProps = prefersReduced
    ? {}
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } };
  const viewportOpts = { once: true, margin: "-50px" as const };

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="mx-auto max-w-7xl px-4 py-20 md:py-32 lg:px-6">
          <div className="max-w-3xl space-y-6">
            {/* Terminal prompt */}
            <motion.div
              {...animateProps}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              viewport={viewportOpts}
              className="inline-flex items-center gap-2 rounded-sm border bg-muted/50 px-3 py-1.5"
            >
              <Zap className="h-3 w-3 text-secondary" />
              <span className="text-xs font-heading text-muted-foreground">
                v2.4 released — new incident timeline
              </span>
            </motion.div>

            <motion.h1
              {...(prefersReduced
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                  })}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={viewportOpts}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight leading-[1.1]"
            >
              Ship faster with{" "}
              <span className="text-primary">real-time</span>
              <br />
              developer analytics
              <span className="cursor-blink text-primary ml-1">_</span>
            </motion.h1>

            <motion.p
              {...(prefersReduced
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                  })}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={viewportOpts}
              className="text-sm md:text-base font-prose text-muted-foreground leading-relaxed max-w-xl"
            >
              Flux gives engineering teams visibility into deploy frequency,
              code review velocity, and incident response — so you can measure
              what matters.
            </motion.p>

            <motion.div
              {...(prefersReduced
                ? {}
                : {
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                  })}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={viewportOpts}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button asChild className="neon-glow-hover">
                <Link to="/dashboard">
                  <Terminal className="h-4 w-4" />
                  Open Dashboard
                </Link>
              </Button>
              <Button variant="outline" asChild className="neon-glow-hover">
                <Link to="/components">
                  View Components
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Terminal output section */}
      <section className="border-b" aria-label="Terminal demo">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-6">
          <motion.div
            {...animateProps}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={viewportOpts}
            className="mb-8"
          >
            <p className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">
              Quick Start
            </p>
            <h2 className="text-xl md:text-2xl font-heading font-semibold">
              Up and running in seconds
              <span className="text-primary">.</span>
            </h2>
          </motion.div>

          <motion.div
            {...animateProps}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            viewport={viewportOpts}
            className="rounded-sm border bg-card neon-glow-sm neon-card-accent overflow-hidden"
          >
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b px-4 py-2.5">
              <div className="flex gap-1.5">
                <div className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-secondary/60" />
                <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
              </div>
              <span className="text-[10px] font-heading text-muted-foreground ml-2">
                flux — zsh — 80x24
              </span>
            </div>

            {/* Terminal content */}
            <div className="p-4 md:p-6 space-y-1.5">
              {terminalLines.map((line, i) => (
                <motion.div
                  key={i}
                  {...(prefersReduced
                    ? {}
                    : {
                        initial: { opacity: 0, x: -10 },
                        whileInView: { opacity: 1, x: 0 },
                      })}
                  transition={{
                    duration: 0.4,
                    delay: line.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={viewportOpts}
                  className="flex items-start gap-2 text-xs font-heading"
                >
                  <span
                    className={
                      line.success
                        ? "text-secondary"
                        : line.muted
                          ? "text-muted-foreground"
                          : "text-primary"
                    }
                  >
                    {line.prefix}
                  </span>
                  <span
                    className={
                      line.muted ? "text-muted-foreground" : "text-foreground"
                    }
                  >
                    {line.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features section */}
      <section className="border-b" aria-label="Features">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-6">
          <motion.div
            {...animateProps}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={viewportOpts}
            className="mb-10"
          >
            <p className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">
              Capabilities
            </p>
            <h2 className="text-xl md:text-2xl font-heading font-semibold">
              Everything your team needs
              <span className="text-primary">.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  {...(prefersReduced
                    ? {}
                    : {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                      })}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  viewport={viewportOpts}
                >
                  <Card className="neon-card-accent neon-glow-sm neon-glow-hover transition-shadow duration-250 h-full">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-muted">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <h3 className="text-sm font-heading font-semibold">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-xs font-prose text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="rounded-sm bg-muted/50 px-3 py-1.5">
                        <code className="text-[10px] font-heading text-primary">
                          $ {feature.command}
                        </code>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b" aria-label="Key metrics">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Deploys tracked", value: "2.4M+" },
              { label: "Teams onboarded", value: "850+" },
              { label: "Avg MTTR reduction", value: "34%" },
              { label: "Uptime", value: "99.97%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                {...(prefersReduced
                  ? {}
                  : {
                      initial: { opacity: 0, y: 20 },
                      whileInView: { opacity: 1, y: 0 },
                    })}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                viewport={viewportOpts}
                className="text-center md:text-left space-y-1"
              >
                <p className="text-2xl md:text-3xl font-heading font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs font-heading text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Call to action">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-6 text-center">
          <motion.div
            {...animateProps}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={viewportOpts}
            className="space-y-4 max-w-lg mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-heading font-semibold">
              Ready to measure what matters
              <span className="text-primary">?</span>
            </h2>
            <p className="text-xs font-prose text-muted-foreground">
              Get started in under 5 minutes. No credit card required.
            </p>
            <div className="flex justify-center gap-3">
              <Button asChild className="neon-glow-hover">
                <Link to="/signup">
                  <Terminal className="h-4 w-4" />
                  Get Started
                </Link>
              </Button>
            </div>
            <p className="text-[10px] font-heading text-muted-foreground">
              <span className="text-primary">$</span> curl -sSL
              https://flux.dev/install | sh
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
