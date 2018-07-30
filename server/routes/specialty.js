const specialtyController = require('../controllers/specialtyController');
const specialtyRouter = require('express').Router();

// controllers contain axios methods
specialtyRouter.get('/', specialtyController.get);

module.exports = specialtyRouter;