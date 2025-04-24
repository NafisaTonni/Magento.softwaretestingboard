import { test, expect } from '@playwright/test';
const cartAction = require("../pages/cartAction");

test('test', async ({ page }) => {
  await page.goto('https://magento.softwaretestingboard.com/');

 const searchBox = page.locator('#search');
 await searchBox.type('Orestes Fitness Short' , {delay : 200});
 await searchBox.press('Enter');
  // Wait for the results to load
  await page.getByRole('link', { name: 'Orestes Fitness Short' }).first().click();
  await page.getByRole('option', { name: '32' }).click();
  await page.getByRole('option', { name: 'Blue' }).click();

  await page.getByRole('button', { name: 'Add to Cart' }).click();
  await page.getByRole('link', { name: ' My Cart 1 1 items' }).click();
  await page.getByRole('link', { name: ' Remove' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByText('You have no items in your').click();
});

//comnd npx playwright test ./tests/cart.spec.js --headed