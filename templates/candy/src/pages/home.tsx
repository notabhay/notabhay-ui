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
} from "lucide-react";
import { Button, Card, CardContent, Badge } from "@notabhay-ui/ui";
import { motion } from "motion/react";

const features = [
  {
    icon: BarChart3,
    title: "Real-time Dashboards",
    description: "Live metrics that update as your team ships.",
    rotate: -1,
  },
  {
    icon: Rocket,
    title: "Deploy Tracking",
    description: "Every deploy, tagged and tracked.",
    rotate: 1.5,
  },
  {
    icon: GitPullRequest,
    title: "Review Velocity",
    description: "PR open \u2192 review \u2192 merge timelines. Find bottlenecks.",
    rotate: -0.5,
  },
  {
    icon: Siren,
    title: "Incident Timeline",
    description: "MTTR, severity trends, and on-call load in one view.",
    rotate: 1,
  },
];

const stats = [
  { value: "10K+", label: "Active teams" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "2M+", label: "Deploys tracked" },
  { value: "<50ms", label: "Avg latency" },
];

const highlights = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-50ms query times on billions of data points.",
  },
  {
    icon: Shield,
    title: "Enterprise Secure",
    description: "SOC2 certified with end-to-end encryption.",
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Edge-deployed dashboards for zero-lag access worldwide.",
  },
];

const springBouncy = {
  type: "spring" as const,
  stiffness: 300,
  damping: 15,
};

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 px-4">
        <div className="mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springBouncy, delay: 0 }}
          >
            <Badge
              variant="outline"
              className="mb-6 rounded-full px-4 py-1.5 text-sm border-primary/30 text-primary"
            >
              Now in public beta
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springBouncy, delay: 0.1 }}
            className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6"
          >
            Ship faster with{" "}
            <span className="bg-clip-text text-transparent candy-gradient-bg">
              real-time
            </span>
            <br />
            developer analytics
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springBouncy, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Flux gives engineering teams visibility into deploy frequency, code
            review velocity, and incident response — so you can measure what
            matters.
          </motion.p>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springBouncy, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to="/signup">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97, rotate: -2 }}
                transition={springBouncy}
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 candy-gradient-bg text-white border-0 candy-glow font-semibold"
                >
                  Get Started Free
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </motion.div>
            </Link>
            <Link to="/dashboard">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={springBouncy}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 font-semibold"
                >
                  View Dashboard
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/50 bg-muted/20 py-8 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ ...springBouncy, delay: index * 0.08 }}
                className="text-center"
              >
                <p className="font-heading font-extrabold text-3xl sm:text-4xl text-primary">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={springBouncy}
            className="text-center mb-14"
          >
            <Badge
              variant="secondary"
              className="mb-4 rounded-full px-3 py-1"
            >
              Features
            </Badge>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Everything you need to{" "}
              <span className="text-primary">ship with confidence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ y: 30, opacity: 0, rotate: 0 }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    rotate: feature.rotate,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, rotate: 0 }}
                  transition={{ ...springBouncy, delay: index * 0.08 }}
                >
                  <Card className="h-full candy-glow border-border/50 hover:border-primary/30 transition-colors">
                    <CardContent className="p-6 sm:p-8">
                      <div className="w-12 h-12 rounded-2xl candy-gradient-bg flex items-center justify-center mb-5">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-heading font-bold text-xl mb-2">
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

      {/* Highlights */}
      <section className="py-20 sm:py-28 px-4 bg-muted/20">
        <div className="mx-auto max-w-7xl">
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
              return (
                <motion.div
                  key={item.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  transition={{ ...springBouncy, delay: index * 0.1 }}
                  className="text-center p-8 rounded-3xl bg-card border border-border/50 candy-glow-pink"
                >
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">
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

      {/* CTA */}
      <section className="py-20 sm:py-28 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={springBouncy}
            className="p-10 sm:p-14 rounded-3xl candy-gradient-bg relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4">
                Ready to ship faster?
              </h2>
              <p className="text-white/80 mb-8 max-w-md mx-auto">
                Join 10,000+ engineering teams already using Flux to measure
                what matters.
              </p>
              <Link to="/signup">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95, rotate: -2 }}
                  transition={springBouncy}
                  className="inline-block"
                >
                  <Button
                    size="lg"
                    className="rounded-full px-8 bg-white text-primary hover:bg-white/90 font-bold"
                  >
                    Start Free Trial
                    <ArrowRight className="h-4 w-4 ml-1" />
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
