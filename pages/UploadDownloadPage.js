const BasePage = require('./base/BasePage');

class UploadDownloadPage extends BasePage {
  constructor(page) {
    super(page);

    this.downloadButton = '#downloadButton';
    this.uploadInput = '#uploadFile';
    this.uploadedFilePath = '#uploadedFilePath';
  }

  async open() {
    await this.navigateTo('upload-download');
  }

  async clickDownloadButton() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.click(this.downloadButton)
    ]);
    return download;
  }

  async getDownloadPath() {
    const download = await this.clickDownloadButton();
    const path = await download.path();
    return path;
  }

  async uploadFile(filePath) {
    await this.uploadInput.setInputFiles(filePath);
  }

  async getUploadedFilePath() {
    return await this.getText(this.uploadedFilePath);
  }

  async verifyFileUploaded(fileName) {
    const uploadedPath = await this.getUploadedFilePath();
    return uploadedPath.includes(fileName);
  }
}

module.exports = UploadDownloadPage;
