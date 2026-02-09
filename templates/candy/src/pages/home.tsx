import { Link } from "react-router";
import {
  ArrowRight,
  BarChart3,
  Rocket,
  GitPullRequest,
  Siren,
  Zap,
  Shield,
  Globe,
  Sparkles,
} from "lucide-react";
import { Button, Card, CardContent, Badge } from "@notabhay-ui/ui";
import { motion } from "motion/react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Dashboards",
    description: "Live metrics that update as your team ships.",
    rotate: -2.5,
    color: "violet" as const,
  },
  {
    icon: Rocket,
    title: "Deploy Tracking",
    description: "Every deploy, tagged and tracked.",
    rotate: 2,
    color: "pink" as const,
  },
  {
    icon: GitPullRequest,
    title: "Review Velocity",
    description: "PR open to review to merge timelines. Find bottlenecks.",
    rotate: -1.5,
    color: "cyan" as const,
  },
  {
    icon: Siren,
    title: "Incident Timeline",
    description: "MTTR, severity trends, and on-call load in one view.",
    rotate: 3,
    color: "violet" as const,
  },
];

const stats = [
  { value: "10K+", label: "Active teams", color: "violet" as const },
  { value: "99.9%", label: "Uptime SLA", color: "pink" as const },
  { value: "2M+", label: "Deploys tracked", color: "cyan" as const },
  { value: "<50ms", label: "Avg latency", color: "violet" as const },
];

const highlights = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-50ms query times on billions of data points.",
    color: "violet" as const,
  },
  {
    icon: Shield,
    title: "Enterprise Secure",
    description: "SOC2 certified with end-to-end encryption.",
    color: "pink" as const,
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Edge-deployed dashboards for zero-lag access worldwide.",
    color: "cyan" as const,
  },
];

const springPlayful = {
  type: "spring" as const,
  stiffness: 400,
  damping: 10,
};

const springBouncy = {
  type: "spring" as const,
  stiffness: 300,
  damping: 12,
};

const wobble = {
  rotate: [0, -5, 5, -3, 3, 0],
  transition: { duration: 0.5 },
};

