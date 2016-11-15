const mongoose = require('mongoose');
const db = require('../config/db');
const Cake = require('../models/cake');

mongoose.connect(db.uri);

Cake.collection.drop();

Cake.create([{
  flavour: 'Victoria Sponge',
  icing: 'Icing Sugar',
  layers: '2',
  cakeImage: 'http://www.bbcgoodfood.com/sites/default/files/recipe_images/recipe-image-legacy-id--1001468_10.jpg'
},{
  flavour: 'Red Velvet',
  icing: 'Cream Cheese Frosting',
  layers: '3',
  cakeImage: 'http://www.recipetineats.com/wp-content/uploads/2016/06/Red-Velvet-Cake-with-Cream-Cheese-Frosting_landscape.jpg'
}], (err, cakes) => {
  if(err) console.log('There was an error creating cakes', err);

  console.log(`${cakes.length} cakes created!`);
  mongoose.connection.close();
});
