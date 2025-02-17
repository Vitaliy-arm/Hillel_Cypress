const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    
    env: { 
      baseUrl: process.env.CYPRESS_BASE_URL,
      name: process.env.CYPRESS_NAME,
      lastName: process.env.CYPRESS_LAST_NAME,
      email: process.env.CYPRESS_EMAIL,
      password: process.env.CYPRESS_PASSWORD,

      testName: process.env.CYPRESS_TEST_NAME,
      testLastName: process.env.CYPRESS_TEST_LAST_NAME,
      testEmail: process.env.CYPRESS_TEST_EMAIL,
      testPassword: process.env.CYPRESS_TEST_PASSWORD
    },

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', // Укажите папку, в которую будут сохраняться отчеты
      overwrite: true,               // Перезаписывать предыдущие отчеты
      html: true,                    // Генерация HTML отчета
      json: true,                    // Генерация JSON отчета
    },

    defaultCommandTimeout: 1000,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    video: true,
    screenshotOnRunFailure: true,
    //retries: 1,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});