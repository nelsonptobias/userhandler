const axios = require('axios')

const getWebSites = async (req, res) => {
  const clientlist = await axios.get('https://jsonplaceholder.typicode.com/users')

  const webSites = clientlist.data.map(function (client) {
    return client.website
  })

  return res.send(
    webSites
  )
}

module.exports = {
  getWebSites
}
