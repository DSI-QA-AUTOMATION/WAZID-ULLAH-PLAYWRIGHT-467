const BasePage = require('./base/BasePage');

class RadioButtonPage extends BasePage {
  constructor(page) {
    super(page);

    this.yesRadio = 'label:has-text("Yes")';
    this.noRadio = 'label:has-text("No")';
    this.impressiveRadio = 'label:has-text("Impressive")';
    this.resultText = '#result';
  }

  async open() {
    await this.navigateTo('radio-button');
  }

  async selectYes() {
    await this.click(this.yesRadio);
  }

  async selectNo() {
    await this.click(this.noRadio);
  }

  async selectImpressive() {
    await this.click(this.impressiveRadio);
  }

  async getSelectedResult() {
    return await this.getText(this.resultText);
  }

  async isYesSelected() {
    const result = await this.getSelectedResult();
    return result.includes('Yes');
  }

  async isNoSelected() {
    const result = await this.getSelectedResult();
    return result.includes('No');
  }

  async isImpressiveSelected() {
    const result = await this.getSelectedResult();
    return result.includes('Impressive');
  }
}

module.exports = RadioButtonPage;
