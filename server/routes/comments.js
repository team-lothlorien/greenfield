const commentsController = require('../controllers/commentsController');
const commentsRouter = require('express').Router();

// controllers contain axios methods
commentsRouter.get('/', commentsController.get);
commentsRouter.post('/', commentsController.post);
// commentsRouter.put('/', commentsController.put); //future functionality
commentsRouter.delete('/', commentsController.delete);

module.exports = commentsRouter;