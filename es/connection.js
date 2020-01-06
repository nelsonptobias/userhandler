var elasticsearch = require('elasticsearch')

var client = new elasticsearch.Client({
  hosts: 'http://es:9200'
})

module.exports = client
