const router = require('express').Router();
const cakesController = require('../controllers/cakes');
const authController = require('../controllers/auth');

router
  .post('/login', authController.login)
  .post('/register', authController.register)

router.route('/cakes')
  .get(cakesController.index)
  .post(cakesController.create);

router.route('/cakes/:id')
  .get(cakesController.show)
  .put(cakesController.update)
  .delete(cakesController.delete);


module.exports = router;
