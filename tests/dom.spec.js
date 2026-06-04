import { test, expect } from '@playwright/test';

test('Amazon DOM Popup', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  await page.click('#addToCart');

  const popup = page.locator('#cartPopup');

  await expect(popup).toBeVisible();

});