const BasePage = require('./base/BasePage');

class TextBoxPage extends BasePage {
  constructor(page) {
    super(page);

    this.fullNameInput = '#fullName';
    this.emailInput = '#userEmail';
    this.currentAddressInput = '#currentAddress';
    this.permanentAddressInput = '#permanentAddress';
    this.submitButton = '#submit';
    this.nameOutput = '#name';
    this.emailOutput = '#email';
    this.currentAddressOutput = '#currentAddress';
    this.permanentAddressOutput = '#permanentAddress';
  }

  async open() {
    await this.navigateTo('text-box');
  }

  async fillForm(fullName, email, currentAddress, permanentAddress) {
    await this.fill(this.fullNameInput, fullName);
    await this.fill(this.emailInput, email);
    await this.fill(this.currentAddressInput, currentAddress);
    await this.fill(this.permanentAddressInput, permanentAddress);
  }

  async submitForm() {
    await this.click(this.submitButton);
  }

  async fillAndSubmitForm(fullName, email, currentAddress, permanentAddress) {
    await this.fillForm(fullName, email, currentAddress, permanentAddress);
    await this.submitForm();
  }

  async getSubmittedFullName() {
    return await this.getText(this.nameOutput);
  }

  async getSubmittedEmail() {
    return await this.getText(this.emailOutput);
  }

  async verifySubmittedData(fullName, email) {
    const submittedName = await this.getSubmittedFullName();
    const submittedEmail = await this.getSubmittedEmail();
    return submittedName.includes(fullName) && submittedEmail.includes(email);
  }
}

module.exports = TextBoxPage;
