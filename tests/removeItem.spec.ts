import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('Remove item from cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);

  await loginPage.navigate();
  await loginPage.login('standard_user', 'secret_sauce');

  // Add item
  await inventoryPage.addBackpackToCart();

  // Remove item
  await inventoryPage.removeBackpackFromCart();

  // Verify Add to Cart button is visible again
  await expect(
    page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
  ).toBeVisible();

});