import { test, expect } from '@playwright/test';

test('Discounted Mocha is added after accepting the promo offer', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.locator('[data-test="Cappuccino"]').click();
  await page.getByText('It\'s your lucky day! Get an').click();
  await expect(page.getByText('It\'s your lucky day! Get an')).toBeVisible();
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.getByText('(Discounted) Mocha$4.00 x 1')).toBeVisible();
});