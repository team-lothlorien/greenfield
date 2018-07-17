const insuranceController = require('../controllers/insuranceController');
const insuranceRouter = require('express').Router();

insuranceRouter.get('/', insuranceController.get);

module.exports = insuranceRouter;