exports.seed = function(knex, Promise) {
  // deletes all existing entries
  return knex('user').del()
  .then( function() {
    return knex('user').insert([
      {name: 'Ron Swanson', avatar: 'images/swanson,whiskey.jpg'},
      {name: 'Pappy Van Winkle', avatar: 'http://i1006.photobucket.com/albums/af186/thunderlizard66/southparkme.png'},
      {name: 'Pappy Van Hinkle', avatar: 'https://images-na.ssl-images-amazon.com/images/I/414y74h4aaL._AC_UL320_SR214,320_.jpg'},
      {name: 'Pappy Van Tinkle', avatar: 'https://pickaface.net/gallery/avatar/SamJayson539b487ad6d9f.png'},
      {name: 'Pappy Van Rinkle', avatar: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzMjY2ODkxMV5BMl5BanBnXkFtZTgwMjQxMDA5MTE@._V1_UY1200_CR85,0,630,1200_AL_.jpg'}
    ])

  })
}
