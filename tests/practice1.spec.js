
import { test } from '@playwright/test';
test('Kids Menu', async ({ page }) => {
  await page.goto('https://www.myntra.com');
  await page.locator("(//a[text()='Kids'])[1]").click();
  await page.waitForTimeout(5000);
  await page.locator("//a[@href='/boy-tshirts']").click();
  await page.waitForTimeout(5000);
  const products = page.locator("//li[contains(@class,'product-base')]");
  const count = await products.count();
  console.log("Total Products:", count);
});         