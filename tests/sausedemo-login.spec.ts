import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
    await page.goto('./');
    
});

test('Login sausedemo', async ({ page }) => {
    await page.goto('./');
})

test.describe('Login functionality : Valid scenario', () => {
    test.skip('login with valid credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('password').fill('secret_sauce');
    await page.getByRole('button', { name:'Login'}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');  
  });
});

test.describe('Login functionality : Invalid scenario', () => {
    test('verify login with invalid username and valid password', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('invalid_user');
    await page.getByPlaceholder('password').fill('secret_sauce');
    await page.getByRole('button', { name:'Login'}).click();

    await  expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

});
});

test.describe('Login functionality : valid username and invalid password ', () => {
    test('verify login with valid username and invalid password', async ({ page })=>{
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('password').fill('invalid_password');
    await page.getByRole('button', { name:'Login'}).click();

    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

});
});

test.describe('Login functionality : Empty username and password', () => {
    test('verify login with Invalid username and invalid password', async ({ page })=>{
    await page.getByPlaceholder('Username').fill('invalid_user');
    await page.getByPlaceholder('password').fill('invalid_password');
    await page.getByRole('button', { name:'Login'}).click();

    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();

});
});

test.describe('Login functionality : Empty username and password', () => {
    test('verify login with empty username and valid password', async ({ page }) =>{
    await page.getByPlaceholder('password').fill('secret_sauce');
    await page.getByRole('button', { name:'Login'}).click();

    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});
});

test.describe('Login functionality : Empty username and password', () => {
    test('verify login with valid username and emprty password', async ({ page }) =>{
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByRole('button', { name:'Login'}).click();
   

    await expect(page.getByText('Epic sadface: Password is required')).toBeVisible();
});
});


test.describe('Login functionality : Empty username and emptypassword', () => {
    test('verify login with empty username and emprty password', async ({ page }) =>{
    await page.getByRole('button', { name:'Login'}).click();

    await expect(page.getByText('Epic sadface: Username is required')).toBeVisible();
});
});

test.describe('Login functionality : Locked out user', () => {
    test('verify password field is masked', async ({ page }) =>{
     const passwordfield  =page.getByPlaceholder('password');
     await passwordfield.fill('secret_sauce');

     await expect(passwordfield).toHaveAttribute('type','password');     
});
});

