import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Activity, Rocket, GitPullRequest, AlertTriangle } from "lucide-react";
import { Button } from "@notabhay-ui/ui";

const features = [
  {
    label: "REAL-TIME DASHBOARDS",
    description: "Live metrics that update as your team ships.",
    icon: Activity,
    tag: "SYS:MONITOR",
  },
  {
    label: "DEPLOY TRACKING",
    description: "Every deploy, tagged and tracked.",
    icon: Rocket,
    tag: "SYS:DEPLOY",
  },
  {
    label: "REVIEW VELOCITY",
    description: "PR open → review → merge timelines. Find bottlenecks.",
    icon: GitPullRequest,
    tag: "SYS:REVIEW",
  },
  {
    label: "INCIDENT TIMELINE",
    description: "MTTR, severity trends, and on-call load in one view.",
    icon: AlertTriangle,
    tag: "SYS:INCIDENT",
  },
];

const motionConfig = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.08, ease: "linear" as const },
};

const marqueeText = "REAL-TIME ANALYTICS \u00A0\u2022\u00A0 DEPLOY TRACKING \u00A0\u2022\u00A0 REVIEW VELOCITY \u00A0\u2022\u00A0 INCIDENT RESPONSE \u00A0\u2022\u00A0 TEAM METRICS \u00A0\u2022\u00A0 ";

export default function Home() {
  return (
    <div>
      {/* ── Hero: Asymmetric layout — generous spacing ───────── */}
      <section className="border-b-4 border-border">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
          {/* Left: oversized heading — generous padding */}
          <motion.div
            className="p-10 lg:p-20"
            {...motionConfig}
          >
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-primary mb-6">
              PLATFORM: DEVELOPER_ANALYTICS
            </p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-[10rem] font-bold uppercase leading-[0.85] tracking-tighter mb-8">
              SHIP
              <br />
              FASTER
              <span className="text-primary">.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Flux gives engineering teams visibility into deploy frequency,
              code review velocity, and incident response — so you can measure
              what matters.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Button
                variant="outline"
                size="lg"
                className="border-3 border-foreground hover:bg-foreground hover:text-background px-8"
                asChild
              >
                <Link to="/dashboard">
                  ENTER DASHBOARD
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="hover:bg-primary hover:text-primary-foreground px-8"
                asChild
              >
                <Link to="/components">VIEW COMPONENTS</Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: data block — tighter padding */}
          <motion.div
            className="border-t-4 lg:border-t-0 lg:border-l-4 border-border bg-muted p-6 md:p-8 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.15, delay: 0.1, ease: "linear" }}
          >
            <p className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
              STATS: LAST_30_DAYS
            </p>
            <div className="space-y-6">
              {[
                { label: "DEPLOYS", value: "1,284", delta: "+12.5%" },
                { label: "AVG REVIEW", value: "4.2H", delta: "-8.3%" },
                { label: "INCIDENTS", value: "7", delta: "-22.2%" },
              ].map((stat) => (
                <div key={stat.label} className="border-b-2 border-border pb-4">
                  <p className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <div className="flex items-baseline justify-between mt-1">
                    <p className="font-heading text-3xl font-bold">{stat.value}</p>
                    <p className="font-heading text-sm text-primary">{stat.delta}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee ticker — duplicated for seamless loop ──── */}
      <section className="border-b-4 border-border bg-foreground text-background overflow-hidden py-3">
        <div className="flex whitespace-nowrap">
          {[0, 1].map((i) => (
            <p key={i} className="font-heading text-xs uppercase tracking-[0.3em] animate-[marquee_20s_linear_infinite]">
              {marqueeText}
            </p>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ── Features: Boxed asymmetric grid — tighter padding ─ */}
      <section className="border-b-4 border-border">
        <div className="p-6 border-b-4 border-border">
          <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
            SECTION: CAPABILITIES
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.tag}
                className={`border-b-4 border-border p-6 ${
                  i % 2 === 0 ? "md:border-r-4" : ""
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.08,
                  delay: i * 0.05,
                  ease: "linear",
                }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
                    {feature.tag}
                  </span>
                  <div className="border-3 border-border p-3">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold uppercase tracking-wider mb-3">
                  {feature.label}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* ── CTA Strip — wide horizontal padding ───────────── */}
      <section className="border-b-4 border-border">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto]">
          <div className="p-8 lg:p-24">
            <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
              ACTION: GET_STARTED
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase leading-[0.95] tracking-tight">
              MEASURE
              <br />
              WHAT MATTERS
              <span className="text-primary">.</span>
            </h2>
          </div>
          <div className="flex items-center border-t-4 lg:border-t-0 lg:border-l-4 border-border p-8 md:p-12">
            <Button
              variant="outline"
              size="lg"
              className="border-3 border-foreground hover:bg-foreground hover:text-background px-10 py-6 text-base"
              asChild
            >
              <Link to="/signup">
                CREATE ACCOUNT
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Bottom info strip — compact padding ───────────── */}
      <section className="grid grid-cols-2 md:grid-cols-4">
        {[
          { label: "LATENCY", value: "<50MS" },
          { label: "UPTIME", value: "99.97%" },
          { label: "TEAMS", value: "2,400+" },
          { label: "DEPLOYS/DAY", value: "180K" },
        ].map((item, i) => (
          <div
            key={item.label}
            className={`p-4 md:p-6 border-b-4 border-border ${
              i < 3 ? "border-r-4" : ""
            }`}
          >
            <p className="font-heading text-xs uppercase tracking-[0.15em] text-muted-foreground mb-1">
              {item.label}
            </p>
            <p className="font-heading text-2xl md:text-3xl font-bold">
              {item.value}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
