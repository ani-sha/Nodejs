var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  firstname: String,
});

module.exports = mongoose.model("User", userSchema);
