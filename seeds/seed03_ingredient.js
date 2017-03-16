exports.seed = function (knex, Promise) {
 return knex('ingredient').del()
  .then(function () {
   return knex('ingredient').insert([{
     name: 'Coke',
     recipe_id: knex('recipe').where('name', 'Bourbon+Coke').select('id')
    },
    {
     name: 'Pepsi',
     recipe_id: knex('recipe').where('name', 'Bourbon+Pepsi').select('id')
    },
    {
     name: 'Burbon',
     recipe_id: knex('recipe').where('name', 'Bourbon+Pepsi').select('id')
    }
   ])
  })
}
// add recipe forign key
