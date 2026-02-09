import { Link } from "react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
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

/* Glass card entry: scale from 1.03 with blur — "materializing from atmosphere" */
const glassEntry = {
  initial: { opacity: 0, scale: 1.05, filter: "blur(12px)" },
  animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const transition = shouldReduceMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const };

  const { scrollY } = useScroll();
  const orbY1 = useTransform(scrollY, [0, 1000], [0, -120]);
  const orbY2 = useTransform(scrollY, [0, 1000], [0, -80]);
  const orbY3 = useTransform(scrollY, [0, 1000], [0, -60]);

  return (
    <div className="relative overflow-hidden">
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center" aria-labelledby="hero-heading">
        {/* Floating animated gradient orbs — parallax-linked */}
        <motion.div
          className="orb orb-1 -top-40 left-[5%]"
          style={{ y: shouldReduceMotion ? 0 : orbY1 }}
          aria-hidden="true"
        />
        <motion.div
          className="orb orb-2 top-[20%] right-[0%]"
          style={{ y: shouldReduceMotion ? 0 : orbY2 }}
          aria-hidden="true"
        />
        <motion.div
          className="orb orb-3 bottom-[5%] left-[25%]"
          style={{ y: shouldReduceMotion ? 0 : orbY3 }}
          aria-hidden="true"
        />
        <motion.div
          className="orb orb-4 top-[50%] right-[20%]"
          style={{ y: shouldReduceMotion ? 0 : orbY1 }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left -- copy */}
            <motion.div
              initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className="space-y-8"
            >
              <motion.div
                initial={shouldReduceMotion ? undefined : glassEntry.initial}
                animate={glassEntry.animate}
                transition={{ ...transition, delay: shouldReduceMotion ? 0 : 0.1 }}
                className="inline-flex items-center gap-2 glass-subtle rounded-full px-4 py-1.5 text-xs font-medium text-primary"
              >
                <Zap className="h-3 w-3" />
                Real-time analytics platform
              </motion.div>

              <h1
                id="hero-heading"
                className="font-heading text-5xl sm:text-6xl lg:text-7xl tracking-tighter"
              >
                Ship faster with{" "}
                <span className="text-primary">real-time</span> developer
                analytics
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed tracking-wide">
                Flux gives engineering teams visibility into deploy frequency,
                code review velocity, and incident response &mdash; so you can
                measure what matters.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-2xl glass-shimmer">
                  <Link to="/signup">
                    Get started
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-2xl">
                  <Link to="/dashboard">View demo</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right -- glass metric cards */}
            <div className="relative">
              {/* Dense orb placement behind card cluster */}
              <div className="orb orb-1 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
              <div className="orb orb-3 top-[20%] left-[10%]" aria-hidden="true" />

              <div className="relative z-10 grid grid-cols-2 gap-5">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={shouldReduceMotion ? undefined : glassEntry.initial}
                    animate={glassEntry.animate}
                    transition={{
                      ...transition,
                      delay: shouldReduceMotion ? 0 : 0.2 + i * 0.12,
                    }}
                    whileHover={shouldReduceMotion ? undefined : {
                      y: -6,
                      transition: { duration: 0.25 },
                    }}
                    className="group glass-shimmer"
                  >
                    <Card className="rounded-2xl glass-glow">
                      <CardContent className="pt-6 pb-5">
                        <p className="text-3xl font-heading">
                          {metric.value}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1.5">
                          {metric.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="relative py-28" aria-labelledby="features-heading">
        <motion.div
          className="orb orb-2 top-[10%] left-[55%]"
          style={{ y: shouldReduceMotion ? 0 : orbY2 }}
          aria-hidden="true"
        />
        <motion.div
          className="orb orb-4 bottom-[10%] left-[10%]"
          style={{ y: shouldReduceMotion ? 0 : orbY3 }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={transition}
            className="text-center mb-16"
          >
            <h2
              id="features-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl"
            >
              Everything you need to measure velocity
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto tracking-wide">
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
                  initial={shouldReduceMotion ? undefined : glassEntry.initial}
                  whileInView={glassEntry.animate}
                  viewport={{ once: true }}
                  transition={{
                    ...transition,
                    delay: shouldReduceMotion ? 0 : i * 0.1,
                  }}
                  whileHover={shouldReduceMotion ? undefined : {
                    y: -6,
                    transition: { duration: 0.25 },
                  }}
                  className="group glass-shimmer"
                >
                  <Card className="h-full rounded-2xl glass-glow">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl glass-subtle">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-heading font-medium">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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
      <section className="relative py-28" aria-labelledby="proof-heading">
        <motion.div
          className="orb orb-3 bottom-[0%] right-[5%]"
          style={{ y: shouldReduceMotion ? 0 : orbY3 }}
          aria-hidden="true"
        />
        <motion.div
          className="orb orb-1 top-[20%] left-[70%]"
          style={{ y: shouldReduceMotion ? 0 : orbY1 }}
          aria-hidden="true"
        />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? undefined : glassEntry.initial}
            whileInView={glassEntry.animate}
            viewport={{ once: true }}
            transition={transition}
          >
            <Card className="rounded-3xl overflow-hidden">
              <CardContent className="py-14 px-8">
                <div className="text-center space-y-5">
                  <h2
                    id="proof-heading"
                    className="font-heading text-2xl sm:text-3xl lg:text-4xl"
                  >
                    Trusted by 2,400+ engineering teams
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto tracking-wide">
                    From seed-stage startups to public companies, teams rely on
                    Flux to ship with confidence.
                  </p>
                  <div className="flex flex-wrap justify-center gap-10 pt-8">
                    {["Vercel", "Stripe", "Linear", "Planetscale", "Resend"].map(
                      (company) => (
                        <span
                          key={company}
                          className="text-muted-foreground/40 font-heading text-lg"
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
      <section className="relative py-28" aria-labelledby="cta-heading">
        <motion.div
          className="orb orb-1 top-[30%] left-[40%]"
          style={{ y: shouldReduceMotion ? 0 : orbY1 }}
          aria-hidden="true"
        />
        <motion.div
          className="orb orb-2 bottom-[20%] right-[30%]"
          style={{ y: shouldReduceMotion ? 0 : orbY2 }}
          aria-hidden="true"
        />
        <div className="orb orb-4 top-[10%] right-[10%]" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={shouldReduceMotion ? undefined : glassEntry.initial}
            whileInView={glassEntry.animate}
            viewport={{ once: true }}
            transition={transition}
            className="text-center space-y-8"
          >
            <h2
              id="cta-heading"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl"
            >
              Ready to accelerate your team?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto tracking-wide">
              Join thousands of engineering teams already shipping faster with
              Flux.
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild size="lg" className="rounded-2xl glass-shimmer">
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
