import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('');
});

test.describe('Login functionality : Valid scenario ', () => {
    test('verify login with valid credentials', async ({ page }) => {
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');  
    });
});

//HomeWork adding annotation to the test case
test('Login functionality : Invalid Username', {
  annotation: {
    type: 'Login',
    description: 'verify login with invalid username and valid password'
  }
}, async ({ page }) => {
    await page.getByPlaceholder('Username').fill('invalid_user');
    await page.getByPlaceholder('password').fill('admin123');
    await page.getByRole('button', { name:'Login'}).click(); 

    await expect(page.getByText('Invalid credentials')).toBeVisible();
    });


test.describe('Login functionality : Invalid password', () => {
   //HomeWork adding annotation to the test case 

    test.skip('Login functionality : valid username and invalid password', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('password').fill('Invalid_password');
    await page.getByRole('button', { name:'Login'}).click(); 

    await expect(page.getByText('Invalid credentials')).toBeVisible();
    });
});

test.describe('Login functionality : invalid username and invalid password', () => {

    //HomeWork adding annotation to the test case
    test.slow();

    test('verify login with Invalid username and invalid password', async ({ page })=>{
    await page.getByPlaceholder('Username').fill('invalid_user');
    await page.getByPlaceholder('password').fill('invalid_password');
    await page.getByRole('button', { name:'Login'}).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();

});
});

test.describe('Login functionality : Empty username and valid password', () => {
    test('verify login with empty username and valid password', async ({ page }) =>{
    await page.getByPlaceholder('password').fill('admin123');
    await page.getByRole('button', { name:'Login'}).click();

    await expect(page.getByText('Required')).toBeVisible();
});
});

test.describe('Login functionality : valid username and empty password', () => {
    test('verify login with valid username and emprty password', async ({ page }) =>{
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByRole('button', { name:'Login'}).click();
   
    await expect(page.getByText('Required')).toBeVisible();
});
});

test.describe('Login functionality : Empty username and emptypassword', () => {
    test('verify login with empty username and emprty password', async ({ page }) =>{
    await page.getByRole('button', { name:'Login'}).click();

    await expect(page.getByText('Required')).toHaveCount(2);
});
});

test.describe('Login functionality : Password field is masked', () => {
    test('verify password field is masked', async ({ page }) => {
        const passwordField = page.getByPlaceholder('Password');
        await passwordField.fill('admin123');

        await expect(passwordField).toHaveAttribute('type', 'password',{timeout:60000});
    });
});
