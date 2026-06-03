# SauceDemo UI Automation

UI automation testing project using Playwright and TypeScript.

## Features

- Login with valid credentials
- Invalid login validation
- Locked user login validation
- Add item to cart
- Remove item from cart
- Complete checkout flow

## Framework

- Playwright
- TypeScript
- Page Object Model (POM)
- GitHub Actions CI/CD

## Project Structure

```text
pages/
tests/
fixtures/
.github/workflows/
```

## Run Tests

```bash
npm install
npx playwright test
```

## CI/CD

Tests automatically run through GitHub Actions on every push.