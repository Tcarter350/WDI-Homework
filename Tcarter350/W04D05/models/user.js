const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  species: {type: String, trim: true },
maxlength: {type: String, trim: true },
 image: {type: String, trim: true }
 });

  module.exports = mongoose.model('User', userSchema);
