const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1080,
  viewportHeight: 1920,
  e2e: {
    baseUrl: 'https://threadspy.co.uk/',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    excludeSpecPattern: ['**/1-getting-started/*', '**/2-advanced-examples/*'],
    watchForFileChanges: false,
  },
})
