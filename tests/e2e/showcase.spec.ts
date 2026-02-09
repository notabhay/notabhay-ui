import { expect, test } from "@playwright/test";

test.describe("showcase", () => {
  test("renders heading and nine template cards", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await expect(page.getByRole("heading", { name: "notabhay-ui" })).toBeVisible();
    await expect(page.getByRole("link")).toHaveCount(9);
  });

  test("live preview toggle can open and close", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const previewButton = page.getByRole("button", { name: /open live preview/i }).first();
    await previewButton.click();
    await expect(page.getByText("Start the template's dev server first for live preview.")).toBeVisible();

    await page.getByRole("button", { name: /close live preview/i }).first().click();
    await expect(page.getByText("Start the template's dev server first for live preview.")).not.toBeVisible();
  });
});
