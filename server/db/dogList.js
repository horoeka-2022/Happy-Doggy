const connection = require('./connection')

module.exports = {
  getDogList,
}

function getDogList(db = connection) {
  return db('dogList')
    .select(
      'customer_id as imgID',
      'availibility',
      'dog_name as dogName',
      'breed',
      'description',
      'needs'
    )
    .orderBy('availibility')
}
