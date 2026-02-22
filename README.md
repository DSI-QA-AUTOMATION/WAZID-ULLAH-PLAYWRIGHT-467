# DEMOQA Playwright Test Automation Project

A comprehensive Playwright test automation project for testing the DemoQA website (https://demoqa.com/) following the Page Object Model (POM) design pattern.

## Project Structure

```
├── pages/
│   ├── base/
│   │   └── BasePage.ts              # Base class with common methods for all pages
│   ├── HomePage.ts                  # Home page object
│   ├── TextBoxPage.ts               # Text box element page object
│   ├── CheckBoxPage.ts              # Checkbox element page object
│   ├── RadioButtonPage.ts           # Radio button element page object
│   ├── WebTablesPage.ts             # Web tables element page object
│   ├── ButtonsPage.ts               # Buttons element page object
│   ├── LinksPage.ts                 # Links element page object
│   ├── UploadDownloadPage.ts        # Upload/Download element page object
│   ├── PracticeFormPage.ts          # Practice form (Forms section) page object
│   ├── AlertsPage.ts                # Alerts page object
│   ├── FramesPage.ts                # Frames page object
│   ├── WidgetsPage.ts               # Widgets page object
│   └── InteractionsPage.ts          # Interactions page object
│
├── tests/
│   ├── e2e/
│   │   └── demoqa.e2e.spec.ts       # End-to-end tests for main navigation
│   ├── elements/
│   │   ├── textBox.spec.ts          # Text box tests
│   │   ├── checkBox.spec.ts         # Checkbox tests
│   │   ├── radioButton.spec.ts      # Radio button tests
│   │   ├── webTables.spec.ts        # Web tables tests
│   │   ├── buttons.spec.ts          # Button click tests
│   │   ├── links.spec.ts            # Links tests
│   │   └── uploadDownload.spec.ts   # Upload/Download tests
│   ├── forms/
│   │   └── practiceForm.spec.ts     # Practice form tests
│   ├── alerts-frames/
│   │   ├── alerts.spec.ts           # Alert dialog tests
│   │   └── frames.spec.ts           # iFrame tests
│   ├── widgets/
│   │   ├── datePicker.spec.ts       # Date picker tests
│   │   └── toolTips.spec.ts         # Tooltip and widget tests
│   └── interactions/
│       └── dragAndDrop.spec.ts      # Drag & drop, sortable, selectable tests
│
├── test-data/
│   ├── users.json                   # Test user data
│   └── formData.json                # Test form data
│
├── utils/
│   ├── testUtils.ts                 # Utility functions (data loading, helper methods)
│   └── waitHelpers.ts               # Wait and condition helper functions
│
├── fixtures/
│   └── testFixtures.ts              # Playwright test fixtures for page objects
│
├── reports/
│   ├── html-report/                 # HTML test reports
│   └── screenshots/                 # Test failure screenshots
│
├── playwright.config.ts             # Playwright configuration
├── package.json                     # Project dependencies
├── tsconfig.json                    # TypeScript configuration
├── README.md                        # This file
└── .gitignore                       # Git ignore rules
```

## Features

### Page Object Model (POM)
- BasePage class with common reusable methods
- Each page has its own object class with specific methods
- Improved maintainability and code reuse
- Clean separation of test logic and page interaction logic

### Test Coverage
- **Elements**: TextBox, CheckBox, RadioButton, WebTables, Buttons, Links, Upload/Download
- **Forms**: Practice form with various input types
- **Alerts & Frames**: Alert dialogs and iFrames handling
- **Widgets**: Date picker, tooltips, sliders, progress bars, autocomplete
- **Interactions**: Drag & drop, sortable lists, selectable items
- **E2E**: End-to-end navigation tests

### Utilities
- **TestUtils**: Data loading, random data generation, date formatting, retry logic
- **WaitHelpers**: Custom wait conditions, element visibility, URL matching, responses/requests
- **Fixtures**: Reusable test fixtures for all page objects

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup
```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in specific directory
```bash
npx playwright test tests/elements/
npx playwright test tests/forms/
npx playwright test tests/e2e/
```

### Run specific test file
```bash
npx playwright test tests/elements/textBox.spec.ts
```

### Run tests with specific tag
```bash
npx playwright test --grep @smoke
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests in specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Viewing Reports

### HTML Report
After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Test Data

### users.json
Contains test user data with following fields:
- firstName, lastName
- email
- mobileNumber
- gender
- address, state, city
- dateOfBirth

### formData.json
Contains form test data for:
- Practice form submissions
- Web table user data

## Key Methods in BasePage

### Navigation
- `navigateTo(url)` - Navigate to a specific URL
- `navigateToHome()` - Navigate to base URL
- `getCurrentUrl()` - Get current page URL
- `getPageTitle()` - Get page title

### Element Interaction
- `selectElement(locator)` - Click an element
- `enterText(locator, text)` - Fill text input
- `typeText(locator, text)` - Type text slowly
- `doubleClickElement(locator)` - Double click
- `rightClickElement(locator)` - Right click
- `hoverElement(locator)` - Hover over element

### Element Information
- `getElementText(locator)` - Get element text
- `getAttribute(locator, name)` - Get attribute value
- `isElementVisible(locator)` - Check if visible
- `isElementEnabled(locator)` - Check if enabled
- `getElementCount(locator)` - Get element count

### Verification & Assertions
- `verifyElementPresent(locator)` - Verify element exists
- `verifyElementText(locator, text)` - Verify element text
- `verifyElementAttribute(locator, attr, value)` - Verify attribute

### Dropdowns & Forms
- `selectDropdownByText(locator, text)` - Select dropdown by text
- `selectDropdownByValue(locator, value)` - Select dropdown by value
- `clearInput(locator)` - Clear input field

### Advanced Actions
- `captureScreenshot(filename)` - Take screenshot
- `acceptAlert()` - Accept dialog
- `dismissAlert()` - Dismiss dialog
- `switchToFrame(selector)` - Switch to iframe

## Key WaitHelper Methods

- `waitForElementVisible(locator)` - Wait for element to be visible
- `waitForUrl(page, pattern)` - Wait for URL to match
- `waitForCondition(condition)` - Wait for custom condition
- `waitForElementText(locator, text)` - Wait for specific text
- `waitForPageLoad(page)` - Wait for page to fully load
- `waitForDownload(page)` - Wait for file download
- `waitForNewPage(page)` - Wait for new page/tab

## Test Data Usage

Using TestUtils to load and use test data:

```typescript
import { TestUtils } from '../../utils/testUtils';

const formData = TestUtils.loadJsonData('formData.json');
const user = formData.form1;

// Generate random data
const email = TestUtils.generateRandomEmail();
const randomString = TestUtils.generateRandomString(10);

// Date utilities
const today = TestUtils.getTodayDate('MM/DD/YYYY');
const futureDate = TestUtils.getDateWithOffset(5, 'MM/DD/YYYY');
```

## Best Practices

1. **Use Page Objects**: Always use page objects instead of writing locators in tests
2. **Data Driven Testing**: Use test data from JSON files
3. **Reusable Methods**: Extend BasePage with common methods
4. **Explicit Waits**: Use WaitHelpers for proper synchronization
5. **Descriptive Names**: Use clear test and method names
6. **Error Handling**: Implement proper error handling and logging
7. **Screenshots**: Capture screenshots on failures
8. **Parallel Execution**: Run tests in parallel when possible

## Troubleshooting

### Tests timing out
- Increase timeout in playwright.config.ts
- Use WaitHelpers for explicit waits
- Check element selectors

### Element not found errors
- Verify element selectors using browser DevTools
- Wait for element to be visible before interaction
- Check if element is inside an iframe

### Dynamic elements
- Use `waitForElementVisible()` from WaitHelpers
- Use dynamic selectors that match element properties
- Implement retry logic with `retryAsyncFunction()`

## Configuration

Edit `playwright.config.ts` to:
- Change base URL
- Modify timeout values
- Configure browsers
- Set up reporters
- Enable/disable CI features

## Contributing

1. Follow the POM pattern for new pages
2. Add tests to appropriate directories
3. Update test data in JSON files
4. Use TestUtils and WaitHelpers
5. Add proper comments and documentation

## License

This project is part of the DemoQA Playwright Assignment.

## Contact

For questions or issues, contact the automation team.
