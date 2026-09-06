import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 await expect(page.locator('form')).toContainText('Username');
 await page.getByRole('textbox', { name: 'Username' }).click();
 await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
 await page.getByRole('textbox', { name: 'Username' }).fill('admin');
 
  await expect(page.locator('form')).toContainText('Password');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  
  await page.getByRole('button', { name: 'Login' }).click();

});