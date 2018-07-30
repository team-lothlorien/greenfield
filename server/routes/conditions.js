const conditionsController = require('../controllers/conditionsController');
const conditionsRouter = require('express').Router();

// controllers contain axios methods
conditionsRouter.get('/', conditionsController.get);

module.exports = conditionsRouter;