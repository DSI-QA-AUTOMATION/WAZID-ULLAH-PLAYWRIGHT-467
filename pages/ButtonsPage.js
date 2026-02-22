const BasePage = require('./base/BasePage');

class ButtonsPage extends BasePage {
  constructor(page) {
    super(page);

    this.doubleClickButton = '#doubleClickBtn';
    this.rightClickButton = '#rightClickBtn';
    this.singleClickButton = '#jpqtY';
    this.doubleClickMessage = '#doubleClickMessage';
    this.rightClickMessage = '#rightClickMessage';
    this.dynamicClickMessage = '#dynamicClickMessage';
  }

  async open() {
    await this.navigateTo('buttons');
  }

  async performDoubleClick() {
    await this.doubleClick(this.doubleClickButton);
  }

  async performRightClick() {
    await this.rightClick(this.rightClickButton);
  }

  async performSingleClick() {
    // Click the 'Click Me' button by using nth selector for reliability
    await this.page.locator('button.btn-primary').nth(2).click();
  }

  async getDoubleClickMessage() {
    return await this.getText(this.doubleClickMessage);
  }

  async getRightClickMessage() {
    return await this.getText(this.rightClickMessage);
  }

  async getDynamicClickMessage() {
    return await this.getText(this.dynamicClickMessage);
  }

  async verifyDoubleClickAction() {
    const message = await this.getDoubleClickMessage();
    return message.includes('double');
  }

  async verifyRightClickAction() {
    const message = await this.getRightClickMessage();
    return message.includes('right');
  }

  async verifySingleClickAction() {
    const message = await this.getDynamicClickMessage();
    return message.length > 0;
  }
}

module.exports = ButtonsPage;
