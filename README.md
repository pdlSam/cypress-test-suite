# cypress-test-suite

## Overview
This repository contains a test suite for the login and password reset functionalities of QuickConnect.

## Structure
- `cypress/`
  - `e2e/`
    - `forgotPassword.cy.js` - Test cases for password reset functionality.
    - `pages/`
      - `LoginPage.cy.js` - Page Object Model for login.
      - `ResetPass.cy.js` - Page Object Model for password reset.

## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
3. Run Cypress:
    ```bash
    npx cypress open