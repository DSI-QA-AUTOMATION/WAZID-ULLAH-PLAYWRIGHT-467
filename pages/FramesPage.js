const BasePage = require('./base/BasePage');

class FramesPage extends BasePage {
  constructor(page) {
    super(page);

    this.frame1 = '#frame1';
    this.frame2 = '#frame2';
    this.frameHeading = 'h1';
  }

  async open() {
    await this.navigateTo('frames');
  }

  async getFrame1Text() {
    const frame = this.page.frameLocator(this.frame1);
    const heading = frame.locator(this.frameHeading);
    return await heading.textContent();
  }

  async getFrame2Text() {
    const frame = this.page.frameLocator(this.frame2);
    const heading = frame.locator(this.frameHeading);
    return await heading.textContent();
  }

  async verifyFrameHeading(frameSelector, expectedText) {
    const frame = this.page.frameLocator(frameSelector);
    const heading = frame.locator(this.frameHeading);
    const text = await heading.textContent();
    return text.includes(expectedText);
  }

  async verifyFrame1IsVisible() {
    return await this.isVisible(this.frame1);
  }

  async getPageUrl() {
    return this.page.url();
  }

  async verifyFrame2IsVisible() {
    return await this.isVisible(this.frame2);
  }
}

module.exports = FramesPage;
