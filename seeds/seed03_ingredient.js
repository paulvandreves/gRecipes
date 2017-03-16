exports.seed = function (knex, Promise) {
 return knex('ingredient').del()
  .then(function () {
   return knex('ingredient').insert([{
     name: 'coke',
     recipe_id: knex('recipe').where('title', 'Bourbon+Coke').select('id')
    },
    {
     name: 'pepsi',
     recipe_id: knex('recipe').where('title', 'Bourbon+Pepsi').select('id')
    },
    {
     name: 'burbon',
     recipe_id: knex('recipe').where('title', 'Bourbon+Pepsi').select('id')
    },
    {
     name: 'sprite',
     recipe_id: knex('recipe').where('title', 'Bourbon+Pepsi').select('id')
    }


   ])
  })
}
// add recipe forign key
