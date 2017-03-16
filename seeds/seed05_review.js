exports.seed = function(knex, Promise)   {
  return knex('review').del()
  .then(function () {
    return knex('review').insert([
      {user_id:knex('user').where('name','Ron Swanson').select('id'), recipe_id: knex('recipe').where('name', 'Bourbon+Coke').select('id'), rating:5, body:'good review' },
      {user_id:knex('user').where('name','Pappy Van Winkle').select('id'), recipe_id: knex('recipe').where('name', 'Bourbon+Pepsi').select('id'), rating:5, body:'good review' }
    ])
  })
}
