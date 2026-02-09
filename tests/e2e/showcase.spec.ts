import { expect, test } from "@playwright/test";

test.describe("showcase", () => {
  test("renders heading and nine template cards", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await expect(page.getByRole("heading", { name: "notabhay-ui" })).toBeVisible();
    await expect(page.getByRole("link")).toHaveCount(9);
  });

  test("cards use live deployed previews and external links", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await expect(page.getByRole("button", { name: /open live preview/i })).toHaveCount(0);
    await expect(page.getByText("Start the template's dev server first for live preview.")).toHaveCount(0);
    await expect(page.locator("iframe")).toHaveCount(9);

    const links = page.getByRole("link");
    for (let i = 0; i < 9; i += 1) {
      const link = links.nth(i);
      await expect(link).toHaveAttribute("target", "_blank");
      await expect(link).toHaveAttribute("href", /^https:\/\/notabhay-ui-preview-[a-z]+\.vercel\.app\/?$/);
      await expect(link).not.toHaveAttribute("href", /localhost/);
    }

    const previewFrames = page.locator("iframe");
    for (let i = 0; i < 9; i += 1) {
      await expect(previewFrames.nth(i)).toHaveAttribute(
        "src",
        /^https:\/\/notabhay-ui-preview-[a-z]+\.vercel\.app\/?$/
      );
    }
  });
});
