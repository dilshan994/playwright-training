import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
     await page.goto('');
});

test.describe('OrangeHRM XPath Selector Practice', () => {
    test('verify login using XPath selectors', async ({ page }) => {
        await page.locator('//input[@name="username"]').fill('Admin');
        await page.locator('//input[@name="password"]').fill('admin123');
        await page.locator('//button[@type="submit"]').click();

        await expect(page).toHaveURL(/dashboard/);

    });
});

test.describe('Login functionality : invalid username and invalid password', () => {
    test('verify login with invalid username and invalid password', async ({ page }) => {
        test.slow();
        await page.locator('//input[@name="username"]').fill('invalid_user');

    });
});
test.describe('Login functionality : empty username and valid password', () => {
    test('verify login with empty username and valid password', async ({ page }) => {
        await page.locator('//input[@name="password"]').fill('admin123');
        await page.locator('//button[@type="submit"]').click();

        await expect(page.getByText('Required')).toBeVisible();
    });
});

test.describe('Login functionality : valid username and empty password', () => {
    test('verify login with valid username and empty password', async ({ page }) => {
        await page.locator('//input[@name="username"]').fill('Admin');
        await page.locator('//button[@type="submit"]').click();
        await expect(page.getByText('Required')).toBeVisible();
    });
});

test.describe('Login functionality : empty username and empty password', () => {
    test('verify login with empty username and empty password', async ({ page }) => {
        await page.locator('//button[@type="submit"]').click();

        await expect(page.getByText('Required')).toHaveCount(2);
    });
});

test.describe('Login functionality:verify password is masked', () => {
    test('verify password is masked', async ({ page }) => {
        const passwordInput = page.locator('//input[@name="password"]');
        await expect(passwordInput).toHaveAttribute('type', 'password');
    });
});
