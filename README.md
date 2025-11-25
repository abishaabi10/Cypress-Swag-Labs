# ✅ Cypress Setup & CSS Selectors --- Complete Guide

### 🔧 1) Install Node.js

Cypress runs on Node.js.

Check installation:

``` bash
node -v
npm -v
```

### 🖥️ 2) Install Visual Studio Code

Recommended extensions: - ESLint - Prettier - Cypress Snippets - Live
Server (optional)

### 📁 3) Create Your Cypress Project Folder

Example:

    Cypress-Automation/

Open the folder in VS Code:

``` bash
code path/to/Cypress-Automation
```

### 📦 4) Initialize npm

``` bash
npm init -y
```

### 🌿 5) Install Cypress

``` bash
npm install cypress --save-dev
```

### 🚀 6) Open Cypress

GUI:

``` bash
npx cypress open
```

Headless:

``` bash
npx cypress run
```

# 📂 Cypress Project Folder Structure

    Cypress-Automation/
    │
    ├── cypress/
    │   ├── downloads/
    │   ├── e2e/
    │   ├── fixtures/
    │   ├── screenshots/
    │   ├── support/
    │   ├── videos/
    │
    ├── cypress.config.js
    ├── package.json

# 🔌 Useful Plugins

File Upload:

``` bash
npm install --save-dev cypress-file-upload
```

XPath:

``` bash
npm install -D cypress-xpath
```

# 🏷️ Run Tests by Tags

``` bash
npm install cypress-grep --save-dev
npx cypress run --env grep=smoke
```
