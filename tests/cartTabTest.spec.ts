import { test, expect } from '@playwright/test';

const product = "Espresso";
const price = "$10.00";

test('Product is visible on Cart tab', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.getByText('No coffee, go add some.')).toBeVisible();
  await page.getByRole('link', { name: 'Menu page' }).click();
  await page.locator(`[data-test="${product}"]`).click();
  await page.locator('[data-test="checkout"]').click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await expect(page.getByText(`${product}${price} x 1+-$10.00x`)).toBeVisible();
});