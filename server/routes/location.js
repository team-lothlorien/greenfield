const locationController = require('../controllers/locationController.js');
const locationRouter = require('express').Router();

// controllers contain axios methods
locationRouter.get('/', locationController.get);

module.exports = locationRouter;