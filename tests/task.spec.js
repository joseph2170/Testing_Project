import { test } from '@playwright/test'

test('multi file upload', async ({ page }) => {

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")

    await page.setInputFiles('#filesToUpload', [
        'tests/task.spec.js',
        'tests/js_alert.spec.js'
    ])

    await page.waitForTimeout(4000)

})