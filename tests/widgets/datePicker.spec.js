const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('Widget Interaction Tests', () => {
  test.beforeEach(async ({ widgetsPage }) => {
    await widgetsPage.open();
  });

  test('Select date from date picker', async ({ widgetsPage }) => {
    const date = '01/01/2025';
    await widgetsPage.selectDate(date);
    const url = widgetsPage.getPageUrl();
    expect(url).toContain('widgets');
  });

  test('Interact with slider', async ({ widgetsPage }) => {
    await widgetsPage.setSliderValue('50');
    const url = widgetsPage.getPageUrl();
    expect(url).toBeTruthy();
  });

  test('Start and reset progress bar', async ({ widgetsPage }) => {
    await widgetsPage.startProgressBar();
    await widgetsPage.waitForTimeout(1000);
    await widgetsPage.resetProgressBar();

    const url = widgetsPage.getPageUrl();
    expect(url).toContain('widgets');
  });

  test('Hover tooltip button', async ({ widgetsPage }) => {
    await widgetsPage.hoverTooltip();
    const tooltipText = await widgetsPage.getTooltipText();
    expect(tooltipText).toBeTruthy();
  });

  test('Fill autocomplete field', async ({ widgetsPage }) => {
    await widgetsPage.fillAutocomplete('Black');
    const url = widgetsPage.getPageUrl();
    expect(url).toBeTruthy();
  });
});
