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
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Dot grid background */}
        <div className="absolute inset-0 void-dot-grid void-fade-mask opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
          <FadeIn>
            <Badge variant="outline" className="mb-6 font-heading text-xs">
              v2.4.0 &mdash; now with incident timeline
            </Badge>
          </FadeIn>

          <div className="max-w-3xl">
            <FadeIn delay={0.08}>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
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
              <div className="mt-8 flex items-center gap-3">
                <Button asChild>
                  <Link to="/dashboard">
                    Open Dashboard
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/components">View Components</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Asymmetric stat block, right-aligned on desktop */}
          <FadeIn delay={0.32}>
            <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px border border-border rounded-sm overflow-hidden">
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
                  <p className="font-heading text-xl sm:text-2xl font-semibold tracking-tight">
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

      {/* Features */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <FadeIn>
            <p className="font-heading text-xs text-muted-foreground uppercase tracking-widest mb-2">
              Features
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
              Everything you need to measure velocity
            </h2>
          </FadeIn>

          <StaggerContainer className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px border border-border rounded-sm overflow-hidden">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="bg-card p-6 sm:p-8 group">
                  <feature.icon className="h-5 w-5 text-primary mb-4" />
                  <h3 className="font-heading text-sm font-semibold tracking-tight">
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

      {/* Code-like section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div>
                <p className="font-heading text-xs text-muted-foreground uppercase tracking-widest mb-2">
                  Integration
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
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
              <div className="border border-border rounded-sm overflow-hidden">
                <div className="bg-card px-4 py-2 border-b border-border flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="ml-2 font-heading text-xs text-muted-foreground">
                    flux.config.ts
                  </span>
                </div>
                <div className="bg-card p-4 font-heading text-xs leading-6 text-muted-foreground">
                  <span className="text-primary">export default</span>{" "}
                  {"{"} <br />
                  &nbsp;&nbsp;provider:{" "}
                  <span className="text-foreground">&quot;github&quot;</span>,
                  <br />
                  &nbsp;&nbsp;repos: [
                  <span className="text-foreground">
                    &quot;api&quot;, &quot;web&quot;
                  </span>
                  ],
                  <br />
                  &nbsp;&nbsp;metrics: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-foreground">
                    &quot;deploy-frequency&quot;
                  </span>
                  ,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-foreground">
                    &quot;review-velocity&quot;
                  </span>
                  ,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-foreground">&quot;mttr&quot;</span>,
                  <br />
                  &nbsp;&nbsp;],
                  <br />
                  {"}"};
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-24">
          <FadeIn>
            <div className="text-center max-w-lg mx-auto">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold tracking-tight">
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
