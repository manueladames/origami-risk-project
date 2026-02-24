import { test } from '@playwright/test';
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

  test('Test Case 1: Successful login', async () => {
    await loginPage.login(USERNAME, PASSWORD);
    await loginPage.expectSuccessfulLogin();
  });

  test('Test Case 2: Login with invalid username', async () => {
    await loginPage.login('invalidUser', PASSWORD);
    await loginPage.expectInvalidUsernameError();
  });

  test('Test Case 3: Login with invalid password', async () => {
    await loginPage.login(USERNAME, 'WrongPassword!');
    await loginPage.expectInvalidPasswordError();
  });
});