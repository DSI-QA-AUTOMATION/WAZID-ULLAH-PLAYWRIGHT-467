const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('Button Interaction Tests', () => {
  test.beforeEach(async ({ buttonsPage }) => {
    await buttonsPage.open();
  });

  test('Handle double click button', async ({ buttonsPage }) => {
    await buttonsPage.performDoubleClick();
    const message = await buttonsPage.getDoubleClickMessage();
    expect(message).toBeTruthy();
  });

  test('Handle right click button', async ({ buttonsPage }) => {
    await buttonsPage.performRightClick();
    const message = await buttonsPage.getRightClickMessage();
    expect(message).toBeTruthy();
  });

  test('Handle single click button', async ({ buttonsPage }) => {
    await buttonsPage.performSingleClick();
    const message = await buttonsPage.getDynamicClickMessage();
    expect(message).toBeTruthy();
  });

  test('Verify all click actions work', async ({ buttonsPage }) => {
    await buttonsPage.performDoubleClick();
    const doubleMsg = await buttonsPage.verifyDoubleClickAction();

    await buttonsPage.performRightClick();
    const rightMsg = await buttonsPage.verifyRightClickAction();

    expect(doubleMsg).toBeTruthy();
    expect(rightMsg).toBeTruthy();
  });
});
