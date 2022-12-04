const connection = require('./connection')

module.exports = {
  getDogList,
}

function getDogList(db = connection) {
  return db('dogList')
    .select(
      'id as imgID',
      'availibility',
      'dog_name as dogName',
      'breed',
      'description',
      'needs',
      'owner_id as ownerId',
      'walker_id as walkerId'
    )
    .orderBy('availibility', 'asc')
}
