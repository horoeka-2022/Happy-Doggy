const connection = require('./connection')

module.exports = {
  getDogList,
}

function getDogList(db = connection) {
  return db('owner').select(
    'availibility',
    'dog_name as dogName',
    'breed',
    'description',
    'needs'
  )
}
