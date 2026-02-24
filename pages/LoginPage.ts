import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;
  readonly logoutLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.locator('#username');
    this.password = page.locator('#password');
    this.loginButton = page.locator('button[type="submit"]');
    this.flashMessage = page.locator('#flash');
    this.logoutLink = page.getByRole('link', { name: /logout/i });
  }

  async goto() {
    await this.page.goto('/login', { waitUntil: 'domcontentloaded', timeout: 60000 });
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);

    await this.loginButton.scrollIntoViewIfNeeded();
    await this.loginButton.click({ timeout: 15000 });
  }


  async expectOnLoginPage() {
    await expect(this.page).toHaveURL(/\/login$/);
  }

  async expectOnSecurePage() {
    await expect(this.page).toHaveURL(/\/secure$/);
  }

  async expectFlashToContain(text: string) {
    await expect(this.flashMessage).toBeVisible();
    await expect(this.flashMessage).toContainText(text);
  }

  async expectSuccessfulLogin() {
    await this.expectOnSecurePage();
    await this.expectFlashToContain('You logged into a secure area!');
    await expect(this.logoutLink).toBeVisible();
  }

  async expectInvalidUsernameError() {
    await this.expectOnLoginPage();
    await this.expectFlashToContain('Your username is invalid!');
  }

  async expectInvalidPasswordError() {
    await this.expectOnLoginPage();
    await this.expectFlashToContain('Your password is invalid!');
  }
}
