var express = require('express');
var router = express.Router();
const query = require('../db/queries.js')

router.get('/quotes', function(req, res, next) {
  query.getAllQuotes().then(data => {
    res.json(data)
  })
});

module.exports = router;
