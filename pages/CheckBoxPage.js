const BasePage = require('./base/BasePage');

class CheckBoxPage extends BasePage {
  constructor(page) {
    super(page);

    this.expandButton = '.rct-collapse-btn';
    this.homeCheckbox = 'label:has-text("Home")';
    this.desktopCheckbox = 'label:has-text("Desktop")';
    this.notesCheckbox = 'label:has-text("Notes")';
    this.commandsCheckbox = 'label:has-text("Commands")';
    this.documentsCheckbox = 'label:has-text("Documents")';
    this.downloadCheckbox = 'label:has-text("Downloads")';
    this.selectedCheckboxes = '#result';
  }

  async open() {
    await this.navigateTo('checkbox');
  }

  async expandAll() {
    const expandButtons = await this.page.locator(this.expandButton).count();
    for (let i = 0; i < expandButtons; i++) {
      const button = this.page.locator(this.expandButton).nth(i);
      if (await button.isVisible()) {
        await button.click();
      }
    }
  }

  async selectCheckbox(label) {
    const checkbox = this.page.locator(`label:has-text("${label}") input[type="checkbox"]`);
    if (!(await checkbox.isChecked())) {
      await checkbox.click();
    }
  }

  async selectMultipleCheckboxes(labels) {
    for (const label of labels) {
      await this.selectCheckbox(label);
    }
  }

  async isCheckboxSelected(label) {
    const checkbox = this.page.locator(`label:has-text("${label}") input[type="checkbox"]`);
    return await checkbox.isChecked();
  }

  async getSelectedCheckboxes() {
    return await this.getText(this.selectedCheckboxes);
  }

  async verifyCheckboxSelected(label) {
    const selectedText = await this.getSelectedCheckboxes();
    return selectedText.includes(label);
  }
}

module.exports = CheckBoxPage;
