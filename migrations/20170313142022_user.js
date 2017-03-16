
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments();
    table.string('name').unique();
    table.string('avatar').unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
