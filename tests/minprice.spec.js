import { test } from '@playwright/test';

test('Minimum Price', async ({ page }) => {

  await page.goto('https://www.myntra.com');

  await page.locator("(//a[text()='Kids'])[1]").click();

  await page.locator("//a[@href='/boy-tshirts']").click();

  await page.waitForTimeout(5000);

  const prices = page.locator(
    "//span[contains(@class,'product-discountedPrice')]"
  );

  const count = await prices.count();

  let min = Infinity;

  for(let i = 0; i < count; i++) {

    const text = await prices.nth(i).textContent();

    const price = parseInt(
      text.replace("Rs. ", "")
    );

    if(price < min) {
      min = price;
    }
  }
  console.log("Minimum Price:", min);

});