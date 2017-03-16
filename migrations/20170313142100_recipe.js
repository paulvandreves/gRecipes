
exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe', function(table){
    table.increments()
    table.integer('user_id').references('user.id').notNullable().onDelete('cascade')
    table.string('name')
    table.text('description')
    table.string('image')
    // table.string('bartender').references('user.name').notNullable().onDeonDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe')
};
