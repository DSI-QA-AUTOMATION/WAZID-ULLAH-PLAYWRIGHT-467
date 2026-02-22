const BasePage = require('./base/BasePage');

class WebTablesPage extends BasePage {
  constructor(page) {
    super(page);

    this.addButton = '#addNewRecordButton';
    this.firstName = '#firstName';
    this.lastName = '#lastName';
    this.userEmail = '#userEmail';
    this.age = '#age';
    this.salary = '#salary';
    this.department = '#department';
    this.submitButton = 'button:has-text("Submit")';
    this.tableBody = '.rt-tbody';
    this.deleteButton = 'button[title="Delete"]';
    this.editButton = 'button[title="Edit"]';
    this.searchInput = '#searchBox';
  }

  async open() {
    await this.navigateTo('webtables');
  }

  async clickAddButton() {
    await this.click(this.addButton);
  }

  async fillAddRecordForm(firstName, lastName, email, age, salary, department) {
    await this.fill(this.firstName, firstName);
    await this.fill(this.lastName, lastName);
    await this.fill(this.userEmail, email);
    await this.fill(this.age, age);
    await this.fill(this.salary, salary);
    await this.fill(this.department, department);
  }

  async submitAddRecord() {
    await this.click(this.submitButton);
  }

  async addNewRecord(firstName, lastName, email, age, salary, department) {
    await this.clickAddButton();
    await this.fillAddRecordForm(firstName, lastName, email, age, salary, department);
    await this.submitAddRecord();
  }

  async searchRecord(searchTerm) {
    await this.fill(this.searchInput, searchTerm);
  }

  async deleteRecord() {
    const deleteBtn = this.page.locator(this.deleteButton).first();
    if (await deleteBtn.isVisible()) {
      await deleteBtn.click();
    }
  }

  async editRecord(firstName, lastName, email, age, salary, department) {
    const editBtn = this.page.locator(this.editButton).first();
    if (await editBtn.isVisible()) {
      await editBtn.click();
    }
    await this.fillAddRecordForm(firstName, lastName, email, age, salary, department);
    await this.submitAddRecord();
  }

  async getTableRowCount() {
    return await this.page.locator('.rt-tr-group').count();
  }

  async isRecordVisible(email) {
    const record = this.page.locator(`text="${email}"`);
    return await record.isVisible();
  }
}

module.exports = WebTablesPage;
