import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('invalid_user', 'wrong_password');

  await expect(
    page.locator('[data-test="error"]')
  ).toBeVisible();
});