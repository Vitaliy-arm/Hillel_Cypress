const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://ithillel.ua",
    defaultCommandTimeout: 5000,
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    video: true,
    screenshotOnRunFailure: true,
     retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    
  },
});