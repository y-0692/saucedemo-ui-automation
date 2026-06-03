import { test, expect } from '../fixtures/baseTest';

test('Login with valid credentials', async ({ page, loginPage }) => {
  

  await loginPage.navigate();
  
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
  await expect(page.locator('.title')).toHaveText('Products');
});