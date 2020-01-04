const { Router } = require('express')

const {
  getWebSites,
  getInfo,
  getSuiteText
} = require('./controller')

const handlerRoutes = Router()

handlerRoutes.get('/v1/websites', getWebSites)
handlerRoutes.get('/v1/info', getInfo)
handlerRoutes.get('/v1/suite', getSuiteText)

module.exports = {
  handlerRoutes
}
