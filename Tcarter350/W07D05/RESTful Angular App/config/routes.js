const router = require('express').Router();
const cakesController = require('../controllers/cakes');

router.route('/cakes')
  .get(cakesController.index)
  .post(cakesController.create);

router.route('/cakes/:id')
  .get(cakesController.show)
  .put(cakesController.update)
  .delete(cakesController.delete);


module.exports = router;
