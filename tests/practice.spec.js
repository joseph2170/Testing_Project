// import { test } from '@playwright/test';

// test('Amazon Search', async ({ page }) => {

//   await page.goto('https://www.amazon.in');

//   // CSS locator
//   await page.locator('#searchDropdownDescription').click();
  

//   // XPath locator
//   await page.locator('//input[@id="nav-search-submit-button"]')
//   .click();

// });

import { test } from '@playwright/test';

test('Highlight Element', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  const searchBox = page.locator('#twotabsearchtextbox');

  // Highlight element
  await searchBox.highlight();

  // Click element
  await searchBox.click();

});