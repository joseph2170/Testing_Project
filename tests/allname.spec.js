import { test } from '@playwright/test';

test('Kids Menu', async ({ page }) => {

  await page.goto('https://www.myntra.com');

  // Hover on Kids
  await page.locator("(//a[text()='Kids'])[1]").hover();

  await page.waitForTimeout(3000);

  // Click T-Shirts
  await page.locator("//a[@href='/boy-tshirts']").click();

  await page.waitForTimeout(5000);

  const products = page.locator(
    "//li[contains(@class,'product-base')]"
  );

  const count = await products.count();

  console.log("Total Products:", count);

  for(let i = 0; i < count; i++) {

    const name = await products.nth(i)
      .locator("xpath=.//h4[contains(@class,'product-product')]")
      .textContent();

    let finalPrice = "Price Not Available";

    try {

      const price = await products.nth(i)
        .locator("xpath=.//span[contains(@class,'product-discountedPrice') or contains(@class,'product-price')]")
        .first()
        .textContent({ timeout: 2000 });

      finalPrice = price.replace("Rs. ", "");

    } catch(error) {

      console.log("Price missing for product:", i + 1);

    }

    console.log("Product:", i + 1);
    console.log("Name:", name);
    console.log("Price:", finalPrice);
  }

});