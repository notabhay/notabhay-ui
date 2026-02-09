import { expect, test } from "@playwright/test";
import { templateTargets } from "./targets";

async function stabilizePage(page: import("@playwright/test").Page): Promise<void> {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
    `,
  });
  await page.waitForLoadState("networkidle");
  await page.evaluate(async () => {
    if ("fonts" in document) {
      await (document as Document & { fonts: { ready: Promise<unknown> } }).fonts.ready;
    }
  });
  await page.waitForTimeout(300);
}

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
});

for (const target of templateTargets) {
  test.describe(`${target.slug} visual`, () => {
    test("home dark/light snapshots", async ({ page }) => {
      await page.goto(`http://localhost:${target.port}/`);
      await stabilizePage(page);
      await expect(page).toHaveScreenshot(`${target.slug}-home-dark.png`, {
        fullPage: true,
      });

      const themeToggle = page.getByRole("button", { name: /toggle theme/i }).first();
      await themeToggle.click();
      await stabilizePage(page);

      await expect(page).toHaveScreenshot(`${target.slug}-home-light.png`, {
        fullPage: true,
      });
    });

    test("dashboard snapshot", async ({ page }) => {
      await page.goto(`http://localhost:${target.port}/dashboard`);
      await stabilizePage(page);
      await expect(page).toHaveScreenshot(`${target.slug}-dashboard.png`, {
        fullPage: true,
      });
    });
  });
}
