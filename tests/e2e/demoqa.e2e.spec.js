const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('E2E Application Flow Tests', () => {
  test('Verify home page and all cards visible', async ({ homePage }) => {
    await homePage.open();
    const allVisible = await homePage.verifyAllCardsVisible();
    expect(allVisible).toBeTruthy();
  });

  test('Navigate through all main cards', async ({ homePage }) => {
    await homePage.open();

    const elementsVisible = await homePage.isVisible(homePage.elementsCard);
    const formsVisible = await homePage.isVisible(homePage.formsCard);
    const alertsVisible = await homePage.isVisible(homePage.alertsCard);

    expect(elementsVisible).toBeTruthy();
    expect(formsVisible).toBeTruthy();
    expect(alertsVisible).toBeTruthy();
  });

  test('Complete elements section flow', async ({ homePage, textBoxPage }) => {
    await homePage.open();
    await homePage.navigateToElementsSection();
    await textBoxPage.open();

    await textBoxPage.fillForm('E2E Test', 'e2e@test.com', 'Test Addr 1', 'Test Addr 2');
    await textBoxPage.submitForm();

    const verified = await textBoxPage.verifySubmittedData('E2E Test', 'e2e@test.com');
    expect(verified).toBeTruthy();
  });
});
