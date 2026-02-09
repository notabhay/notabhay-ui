import { defineConfig, devices } from "@playwright/test";

const apps = [
  { name: "showcase", cwd: "apps/showcase", port: 3000 },
  { name: "void", cwd: "templates/void", port: 3001 },
  { name: "neon", cwd: "templates/neon", port: 3002 },
  { name: "brutalist", cwd: "templates/brutalist", port: 3003 },
  { name: "bloom", cwd: "templates/bloom", port: 3004 },
  { name: "editorial", cwd: "templates/editorial", port: 3005 },
  { name: "glass", cwd: "templates/glass", port: 3006 },
  { name: "swiss", cwd: "templates/swiss", port: 3007 },
  { name: "ember", cwd: "templates/ember", port: 3008 },
  { name: "candy", cwd: "templates/candy", port: 3009 },
];

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 90_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  workers: process.env.CI ? 2 : undefined,
  reporter: [["list"], ["html", { outputFolder: "playwright-report", open: "never" }]],
  snapshotPathTemplate:
    "{testDir}/__screenshots__/{projectName}/{testFilePath}/{arg}{ext}",
  use: {
    baseURL: "http://localhost:3000",
    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "off",
  },
  projects: [
    {
      name: "chromium-desktop",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "chromium-mobile",
      use: {
        ...devices["iPhone 13"],
      },
    },
  ],
  webServer: apps.map((app) => ({
    command: `bun run --cwd ${app.cwd} dev`,
    url: `http://localhost:${app.port}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    stdout: "pipe",
    stderr: "pipe",
    name: app.name,
  })),
});
