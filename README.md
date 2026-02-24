# Playwright Login Automation  
## Origami Risk – QA Automation Assignment

---

## 📌 Overview

This project contains automated end-to-end tests for the login functionality of:

https://the-internet.herokuapp.com/login

The tests are implemented using **Playwright with TypeScript** and follow the **Page Object Model (POM)** design pattern to maintain clean separation between test logic and UI interactions.

---

## ✅ Test Coverage

### Positive Test Case

**Successful Login**
- Navigate to login page
- Enter valid credentials
- Verify redirect to secure area
- Verify success message is displayed
- Verify logout button is visible

---

### Negative Test Cases

**Login with Invalid Username**
- Enter invalid username with valid password
- Verify appropriate error message
- Verify user remains on login page

**Login with Invalid Password**
- Enter valid username with invalid password
- Verify appropriate error message
- Verify user remains on login page

---

## 🛠 Tech Stack

- Playwright
- TypeScript
- Node.js
- dotenv (environment variable management)
- Page Object Model (POM)

---

## 📂 Project Structure

```
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
```

---

## ⚙️ Prerequisites

Make sure you have installed:

- Node.js (v16 or higher recommended)
- npm (comes with Node)

---

## 🚀 Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/manueladames/origami-risk-project.git
cd origami-risk-project
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

This installs all required dependencies including Playwright and dotenv.

---

### 3️⃣ Install Playwright Browsers (First Time Only)

```bash
npx playwright install
```

---

### 4️⃣ Create Environment File

Create a file named `.env` in the project root and add:

```
BASE_URL=https://the-internet.herokuapp.com
APP_USERNAME=tomsmith
APP_PASSWORD=SuperSecretPassword!
```

`.env` is ignored by Git.  
Use `.env.example` as a template if needed.

---

## ▶️ Running the Tests

### Run Tests (Chromium – Default & Stable)

```bash
npx playwright test
```

---

### Run in Headed Mode (See Browser)

```bash
npx playwright test --headed
```

---

### Run with Playwright UI Mode

```bash
npx playwright test --ui
```

---

### View HTML Report

After running tests:

```bash
npx playwright show-report
```

---

## 🧠 Design Decisions

- Page Object Model used to separate page behavior from test assertions.
- Environment variables used to avoid hardcoding credentials.
- Tests run against Chromium by default for stability.
- Navigation waits for `domcontentloaded` to reduce flakiness from the external demo site.
- Workers limited for stability since the target application is publicly hosted.

---

## ⚠️ Notes

This project tests a publicly hosted demo application.  
Occasional network-related instability may occur due to third-party hosting behavior.

---

## 👨‍💻 Author

Manuel Adames
