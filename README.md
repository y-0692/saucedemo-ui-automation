# SauceDemo UI Automation

UI automation testing using Playwright and TypeScript.

## Project Overview

This project automates the SauceDemo e-commerce website using the Page Object Model (POM) design pattern.

Website:
https://www.saucedemo.com/

## Test Scenarios

### Login
- Login with valid credentials

### Add to Cart
- Add Backpack item to cart
- Verify cart item count

### Checkout
- Complete checkout process
- Verify successful order message

## Framework Features

- Playwright
- TypeScript
- Page Object Model (POM)
- Cross-browser support
- Automated assertions

## Project Structure
pages/
LoginPage.ts
InventoryPage.ts
CartPage.ts
CheckoutPage.ts

tests/
login.spec.ts
addToCart.spec.ts
checkout.spec.ts

## Run Tests

npx playwright test

Run Chromium only:

npx playwright test --project=chromium

Generate Report:

npx playwright show-report


Author

Nang Ying Kyein Khay
