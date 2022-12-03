exports.up = (knex) => {
  return knex.schema.createTable('dogList', (table) => {
    table.increments('customer_id')
    table.string('customer_name')
    table.string('dog_name')
    table.string('breed')
    table.string('needs')
    table.date('availibility')
    table.string('description')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('dogList')
}
