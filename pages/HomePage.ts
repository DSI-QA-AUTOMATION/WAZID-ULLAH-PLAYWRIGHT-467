import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    page: Page;
    url: string;
    elementsCard: Locator;
    formsCard: Locator;
    alertsCard: Locator;
    widgetsCard: Locator;
    interactionsCard: Locator;
    bookStoreCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.url = 'https://demoqa.com/';
        
        this.elementsCard = page.getByText('Elements').first();
        this.formsCard = page.locator('div.card').filter({ hasText: 'Forms' });
        this.alertsCard = page.locator('.card').filter({ hasText: 'Alerts, Frame & Windows' }).locator('.card-body');
        this.widgetsCard = page.getByRole('heading', { name: 'Widgets' }).locator('..');
        this.interactionsCard = page.locator('//div[contains(@class, "card")]//h5[text()="Interactions"]/..');
        this.bookStoreCard = page.locator('div:has-text("Book Store Application")').nth(0);
    }

    async navigateTo() {
        await this.page.goto(this.url, {
            waitUntil: 'domcontentloaded',
            timeout: 60000,
        });
    }

    async clickElements() {
        await this.elementsCard.click();
    }

    async clickForms() {
        await this.formsCard.click();
    }

    async clickAlerts() {
        await this.alertsCard.click();
    }

    async clickWidgets() {
        await this.widgetsCard.click();
    }

    async clickInteractions() {
        await this.interactionsCard.click();
    }

    async clickBookStore() {
        await this.bookStoreCard.click();
    }

    async verifyElementsVisible() {
        await expect(this.elementsCard).toBeVisible();
    }

    async verifyFormsVisible() {
        await expect(this.formsCard).toBeVisible();
    }

    async verifyAlertsVisible() {
        await expect(this.alertsCard).toBeVisible();
    }

    async verifyWidgetsVisible() {
        await expect(this.widgetsCard).toBeVisible();
    }

    async verifyInteractionsVisible() {
        await expect(this.interactionsCard).toBeVisible();
    }

    async verifyBookStoreVisible() {
        await expect(this.bookStoreCard).toBeVisible();
    }
}