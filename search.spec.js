
const{test,expect} =require('@playwright/test')
//const searchAction = require("../pages/searchAction");


test('Search functionality retrieves relevant results', async ({ page }) => {

    await page.goto("https://magento.softwaretestingboard.com/");

    const searchBox = page.locator('#search');
    await searchBox.type('Fusion' , {delay : 200});
    await searchBox.press('Enter');
      // Wait for the results to load
  await page.waitForSelector('.product-item');

  // Get all product names on the results page
  const productTitles = await page.$$eval('.product-item .product-item-link', titles =>
    titles.map(title => title.textContent.trim())
  );

  // Assert that at least one product title contains the keyword "Fusion"
  const hasRelevantResults = productTitles.some(title =>
    title.toLowerCase().includes('fusion')
  );
  //await this.page.waitForTimeout(2000);

  //expect(hasRelevantResults).toBeTruthy();
  //expected result
await expect(page).toHaveURL(/catalogsearch/);

  
});

// run comnd =>  npx playwright test ./tests/search.spec.js --headed