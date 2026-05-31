import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Login with locked user', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.login('locked_out_user', 'secret_sauce');

  await expect(
    page.locator('[data-test="error"]')
  ).toContainText('locked out');
});