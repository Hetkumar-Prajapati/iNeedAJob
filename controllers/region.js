var express = require('express');
var router = express.Router();

/* GET region/craete => show blank region */
router.get('/create', function(req, res, next) {
  res.render('regions/create');
});

//make public
module.exports = router;
