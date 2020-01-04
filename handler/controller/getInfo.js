const axios = require('axios')

const getInfo = async (req, res) => {
  const clientlist = await axios.get('https://jsonplaceholder.typicode.com/users')

  const infoClients = clientlist.data.map(function (client) {
    return [client.name, client.email, client.company]
  })

  return res.send(
    infoClients.sort()
  )
}

module.exports = {
  getInfo
}
