const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('Text Input Form Tests', () => {
  test.beforeEach(async ({ textBoxPage }) => {
    await textBoxPage.open();
  });

  test('Fill and submit text box form', async ({ textBoxPage }) => {
    const testData = {
      fullName: 'Donald Trump',
      email: 'Trump@Shoitan',
      currentAddress: 'Washington DC',
      permanentAddress: 'Washington DC'
    };

    await textBoxPage.fillAndSubmitForm(
      testData.fullName,
      testData.email,
      testData.currentAddress,
      testData.permanentAddress
    );

    const verified = await textBoxPage.verifySubmittedData(testData.fullName, testData.email);
    expect(verified).toBeTruthy();
  });

  test('Verify text box output', async ({ textBoxPage }) => {
    await textBoxPage.fillForm('Donald Trump', 'Trump@Shoitan', 'Washington DC', 'Washington DC');
    await textBoxPage.submitForm();

    const name = await textBoxPage.getSubmittedFullName();
    expect(name).toContain('Donald Trump');
  });
});
