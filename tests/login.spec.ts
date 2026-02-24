import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

const USERNAME = process.env.APP_USERNAME;
const PASSWORD = process.env.APP_PASSWORD;

if (!USERNAME || !PASSWORD) {
  throw new Error('APP_USERNAME/APP_PASSWORD not set. Please set them in your .env file.');
}

test.describe('Login', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Test Case 1: Successful login', async ({ page }) => {
    await loginPage.login(USERNAME, PASSWORD);

    await expect(page).toHaveURL(/\/secure$/);
    await loginPage.expectFlashToContain('You logged into a secure area!');
    await expect(page.getByRole('link', { name: /logout/i })).toBeVisible();
  });

  test('Test Case 2: Login with invalid username', async () => {
    await loginPage.login('invalidUser', PASSWORD);

    await loginPage.expectStillOnLogin();
    await loginPage.expectFlashToContain('Your username is invalid!');
  });

  test('Test Case 3: Login with invalid password', async () => {
    await loginPage.login(USERNAME, 'WrongPassword!');

    await loginPage.expectStillOnLogin();
    await loginPage.expectFlashToContain('Your password is invalid!');
  });
});