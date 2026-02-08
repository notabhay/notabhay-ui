import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import {
  BarChart3,
  Rocket,
  GitPullRequest,
  AlertTriangle,
  ArrowRight,
  Zap,
} from "lucide-react";
import { Button, Card, CardContent } from "@notabhay-ui/ui";

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
    icon: AlertTriangle,
    title: "Incident Timeline",
    description: "MTTR, severity trends, and on-call load in one view.",
  },
];

const metrics = [
  { label: "Deploys/day", value: "142" },
  { label: "Avg review time", value: "4.2h" },
  { label: "Uptime", value: "99.98%" },
  { label: "Teams", value: "2,400+" },
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="relative overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[85vh] flex items-center" aria-labelledby="hero-heading">
        {/* Floating gradient orbs */}
        <div className="orb orb-1 -top-20 left-[10%]" aria-hidden="true" />
        <div className="orb orb-2 top-[30%] right-[5%]" aria-hidden="true" />
        <div className="orb orb-3 bottom-[10%] left-[30%]" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 glass-subtle rounded-full px-4 py-1.5 text-xs font-medium text-primary">
                <Zap className="h-3 w-3" />
                Real-time analytics platform
              </div>

              <h1
                id="hero-heading"
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
              >
                Ship faster with{" "}
                <span className="text-primary">real-time</span> developer
                analytics
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                Flux gives engineering teams visibility into deploy frequency,
                code review velocity, and incident response &mdash; so you can
                measure what matters.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-xl">
                  <Link to="/signup">
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-xl glass-subtle">
                  <Link to="/dashboard">View demo</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right — glass metric cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.15 }}
              className="relative"
            >
              {/* Orb behind the card cluster */}
              <div className="orb orb-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

              <div className="relative z-10 grid grid-cols-2 gap-4">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      ...transition,
                      delay: shouldReduceMotion ? 0 : 0.2 + i * 0.08,
                    }}
                  >
                    <Card className="rounded-xl">
                      <CardContent className="pt-6">
                        <p className="text-3xl font-bold font-heading">
                          {metric.value}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {metric.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative py-24" aria-labelledby="features-heading">
        <div className="orb orb-2 top-0 left-[60%]" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="text-center mb-16"
          >
            <h2
              id="features-heading"
              className="font-heading text-3xl sm:text-4xl font-bold"
            >
              Everything you need to measure velocity
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From deploys to incidents, Flux captures the metrics that matter
              to engineering leadership.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    ...transition,
                    delay: shouldReduceMotion ? 0 : i * 0.1,
                  }}
                >
                  <Card className="h-full rounded-xl group hover:shadow-lg hover:shadow-primary/5 transition-shadow">
                    <CardContent className="pt-6 space-y-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF ===== */}
      <section className="relative py-24" aria-labelledby="proof-heading">
        <div className="orb orb-3 bottom-0 right-[10%]" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
          >
            <Card className="rounded-2xl overflow-hidden">
              <CardContent className="pt-8 pb-8">
                <div className="text-center space-y-4">
                  <h2
                    id="proof-heading"
                    className="font-heading text-2xl sm:text-3xl font-bold"
                  >
                    Trusted by 2,400+ engineering teams
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    From seed-stage startups to public companies, teams rely on
                    Flux to ship with confidence.
                  </p>
                  <div className="flex flex-wrap justify-center gap-8 pt-6">
                    {["Vercel", "Stripe", "Linear", "Planetscale", "Resend"].map(
                      (company) => (
                        <span
                          key={company}
                          className="text-muted-foreground/50 font-heading font-semibold text-lg"
                        >
                          {company}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24" aria-labelledby="cta-heading">
        <div className="orb orb-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={transition}
            className="text-center space-y-6"
          >
            <h2
              id="cta-heading"
              className="font-heading text-3xl sm:text-4xl font-bold"
            >
              Ready to accelerate your team?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Join thousands of engineering teams already shipping faster with
              Flux.
            </p>
            <div className="flex justify-center gap-3">
              <Button asChild size="lg" className="rounded-xl">
                <Link to="/signup">
                  Start free trial
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
