const mongoose = require('mongoose');

const cakesSchema = new mongoose.Schema({
  flavour: { type: String, required: true, trim: true },
  icing: { type: String, required: true, trim: true },
 layers: { type: String, required: true },
  cakeImage: { type: String }
});

module.exports = mongoose.model('Cake', cakesSchema);
