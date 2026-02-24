import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env
dotenv.config();

// Validate required environment variables
if (!process.env.BASE_URL) {
  throw new Error(
    'BASE_URL is not defined. Please create a .env file and set BASE_URL.'
  );
}

export default defineConfig({
  testDir: './tests',

  // Parallel & CI settings
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // Reporter
  reporter: 'html',

  // Shared settings
  use: {
    baseURL: process.env.BASE_URL,
    headless: false, // change to true if you prefer
    trace: 'on-first-retry',
  },

  // Browser projects
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});