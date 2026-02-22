const {test, expect} = require('@playwright/test')

test('Navigate to Elements section', async({page})=>{


await page.goto('https://demoqa.com/');

const elementsCard = page.locator('.card-body h5', { hasText: 'Elements' });
await elementsCard.click();


})

test('Navigate to Forms section', async ({ page }) => {

  await page.goto('https://demoqa.com/');

  const formsCard = page.locator('.card-body h5', { hasText: 'Forms' });
  await formsCard.click();


});

test('Navigate to Interactions section', async ({ page }) => {

  await page.goto('https://demoqa.com/');

  const interactionsCard = page.locator('.card-body h5', { hasText: 'Interactions' });
  await interactionsCard.click();

  await page.close();

});