const { test: base } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const AlertsPage = require('../pages/AlertsPage');
const FramesPage = require('../pages/FramesPage');
const TextBoxPage = require('../pages/TextBoxPage');
const CheckBoxPage = require('../pages/CheckBoxPage');
const RadioButtonPage = require('../pages/RadioButtonPage');
const ButtonsPage = require('../pages/ButtonsPage');
const LinksPage = require('../pages/LinksPage');
const UploadDownloadPage = require('../pages/UploadDownloadPage');
const WebTablesPage = require('../pages/WebTablesPage');
const PracticeFormPage = require('../pages/PracticeFormPage');
const WidgetsPage = require('../pages/WidgetsPage');
const InteractionsPage = require('../pages/InteractionsPage');

const test = base.extend({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },

  alertsPage: async ({ page }, use) => {
    const alertsPage = new AlertsPage(page);
    await use(alertsPage);
  },

  framesPage: async ({ page }, use) => {
    const framesPage = new FramesPage(page);
    await use(framesPage);
  },

  textBoxPage: async ({ page }, use) => {
    const textBoxPage = new TextBoxPage(page);
    await use(textBoxPage);
  },

  checkBoxPage: async ({ page }, use) => {
    const checkBoxPage = new CheckBoxPage(page);
    await use(checkBoxPage);
  },

  radioButtonPage: async ({ page }, use) => {
    const radioButtonPage = new RadioButtonPage(page);
    await use(radioButtonPage);
  },

  buttonsPage: async ({ page }, use) => {
    const buttonsPage = new ButtonsPage(page);
    await use(buttonsPage);
  },

  linksPage: async ({ page }, use) => {
    const linksPage = new LinksPage(page);
    await use(linksPage);
  },

  uploadDownloadPage: async ({ page }, use) => {
    const uploadDownloadPage = new UploadDownloadPage(page);
    await use(uploadDownloadPage);
  },

  webTablesPage: async ({ page }, use) => {
    const webTablesPage = new WebTablesPage(page);
    await use(webTablesPage);
  },

  practiceFormPage: async ({ page }, use) => {
    const practiceFormPage = new PracticeFormPage(page);
    await use(practiceFormPage);
  },

  widgetsPage: async ({ page }, use) => {
    const widgetsPage = new WidgetsPage(page);
    await use(widgetsPage);
  },

  interactionsPage: async ({ page }, use) => {
    const interactionsPage = new InteractionsPage(page);
    await use(interactionsPage);
  }
});

module.exports = { test };
