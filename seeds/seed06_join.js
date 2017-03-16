exports.seed = function (knex, Promise) {
 return knex('ingredient_recipe').del()
  .then(function () {
   return knex('ingredient_recipe').insert([
    // prop val           prop val
    {
     ingredient_id: knex('ingredient').where('name', 'coke').select('id'),
     recipe_id: knex('recipe').where('title', 'Bourbon+Coke').select('id')
    },
    {
     ingredient_id: knex('ingredient').where('name', 'pepsi').select('id'),
     recipe_id: knex('recipe').where('title', 'Bourbon+Pepsi').select('id')
    },
    {
     ingredient_id: knex('ingredient').where('name', 'burbon').select('id'),
     recipe_id: knex('recipe').where('title', 'Bourbon+Pepsi2').select('id')
    },
    {
     ingredient_id: knex('ingredient').where('name', 'sprite').select('id'),
     recipe_id: knex('recipe').where('title', 'Bourbon+Pepsi3').select('id')
    }
   ])
   // may have to hard code id's
  })
}

// SELECT recipe_id
// FROM recipe
// JOIN ingredient_recipe
// ON recipe.id = ingredient_recipe.recipe_id
//
// JOIN ingredient
// ON ingredient.id = ingredient_recipe.ingredient_id
//
// WHERE ingredient.name = coke

//.join('ingredient_recipe', 'ingredient_recipe.recipe_id', 'recipe.id')

//join(table, first, [operator], second)
