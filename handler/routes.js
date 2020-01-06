const { Router } = require('express')

const {
  getWebSites,
  getInfo,
  getSuiteText,
  healthcheck
} = require('./controller')

const handlerRoutes = Router()

handlerRoutes.get('/v1/websites', getWebSites)
handlerRoutes.get('/v1/info', getInfo)
handlerRoutes.get('/v1/suite', getSuiteText)

handlerRoutes.get('/v1/healthcheck', healthcheck)

module.exports = {
  handlerRoutes
}
