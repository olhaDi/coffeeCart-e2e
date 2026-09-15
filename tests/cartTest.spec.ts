import { test, expect } from '@playwright/test';

const product = "Espresso";
const productPrice = "10.00";

test('Product is added to the cart', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator(`[data-test="${product}"]`).click();
  await page.getByRole('heading', { name: 'Espresso $' }).click();
  await expect(page.locator('[data-test="checkout"]')).toBeVisible();
  await expect(page.locator('[data-test="checkout"]')).toContainText(productPrice);
});