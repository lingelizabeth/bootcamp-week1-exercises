
exports.up = async knex => knex.schema.createTable('posts', table => {
    table
        .uuid('post_id')
        .notNullable()
        .primary()
        .defaultTo(knex.raw('uuid_generate_v4()'))

    table.integer('num_likes')
        .defaultTo(0)

    table.text('text')
    table.text('userid')
    table.timestamps(true)
});

exports.down = async knex => knex.schema.dropTableIfExists('posts')
