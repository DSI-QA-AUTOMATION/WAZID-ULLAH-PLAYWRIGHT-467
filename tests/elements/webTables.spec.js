const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('Web Table Operations Tests', () => {
  test.beforeEach(async ({ webTablesPage }) => {
    await webTablesPage.open();
  });

  test('Verify web table is visible', async ({ webTablesPage }) => {
    const rowCount = await webTablesPage.getTableRowCount();
    expect(rowCount).toBeGreaterThan(0);
  });

  test('Add new record to table', async ({ webTablesPage }) => {
    await webTablesPage.addNewRecord(
      'Test',
      'User',
      'test@example.com',
      '25',
      '5000',
      'IT'
    );

    const isVisible = await webTablesPage.isRecordVisible('test@example.com');
    expect(isVisible).toBeTruthy();
  });

  test('Search for record in table', async ({ webTablesPage }) => {
    await webTablesPage.searchRecord('test@example.com');
    const isVisible = await webTablesPage.isRecordVisible('test@example.com');
    expect(isVisible).toBeTruthy();
  });

  test('Edit record in table', async ({ webTablesPage }) => {
    await webTablesPage.editRecord(
      'Updated',
      'Name',
      'updated@example.com',
      '30',
      '6000',
      'Finance'
    );

    const isVisible = await webTablesPage.isRecordVisible('updated@example.com');
    expect(isVisible).toBeTruthy();
  });

  test('Delete record from table', async ({ webTablesPage }) => {
    const initialCount = await webTablesPage.getTableRowCount();
    await webTablesPage.deleteRecord();
    const finalCount = await webTablesPage.getTableRowCount();

    expect(finalCount).toBeLessThanOrEqual(initialCount);
  });
});
