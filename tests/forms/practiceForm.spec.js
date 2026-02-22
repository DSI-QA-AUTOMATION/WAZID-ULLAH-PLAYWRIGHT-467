const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('Practice Form Submission Tests', () => {
  test.beforeEach(async ({ practiceFormPage }) => {
    await practiceFormPage.open();
  });

  test('Fill complete form with male gender', async ({ practiceFormPage }) => {
    const formData = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      gender: 'Male',
      mobile: '9876543210',
      dateOfBirth: '01011990',
      subjects: 'Math',
      hobbies: ['Sports', 'Reading'],
      state: 'NCR',
      city: 'Delhi',
      address: '123 Test Street'
    };

    await practiceFormPage.fillCompleteForm(formData);
    const success = await practiceFormPage.verifySubmissionSuccess();
    expect(success).toBeTruthy();
  });

  test('Fill complete form with female gender', async ({ practiceFormPage }) => {
    const formData = {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      gender: 'Female',
      mobile: '9876543211',
      dateOfBirth: '01011995',
      subjects: 'Science',
      hobbies: ['Reading', 'Music'],
      state: 'Uttar Pradesh',
      city: 'Lucknow',
      address: '456 Test Avenue'
    };

    await practiceFormPage.fillCompleteForm(formData);
    const success = await practiceFormPage.verifySubmissionSuccess();
    expect(success).toBeTruthy();
  });

  test('Fill form with minimum data', async ({ practiceFormPage }) => {
    await practiceFormPage.fillFirstName('Min');
    await practiceFormPage.fillLastName('User');
    await practiceFormPage.fillEmail('min@test.com');
    await practiceFormPage.selectGender('Male');
    await practiceFormPage.fillMobileNumber('9999999999');
    await practiceFormPage.submitForm();

    const success = await practiceFormPage.verifySubmissionSuccess();
    expect(success).toBeTruthy();
  });
});
