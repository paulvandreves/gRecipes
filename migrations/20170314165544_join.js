
exports.up = function(knex, Promise) {
  // join table for the manny to many between ingredient and recipes
  return knex.schema.createTable('ingredient_recipe', function (table) {
    table.integer('recipe_id').references('recipe.id').notNullable().onDelete('cascade')
    table.integer('ingredient_id').references('ingredient.id').notNullable().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('ingredient_recipe')
};
