
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredient', function(table){
    table.increments()
    table.string('name')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredient')
};


// table.integer('recipe_id').references('recipe.id').notNullable().onDelete('cascade')
