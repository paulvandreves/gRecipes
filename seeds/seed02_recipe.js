
exports.seed = function(knex, Promise)   {
  return knex('recipe').del()
  .then(function() {
    return knex('recipe').insert([
      { user_id: knex('user').where('name','Ron Swanson').select('id'), name: 'Bourbon+Coke', description: 'blah blah blah',
      image: 'image/pappy.jpeg' },
      { user_id: knex('user').where('name','Ron Swanson').select('id'), name:'Bourbon+Pepsi', description:'blah blah blah',
      image: 'images/pappy.jpeg' },
      { user_id: knex('user').where('name','Pappy Van Winkle').select('id'), name:'Bourbon+Pepsi2', description:'blah blah blah2',
      image: 'images/pappy.jpeg' },
      { user_id: knex('user').where('name','Pappy Van Winkle').select('id'), name:'Bourbon+Pepsi3', description:'blah blah blah3',
      image: 'images/pappy.jpeg' }
    ])
  })
}





// step table will reference body.steps
// ingredient table will reference body.ingredient

//knex('user').where('name','Ron Swanson').select('id')


// exports.seed = function(knex, Promise)   {
//   return knex('recipe').del()
//   .then(function() {
//     return knex('recipe').insert([
//         {user_id: 1, name: 'Bourbon+Coke', body: {step1: 'pour coke', step2: 'pour Bourbon'}, ingredient:{Bourbon: '1shot',pepsi:'1cup'},
//         avatar:'images/swanson,whiskey.jpg'
//       },
//
//         {user_id: 2, name:'Bourbon+Pepsi', body:{step1: 'pour pepsi' step2 'pour Bourbon'}, ingredient:{
//           Bourbon: '1shot', pepsi:'1cup',
//         },
//         avatar: 'images/pappy.jpeg'
//       }
//     ])
//   })
// }
// // step table will reference body.steps
// // ingredient table will reference body.ingredient
