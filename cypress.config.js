const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://guest:welcome2qauto@qauto.forstudy.space",
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