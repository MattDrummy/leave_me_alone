const knex = require('../db/knex')

module.exports = {
  getAllQuotes: () => {
    return knex('quotes')
  },
  postNewQuote: (newQuote) => {
    return knex('quotes').insert(newQuote).return('*')
  }
}
