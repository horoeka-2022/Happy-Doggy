const connection = require('./connection')

module.exports = {
  getDogList,
  addWalkerRequest,
  getImgUrl,
  addPost,
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
      'suburb',
      'url'
    )
    .orderBy('availibility', 'asc')
}

function addWalkerRequest(description, auth0Id, db = connection) {
  return db('walker').insert({
    description,
    auth0_id: auth0Id,
  })
}

function getImgUrl(id, db = connection) {
  return db('dogList').where('id', id).select('url')
}

function addPost(
  { dogName, breed, dogImage, suburb, availibility, needs, introduction },
  auth0Id,
  db = connection
) {
  console.log(dogName)
  return db('dogList').insert({
    dog_name: dogName,
    breed,
    url: dogImage,
    suburb,
    availibility,
    needs,
    description: introduction,
    owner_id: auth0Id,
    walker_id: auth0Id,
  })
}
