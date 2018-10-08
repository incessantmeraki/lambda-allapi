var bodyParser = require('body-parser')

const setupGlobalMiddleware = (app) => {
  app.use(bodyParser.json())
}

module.exports = setupGlobalMiddleware
