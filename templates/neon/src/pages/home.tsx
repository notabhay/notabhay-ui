import { useState, useEffect, useCallback } from "react";
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
    delay: 0,
    muted: true,
  },
  {
    prefix: ">",
    text: "Indexing 1,284 deploys across 12 services",
    delay: 0,
    muted: true,
  },
  {
    prefix: ">",
    text: "Calculating review velocity metrics",
    delay: 0,
    muted: true,
  },
  {
    prefix: "\u2713",
    text: "Dashboard ready at https://flux.dev/dashboard",
    delay: 0,
    success: true,
  },
];

function TerminalLine({
  prefix,
  text,
  delay,
  muted,
  success,
  onComplete,
}: {
  prefix: string;
  text: string;
  delay: number;
  muted?: boolean;
  success?: boolean;
  onComplete?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [done, setDone] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced) {
      setStarted(true);
      setDisplayed(text);
      setDone(true);
      return;
    }
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay, prefersReduced, text]);

  const handleComplete = useCallback(() => {
    setDone(true);
    onComplete?.();
  }, [onComplete]);

  useEffect(() => {
    if (!started || prefersReduced) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        handleComplete();
      }
    }, 25);
    return () => clearInterval(interval);
  }, [started, text, prefersReduced, handleComplete]);

  if (!started) return null;

  return (
    <div className="flex items-start gap-2 text-xs font-heading">
      <span
        className={
          success
            ? "text-secondary neon-text-glow-green"
            : muted
              ? "text-muted-foreground"
              : "text-primary neon-text-glow"
        }
      >
        {prefix}
      </span>
      <span className={muted ? "text-muted-foreground" : "text-foreground"}>
        {displayed}
        {!done && <span className="cursor-blink text-primary">_</span>}
      </span>
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="border-t border-primary/20 relative">
      <span className="absolute left-4 -top-2.5 bg-background px-2 text-[10px] font-heading text-primary/70">
        // section::{label}
      </span>
    </div>
  );
}

export default function Home() {
  const prefersReduced = useReducedMotion();
  const animateProps = prefersReduced
    ? {}
    : { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 } };
  const viewportOpts = { once: true, margin: "-50px" as const };

  const [activeLine, setActiveLine] = useState(0);

  return (
    <div className="flex flex-col">
      {/* Hero — with depth glow background */}
      <section className="relative overflow-hidden border-b neon-grid-bg">
        <div className="absolute inset-0 neon-depth-bg pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left — heading */}
            <div className="space-y-5">
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
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold tracking-tight leading-[1.15]"
              >
                Ship faster with{" "}
                <span className="text-primary neon-text-glow">real-time</span>
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
                className="text-sm font-prose text-muted-foreground leading-relaxed max-w-md"
              >
                Flux gives engineering teams visibility into deploy frequency,
                code review velocity, and incident response.
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
                <Button asChild className="neon-glow-hover neon-pulse">
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

            {/* Right — live terminal */}
            <motion.div
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
              className="rounded-sm border bg-card neon-glow-sm neon-card-accent overflow-hidden"
            >
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
              <div className="p-4 md:p-5 space-y-1.5">
                {terminalLines.map((line, i) => (
                  <TerminalLine
                    key={i}
                    prefix={line.prefix}
                    text={line.text}
                    delay={i <= activeLine ? (i === 0 ? 500 : 0) : 999999}
                    muted={line.muted}
                    success={line.success}
                    onComplete={() => {
                      if (i === activeLine && i < terminalLines.length - 1) {
                        setActiveLine(i + 1);
                      }
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionDivider label="features" />

      {/* Features section — terminal-style cards with alternating accents */}
      <section className="border-b" aria-label="Features">
        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 lg:px-6">
          <motion.div
            {...animateProps}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={viewportOpts}
            className="mb-8"
          >
            <p className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-2">
              Capabilities
            </p>
            <h2 className="text-xl md:text-2xl font-heading font-semibold">
              Everything your team needs
              <span className="text-primary neon-text-glow">.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isGreen = i % 2 === 1;
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
                  <Card className={`${isGreen ? "neon-card-accent-green" : "neon-card-accent"} neon-glow-sm neon-glow-hover transition-shadow duration-250 h-full`}>
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-muted">
                          <Icon className={`h-4 w-4 ${isGreen ? "text-secondary" : "text-primary"}`} />
                        </div>
                        <h3 className="text-sm font-heading font-semibold">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-xs font-prose text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="rounded-sm bg-muted/50 px-3 py-1.5">
                        <code className={`text-[10px] font-heading ${isGreen ? "text-secondary" : "text-primary"}`}>
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

      <SectionDivider label="metrics" />

      {/* Stats bar */}
      <section className="border-b" aria-label="Key metrics">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Deploys tracked", value: "2.4M+", color: "primary" },
              { label: "Teams onboarded", value: "850+", color: "secondary" },
              { label: "Avg MTTR reduction", value: "34%", color: "primary" },
              { label: "Uptime", value: "99.97%", color: "secondary" },
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
                <p className={`text-2xl md:text-3xl font-heading font-bold ${stat.color === "secondary" ? "text-secondary neon-text-glow-green" : "text-primary neon-text-glow"}`}>
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

      <SectionDivider label="cta" />

      {/* CTA */}
      <section aria-label="Call to action" className="neon-grid-bg relative">
        <div className="absolute inset-0 neon-depth-bg pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:px-6 text-center">
          <motion.div
            {...animateProps}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={viewportOpts}
            className="space-y-4 max-w-lg mx-auto"
          >
            <h2 className="text-xl md:text-2xl font-heading font-semibold">
              Ready to measure what matters
              <span className="text-primary neon-text-glow">?</span>
            </h2>
            <p className="text-xs font-prose text-muted-foreground">
              Get started in under 5 minutes. No credit card required.
            </p>
            <div className="flex justify-center gap-3">
              <Button asChild className="neon-glow-hover neon-pulse">
                <Link to="/signup">
                  <Terminal className="h-4 w-4" />
                  Get Started
                </Link>
              </Button>
            </div>
            <p className="text-[10px] font-heading text-muted-foreground">
              <span className="text-secondary neon-text-glow-green">$</span> curl -sSL
              https://flux.dev/install | sh
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
