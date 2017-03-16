exports.seed = function (knex, Promise) {
 return knex('step').del()
  .then(function () {
   return knex('step').insert([{
     recipe_id: knex('recipe').where('name', 'Bourbon+Coke').select('id'),
     step: 'shake',
     order: 1
    },
    {
     recipe_id: knex('recipe').where('name', 'Bourbon+Pepsi').select('id'),
     step: 'bake',
     order: 2
    },
    {
     recipe_id: knex('recipe').where('name', 'Bourbon+Pepsi').select('id'),
     step: 'make',
     order: 3
    },
    {
     recipe_id: knex('recipe').where('name', 'Bourbon+Pepsi').select('id'),
     step: 'stir',
     order: 4
    }


    // want to reference body[step][num] not sure how to do that
   ])
  })
}
