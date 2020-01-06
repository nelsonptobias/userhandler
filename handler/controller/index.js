const { getWebSites } = require('./getWebSites')
const { getInfo } = require('./getInfo')
const { getSuiteText } = require('./getSuiteText')
const { healthcheck } = require('./healthcheck')

module.exports = {
  getWebSites,
  getInfo,
  getSuiteText,
  healthcheck
}
