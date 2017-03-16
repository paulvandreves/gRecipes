exports.seed = function(knex, Promise)   {
  return knex('review').del()
  .then(function () {
    return knex('review').insert([
      {user_id:knex('user').where('name','Ron Swanson').select('id'), recipe_id: knex('recipe').where('name', 'Bourbon+Coke').select('id'), rating:5, body:'Authentic trust fund art party cold-pressed irony, literally bitters tofu flexitarian farm-to-table tumeric microdosing kogi unicorn beard. Chia plaid poke unicorn, knausgaard asymmetrical pop-up paleo. Gastropub brunch deep v, 90s dreamcatcher freegan occupy. Post-ironic organic air plant, fingerstache thundercats yr marfa tumblr hammock butcher lo-fi gochujang kombucha pitchfork enamel pin. Crucifix blog try-hard, schlitz sartorial whatever pork belly skateboard. Cornhole tbh chia seitan. Kickstarter gastropub PBR&B yuccie, chambray wayfarers leggings cliche lo-fi slow-carb waistcoat master cleanse letterpress.' },
      {user_id:knex('user').where('name','Pappy Van Winkle').select('id'), recipe_id: knex('recipe').where('name', 'Bourbon+Pepsi').select('id'), rating:5, body:'Authentic trust fund art party cold-pressed irony, literally bitters tofu flexitarian farm-to-table tumeric microdosing kogi unicorn beard. Chia plaid poke unicorn, knausgaard asymmetrical pop-up paleo. Gastropub brunch deep v, 90s dreamcatcher freegan occupy. Post-ironic organic air plant, fingerstache thundercats yr marfa tumblr hammock butcher lo-fi gochujang kombucha pitchfork enamel pin. Crucifix blog try-hard, schlitz sartorial whatever pork belly skateboard. Cornhole tbh chia seitan. Kickstarter gastropub PBR&B yuccie, chambray wayfarers leggings cliche lo-fi slow-carb waistcoat master cleanse letterpress.' }
    ])
  })
}
