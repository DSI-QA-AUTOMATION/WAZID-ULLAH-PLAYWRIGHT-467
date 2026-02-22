const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('Alert Handling Tests', () => {
  test.beforeEach(async ({ alertsPage }) => {
    await alertsPage.open();
  });

  test('Handle simple alert', async ({ alertsPage }) => {
    const message = await alertsPage.handleSimpleAlert();
    expect(message).toBeTruthy();
    expect(message.length).toBeGreaterThan(0);
  });

  test('Handle timer alert', async ({ alertsPage }) => {
    const message = await alertsPage.handleTimerAlert();
    expect(message).toBeTruthy();
  });

  test('Handle confirm alert - Accept', async ({ alertsPage }) => {
    await alertsPage.handleConfirmAlert(true);
    const verified = await alertsPage.verifyConfirmResult(true);
    expect(verified).toBeTruthy();
  });

  test('Handle confirm alert - Cancel', async ({ alertsPage }) => {
    await alertsPage.handleConfirmAlert(false);
    const verified = await alertsPage.verifyConfirmResult(false);
    expect(verified).toBeTruthy();
  });

  test('Handle prompt alert', async ({ alertsPage }) => {
    const testText = 'Test Prompt Text';
    await alertsPage.handlePromptAlert(testText);
    const verified = await alertsPage.verifyPromptResult(testText);
    expect(verified).toBeTruthy();
  });
});
