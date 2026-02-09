import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["packages/ui/src/**/*.test.ts", "packages/ui/src/**/*.test.tsx"],
    coverage: {
      enabled: false,
    },
  },
});
