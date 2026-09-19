import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

interface LoginData {
  username: string;
  password: string;
  expectedError: string;
}

const csvPath = path.join(
  process.cwd(),
  'test-data',
  'orangehrm-negative-login.csv'
);

const csvFile = fs.readFileSync(csvPath, 'utf-8');

const testData: LoginData[] = parse(csvFile, {
  columns: true,
  skip_empty_lines: true,
});

for(const data of testData){
    test(`Negative login - ${data.username || 'empty username'} - ${data.password || 'empty password'}`, async ({ page }) => {
        await page.goto('');

        await page.getByPlaceholder('Username').fill(data.username);
        await page.getByPlaceholder('Password').fill(data.password);

        await page.getByRole('button', { name: 'Login' }).click();

        if (data.expectedError === 'Required') {
            await expect(page.getByText('Required').first()).toBeVisible();
            } else {
                await expect(page.getByText(data.expectedError)).toBeVisible();
}
});
   
}
