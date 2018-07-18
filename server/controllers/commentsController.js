const commentsModel = require('../models/commentsModel')

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    commentsModel.getComments()
    .then(comments => res.status(200).send(comments))
    .catch(err => console.error('Error fetching comments: ', err))
  },
  post: (req, res) => {
    commentsModel.saveComments(req.body.doctorId, req.body.username, req.body.comment)
    .then(res.sendStatus(201))
    .catch(err => {
      console.error('Error saving comment: ', err)
      res.status().send(err);
    });
  },
  put: (req, res) => {
    commentsModel.editComments()
    .then(res.sendStatus(200))
    .catch(err => res.send(err))
  },
  delete: (req, res) => {
    commentsModel.editComments()
    .then(res.sendStatus(200))
    .catch(err => console.error('Error deleting comment: ', err))
  },
}