const colorClasses = {
  violet: {
    shadow: "candy-glow",
    iconBg: "candy-gradient-bg",
    border: "border-primary/40",
    topBorder: "bg-primary",
    text: "text-primary",
    pillBg: "bg-primary/10",
  },
  pink: {
    shadow: "candy-glow-pink",
    iconBg: "bg-secondary",
    border: "border-secondary/40",
    topBorder: "bg-secondary",
    text: "text-secondary",
    pillBg: "bg-secondary/10",
  },
  cyan: {
    shadow: "candy-glow-cyan",
    iconBg: "bg-accent",
    border: "border-accent/40",
    topBorder: "bg-accent",
    text: "text-accent",
    pillBg: "bg-accent/10",
  },
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section — ASYMMETRIC, BOLD */}
      <section className="relative py-16 sm:py-24 lg:py-32 px-4">
        {/* Trimmed floating shapes — only 2 in hero */}
        <div className="absolute top-16 right-[15%] candy-float opacity-30" aria-hidden="true">
          <div className="w-12 h-5 rounded-full candy-gradient-bg" />
        </div>
        <div className="absolute bottom-24 left-[8%] candy-float-alt opacity-25" aria-hidden="true">
          <div className="w-5 h-5 rounded-lg bg-accent" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Left side — text (60%) */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <motion.div
                initial={{ y: 30, opacity: 0, rotate: -2 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ ...springPlayful, delay: 0 }}
              >
                <Badge
                  variant="outline"
                  className="mb-6 rounded-full px-5 py-2 text-sm candy-gradient-border candy-shimmer"
                >
                  <Sparkles className="h-3.5 w-3.5 mr-1.5 text-primary" />
                  <span className="candy-gradient-text font-semibold">
                    Now in public beta
                  </span>
                </Badge>
              </motion.div>

              {/* Multi-color hero heading — gradient text only here */}
              <div className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.05] mb-6">
                <motion.span
                  className="block text-primary"
                  initial={{ y: 40, opacity: 0, rotate: -3 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ ...springPlayful, delay: 0.1 }}
                >
                  Ship faster
                </motion.span>
                <motion.span
                  className="block candy-gradient-text"
                  initial={{ y: 40, opacity: 0, rotate: -3 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ ...springPlayful, delay: 0.2 }}
                >
                  with real-time
                </motion.span>
                <motion.span
                  className="block text-secondary"
                  initial={{ y: 40, opacity: 0, rotate: -3 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  transition={{ ...springPlayful, delay: 0.3 }}
                >
                  analytics
                </motion.span>
              </div>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...springBouncy, delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10 mx-auto lg:mx-0"
              >
                Flux gives engineering teams visibility into deploy frequency,
                code review velocity, and incident response.
              </motion.p>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...springBouncy, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-4"
              >
                <Link to="/signup">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95, rotate: -3 }}
                    transition={springPlayful}
                  >
                    <Button
                      size="lg"
                      className="rounded-full px-8 candy-gradient-bg text-white border-0 candy-glow-intense candy-shimmer font-bold text-base h-12"
                    >
                      Get Started Free
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </motion.div>
                </Link>
                <Link to="/dashboard">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={springPlayful}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className="rounded-full px-8 font-bold text-base h-12 border"
                    >
                      View Dashboard
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>

            {/* Right side — decorative floating pills with stats (40%) */}
            <div className="lg:col-span-2 relative min-h-[120px] lg:min-h-[350px]">
              {/* Mobile: simplified horizontal stat pills */}
              <div className="flex lg:hidden gap-3 justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springPlayful, delay: 0.6 }}
                >
                  <div className="rounded-full bg-primary/10 border border-primary/30 px-4 py-2 flex items-center gap-2 candy-glow">
                    <Rocket className="h-4 w-4 text-primary" />
                    <span className="font-heading font-bold text-sm text-primary">
                      1,284 deploys
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springPlayful, delay: 0.7 }}
                >
                  <div className="rounded-full bg-secondary/10 border border-secondary/30 px-4 py-2 flex items-center gap-2 candy-glow-pink">
                    <Zap className="h-4 w-4 text-secondary" />
                    <span className="font-heading font-bold text-sm text-secondary">
                      99.9% uptime
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Desktop: full floating pills */}
              <div className="hidden lg:block">
                {/* Tilted mock dashboard card */}
                <motion.div
                  initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
                  animate={{ opacity: 1, rotate: -3, scale: 1 }}
                  transition={{ ...springBouncy, delay: 0.6 }}
                  className="absolute top-4 right-0 w-72"
                >
                  <div className="rounded-3xl bg-card border border-border/50 p-5 candy-glow candy-gradient-border">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-3 h-3 rounded-full bg-accent" />
                      <span className="text-xs font-medium text-muted-foreground">
                        Deploy Activity
                      </span>
                    </div>
                    <div className="flex items-end gap-1.5 h-20">
                      {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 rounded-full candy-gradient-bg"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{
                            ...springPlayful,
                            delay: 0.8 + i * 0.06,
                          }}
                          style={{
                            height: `${h}%`,
                            transformOrigin: "bottom",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating stat pill 1 */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...springPlayful, delay: 0.9 }}
                  className="absolute top-0 left-4 candy-float"
                >
                  <div className="rounded-full bg-primary/10 border border-primary/30 px-4 py-2 flex items-center gap-2 candy-glow">
                    <Rocket className="h-4 w-4 text-primary" />
                    <span className="font-heading font-bold text-sm text-primary">
                      1,284 deploys
                    </span>
                  </div>
                </motion.div>

                {/* Floating stat pill 2 */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...springPlayful, delay: 1.0 }}
                  className="absolute bottom-16 left-0 candy-float-alt"
                >
                  <div className="rounded-full bg-secondary/10 border border-secondary/30 px-4 py-2 flex items-center gap-2 candy-glow-pink">
                    <Zap className="h-4 w-4 text-secondary" />
                    <span className="font-heading font-bold text-sm text-secondary">
                      99.9% uptime
                    </span>
                  </div>
                </motion.div>

                {/* Floating stat pill 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springPlayful, delay: 1.1 }}
                  className="absolute bottom-0 right-8 candy-float-slow"
                >
                  <div className="rounded-full bg-accent/10 border border-accent/30 px-4 py-2 flex items-center gap-2 candy-glow-cyan">
                    <BarChart3 className="h-4 w-4 text-accent" />
                    <span className="font-heading font-bold text-sm text-accent">
                      &lt;50ms latency
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar — each stat in colored pill */}
      <section className="py-10 px-4 candy-section-violet candy-dots">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const c = colorClasses[stat.color];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ y: 20, opacity: 0, scale: 0.95 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ ...springPlayful, delay: index * 0.08 }}
                  className={`text-center p-5 rounded-3xl bg-card border ${c.border} ${c.shadow}`}
                >
                  <p className={`font-heading font-extrabold text-4xl sm:text-5xl ${c.text}`}>
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1 font-medium uppercase tracking-wide">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gradient fade divider */}
      <div className="h-10 bg-gradient-to-b from-[oklch(0.96_0.03_296)] to-[oklch(0.96_0.03_350)]" aria-hidden="true" />

      {/* Features Grid — tinted pink section, offset cards */}
      <section className="py-20 sm:py-28 px-4 candy-section-pink relative">
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 candy-dots pointer-events-none" aria-hidden="true" />

        <div className="mx-auto max-w-7xl relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={springBouncy}
            className="text-center mb-14"
          >
            <Badge
              variant="secondary"
              className="mb-4 rounded-full px-4 py-1.5 font-semibold"
            >
              Features
            </Badge>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Everything you need to{" "}
              <span className="text-primary">ship with confidence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const c = colorClasses[feature.color];
              const isOffset = index % 2 === 1;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    y: 30,
                    opacity: 0,
                    rotate: 0,
                  }}
                  whileInView={{
                    y: isOffset ? 20 : 0,
                    opacity: 1,
                    rotate: feature.rotate,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.04,
                    rotate: 0,
                    y: isOffset ? 12 : -8,
                  }}
                  transition={{ ...springPlayful, delay: index * 0.08 }}
                  className="relative"
                >
                  <Card
                    className={`h-full ${c.shadow} border ${c.border} overflow-hidden candy-gradient-border`}
                  >
                    {/* Colored top border accent */}
                    <div
                      className={`h-1 ${c.topBorder} w-full`}
                      aria-hidden="true"
                    />
                    <CardContent className="p-6 sm:p-8">
                      <motion.div
                        whileHover={wobble}
                        className={`w-12 h-12 rounded-2xl ${c.iconBg} flex items-center justify-center mb-5`}
                      >
                        <Icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <h3
                        className={`font-heading font-bold text-xl mb-2 ${c.text}`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
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

      {/* Gradient fade divider */}
      <div className="h-10 bg-gradient-to-b from-[oklch(0.96_0.03_350)] to-[oklch(0.96_0.03_296)]" aria-hidden="true" />

      {/* Highlights — violet tinted section */}
      <section className="py-20 sm:py-28 px-4 candy-section-violet relative">
        <div className="mx-auto max-w-7xl relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={springBouncy}
            className="text-center mb-14"
          >
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Built for{" "}
              <span className="text-secondary">serious engineering</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Enterprise-grade infrastructure with a developer experience that
              sparks joy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const c = colorClasses[item.color];

              return (
                <motion.div
                  key={item.title}
                  initial={{ y: 30, opacity: 0, rotate: index === 1 ? 2 : -1.5 }}
                  whileInView={{ y: 0, opacity: 1, rotate: index === 1 ? 2 : -1.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, rotate: 0, scale: 1.03 }}
                  transition={{ ...springPlayful, delay: index * 0.1 }}
                  className={`text-center p-8 rounded-3xl bg-card border ${c.border} ${c.shadow} candy-gradient-border`}
                >
                  <motion.div
                    whileHover={wobble}
                    className={`w-14 h-14 rounded-full ${c.pillBg} flex items-center justify-center mx-auto mb-5`}
                  >
                    <Icon className={`h-7 w-7 ${c.text}`} />
                  </motion.div>
                  <h3 className={`font-heading font-bold text-lg mb-2 ${c.text}`}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA — full gradient section */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ scale: 0.92, opacity: 0, rotate: -1 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={springPlayful}
            className="p-10 sm:p-14 rounded-3xl candy-gradient-bg relative overflow-hidden candy-glow-intense"
          >
            {/* Decorative shape — 1 in CTA */}
            <div
              className="absolute top-4 right-8 w-8 h-8 rounded-full bg-white/10 candy-float"
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                Ready to <span className="underline decoration-white/40 decoration-4 underline-offset-4">ship faster</span>?
              </h2>
              <p className="text-white/80 mb-8 max-w-md mx-auto text-lg">
                Join 10,000+ engineering teams already using Flux to measure
                what matters.
              </p>
              <Link to="/signup">
                <motion.div
                  whileHover={{ scale: 1.06, y: -3 }}
                  whileTap={{ scale: 0.94, rotate: -3 }}
                  transition={springPlayful}
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="rounded-full px-10 bg-white text-primary hover:bg-white/90 font-bold text-base h-12 candy-shimmer"
                  >
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Button>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
