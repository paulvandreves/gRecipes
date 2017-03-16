
exports.up = function(knex, Promise) {
  return knex.schema.createTable('step', function(table){
    table.increments()
    table.integer('recipe_id').references('recipe.id').onDelete('cascade')
    table.text('step')
    table.integer('order')
  } )
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('step')
};
