import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateSrc = path.resolve(__dirname, "./src");
const uiSrc = path.resolve(__dirname, "../../packages/ui/src");

function tryResolve(base: string, target: string): string | null {
  const full = path.resolve(base, target);
  const extensions = ["", ".ts", ".tsx", ".js", ".jsx"];
  for (const ext of extensions) {
    const candidate = full + ext;
    if (fs.existsSync(candidate)) return candidate;
  }
  // Try index files
  for (const ext of extensions) {
    const candidate = path.join(full, "index" + ext);
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

export default defineConfig({
  plugins: [
    {
      name: "resolve-at-alias",
      enforce: "pre",
      resolveId(source, importer) {
        if (!source.startsWith("@/") || !importer) return null;
        const relative = source.slice(2);
        // If the importer is within packages/ui, resolve @/ relative to packages/ui/src
        if (importer.includes("packages/ui")) {
          return tryResolve(uiSrc, relative);
        }
        // Otherwise resolve to the template's src
        return tryResolve(templateSrc, relative);
      },
    },
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
  },
  build: {
    outDir: "dist",
  },
});
