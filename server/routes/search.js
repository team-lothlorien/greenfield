const searchController = require('../controllers/searchController');
const searchRouter = require('express').Router();

// controllers contain axios methods
searchRouter.get('/', searchController.get);

module.exports = searchRouter;