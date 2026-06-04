// const { test } = require('@playwright/test');

// test('Prompt Alert Handling', async ({ page }) => {

//   // Open website
//   await page.goto('https://demoqa.com/alerts');

//   // Handle prompt alert
//   page.on('dialog', async dialog => {

//     console.log(dialog.type());
//     console.log(dialog.message());

//     // Wait 5 seconds to see alert
//     await page.waitForTimeout(5000);

//     if (dialog.type() === 'confirm') {

//       await dialog.accept();
//       console.log("Accepted");

//     } 
//     else if (dialog.type() === 'prompt') {

//       await dialog.accept('Joseph');
//       console.log("Prompt Accepted");

//     }

//   });

//   // Click prompt button
//   await page.locator('#promtButton').click();

//   // Wait
//   await page.waitForTimeout(3000);

// });

import { test } from '@playwright/test';

test('Amazon Delete Address Alert', async ({ page }) => {

  await page.goto('https://www.amazon.in');

  page.on('dialog', async dialog => {

    console.log('Alert Type:', dialog.type());

    console.log('Alert Message:', dialog.message());

    await dialog.accept();
  });

  // Example delete button
  await page.click('#deleteAddress');

});