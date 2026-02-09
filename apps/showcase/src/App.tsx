import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface Template {
  slug: string;
  name: string;
  description: string;
  url: string;
  background: string;
  primary: string;
}

const templates: Template[] = [
  {
    slug: "void",
    name: "Void",
    description: "Minimal Dark",
    url: "https://notabhay-ui-preview-void.vercel.app",
    background: "oklch(0.145 0 0)",
    primary: "oklch(0.623 0.214 259.1)",
  },
  {
    slug: "neon",
    name: "Neon",
    description: "Cyberpunk/Terminal",
    url: "https://notabhay-ui-preview-neon.vercel.app",
    background: "oklch(0.16 0.015 284)",
    primary: "oklch(0.789 0.154 194.8)",
  },
  {
    slug: "brutalist",
    name: "Brutalist",
    description: "Raw/Industrial",
    url: "https://notabhay-ui-preview-brutalist.vercel.app",
    background: "oklch(0.22 0 0)",
    primary: "oklch(0.577 0.245 27.3)",
  },
  {
    slug: "bloom",
    name: "Bloom",
    description: "Soft/Organic",
    url: "https://notabhay-ui-preview-bloom.vercel.app",
    background: "oklch(0.2 0.012 340)",
    primary: "oklch(0.718 0.18 349)",
  },
  {
    slug: "editorial",
    name: "Editorial",
    description: "Print/Magazine",
    url: "https://notabhay-ui-preview-editorial.vercel.app",
    background: "oklch(0.216 0.006 56)",
    primary: "oklch(0.714 0.185 305)",
  },
  {
    slug: "glass",
    name: "Glass",
    description: "Glassmorphism",
    url: "https://notabhay-ui-preview-glass.vercel.app",
    background: "oklch(0.178 0.029 284)",
    primary: "oklch(0.672 0.176 277)",
  },
  {
    slug: "swiss",
    name: "Swiss",
    description: "International/Grid",
    url: "https://notabhay-ui-preview-swiss.vercel.app",
    background: "oklch(0.175 0 0)",
    primary: "oklch(0.628 0.258 29.2)",
  },
  {
    slug: "ember",
    name: "Ember",
    description: "Dark Luxury",
    url: "https://notabhay-ui-preview-ember.vercel.app",
    background: "oklch(0.145 0.005 286)",
    primary: "oklch(0.756 0.088 72)",
  },
  {
    slug: "candy",
    name: "Candy",
    description: "Playful/Bold",
    url: "https://notabhay-ui-preview-candy.vercel.app",
    background: "oklch(0.19 0.04 300)",
    primary: "oklch(0.627 0.265 303.9)",
  },
];

function TemplateCard({
  template,
  index,
}: {
  template: Template;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative"
    >
      <a
        href={template.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg border border-white/[0.08] bg-white/[0.03] overflow-hidden transition-all duration-200 hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
        style={{
          ["--card-primary" as string]: template.primary,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = template.primary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        }}
      >
        {/* Color preview block */}
        <div
          className="relative h-32 overflow-hidden"
          style={{ backgroundColor: template.background }}
        >
          <iframe
            src={template.url}
            title={`${template.name} preview`}
            loading="eager"
            className="absolute inset-0 w-full h-full border-0 pointer-events-none"
            style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%", height: "200%" }}
          />
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 70% 50%, ${template.primary}, transparent 70%)`,
            }}
          />
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink className="w-4 h-4 text-white/60" />
          </div>
        </div>

        {/* Info */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-base font-semibold text-[#fafafa]">
              {template.name}
            </h3>
            <span className="text-xs text-white/30 font-mono">live</span>
          </div>
          <p className="mt-1 text-sm text-white/50">{template.description}</p>
        </div>
      </a>
    </motion.div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#fafafa] font-body">
      {/* Header */}
      <header className="px-6 pt-16 pb-10 max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl sm:text-5xl font-bold tracking-tight"
        >
          notabhay-ui
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-base sm:text-lg text-white/50 max-w-xl mx-auto leading-relaxed"
        >
          9 opinionated UI templates. Same components, same data, 9 radically
          different presentations.
        </motion.p>
      </header>

      {/* Grid */}
      <main className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template, i) => (
            <TemplateCard
              key={template.slug}
              template={template}
              index={i}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="px-6 pb-10 text-center">
        <p className="text-xs text-white/25">
          Built with shadcn/ui + Tailwind v4 + Vite + React 19
        </p>
      </footer>
    </div>
  );
}
