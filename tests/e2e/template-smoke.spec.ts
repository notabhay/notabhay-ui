import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";
import { templateTargets } from "./targets";

const routes = ["/", "/dashboard", "/components", "/login", "/signup"];

for (const target of templateTargets) {
  test.describe(`${target.slug} smoke`, () => {
    for (const route of routes) {
      test(`renders ${route}`, async ({ page }) => {
        await page.goto(`http://localhost:${target.port}${route}`);
        await expect(page.locator("#root")).toBeVisible();
        await expect(page.locator("main").first()).toBeVisible();
      });
    }

    test("mobile menu toggles", async ({ page, isMobile }) => {
      test.skip(!isMobile, "Mobile-only assertion");

      await page.goto(`http://localhost:${target.port}/`);

      const menuButton = page
        .locator("button")
        .filter({ hasText: /menu/i })
        .or(page.getByLabel(/open menu|close menu|toggle menu/i))
        .first();

      await expect(menuButton).toBeVisible();
      await menuButton.click();
      await expect(menuButton).toBeVisible();
    });

    test("theme toggle persists after reload", async ({ page }) => {
      await page.goto(`http://localhost:${target.port}/`);

      const themeToggle = page.getByRole("button", { name: /toggle theme/i }).first();
      await expect(themeToggle).toBeVisible();

      const before = await page.evaluate(() =>
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );

      await themeToggle.click();
      await page.waitForTimeout(100);

      const after = await page.evaluate(() =>
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );

      expect(after).not.toBe(before);
      await page.reload();

      const persisted = await page.evaluate(() =>
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );

      expect(persisted).toBe(after);
    });

    test("no critical accessibility violations on home", async ({ page }) => {
      await page.goto(`http://localhost:${target.port}/`);

      const results = await new AxeBuilder({ page }).analyze();
      const criticalViolations = results.violations.filter(
        (violation) => violation.impact === "critical"
      );

      expect(criticalViolations, JSON.stringify(criticalViolations, null, 2)).toEqual([]);
    });
  });
}
