import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/');
  await page.goto('https://develop.d39yyvlacx19xd.amplifyapp.com/login');
  await page.locator('.userNameBar > .px-2').click();
  await page.getByRole('link', { name: 'View Profile' }).click();
  await page.getByText('My Strategies').click();
  await page.getByText('Manage Subscription').click();
  await page.getByText('Change Password').click();
  await page.locator('div').filter({ hasText: /^Refer & Earn$/ }).click();
  await page.getByText('Ready for a break?').click();
  await page.getByRole('button', { name: 'Log out' }).click();
});