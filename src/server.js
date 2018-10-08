const express = require('express')

const router  = require('./api/router')
const setupGlobalMiddleware = require('./middleware')

const app = express()

//setupGlobalMiddleware(app)

app.use('/', router)

app.all('*', async (req,res) => {
  console.log('Received request', res)
  res.json({data: 'Uncaught'})
})

module.exports = app
