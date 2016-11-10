const router = require('express').Router();
const beersController = require('../controllers/beers');
const jwt = require('jsonwebtoken');

const authController = require("../controllers/auth");
const users           = require("../controllers/users");
const secret = require('./tokens').secret;


function  secureRoute(req, res, next) {
  if(!req.headers.authorization) return res.status(401).json({ message: "Unauthorized"});

  let token = req.headers.authorization.replace('Bearer ', '');

  jwt.verify(token, secret, (err, payload) => {
    if(err) return res.status(401).json({ message: "Unauthorized"});
    req.user = payload;
    next();
  });
}

router.route("/register")
  .post(authController.register);
router.route("/login")
  .post(secureRoute, authController.login);

router.route('/users')
  .get(secureRoute, users.index);

router.route('/users/:id')
  .all(secureRoute)
  .get(users.show)
  .put(users.update)
  .delete(users.delete);



router.route('/beers')
.all(secureRoute)
  .get(beersController.index)
  .post(beersController.create);

router.route('/beers/:id')
  .all(secureRoute)
  .get(beersController.show)
  .put(beersController.update)
  .delete(beersController.delete);

module.exports = router;
