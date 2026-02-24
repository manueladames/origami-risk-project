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
