const BasePage = require('./base/BasePage');

class WidgetsPage extends BasePage {
  constructor(page) {
    super(page);

    this.datePickerInput = '#datePickerMonthYearInput';
    this.subjectInput = '#subjectsInput';
    this.sliderInput = '.range-slider input[type="range"]';
    this.progressBar = '.progress-bar';
    this.startButton = '#startStopButton';
    this.resetButton = '#resetButton';
    this.tooltipButton = 'button[title="Hover me to see the tooltip"]';
    this.autocompleteInput = '#autoCompleteMultipleInput';
  }

  async open() {
    await this.navigateTo('widgets');
  }

  async selectDate(date) {
    await this.fill(this.datePickerInput, date);
  }

  async fillSubject(subject) {
    await this.fill(this.subjectInput, subject);
  }

  async setSliderValue(value) {
    const slider = this.page.locator(this.sliderInput);
    await slider.fill(value);
  }

  async startProgressBar() {
    await this.click(this.startButton);
  }

  async resetProgressBar() {
    await this.click(this.resetButton);
  }

  async hoverTooltip() {
    await this.hover(this.tooltipButton);
    await this.waitForTimeout(500);
  }

  async getTooltipText() {
    const tooltip = this.page.locator('.tooltip-inner');
    return await tooltip.textContent();
  }

  async fillAutocomplete(value) {
    await this.fill(this.autocompleteInput, value);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
  }

  async verifyProgressBarValue(expectedValue) {
    const progressBar = this.page.locator(this.progressBar);
    const width = await progressBar.evaluate(el => window.getComputedStyle(el).width);
    return width.includes(expectedValue);
  }
}

module.exports = WidgetsPage;
