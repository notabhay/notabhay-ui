import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

function manualChunks(id: string): string | undefined {
  if (!id.includes("node_modules")) return undefined;

  if (
    id.includes("react/") ||
    id.includes("react-dom") ||
    id.includes("react-router") ||
    id.includes("scheduler")
  ) {
    return "vendor-react";
  }

  if (
    id.includes("motion") ||
    id.includes("lucide-react") ||
    id.includes("@radix-ui") ||
    id.includes("class-variance-authority") ||
    id.includes("clsx") ||
    id.includes("tailwind-merge") ||
    id.includes("sonner") ||
    id.includes("cmdk")
  ) {
    return "vendor-ui";
  }

  return "vendor-misc";
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3007,
  },
  preview: {
    port: 3007,
  },
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 350,
    rollupOptions: {
      output: {
        manualChunks,
      },
    },
  },
});
