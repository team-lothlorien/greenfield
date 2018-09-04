const favoritesController = require('../controllers/favoritesController');
const favoritesRouter = require('express').Router();

favoritesRouter.get('/', favoritesController.get);
favoritesRouter.post('/', favoritesController.post);
favoritesRouter.delete('/', favoritesController.delete);

module.exports = favoritesRouter;