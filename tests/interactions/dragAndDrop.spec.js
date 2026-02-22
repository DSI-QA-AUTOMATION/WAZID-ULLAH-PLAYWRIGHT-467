const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('Drag and Drop Interaction Tests', () => {
  test.beforeEach(async ({ interactionsPage }) => {
    await interactionsPage.open();
  });

  test('Perform drag and drop action', async ({ interactionsPage }) => {
    await interactionsPage.performDragDrop();
    const success = await interactionsPage.verifyDropSuccess();
    expect(success).toBeTruthy();
  });

  test('Verify drag and drop from source to target', async ({ interactionsPage }) => {
    const draggableSelector = '#draggable';
    const droppableSelector = '#droppable';

    await interactionsPage.dragAndDropElement(draggableSelector, droppableSelector);
    const success = await interactionsPage.verifyDropSuccess();
    expect(success).toBeTruthy();
  });

  test('Select single item', async ({ interactionsPage }) => {
    await interactionsPage.selectItem('Item 1');
    const isSelected = await interactionsPage.verifyItemSelected('Item 1');
    expect(isSelected).toBeTruthy();
  });

  test('Select multiple items', async ({ interactionsPage }) => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    await interactionsPage.selectMultipleItems(items);

    const item1Selected = await interactionsPage.verifyItemSelected('Item 1');
    expect(item1Selected).toBeTruthy();
  });
});
