const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const { handlerRoutes } = require('./handler/routes')

app.use(bodyParser.json())

app.use('/', handlerRoutes)

app.listen(8080, function () {
  console.log('Api up on port 8080')
})

module.exports = {
  app
}
