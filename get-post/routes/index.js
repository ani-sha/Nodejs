var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/addUser', (req, res) => {
 var user = new User();
 user.name = req.body.firstname;
 user.save()
 .then(item => {
 res.send("item saved to database");
 })
 .catch(err => {
 res.status(400).send("unable to save to database");
 });
});


router.get('/User', (req,res) => {
  res.render('home.ejs');
});



module.exports = router;
