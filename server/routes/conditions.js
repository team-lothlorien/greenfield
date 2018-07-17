const conditionsController = require('../controllers/conditionsController');
const conditionsRouter = require('express').Router();

conditionsRouter.get('/', conditionsController.get);

module.exports = conditionsRouter;