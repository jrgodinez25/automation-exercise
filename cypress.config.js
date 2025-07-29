const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // This is the base URL for your application under test.
    // When you use cy.visit('/') in your tests, Cypress will prepend this URL.
    baseUrl: "https://automationexercise.com/",

    // This defines the pattern Cypress uses to find your test files.
    // It's good practice to explicitly define this.
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",

    // You can also add other configurations here for better test execution:
    viewportWidth: 1280, // Default viewport width for consistent testing
    viewportHeight: 720, // Default viewport height
    defaultCommandTimeout: 10000, // Increase default timeout for commands (e.g., cy.get, cy.click)
    pageLoadTimeout: 60000, // Increase timeout for page loads

    setupNodeEvents(on, config) {
      // implement node event listeners here
      // This section is for Node.js specific events, usually not needed for basic tests.
    },
  },
});
