var mongoose = require('mongoose');

var restSchema = new mongoose.Schema({
  restname: String,
});

module.exports =  mongoose.model('Rest', restSchema);
