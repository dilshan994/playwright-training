import fs from 'fs';
import path from 'path';
import { test } from '@playwright/test';
import { parse } from 'csv-parse/sync';

type CsvRecord = {
  username: string;
  password: string;
  expectedError: string;
};

const records = parse(
  fs.readFileSync(path.join(__dirname, 'input.csv')),
  {
    columns: true,
    skip_empty_lines: true,
  }
) as CsvRecord[];

for (const [index, record] of records.entries()) {
  const testCase = record.username ?? `case-${index + 1}`;

  test(`foo: ${testCase}`, async ({ page }) => {
    console.log(testCase, record.username, record.password);
  });
}