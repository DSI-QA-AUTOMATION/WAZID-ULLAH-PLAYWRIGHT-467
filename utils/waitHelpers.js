class WaitHelpers {
  static async waitForElement(page, selector, timeout = 10000) {
    try {
      await page.locator(selector).waitFor({ timeout });
      return true;
    } catch (error) {
      return false;
    }
  }

  static async waitForElementToDisappear(page, selector, timeout = 10000) {
    try {
      await page.locator(selector).waitFor({ state: 'hidden', timeout });
      return true;
    } catch (error) {
      return false;
    }
  }

  static async waitForNavigation(page, timeout = 30000) {
    try {
      await page.waitForNavigation({ timeout });
      return true;
    } catch (error) {
      return false;
    }
  }

  static async waitForText(page, text, timeout = 10000) {
    try {
      await page.waitForSelector(`text="${text}"`, { timeout });
      return true;
    } catch (error) {
      return false;
    }
  }

  static async waitForCondition(condition, timeout = 10000, checkInterval = 100) {
    const startTime = Date.now();
    
    while (Date.now() - startTime < timeout) {
      if (await condition()) {
        return true;
      }
      await new Promise(resolve => setTimeout(resolve, checkInterval));
    }
    return false;
  }

  static async retryAction(action, maxRetries = 3, delay = 1000) {
    let error;
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await action();
      } catch (err) {
        error = err;
        if (i < maxRetries - 1) {
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw error;
  }

  static async waitAndClick(page, selector, timeout = 10000) {
    try {
      await page.locator(selector).waitFor({ timeout });
      await page.locator(selector).click();
      return true;
    } catch (error) {
      return false;
    }
  }

  static async waitAndFill(page, selector, text, timeout = 10000) {
    try {
      await page.locator(selector).waitFor({ timeout });
      await page.locator(selector).fill(text);
      return true;
    } catch (error) {
      return false;
    }
  }

  static async waitForUrl(page, urlPattern, timeout = 30000) {
    try {
      await page.waitForURL(urlPattern, { timeout });
      return true;
    } catch (error) {
      return false;
    }
  }

  static async waitForFunction(page, callback, timeout = 10000) {
    try {
      await page.waitForFunction(callback, { timeout });
      return true;
    } catch (error) {
      return false;
    }
  }

  static sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }
}

module.exports = WaitHelpers;
