const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
      name: {type: String, trim: true },
    github: {type: String, trim: true },
     image: { type: String, trim: true },
       bio: { type: String, trim: true },
 portfolio: { type: String, trim: true },
 projects : [String]
 });

  module.exports = mongoose.model('User', userSchema);

  // - Create an express API that has one model, `User`.
  //
  // The User model should have these fields:
  //
  // - name
  // - github (String - link to Github profile)
  // - image (String - the url to where the image is found)
  // - bio (String)
  // - portfolio (String for website)
  // - project titles (Array of strings)
  //
  // The API should have RESTful routes.
  //
  // **Bonus**
  // Add validations for name (required) and github (unique).
  //
