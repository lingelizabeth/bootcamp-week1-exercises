exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('email')
    .unique()
    .notNullable()

  table.string('first_name')

  table.string('last_name')

  table.string('password')

  table.text('bio')

  table.text('pfp')

  table.datetime('dob')

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
