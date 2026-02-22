const BasePage = require('./base/BasePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);

    this.elementsCard = '.card:has-text("Elements")';
    this.formsCard = '.card:has-text("Forms")';
    this.alertsCard = '.card:has-text("Alerts, Frame & Windows")';
    this.widgetsCard = '.card:has-text("Widgets")';
    this.interactionsCard = '.card:has-text("Interactions")';
    this.bookStoreCard = '.card:has-text("Book Store Application")';
  }

  async open() {
    await this.navigateTo('');
  }

  async navigateToElementsSection() {
    await this.click(this.elementsCard);
  }

  async navigateToFormsSection() {
    await this.click(this.formsCard);
  }

  async navigateToAlertsSection() {
    await this.click(this.alertsCard);
  }

  async navigateToWidgetsSection() {
    await this.click(this.widgetsCard);
  }

  async navigateToInteractionsSection() {
    await this.click(this.interactionsCard);
  }

  async navigateToBookStoreSection() {
    await this.click(this.bookStoreCard);
  }

  async verifyAllCardsVisible() {
    const cards = [
      this.elementsCard,
      this.formsCard,
      this.alertsCard,
      this.widgetsCard,
      this.interactionsCard,
      this.bookStoreCard
    ];

    for (const card of cards) {
      if (!(await this.isVisible(card))) {
        return false;
      }
    }
    return true;
  }
}

module.exports = HomePage;
