const { test } = require('@playwright/test');

test('Amazon language selection', async ({ page }) => {

  // Open Amazon
  await page.goto('https://www.amazon.in');

  // Wait for page load
  await page.waitForTimeout(5000);

  // Click language menu
  await page.locator('#icp-nav-flyout').click();

  // Wait for popup
  await page.waitForTimeout(3000);

  // Click Tamil language
  await page.locator("span:text('தமிழ்')").click();

  // Wait
  await page.waitForTimeout(5000);

});