import { Link } from "react-router";
import { ArrowRight, Activity, Rocket, GitPullRequest, Clock } from "lucide-react";
import { Button, Badge } from "@notabhay-ui/ui";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in";

const features = [
  {
    icon: Activity,
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

export default function Home() {
  return (
    <div>
      {/* Hero — generous breathing room */}
      <section className="relative overflow-hidden">
        {/* Dot grid background — Void's signature */}
        <div className="absolute inset-0 void-dot-grid void-fade-mask opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
          <FadeIn>
            <Badge variant="outline" className="mb-6 font-heading text-xs">
              v2.4.0 &mdash; now with incident timeline
            </Badge>
          </FadeIn>

          <div className="max-w-3xl">
            <FadeIn delay={0.08}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-foreground">
                Ship faster with
                <br />
                real-time developer
                <br />
                analytics
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                Flux gives engineering teams visibility into deploy frequency,
                code review velocity, and incident response &mdash; so you can
                measure what matters.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/dashboard">
                    Open Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Stat block — gap-px grid, Void's signature */}
          <FadeIn delay={0.32}>
            <div className="mt-20 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-px border border-border rounded-sm overflow-hidden">
              {[
                { label: "Deploys today", value: "47" },
                { label: "Avg review time", value: "4.2h" },
                { label: "Active PRs", value: "23" },
                { label: "Uptime", value: "99.98%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card px-4 py-5 sm:px-6 sm:py-6"
                >
                  <p className="font-heading text-xl sm:text-2xl font-semibold tracking-tighter text-primary tabular-nums">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features — tighter, denser */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16">
          <FadeIn>
            <p className="font-heading text-xs text-muted-foreground uppercase tracking-widest mb-2">
              Features
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tighter">
              Everything you need to measure velocity
            </h2>
          </FadeIn>

          <StaggerContainer className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px border border-border rounded-sm overflow-hidden">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="bg-card p-6 sm:p-8 group">
                  <feature.icon className="h-5 w-5 text-primary mb-4" />
                  <h3 className="font-heading text-sm font-semibold tracking-tighter">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Integration — medium padding */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <p className="font-heading text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  Integration
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tighter">
                  Connects to your existing workflow
                </h2>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Flux integrates with GitHub, GitLab, and Bitbucket. Set up
                  takes under two minutes. No code changes required.
                </p>
                <div className="mt-6">
                  <Button variant="outline" asChild>
                    <Link to="/signup">Get started</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Connect your repository",
                    desc: "GitHub, GitLab, or Bitbucket. One OAuth click.",
                  },
                  {
                    step: "02",
                    title: "Pick your metrics",
                    desc: "Deploy frequency, review velocity, MTTR, and more.",
                  },
                  {
                    step: "03",
                    title: "Ship with confidence",
                    desc: "Real-time dashboards. Zero config. Under two minutes.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="flex items-start gap-4 group"
                  >
                    <span className="font-heading text-xs text-primary tabular-nums mt-0.5 font-semibold">
                      {item.step}
                    </span>
                    <div className="flex-1 border-b border-border pb-5">
                      <p className="font-heading text-sm font-semibold tracking-tighter">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-14">
          <FadeIn>
            <p className="text-center text-xs text-muted-foreground uppercase tracking-widest mb-6">
              Trusted by engineering teams at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {["Vercel", "Stripe", "Linear", "Planetscale", "Resend", "Railway"].map(
                (name) => (
                  <span
                    key={name}
                    className="font-heading text-sm text-muted-foreground/60 tracking-tighter"
                  >
                    {name}
                  </span>
                )
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats strip — compact */}
      <section className="border-t border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-border">
              {[
                { value: "< 50ms", label: "latency" },
                { value: "99.97%", label: "uptime" },
                { value: "2,400+", label: "teams" },
                { value: "180K", label: "deploys / day" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="py-5 sm:py-6 text-center"
                >
                  <p className="font-heading text-lg sm:text-xl font-semibold tracking-tighter text-primary tabular-nums">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA — expansive */}
      <section>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-28">
          <FadeIn>
            <div className="text-center max-w-lg mx-auto">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tighter">
                Start measuring what matters
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Free for teams up to 10. No credit card required.
              </p>
              <div className="mt-6">
                <Button asChild>
                  <Link to="/signup">
                    Create account
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
