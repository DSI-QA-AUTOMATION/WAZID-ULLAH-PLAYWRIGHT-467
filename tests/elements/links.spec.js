const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('Link Navigation Tests', () => {
  test.beforeEach(async ({ linksPage }) => {
    await linksPage.open();
  });

  test('Click home link in new tab', async ({ linksPage }) => {
    const newPage = await linksPage.clickHomeLink();
    expect(newPage).toBeTruthy();
    await newPage.close();
  });

  test('Verify bad request link response', async ({ linksPage }) => {
    await linksPage.clickBadRequest();
    const verified = await linksPage.verifyLinkResponse('400');
    expect(verified).toBeTruthy();
  });

  test('Verify unauthorized link response', async ({ linksPage }) => {
    await linksPage.clickUnauthorized();
    const verified = await linksPage.verifyLinkResponse('401');
    expect(verified).toBeTruthy();
  });

  test('Verify not found link response', async ({ linksPage }) => {
    await linksPage.clickNotFound();
    const verified = await linksPage.verifyLinkResponse('404');
    expect(verified).toBeTruthy();
  });
});
