const {test, expect} = require('@playwright/test')

test('Click on Element Card', async({page})=>{


await page.goto('https://demoqa.com/');

const elementsCard = page.locator('.card-body h5', { hasText: 'Elements' });
await elementsCard.click();


})

test('Click on Forms card', async ({ page }) => {

  await page.goto('https://demoqa.com/');

  const formsCard = page.locator('.card-body h5', { hasText: 'Forms' });
  await formsCard.click();


});

test('Click on Interactions card', async ({ page }) => {

  await page.goto('https://demoqa.com/');

  const interactionsCard = page.locator('.card-body h5', { hasText: 'Interactions' });
  await interactionsCard.click();

  await page.close();

});