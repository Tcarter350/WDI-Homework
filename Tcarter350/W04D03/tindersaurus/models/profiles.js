const mongoose = require('mongoose');
const quoteSchema = mongoose.Schema({
    name: String,
    age: Number,
    species: String,
    img: String,
    hobbies: Array,
    dislikes: Array
});

module.exports = mongoose.model('Profiles', quoteSchema);
