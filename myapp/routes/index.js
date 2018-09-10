var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/mytab', function(req, res, next) {
  res.render('newview', { x: 'Anisha'});
});

router.get('/people', function(req, res, next) {
  res.render('okay', { x: 'Anisha'});
});

router.get('/value', function(req, res, next) {
  res.render('item');
});


module.exports = router;
