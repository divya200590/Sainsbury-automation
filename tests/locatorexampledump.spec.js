import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://tuclothing.sainsburys.co.uk/');
  await page.getByRole('button', { name: 'Continue and accept' }).click();
  await page.getByTestId('Search').getByTestId('SearchBar/Input').click();
  await page.getByTestId('Search').getByTestId('SearchBar/Input').fill('skirt');
  await page.getByTestId('Search').getByTestId('SearchBar/SubmitButton').click();
  await page.locator('[data-test="product-group-card-0"]').getByRole('link', { name: '£28.00' }).click();
  await page.getByRole('button', { name: '14' }).click();
  await page.locator('[data-test="add-trolley-button-wrapper"] [data-test="select"]').selectOption('4');
  await page.locator('[data-test="add-trolley-button-wrapper"] [data-test="add-to-trolley-button-button"]').click();
  await page.getByTestId('go-to-basket-button').click();
  await page.getByLabel('Quantity').selectOption('1');
  await page.locator('[data-test="tu-fulfilment-link"] [data-test="component-button"]').click();
});