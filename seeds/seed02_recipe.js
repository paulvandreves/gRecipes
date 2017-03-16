
exports.seed = function(knex, Promise)   {
  return knex('recipe').del()
  .then(function() {
    return knex('recipe').insert([
      { user_id: knex('user').where('name','Ron Swanson').select('id'), name: 'Bourbon+Coke', description: 'Authentic trust fund art party cold-pressed irony, literally bitters tofu flexitarian farm-to-table tumeric microdosing kogi unicorn beard. Chia plaid poke unicorn, knausgaard asymmetrical pop-up paleo. Gastropub brunch deep v, 90s dreamcatcher freegan occupy. Post-ironic organic air plant, fingerstache thundercats yr marfa tumblr hammock butcher lo-fi gochujang kombucha pitchfork enamel pin. Crucifix blog try-hard, schlitz sartorial whatever pork belly skateboard. Cornhole tbh chia seitan. Kickstarter gastropub PBR&B yuccie, chambray wayfarers leggings cliche lo-fi slow-carb waistcoat master cleanse letterpress.',
      image: 'http://whiskeyapostle.com/wp-content/uploads/2014/05/Laphroaig-10CS.jpg' },
      { user_id: knex('user').where('name','Ron Swanson').select('id'), name:'Bourbon+Pepsi', description:'Authentic trust fund art party cold-pressed irony, literally bitters tofu flexitarian farm-to-table tumeric microdosing kogi unicorn beard. Chia plaid poke unicorn, knausgaard asymmetrical pop-up paleo. Gastropub brunch deep v, 90s dreamcatcher freegan occupy. Post-ironic organic air plant, fingerstache thundercats yr marfa tumblr hammock butcher lo-fi gochujang kombucha pitchfork enamel pin. Crucifix blog try-hard, schlitz sartorial whatever pork belly skateboard. Cornhole tbh chia seitan. Kickstarter gastropub PBR&B yuccie, chambray wayfarers leggings cliche lo-fi slow-carb waistcoat master cleanse letterpress.',
      image: 'http://whiskeyapostle.com/wp-content/uploads/2014/05/Laphroaig-10CS.jpg' },
      { user_id: knex('user').where('name','Pappy Van Winkle').select('id'), name:'Bourbon+Pepsi2', description:'Authentic trust fund art party cold-pressed irony, literally bitters tofu flexitarian farm-to-table tumeric microdosing kogi unicorn beard. Chia plaid poke unicorn, knausgaard asymmetrical pop-up paleo. Gastropub brunch deep v, 90s dreamcatcher freegan occupy. Post-ironic organic air plant, fingerstache thundercats yr marfa tumblr hammock butcher lo-fi gochujang kombucha pitchfork enamel pin. Crucifix blog try-hard, schlitz sartorial whatever pork belly skateboard. Cornhole tbh chia seitan. Kickstarter gastropub PBR&B yuccie, chambray wayfarers leggings cliche lo-fi slow-carb waistcoat master cleanse letterpress.',
      image: 'http://whiskeyapostle.com/wp-content/uploads/2014/05/Laphroaig-10CS.jpg' }
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
