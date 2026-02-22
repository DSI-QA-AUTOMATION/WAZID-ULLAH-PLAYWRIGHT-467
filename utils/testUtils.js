const fs = require('fs');
const path = require('path');

class TestUtils {
  static loadTestData(fileName) {
    const filePath = path.join(__dirname, `../test-data/${fileName}`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
  }

  static formatDate(date) {
    if (!date) return '';
    return date.toISOString().split('T')[0];
  }

  static async takeScreenshot(page, fileName) {
    const screenshotDir = path.join(__dirname, '../screenshots');
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }
    const filePath = path.join(screenshotDir, `${fileName}-${Date.now()}.png`);
    await page.screenshot({ path: filePath });
    return filePath;
  }

  static async createSampleFile(fileName, content) {
    const testDataDir = path.join(__dirname, '../test-data');
    if (!fs.existsSync(testDataDir)) {
      fs.mkdirSync(testDataDir, { recursive: true });
    }
    const filePath = path.join(testDataDir, fileName);
    fs.writeFileSync(filePath, content);
    return filePath;
  }

  static deleteSampleFile(fileName) {
    const testDataDir = path.join(__dirname, '../test-data');
    const filePath = path.join(testDataDir, fileName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return true;
    }
    return false;
  }

  static sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  static getCurrentTimestamp() {
    return new Date().toISOString();
  }

  static async generateTestReport(data) {
    const reportPath = path.join(__dirname, '../reports/test-report.json');
    const reportsDir = path.dirname(reportPath);
    
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(reportPath, JSON.stringify(data, null, 2));
    return reportPath;
  }

  static isElementPresent(elements, value) {
    return elements && elements.length > 0;
  }

  static getRandomString(length = 10) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }
}

module.exports = TestUtils;
