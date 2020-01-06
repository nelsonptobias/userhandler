var winston = require('winston')
var Elasticsearch = require('winston-elasticsearch')
var client = require('./connection')

var esTransportOpts = {
  level: 'info',
  client
}

var logger = winston.createLogger({
  transports: [
    new Elasticsearch(esTransportOpts)
  ]
})

module.exports = logger
