import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/');
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'name@host.com' }).click();
  await page.getByRole('textbox', { name: 'name@host.com' }).fill('neha@echortech.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Neha@2000');
  await page.getByRole('button', { name: 'submit' }).click();
  await page.getByText('Templates', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Saved$/ }).click();
  await page.locator('div').filter({ hasText: /^Strategy BuilderSavedTemplates$/ }).locator('img').click();
  await page.locator('div').filter({ hasText: /^Binance$/ }).getByRole('img').click();
  await page.getByText('HTX').first().click();
  await page.locator('div').filter({ hasText: /^BTCUSDT$/ }).nth(3).click();
  await page.locator('.search > div:nth-child(2)').click();
  await page.getByPlaceholder('Select a date').first().click();
  await page.getByLabel('Choose Monday, January 9th,').click();
  await page.getByPlaceholder('Select a date').nth(1).click();
  await page.getByLabel('Choose Tuesday, December 12th,').click();
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login/');
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login');
});