import { expect, test } from "@playwright/test";

test.describe("Landing", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("hero + основные секции отрисованы", async ({ page }) => {
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    for (const id of [
      "solutions",
      "benefits",
      "cases",
      "about",
      "faq",
      "contact",
      "blog",
      "newsletter",
    ]) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }
  });

  test("FAQ раскрывается по клику", async ({ page }) => {
    const firstHeader = page.locator("#faq .ant-collapse-header").first();
    await firstHeader.scrollIntoViewIfNeeded();
    await firstHeader.click();
    await expect(page.locator("#faq .ant-collapse-content-active").first()).toBeVisible();
  });

  test("newsletter: валидация и успешная подписка", async ({ page }) => {
    const form = page.getByRole("form", { name: "Подписка на рассылку" });
    await form.scrollIntoViewIfNeeded();
    const email = form.getByLabel("Email");
    const submit = form.getByRole("button", { name: "Подписаться" });

    await email.fill("not-an-email");
    await submit.click();
    await expect(form.getByText("Некорректный email")).toBeVisible();

    await email.fill("lawyer@example.com");
    await submit.click();
    await expect(page.getByText("Спасибо! Мы добавили вас в рассылку.")).toBeVisible();
  });

  test("переключатель темы меняет html.class", async ({ page }) => {
    const html = page.locator("html");
    const toggle = page.getByRole("button", { name: /тёмную тему|светлую тему/ });
    const before = await html.getAttribute("class");
    await toggle.click();
    await expect.poll(async () => await html.getAttribute("class")).not.toEqual(before);
  });
});
