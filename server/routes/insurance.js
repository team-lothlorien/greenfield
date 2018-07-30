const insuranceController = require('../controllers/insuranceController');
const insuranceRouter = require('express').Router();

// controllers contain axios methods
insuranceRouter.get('/', insuranceController.get);

module.exports = insuranceRouter;