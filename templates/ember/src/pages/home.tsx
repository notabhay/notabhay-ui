import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, BarChart3, Rocket, GitPullRequest, Timer } from "lucide-react";
import { Button } from "@notabhay-ui/ui";

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
      "PR open, review, merge timelines. Find bottlenecks.",
  },
  {
    icon: Timer,
    title: "Incident Timeline",
    description: "MTTR, severity trends, and on-call load in one view.",
  },
];

const transition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1] as const,
};

export default function Home() {
  return (
    <div className="warm-gradient">
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.1 }}
            >
              <span className="inline-block text-xs font-body tracking-widest text-primary mb-6">
                Developer Analytics Platform
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.2 }}
            >
              Ship faster with{" "}
              <span className="text-primary">real-time</span> developer
              analytics
            </motion.h1>

            <motion.p
              className="mt-6 text-lg sm:text-xl text-muted-foreground font-body leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.35 }}
            >
              Flux gives engineering teams visibility into deploy frequency,
              code review velocity, and incident response — so you can measure
              what matters.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 0.5 }}
            >
              <Button asChild className="group">
                <Link to="/dashboard">
                  View Dashboard
                  <ArrowRight className="h-4 w-4 transition-transform duration-400 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/components">Explore Components</Link>
              </Button>
            </motion.div>
          </div>

          {/* Decorative gradient orb */}
          <div
            className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-[0.06]"
            style={{
              background:
                "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-6xl" />

      {/* Features */}
      <section className="py-24 sm:py-32" aria-labelledby="features-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
          >
            <span className="text-xs font-body tracking-widest text-primary">
              Capabilities
            </span>
            <h2
              id="features-heading"
              className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-foreground"
            >
              Everything your team needs
            </h2>
            <p className="mt-4 text-muted-foreground font-body max-w-2xl">
              From deploys to incidents, Flux gives you a complete picture of
              your engineering workflow.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                className="card-grain gold-accent-top group relative rounded-lg border border-border/50 bg-card p-8 transition-all duration-400 hover:border-primary/20"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ ...transition, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-6xl" />

      {/* Social proof / stats section */}
      <section className="py-24 sm:py-32" aria-labelledby="stats-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
          >
            <span className="text-xs font-body tracking-widest text-primary">
              Trusted by Teams
            </span>
            <h2
              id="stats-heading"
              className="mt-3 font-heading text-3xl sm:text-4xl font-semibold text-foreground"
            >
              Built for scale
            </h2>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              { value: "50K+", label: "Deploys tracked" },
              { value: "2.1h", label: "Avg review time" },
              { value: "99.9%", label: "Uptime SLA" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ ...transition, delay: index * 0.15 }}
              >
                <p className="font-heading text-4xl sm:text-5xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground font-body tracking-wide">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="gold-rule mx-auto max-w-6xl" />

      {/* CTA section */}
      <section className="py-24 sm:py-32" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={transition}
          >
            <h2
              id="cta-heading"
              className="font-heading text-3xl sm:text-4xl font-semibold text-foreground"
            >
              Measure what matters
            </h2>
            <p className="mt-4 text-muted-foreground font-body max-w-xl mx-auto">
              Join the teams already shipping with confidence. Flux provides
              the clarity your engineering org deserves.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link to="/signup">Get Started</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
