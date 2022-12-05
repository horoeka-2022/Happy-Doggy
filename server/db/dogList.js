const connection = require('./connection')

module.exports = {
  getDogList,
  // addWalkerRequest,
}

function getDogList(db = connection) {
  return db('dogList')
    .select(
      'id',
      'availibility',
      'dog_name as dogName',
      'breed',
      'description',
      'needs',
      'owner_id as ownerId',
      'walker_id as walkerId',
      'suburb'
    )
    .orderBy('availibility', 'asc')
}

function addWalkerRequest(description, auth0Id, db = connection) {
  return db('walker').insert({
    description,
    auth0_id: auth0Id,
  })
}

// function addOwnerRequest(details, auth0Id, db = connection) {
//   return db('dogList').insert({
//   })
// }
