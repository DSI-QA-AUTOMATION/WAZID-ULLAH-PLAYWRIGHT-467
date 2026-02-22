const BasePage = require('./base/BasePage');

class AlertsPage extends BasePage {
  constructor(page) {
    super(page);

    this.simpleAlertButton = '#alertButton';
    this.timerAlertButton = '#timerAlertButton';
    this.confirmAlertButton = '#confirmButton';
    this.promptAlertButton = '#promtButton';
    this.confirmResult = '#confirmResult';
    this.promptResult = '#promptResult';
  }

  async open() {
    await this.navigateTo('alerts');
  }

  async handleSimpleAlert() {
    let alertMessage = '';

    this.page.once('dialog', async dialog => {
      alertMessage = dialog.message();
      await dialog.accept();
    });

    await this.click(this.simpleAlertButton);
    await this.waitForTimeout(500);

    return alertMessage;
  }

  async handleTimerAlert() {
    let alertMessage = '';

    this.page.once('dialog', async dialog => {
      alertMessage = dialog.message();
      await dialog.accept();
    });

    await this.click(this.timerAlertButton);
    await this.waitForTimeout(6000);

    return alertMessage;
  }

  async handleConfirmAlert(accept = true) {
    let result = '';

    this.page.once('dialog', async dialog => {
      if (accept) {
        await dialog.accept();
      } else {
        await dialog.dismiss();
      }
    });

    await this.click(this.confirmAlertButton);
    await this.waitForTimeout(500);

    return result;
  }

  async handlePromptAlert(text = 'Test') {
    this.page.once('dialog', async dialog => {
      await dialog.accept(text);
    });

    await this.click(this.promptAlertButton);
    await this.waitForTimeout(500);
  }

  async getConfirmResult() {
    return await this.getText(this.confirmResult);
  }

  async getPromptResult() {
    return await this.getText(this.promptResult);
  }

  async verifyConfirmResult(accepted) {
    const result = await this.getConfirmResult();
    const expectedText = accepted ? 'You selected Ok' : 'You selected Cancel';
    return result === expectedText;
  }

  async verifyPromptResult(text) {
    const result = await this.getPromptResult();
    return result.includes(text);
  }
}

module.exports = AlertsPage;
