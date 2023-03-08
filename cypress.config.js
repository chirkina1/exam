const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl:'https://juice-shop-sanitarskyi.herokuapp.com/#/search',
    setupNodeEvents(on, config) {
    
      // implement node event listeners here
    },
  },
});
