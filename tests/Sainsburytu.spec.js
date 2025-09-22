const { test, expect } = require('@playwright/test');

test('Search for skirt and verify all results contain skirt', async ({ page }) => {
  await page.goto('https://tuclothing.sainsburys.co.uk/');
  await page.locator('#onetrust-accept-btn-handler').click();

  // Perform search
  const searchInput = page.locator('#searchInput');
  await searchInput.fill('skirt');
  await searchInput.press('Enter');
   await page.pause();

  // Wait for product list
  const productList = page.locator('[data-test="product-list"]');
  await expect(productList).toBeVisible();
 
  //await page.getByRole('img', { name: 'Morris & Co' }).click();

  const productTitlesLocator = productList.locator('[data-test="component-product-card-title-link"]');

  // Extract all product titles
  const productTitles = await productTitlesLocator.allInnerTexts();
  console.log(productTitles)

  // Assert at least one product is found
  expect(productTitles.length).toBeGreaterThan(0);


  // Assert all product titles contain "skirt"
  for (const title of productTitles) {
    expect(title.toLowerCase()).toContain('skirt');
}

  // Specific locator for product title links
  /*const productTitlesLocator = productList.locator(
    'a[data-test="component-product-card-link"][aria-label]'
  );

  // Extract all aria-labels in one go
  const productTitles = await productTitlesLocator.evaluateAll(els =>
    els.map(el => el.getAttribute('aria-label').trim())
  );

  // Assert at least one product found
  expect(productTitles.length).toBeGreaterThan(0);

  // Assert all titles contain "skirt"
  for (const title of productTitles) {
    expect(title.toLowerCase()).toContain('skirt');
  }
    */
})
