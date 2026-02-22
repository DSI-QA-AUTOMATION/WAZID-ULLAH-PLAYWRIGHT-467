class BasePage {
  constructor(page) {
    this.page = page;
    this.baseUrl = 'https://demoqa.com/';
  }

  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }

  async navigateTo(path) {
    await this.navigate(`${this.baseUrl}${path}`);
  }

  async click(selector) {
    await this.page.locator(selector).click();
  }

  async fill(selector, text) {
    await this.page.locator(selector).fill(text);
  }

  async fillAndSubmit(formData) {
    for (const [key, value] of Object.entries(formData)) {
      if (value) {
        await this.fill(`input[name="${key}"]`, value);
      }
    }
    await this.click('button[type="submit"]');
  }

  async getText(selector) {
    await this.page.locator(selector).waitFor({ state: 'visible', timeout: 5000 });
    return await this.page.locator(selector).textContent();
  }

  async doubleClick(selector) {
    await this.page.locator(selector).dblclick();
  }

  async rightClick(selector) {
    await this.page.locator(selector).click({ button: 'right' });
  }

  async hover(selector) {
    await this.page.locator(selector).hover();
  }

  async selectDropdown(selector, value) {
    await this.page.locator(selector).selectOption(value);
  }

  async isVisible(selector) {
    return await this.page.locator(selector).isVisible();
  }

  async isEnabled(selector) {
    return await this.page.locator(selector).isEnabled();
  }

  async isChecked(selector) {
    return await this.page.locator(selector).isChecked();
  }

  async check(selector) {
    await this.page.locator(selector).check();
  }

  async uncheck(selector) {
    await this.page.locator(selector).uncheck();
  }

  async getInputValue(selector) {
    return await this.page.locator(selector).inputValue();
  }

  async waitForElement(selector, timeout = 10000) {
    await this.page.locator(selector).waitFor({ timeout });
  }

  async waitForTimeout(milliseconds) {
    await this.page.waitForTimeout(milliseconds);
  }

  async waitForNavigation(timeout = 30000) {
    await this.page.waitForNavigation({ timeout });
  }

  async getPageTitle() {
    return await this.page.title();
  }

  async getPageUrl() {
    return this.page.url();
  }

  async reload() {
    await this.page.reload();
  }

  async goBack() {
    await this.page.goBack();
  }

  async goForward() {
    await this.page.goForward();
  }

  async uploadFile(fileInputSelector, filePath) {
    await this.page.locator(fileInputSelector).setInputFiles(filePath);
  }

  async downloadFile(downloadPromise, action) {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      action()
    ]);
    return download;
  }

  async dragAndDrop(sourceSelector, targetSelector) {
    await this.page.locator(sourceSelector).dragTo(this.page.locator(targetSelector));
  }

  async scrollToElement(selector) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

  async getAttributeValue(selector, attribute) {
    return await this.page.locator(selector).getAttribute(attribute);
  }

  async takeScreenshot(filename) {
    await this.page.screenshot({ path: `./screenshots/${filename}.png` });
  }

  async switchToFrame(frameSelector) {
    return this.page.frameLocator(frameSelector);
  }

  async waitForLoadState(state = 'load') {
    await this.page.waitForLoadState(state);
  }

  async closeAds() {
    const adCloseButton = 'button[aria-label="Close"]';
    if (await this.isVisible(adCloseButton)) {
      await this.click(adCloseButton);
    }
  }
}

module.exports = BasePage;
