const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: 32,

  // ✔ Videos stored in a separate folder
  videosFolder: "cypress/videos",

  // ✔ Screenshots stored separately too
  screenshotsFolder: "cypress/screenshots",

  // ✔ Only one reporter
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "cypress/reports",
    charts: true,
    overwrite: false,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },

  e2e: {
    supportFile: "cypress/support/e2e.js",

    setupNodeEvents(on, config) {
      // Required for mochawesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
