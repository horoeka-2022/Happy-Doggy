exports.up = (knex) => {
  return knex.schema.createTable('dogList', (table) => {
    table.increments('id')
    table.string('dog_name')
    table.string('breed')
    table.string('needs')
    table.date('availibility')
    table.string('description')
    table.string('owner_id')
    table.string('suburb')
    table.string('url')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('dogList')
}
