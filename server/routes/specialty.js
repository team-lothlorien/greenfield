const specialtyController = require('../controllers/specialtyController');
const specialtyRouter = require('express').Router();

specialtyRouter.get('/', specialtyController.get);

module.exports = specialtyRouter;