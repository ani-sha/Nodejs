//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    first: String,
    last: String
});

var user = mongoose.model('user', userSchema);
