const BasePage = require('./base/BasePage');

class LinksPage extends BasePage {
  constructor(page) {
    super(page);

    this.homeLink = '#simpleLink';
    this.badRequest = 'a:has-text("Bad Request")';
    this.unauthorized = 'a:has-text("Unauthorized")';
    this.forbidden = 'a:has-text("Forbidden")';
    this.notFound = 'a:has-text("Not Found")';
    this.responseMessage = '#linkResponse';
  }

  async open() {
    await this.navigateTo('links');
  }

  async clickHomeLink() {
    const [newPage] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.locator('#simpleLink').click()
    ]);
    return newPage;
  }

  async clickBadRequest() {
    await this.click(this.badRequest);
    await this.waitForTimeout(1000);
  }

  async clickUnauthorized() {
    await this.click(this.unauthorized);
    await this.waitForTimeout(1000);
  }

  async clickForbidden() {
    await this.click(this.forbidden);
    await this.waitForTimeout(1000);
  }

  async clickNotFound() {
    await this.click(this.notFound);
    await this.waitForTimeout(1000);
  }

  async getResponseMessage() {
    return await this.getText(this.responseMessage);
  }

  async verifyLinkResponse(expectedStatus) {
    const message = await this.getResponseMessage();
    return message.includes(expectedStatus);
  }
}

module.exports = LinksPage;
