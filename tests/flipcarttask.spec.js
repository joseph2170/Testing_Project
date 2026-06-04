import { test } from '@playwright/test';
test('Flipkart Menu', async ({ page }) => {
  await page.goto('https://www.flipkart.com');
  const menus = page.locator("//a/descendant::div[@dir='auto']");
  const Menu = await menus.allTextContents();
  console.log(Menu);
});