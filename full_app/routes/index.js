var express = require('express');
var router = express.Router();
const query = require('../db/queries.js')

router.get('/quotes', function(req, res, next) {
  query.getAllQuotes().then(data => {
    res.json(data)
  })
});

router.post('/quotes', (req, res) => {
  if (req.body.quote !== "") {
    let newQuote ={
      quote: req.body.quote
    }
    query.postNewQuote(req.body).then(data => {
      res.json(data);
    })
  } else {
    res.json({
        error: "You need to put a new quote"
      })
  }

})

module.exports = router;
