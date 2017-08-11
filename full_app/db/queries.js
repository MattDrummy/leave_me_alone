const knex = require('knex')

module.exports = {
  getAllQuotes: () => {
    return knex('quotes')
  }
}
