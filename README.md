#Playwright Login Automation – Origami Risk Assignment
Overview

This project contains automated end-to-end tests for the login functionality of:

https://the-internet.herokuapp.com/login

The tests are implemented using Playwright with TypeScript and follow the Page Object Model (POM) design pattern to ensure clean separation between test logic and page interactions.

Test Cases Implemented
✅ Positive Test Case

Successful Login

Navigate to the login page

Enter valid credentials

Verify redirect to the secure area

Verify success message is displayed

Verify logout button is visible

❌ Negative Test Cases

Login with Invalid Username

Enter invalid username with valid password

Verify appropriate error message

Verify user remains on login page

Login with Invalid Password

Enter valid username with invalid password

Verify appropriate error message

Verify user remains on login page

Tech Stack

Playwright

TypeScript

Node.js

Page Object Model (POM)

dotenv (environment variable management)

Project Structure
.
├── pages/
│   └── LoginPage.ts
├── tests/
│   └── login.spec.ts
├── playwright.config.ts
├── package.json
├── .env.example
├── .gitignore
└── README.md
Prerequisites

Make sure you have installed:

Node.js (v16 or higher recommended)

npm (comes with Node)

Setup Instructions
1. Clone the Repository
git clone https://github.com/manueladames/origami-risk-project/edit/main/README.md
cd Origami-Risk-Project
2. Install Dependencies
npm install

This installs:

Playwright

dotenv

All required project dependencies

3. Install Playwright Browsers (First Time Only)
npx playwright install
4. Create Environment File

Create a file named:

.env

In the project root and add:

BASE_URL=https://the-internet.herokuapp.com
APP_USERNAME=tomsmith
APP_PASSWORD=SuperSecretPassword!

Note: .env is ignored by Git.
You can reference .env.example as a template.

Running the Tests
Run All Tests (Chromium – Default & Stable)
npx playwright test
Run in Headed Mode (See Browser)
npx playwright test --headed
Run in UI Mode
npx playwright test --ui
View HTML Report

After running tests:

npx playwright show-report
Design Decisions

Page Object Model (POM) used to separate page behavior from test assertions.

Environment variables used to avoid hardcoding credentials.

Tests run against Chromium by default for stability.

Navigation waits for domcontentloaded to reduce flakiness from external demo site behavior.

Workers limited for stability since the target application is a public demo site.

Notes

This project tests a publicly hosted demo application.
Occasional network-related instability may occur due to third-party hosting behavior.

Author

Manuel

If you’d like, I can also provide a slightly more “enterprise-polished” version tailored for hiring managers.
