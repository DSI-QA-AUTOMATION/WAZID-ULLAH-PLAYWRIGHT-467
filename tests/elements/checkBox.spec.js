const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('Checkbox Selection Tests', () => {
  test.beforeEach(async ({ checkBoxPage }) => {
    await checkBoxPage.open();
  });

  test('Expand all checkboxes', async ({ checkBoxPage }) => {
    await checkBoxPage.expandAll();
    await checkBoxPage.waitForTimeout(500);

    const isVisible = await checkBoxPage.isVisible;
    expect(isVisible).toBeTruthy();
  });

  test('Select single checkbox', async ({ checkBoxPage }) => {
    await checkBoxPage.expandAll();
    await checkBoxPage.selectCheckbox('Desktop');

    const isSelected = await checkBoxPage.isCheckboxSelected('Desktop');
    expect(isSelected).toBeTruthy();
  });

  test('Select multiple checkboxes', async ({ checkBoxPage }) => {
    await checkBoxPage.expandAll();
    await checkBoxPage.selectMultipleCheckboxes(['Desktop', 'Documents', 'Downloads']);

    const isDesktopSelected = await checkBoxPage.isCheckboxSelected('Desktop');
    expect(isDesktopSelected).toBeTruthy();
  });
});
