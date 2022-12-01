exports.up = (knex) => {
  return knex.schema.createTable('walker', (table) => {
    table.increments('id')
    table.string('description')
    table.string('auth0_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('walker')
}
