const locationController = require('../controllers/locationController.js');
const locationRouter = require('express').Router();

locationRouter.get('/', locationController.get);

module.exports = locationRouter;