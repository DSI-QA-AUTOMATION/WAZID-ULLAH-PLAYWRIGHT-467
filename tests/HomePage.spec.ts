import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('HomePage Tests', () => {

  test('verify homepage and  all cards', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo();
    
    await expect(page).toHaveTitle(/DEMOQA/);
    await homePage.verifyElementsVisible();
    await homePage.verifyFormsVisible();
    await homePage.verifyAlertsVisible();
    await homePage.verifyWidgetsVisible();
    await homePage.verifyInteractionsVisible();
    await homePage.verifyBookStoreVisible();
  });

  test('verify Elements section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo();
    
    await homePage.clickElements();
    await expect(page).toHaveURL(/elements/);
  });

  test('verify Forms section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo();
    
    await homePage.clickForms();
    await expect(page).toHaveURL(/forms/);
  });

  test('verify Alerts section', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigateTo();
    
    await homePage.clickAlerts();
    await expect(page).toHaveURL(/alertsWindows/);
  });
});