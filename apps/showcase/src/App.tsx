import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, X, Monitor } from "lucide-react";

interface Template {
  slug: string;
  name: string;
  description: string;
  port: number;
  background: string;
  primary: string;
}

const templates: Template[] = [
  {
    slug: "void",
    name: "Void",
    description: "Minimal Dark",
    port: 3001,
    background: "oklch(0.145 0 0)",
    primary: "oklch(0.623 0.214 259.1)",
  },
  {
    slug: "neon",
    name: "Neon",
    description: "Cyberpunk/Terminal",
    port: 3002,
    background: "oklch(0.16 0.015 284)",
    primary: "oklch(0.789 0.154 194.8)",
  },
  {
    slug: "brutalist",
    name: "Brutalist",
    description: "Raw/Industrial",
    port: 3003,
    background: "oklch(0.22 0 0)",
    primary: "oklch(0.577 0.245 27.3)",
  },
  {
    slug: "bloom",
    name: "Bloom",
    description: "Soft/Organic",
    port: 3004,
    background: "oklch(0.2 0.012 340)",
    primary: "oklch(0.718 0.18 349)",
  },
  {
    slug: "editorial",
    name: "Editorial",
    description: "Print/Magazine",
    port: 3005,
    background: "oklch(0.216 0.006 56)",
    primary: "oklch(0.714 0.185 305)",
  },
  {
    slug: "glass",
    name: "Glass",
    description: "Glassmorphism",
    port: 3006,
    background: "oklch(0.178 0.029 284)",
    primary: "oklch(0.672 0.176 277)",
  },
  {
    slug: "swiss",
    name: "Swiss",
    description: "International/Grid",
    port: 3007,
    background: "oklch(0.175 0 0)",
    primary: "oklch(0.628 0.258 29.2)",
  },
  {
    slug: "ember",
    name: "Ember",
    description: "Dark Luxury",
    port: 3008,
    background: "oklch(0.145 0.005 286)",
    primary: "oklch(0.756 0.088 72)",
  },
  {
    slug: "candy",
    name: "Candy",
    description: "Playful/Bold",
    port: 3009,
    background: "oklch(0.19 0.04 300)",
    primary: "oklch(0.627 0.265 303.9)",
  },
];

function TemplateCard({
  template,
  index,
  activePreview,
  onTogglePreview,
}: {
  template: Template;
  index: number;
  activePreview: string | null;
  onTogglePreview: (slug: string) => void;
}) {
  const isPreviewActive = activePreview === template.slug;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative"
    >
      <a
        href={`http://localhost:${template.port}`}
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
          {isPreviewActive ? (
            <iframe
              src={`http://localhost:${template.port}`}
              title={`${template.name} preview`}
              loading="lazy"
              className="absolute inset-0 w-full h-full border-0 pointer-events-none"
              style={{ transform: "scale(0.5)", transformOrigin: "top left", width: "200%", height: "200%" }}
            />
          ) : (
            <>
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `radial-gradient(ellipse at 70% 50%, ${template.primary}, transparent 70%)`,
                }}
              />
              <div
                className="absolute bottom-3 right-3 w-8 h-8 rounded-md"
                style={{ backgroundColor: template.primary }}
              />
              <div
                className="absolute bottom-3 right-14 w-16 h-2 rounded-full opacity-40"
                style={{ backgroundColor: template.primary }}
              />
              <div className="absolute bottom-7 right-14 w-10 h-2 rounded-full opacity-20 bg-white" />
            </>
          )}
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
            <span className="text-xs text-white/30 font-mono">:{template.port}</span>
          </div>
          <p className="mt-1 text-sm text-white/50">{template.description}</p>
        </div>
      </a>

      {/* Live preview toggle */}
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onTogglePreview(template.slug);
        }}
        className="absolute top-2 left-2 z-10 flex items-center gap-1 rounded-md bg-black/60 backdrop-blur-sm px-2 py-1 text-[10px] text-white/60 hover:text-white/90 hover:bg-black/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
        aria-label={isPreviewActive ? "Close live preview" : "Open live preview"}
      >
        {isPreviewActive ? (
          <>
            <X className="w-3 h-3" />
            Close
          </>
        ) : (
          <>
            <Monitor className="w-3 h-3" />
            Preview
          </>
        )}
      </button>
    </motion.div>
  );
}

export default function App() {
  const [activePreview, setActivePreview] = useState<string | null>(null);

  function handleTogglePreview(slug: string) {
    setActivePreview((prev) => (prev === slug ? null : slug));
  }

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

        <AnimatePresence>
          {activePreview && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 text-xs text-white/30"
            >
              Start the template&apos;s dev server first for live preview.
            </motion.p>
          )}
        </AnimatePresence>
      </header>

      {/* Grid */}
      <main className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {templates.map((template, i) => (
            <TemplateCard
              key={template.slug}
              template={template}
              index={i}
              activePreview={activePreview}
              onTogglePreview={handleTogglePreview}
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
