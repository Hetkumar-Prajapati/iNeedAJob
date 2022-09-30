var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I Need A Job' });
});

// get about 
router.get('/about', (req, res) => {
  res.render('about',{ 
    title: 'About this site' ,
    content: 'we will put this stuff here'
})
});

module.exports = router;
