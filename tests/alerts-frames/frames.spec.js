const { test } = require('../../fixtures/testFixtures');
const { expect } = require('@playwright/test');

test.describe('HTML Frames Content Tests', () => {
  test.beforeEach(async ({ framesPage }) => {
    await framesPage.open();
  });

  test('Verify frames page loaded', async ({ framesPage }) => {
    const url = await framesPage.getPageUrl();
    expect(url).toContain('frames');
  });

  test('Get content from frame 1', async ({ framesPage }) => {
    const text = await framesPage.getFrame1Text();
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test('Get content from frame 2', async ({ framesPage }) => {
    const text = await framesPage.getFrame2Text();
    expect(text).toBeTruthy();
    expect(text.length).toBeGreaterThan(0);
  });

  test('Verify frame 1 is visible', async ({ framesPage }) => {
    const isVisible = await framesPage.verifyFrame1IsVisible();
    expect(isVisible).toBeTruthy();
  });

  test('Verify frame 2 is visible', async ({ framesPage }) => {
    const isVisible = await framesPage.verifyFrame2IsVisible();
    expect(isVisible).toBeTruthy();
  });
});
