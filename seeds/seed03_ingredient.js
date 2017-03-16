exports.seed = function (knex, Promise) {
 return knex('ingredient').del()
  .then(function () {
   return knex('ingredient').insert([{
     name: 'Coke'},
    {
     name: 'Pepsi'},
    {
     name: 'Burbon'}
   ])
  })
}
// add recipe forign key

// recipe_id: knex('recipe').where('name', 'Bourbon+Pepsi').select('id')
