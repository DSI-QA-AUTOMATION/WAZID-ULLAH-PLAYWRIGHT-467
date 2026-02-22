const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('Radio Button Selection Tests', () => {
  test.beforeEach(async ({ radioButtonPage }) => {
    await radioButtonPage.open();
  });

  test('Select Yes radio button', async ({ radioButtonPage }) => {
    await radioButtonPage.selectYes();
    const isSelected = await radioButtonPage.isYesSelected();
    expect(isSelected).toBeTruthy();
  });

  test('Select Impressive radio button', async ({ radioButtonPage }) => {
    await radioButtonPage.selectImpressive();
    const isSelected = await radioButtonPage.isImpressiveSelected();
    expect(isSelected).toBeTruthy();
  });

  test('Select No radio button', async ({ radioButtonPage }) => {
    await radioButtonPage.selectNo();
    const isSelected = await radioButtonPage.isNoSelected();
    expect(isSelected).toBeTruthy();
  });

  test('Verify radio button result displayed', async ({ radioButtonPage }) => {
    await radioButtonPage.selectYes();
    const result = await radioButtonPage.getSelectedResult();
    expect(result).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
  });
});
