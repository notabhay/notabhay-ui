import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import type { Plugin } from "vite";

const templateSrcDir = path.resolve(__dirname, "./src");
const uiSrcDir = path.resolve(__dirname, "../../packages/ui/src");

/**
 * Resolves @/ imports context-aware: files inside packages/ui use ui's src,
 * files inside this template use the template's src.
 */
function contextAwareAliasPlugin(): Plugin {
  return {
    name: "context-aware-alias",
    enforce: "pre",
    resolveId(source, importer) {
      if (!source.startsWith("@/")) return null;
      if (!importer) return null;

      const normalizedImporter = importer.replace(/\\/g, "/");
      const relativePart = source.slice(2);

      // If the importer is inside packages/ui, resolve to ui's src dir
      if (normalizedImporter.includes("/packages/ui/")) {
        const resolved = path.resolve(uiSrcDir, relativePart);
        return this.resolve(resolved, importer, { skipSelf: true });
      }

      // Otherwise resolve to the template's src dir
      const resolved = path.resolve(templateSrcDir, relativePart);
      return this.resolve(resolved, importer, { skipSelf: true });
    },
  };
}

export default defineConfig({
  plugins: [contextAwareAliasPlugin(), react(), tailwindcss()],
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
  build: {
    outDir: "dist",
  },
});
