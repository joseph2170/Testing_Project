

import { test } from '@playwright/test';

test('Amazon screen recording', async ({ browser }) => {

    // Create browser context with video recording
    const context1 = await browser.newContext({

        recordVideo: {
            dir: 'recordVideo/'
        }

    });

    // Open new page
    const page1 = await context1.newPage();

    // Open Amazon
    await page1.goto('https://www.amazon.in');
    });
    