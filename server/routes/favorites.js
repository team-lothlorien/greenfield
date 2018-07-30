const favoritesController = require('../controllers/favoritesController');
const favoritesRouter = require('express').Router();

// controllers contain axios methods
favoritesRouter.get('/', favoritesController.get);
favoritesRouter.post('/', favoritesController.post);
favoritesRouter.delete('/', favoritesController.delete);

module.exports = favoritesRouter;