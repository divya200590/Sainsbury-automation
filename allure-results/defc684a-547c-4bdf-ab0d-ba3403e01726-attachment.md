# Test info

- Name: Search for skirt and verify all results contain skirt
- Location: /Users/divyanshu/Learning/Gitrepo/Playwright-automation/tests/Sainsburytu.spec.js:3:1

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('img', { name: 'Morris & Co' })
    - locator resolved to <img height="20" loading="auto" alt="Morris & Co" data-test="component-image" src="https://media.4rgos.it/i/Argos/TU-MORRIS-LOGO-BLACK?h=20&qlt=75&fmt.jpeg.interlaced=true"/>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling

    at /Users/divyanshu/Learning/Gitrepo/Playwright-automation/tests/Sainsburytu.spec.js:17:56
```

# Test source

```ts
   1 | const { test, expect } = require('@playwright/test');
   2 |
   3 | test('Search for skirt and verify all results contain skirt', async ({ page }) => {
   4 |   await page.goto('https://tuclothing.sainsburys.co.uk/');
   5 |   await page.locator('#onetrust-accept-btn-handler').click();
   6 |
   7 |   // Perform search
   8 |   const searchInput = page.locator('#searchInput');
   9 |   await searchInput.fill('skirt');
  10 |   await searchInput.press('Enter');
  11 |    await page.pause();
  12 |
  13 |   // Wait for product list
  14 |   const productList = page.locator('[data-test="product-list"]');
  15 |   await expect(productList).toBeVisible();
  16 |  
> 17 |   //await page.getByRole('img', { name: 'Morris & Co' }).click();
     |                                                        ^ Error: locator.click: Target page, context or browser has been closed
  18 |
  19 |   const productTitlesLocator = productList.locator('[data-test="component-product-card-textContainer"] a');
  20 |
  21 |   // Extract all product titles
  22 |   const productTitles = await productTitlesLocator.allInnerTexts();
  23 |
  24 |   // Assert at least one product is found
  25 |   expect(productTitles.length).toBeGreaterThan(0);
  26 |
  27 |   // Assert all product titles contain "skirt"
  28 |   for (const title of productTitles) {
  29 |     expect(title.toLowerCase()).toContain('skirt');
  30 | }
  31 |
  32 |   // Specific locator for product title links
  33 |   /*const productTitlesLocator = productList.locator(
  34 |     'a[data-test="component-product-card-link"][aria-label]'
  35 |   );
  36 |
  37 |   // Extract all aria-labels in one go
  38 |   const productTitles = await productTitlesLocator.evaluateAll(els =>
  39 |     els.map(el => el.getAttribute('aria-label').trim())
  40 |   );
  41 |
  42 |   // Assert at least one product found
  43 |   expect(productTitles.length).toBeGreaterThan(0);
  44 |
  45 |   // Assert all titles contain "skirt"
  46 |   for (const title of productTitles) {
  47 |     expect(title.toLowerCase()).toContain('skirt');
  48 |   }
  49 |     */
  50 | });
  51 |
```