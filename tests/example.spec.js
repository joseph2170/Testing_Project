const { test } = require('@playwright/test');

test('Amazon language selection', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  await page.waitForTimeout(5000);

  await page.locator('#icp-nav-flyout').click();

  await page.waitForTimeout(3000);

  // Select Tamil language
  await page.getByText('தமிழ்').click();

  console.log("Tamil language selected successfully");

  await page.waitForTimeout(5000);

});