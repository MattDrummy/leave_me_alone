
exports.up = function(knex, Promise) {
  return knex.schema.createTable('quotes', (table) => {
    table.increments();
    table.text('quote').unique().notNullable();
  })
};

exports.down = function(knex, Promise) {

};
