import { test, expect } from '@playwright/test';

test('Navigate to Docs', async ({ page }) => {

  // Step 1 - Open Playwright website
  await page.goto('https://playwright.dev/');

  // Step 2 - Click Docs
  await page.getByRole('link', { name: 'Docs' }).click();

  // Step 3 - Verify navigation
  await expect(page).toHaveURL(/.*docs/);

  
  

});