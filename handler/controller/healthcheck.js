var client = require('../../es/connection')
var logger = require('../../es/logger')

const healthcheck = async (req, res) => {
  const healthcheck = client.cluster.health({}, function (err, resp, status) {
    logger.info('-- Client Health --', resp)
  })

  return res.send(
    'ok'
  )
}

module.exports = {
  healthcheck
}
