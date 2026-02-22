const BasePage = require('./base/BasePage');

class PracticeFormPage extends BasePage {
  constructor(page) {
    super(page);

    this.firstNameInput = '#firstName';
    this.lastNameInput = '#lastName';
    this.emailInput = '#userEmail';
    this.maleRadio = 'label:has-text("Male")';
    this.femaleRadio = 'label:has-text("Female")';
    this.mobileInput = '#userNumber';
    this.dateInput = '#dateOfBirthInput';
    this.subjectsInput = '#subjectsInput';
    this.sportsCheckbox = 'label:has-text("Sports")';
    this.readingCheckbox = 'label:has-text("Reading")';
    this.musicCheckbox = 'label:has-text("Music")';
    this.stateSelect = '#state';
    this.citySelect = '#city';
    this.addressInput = '#currentAddress';
    this.submitButton = '#submit';
    this.successModal = '.modal-content';
  }

  async open() {
    await this.navigateTo('automation-practice-form');
  }

  async fillFirstName(firstName) {
    await this.fill(this.firstNameInput, firstName);
  }

  async fillLastName(lastName) {
    await this.fill(this.lastNameInput, lastName);
  }

  async fillEmail(email) {
    await this.fill(this.emailInput, email);
  }

  async selectGender(gender) {
    if (gender === 'Male') {
      await this.click(this.maleRadio);
    } else if (gender === 'Female') {
      await this.click(this.femaleRadio);
    }
  }

  async fillMobileNumber(mobile) {
    await this.fill(this.mobileInput, mobile);
  }

  async fillDateOfBirth(date) {
    await this.fill(this.dateInput, date);
  }

  async selectSubjects(subject) {
    await this.fill(this.subjectsInput, subject);
    await this.page.keyboard.press('Enter');
  }

  async selectHobbies(hobbies) {
    for (const hobby of hobbies) {
      const checkbox = this.page.locator(`label:has-text("${hobby}")`);
      await checkbox.click();
    }
  }

  async selectState(state) {
    await this.selectDropdown(this.stateSelect, state);
  }

  async selectCity(city) {
    await this.selectDropdown(this.citySelect, city);
  }

  async fillAddress(address) {
    await this.fill(this.addressInput, address);
  }

  async submitForm() {
    await this.click(this.submitButton);
  }

  async fillCompleteForm(formData) {
    await this.fillFirstName(formData.firstName);
    await this.fillLastName(formData.lastName);
    await this.fillEmail(formData.email);
    await this.selectGender(formData.gender);
    await this.fillMobileNumber(formData.mobile);
    await this.fillDateOfBirth(formData.dateOfBirth);
    if (formData.subjects) {
      await this.selectSubjects(formData.subjects);
    }
    if (formData.hobbies) {
      await this.selectHobbies(formData.hobbies);
    }
    await this.selectState(formData.state);
    await this.selectCity(formData.city);
    await this.fillAddress(formData.address);
    await this.submitForm();
  }

  async verifySubmissionSuccess() {
    return await this.isVisible(this.successModal);
  }
}

module.exports = PracticeFormPage;
