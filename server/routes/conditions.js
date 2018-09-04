const conditionsController = require('../controllers/conditionsController');
const conditionsRouter = require('express').Router();
// conditions routes:
conditionsRouter.get('/', conditionsController.get);

module.exports = conditionsRouter;