const searchController = require('../controllers/searchController');
const searchRouter = require('express').Router();

searchRouter.get('/', searchController.get);

module.exports = searchRouter;