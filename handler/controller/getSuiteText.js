const axios = require('axios')

const getSuiteText = async (req, res) => {
  const clientlist = await axios.get('https://jsonplaceholder.typicode.com/users')

  const adressWithSuite = clientlist.data.filter(function (client) {
    return client.address.suite.toLowerCase().includes('suite')
  })

  return res.send(
    adressWithSuite
  )
}

module.exports = {
  getSuiteText
}
