exports.seed = function(knex, Promise) {
  // deletes all existing entries
  return knex('user').del()
  .then( function() {
    return knex('user').insert([
      {name: 'Ron Swanson', avatar: 'images/swanson,whiskey.jpg'},
      {name: 'Pappy Van Winkle', avatar: 'images/pappy.jpeg'}
    ])

  })
}
