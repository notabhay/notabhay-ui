import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  BarChart3,
  Rocket,
  GitPullRequest,
  Clock,
  ArrowRight,
  Leaf,
  Sparkles,
} from "lucide-react";
import { Button, cn } from "@notabhay-ui/ui";
import { BlobBackground } from "@/components/blob-background";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Dashboards",
    description: "Live metrics that update as your team ships.",
  },
  {
    icon: Rocket,
    title: "Deploy Tracking",
    description: "Every deploy, tagged and tracked.",
  },
  {
    icon: GitPullRequest,
    title: "Review Velocity",
    description:
      "PR open \u2192 review \u2192 merge timelines. Find bottlenecks.",
  },
  {
    icon: Clock,
    title: "Incident Timeline",
    description: "MTTR, severity trends, and on-call load in one view.",
  },
];

const metrics = [
  { label: "Deploys tracked", value: "2M+" },
  { label: "Teams onboarded", value: "1,200+" },
  { label: "Avg time saved", value: "4.2h/wk" },
];

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 20 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true, margin: "-50px" },
        transition: { duration: 0.5, ...springTransition },
      };

  return (
    <div className="overflow-hidden">
      {/* Hero Section — Asymmetric layout */}
      <section className="relative py-20 sm:py-28 lg:py-36">
        <BlobBackground variant="hero" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl lg:ml-8">
            <motion.div
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 30 } as const,
                    animate: { opacity: 1, y: 0 } as const,
                    transition: {
                      duration: 0.6,
                      type: "spring" as const,
                      stiffness: 80,
                    },
                  })}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
                <Leaf className="h-3 w-3" />
                Developer Analytics Platform
              </span>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 30 } as const,
                    animate: { opacity: 1, y: 0 } as const,
                    transition: {
                      duration: 0.6,
                      delay: 0.1,
                      type: "spring" as const,
                      stiffness: 80,
                    },
                  })}
            >
              Ship faster with{" "}
              <span className="text-primary">real-time</span> developer
              analytics
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-xl"
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 30 } as const,
                    animate: { opacity: 1, y: 0 } as const,
                    transition: {
                      duration: 0.6,
                      delay: 0.2,
                      type: "spring" as const,
                      stiffness: 80,
                    },
                  })}
            >
              Flux gives engineering teams visibility into deploy frequency, code
              review velocity, and incident response &mdash; so you can measure
              what matters.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              {...(shouldReduceMotion
                ? {}
                : {
                    initial: { opacity: 0, y: 20 } as const,
                    animate: { opacity: 1, y: 0 } as const,
                    transition: {
                      duration: 0.5,
                      delay: 0.35,
                      type: "spring" as const,
                      stiffness: 80,
                    },
                  })}
            >
              <Button
                size="lg"
                asChild
                className="rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <Link to="/signup">
                  Get Started
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-xl"
              >
                <Link to="/dashboard">View Dashboard</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="relative py-12 border-y border-border/40 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="text-center"
                {...(shouldReduceMotion
                  ? {}
                  : {
                      initial: { opacity: 0, scale: 0.95 } as const,
                      whileInView: { opacity: 1, scale: 1 } as const,
                      viewport: { once: true },
                      transition: {
                        duration: 0.4,
                        delay: i * 0.1,
                        type: "spring" as const,
                        stiffness: 120,
                      },
                    })}
              >
                <p className="font-heading text-3xl sm:text-4xl font-bold text-primary">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section — Flowing / asymmetric layout */}
      <section className="relative py-20 sm:py-28">
        <BlobBackground variant="subtle" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div className="mb-14 lg:ml-12" {...fadeUp}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary mb-4">
              <Sparkles className="h-3 w-3" />
              Features
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Everything your team needs
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg">
              From deploy tracking to incident response, Flux provides the
              visibility your engineering team deserves.
            </p>
          </motion.div>

          {/* Asymmetric flowing cards */}
          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-6">
            {features.map((feature, i) => {
              const colSpans = [
                "lg:col-span-7",
                "lg:col-span-5",
                "lg:col-span-5 lg:col-start-2",
                "lg:col-span-6",
              ];
              return (
                <motion.div
                  key={feature.title}
                  className={cn(colSpans[i])}
                  {...(shouldReduceMotion
                    ? {}
                    : {
                        initial: { opacity: 0, y: 24 } as const,
                        whileInView: { opacity: 1, y: 0 } as const,
                        viewport: { once: true, margin: "-40px" },
                        transition: {
                          duration: 0.5,
                          delay: i * 0.08,
                          type: "spring" as const,
                          stiffness: 100,
                        },
                      })}
                >
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    shouldReduceMotion={shouldReduceMotion}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-3xl bg-card p-8 sm:p-12 lg:p-16 shadow-sm border border-border/40 relative overflow-hidden"
            {...fadeUp}
          >
            <BlobBackground variant="subtle" />
            <div className="relative max-w-lg lg:ml-8">
              <h2 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
                Ready to grow your workflow?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Join teams already shipping faster with Flux. Free to start, no
                credit card required.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  size="lg"
                  asChild
                  className="rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <Link to="/signup">Start for free</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  asChild
                  className="rounded-xl"
                >
                  <Link to="/components">Explore Components</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  shouldReduceMotion,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  shouldReduceMotion: boolean | null;
}) {
  return (
    <motion.div
      className="group rounded-2xl bg-card p-6 sm:p-8 shadow-sm border border-border/40 transition-shadow hover:shadow-md"
      {...(shouldReduceMotion
        ? {}
        : {
            whileHover: { scale: 1.02 } as const,
            transition: {
              type: "spring" as const,
              stiffness: 300,
              damping: 20,
            },
          })}
    >
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 mb-4">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3 className="font-heading text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
