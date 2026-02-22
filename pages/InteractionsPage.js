const BasePage = require('./base/BasePage');

class InteractionsPage extends BasePage {
  constructor(page) {
    super(page);

    this.draggableElement = '#draggable';
    this.droppableElement = '#droppable';
    this.selectableItem = '.list-group-item';
  }

  async open() {
    await this.navigateTo('interaction');
  }

  async dragAndDropElement(sourceSelector, targetSelector) {
    await this.dragAndDrop(sourceSelector, targetSelector);
  }

  async performDragDrop() {
    await this.dragAndDrop(this.draggableElement, this.droppableElement);
  }

  async selectItem(itemText) {
    const item = this.page.locator(`text="${itemText}"`);
    await item.click();
  }

  async selectMultipleItems(itemTexts) {
    for (const itemText of itemTexts) {
      const item = this.page.locator(`text="${itemText}"`);
      await item.click({ modifiers: ['Control'] });
    }
  }

  async verifyItemSelected(itemText) {
    const item = this.page.locator(`text="${itemText}"`);
    const classes = await item.getAttribute('class');
    return classes.includes('active');
  }

  async verifyDropSuccess() {
    const droppable = this.page.locator(this.droppableElement);
    const text = await droppable.textContent();
    return text.includes('Dropped');
  }
}

module.exports = InteractionsPage;
