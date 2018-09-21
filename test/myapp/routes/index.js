var express = require('express');
var router = express.Router();
var Rest = require('../models/restaurant');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//save data
router.post("/addRest", (req, res) => {
 var myData = new Rest({
  restname : req.body.restname,
}).save(function(err, results){
  if (err) return res.json(err);
  else{
    // console.log(User.firstname);
    return res.redirect('/restlist');
  }
});
});

router.get('/restlist', (req, res) => {
  Rest.find({}, function(err, results){
    if (err) return res.json(err);
    else res.json(results);
  })
});

module.exports = router;
