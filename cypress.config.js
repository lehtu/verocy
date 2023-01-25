const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 8000,

  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log('\t\t', message)

          return null
        },
      })
    },
  },
})