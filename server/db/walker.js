const connection = require('./connection')

module.exports = {
  addWalkerRequest,
}

function addWalkerRequest(description, auth0Id, db = connection) {
  return db('walker').insert({
    description,
    auth0_id: auth0Id,
  })
}
