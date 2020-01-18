
exports.up = async knex => knex.schema.createTable('friends', table =>{
    table.uuid("friendship_id")
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

    table.string('requestor_id')
    table.string('requested_id')
    table.boolean('accepted')
    table.timestamps(true)
});

exports.down = async knex => {
    knex.schema.dropTableIfExists('friends')
};
