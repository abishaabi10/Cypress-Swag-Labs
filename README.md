# Cypress Setup & CSS Selectors --- Complete Ready-to-Copy Guide

## 1) Install Node.js

Node.js is required because Cypress runs on Node.

Verify installation:

    node -v
    npm -v

## 2) Install Visual Studio Code

Recommended extensions: - ESLint\
- Prettier\
- Cypress Snippets\
- Live Server (optional)

## 3) Create Your Cypress Project Folder

Example:

    Cypress-Automation/

Open it in VS Code:

    code path/to/Cypress-Automation

## 4) Initialize npm (creates package.json)

    npm init -y

## 5) Install Cypress

    npm install cypress --save-dev

## 6) Open Cypress

GUI mode:

    npx cypress open

Headless mode:

    npx cypress run

------------------------------------------------------------------------

# ✅ Cypress Project Folder Structure (with explanations)

    Cypress-Automation/
    │
    ├── cypress/
    │   ├── downloads/        → Stores downloaded files
    │   ├── e2e/              → All test cases (specs)
    │   ├── fixtures/         → Test data (.json)
    │   ├── screenshots/      → Auto-screenshots when tests fail
    │   ├── support/          → commands.js, e2e.js, reusable logic
    │   ├── videos/           → Recorded test run videos
    │
    ├── cypress.config.js     → Main Cypress configuration file
    ├── package.json          → Dependencies + scripts

## 📁 Folder-by-Folder Explanation

### 1. downloads/

Stores files downloaded during testing.

### 2. fixtures/

Static test data (JSON files).

Example:

    {
      "username": "admin",
      "password": "admin123"
    }

### 3. e2e/

All your test cases live here.

Example:

    LoginTest.cy.js
    CheckoutTest.cy.js

### 4. screenshots/

Cypress automatically puts failed test screenshots here.

### 5. support/

Used for reusable logic.

Example (`commands.js`):

    Cypress.Commands.add('login', (user, pass) => {
      cy.get('#username').type(user)
      cy.get('#password').type(pass)
      cy.get('#login-btn').click()
    })

### 6. videos/

Cypress headless runs produce videos here.

### 7. node_modules/

All installed packages (Cypress + others).\
Do NOT edit manually.

------------------------------------------------------------------------

## 📌 File Upload Support

Install plugin:

    npm install --save-dev cypress-file-upload

## 📌 XPath Support

Install:

    npm install -D cypress-xpath

------------------------------------------------------------------------

## 🏷 Running Tests by Tags (cypress-grep)

Install:

    npm install cypress-grep --save-dev

Run only smoke tests:

    npx cypress run --env grep=smoke
