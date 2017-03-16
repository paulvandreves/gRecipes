
exports.up = function(knex, Promise) {
  return knex.schema.createTable('review', function(table){
    table.increments()
    table.integer('user_id').references('user.id').onDelete('cascade')
    table.integer('recipe_id').references('recipe.id').onDelete('cascade')
    table.integer('rating')
    table.text('body')
    table.timestamp('create_at').defaultTo(knex.fn.now())
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('review')
  
};
