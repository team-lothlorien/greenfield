const commentsController = require('../controllers/commentsController');
const commentsRouter = require('express').Router();

commentsRouter.get('/', commentsController.get);
commentsRouter.post('/', commentsController.post);
commentsRouter.put('/', commentsController.put);
commentsRouter.delete('/', commentsController.delete);

module.exports = commentsRouter;