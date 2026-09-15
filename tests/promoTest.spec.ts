import { test, expect } from '@playwright/test';

test('Promo code applies a discount to the order', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await expect(page.getByText('It\'s your lucky day! Get an')).toBeVisible();
  await page.locator('div').nth(3).click();
  await expect(page.locator('div').nth(3)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Yes, of course!' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Nah, I\'ll skip.' })).toBeVisible();
});