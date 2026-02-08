import { useRef } from "react";
import { Link } from "react-router";
import { motion, useInView } from "motion/react";
import { ArrowRight, BarChart3, GitPullRequest, Rocket, Shield } from "lucide-react";
import { Button } from "@notabhay-ui/ui";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" as const } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const features = [
  {
    icon: BarChart3,
    title: "Real-time Dashboards",
    description: "Live metrics that update as your team ships. No refresh required, no lag, no stale numbers.",
  },
  {
    icon: Rocket,
    title: "Deploy Tracking",
    description: "Every deploy, tagged and tracked. See who shipped what, when, and to which environment.",
  },
  {
    icon: GitPullRequest,
    title: "Review Velocity",
    description: "PR open, review, merge timelines at a glance. Surface bottlenecks before they slow you down.",
  },
  {
    icon: Shield,
    title: "Incident Timeline",
    description: "MTTR, severity trends, and on-call load consolidated in one clear, actionable view.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero section — editorial / magazine style */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="max-w-3xl">
            <p className="font-heading text-xs small-caps tracking-[0.2em] text-primary mb-6">
              Developer Analytics
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground mb-8">
              Ship faster with real-time developer analytics
            </h1>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mt-8">
            <div className="md:col-span-7">
              <p className="drop-cap text-lg md:text-xl text-foreground leading-[1.8]">
                Flux gives engineering teams visibility into deploy frequency, code review
                velocity, and incident response — so you can measure what matters. Built for
                teams who believe that shipping well is a discipline, not an accident.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col justify-end gap-4">
              <div className="pull-quote text-base md:text-lg">
                &ldquo;What gets measured gets managed. What gets visible gets improved.&rdquo;
              </div>
              <div className="flex gap-3 mt-4">
                <Button asChild className="small-caps border border-border">
                  <Link to="/dashboard">
                    View Dashboard
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" className="small-caps">
                  <Link to="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </section>

      <hr className="hairline mx-auto max-w-6xl" />

      {/* Features as editorial columns */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="mb-12 md:mb-16">
            <p className="font-heading text-xs small-caps tracking-[0.2em] text-primary mb-3">
              Capabilities
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              Four pillars of engineering visibility
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                variants={fadeUp}
                className="group"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-muted-foreground mt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <feature.icon className="h-5 w-5 text-primary shrink-0" />
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                    <hr className="hairline mt-6 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <hr className="hairline mx-auto max-w-6xl" />

      {/* How it works — three-column editorial layout */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="mb-12 md:mb-16">
            <p className="font-heading text-xs small-caps tracking-[0.2em] text-primary mb-3">
              Methodology
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
              From data to decisions in three steps
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                step: "I",
                title: "Connect",
                body: "Integrate Flux with your CI/CD pipeline, GitHub repositories, and incident management tools. Setup takes less than ten minutes.",
              },
              {
                step: "II",
                title: "Observe",
                body: "Watch as Flux surfaces deploy frequency, review velocity, MTTR, and incident patterns in real-time dashboards that tell a story.",
              },
              {
                step: "III",
                title: "Improve",
                body: "Identify bottlenecks, celebrate wins, and make data-informed decisions that compound over time. Ship with confidence.",
              },
            ].map((item) => (
              <motion.div key={item.step} variants={fadeUp} className="space-y-4">
                <span className="font-heading text-3xl font-light text-primary/60">
                  {item.step}
                </span>
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <hr className="hairline mx-auto max-w-6xl" />

      {/* CTA section */}
      <section className="mx-auto max-w-6xl px-6 lg:px-8 py-20 md:py-28">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <motion.p
            variants={fadeUp}
            className="font-heading text-xs small-caps tracking-[0.2em] text-primary mb-4"
          >
            Begin
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-6"
          >
            Ready to see what your team is capable of?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground mb-8 leading-relaxed">
            Join engineering teams who use Flux to ship faster, review smarter, and
            respond quicker. Your dashboard is waiting.
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center gap-4">
            <Button asChild className="small-caps border border-border">
              <Link to="/signup">
                Create Account
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="ghost" className="small-caps">
              <Link to="/login">Sign In</Link>
            </Button>
          </motion.div>
        </AnimatedSection>
      </section>
    </div>
  );
}
