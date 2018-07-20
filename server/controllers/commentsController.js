const commentsModel = require('../models/commentsModel')

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    commentsModel.getComments(req.query.doctorId)
    .then(comments => res.status(200).send(comments))
    .catch(err => {
      res.status(400)
      .send(console.error('Error fetching comments: ', err))
    })
  },
  post: (req, res) => {
    commentsModel.saveComments(req.body.doctorId, req.body.username, req.body.comment)
    .then(res.sendStatus(201))
    .catch(err => {
      console.error('Error saving comment: ', err)
      res.status().send(err);
    });
  },
  // put: (req, res) => {
  //   commentsModel.editComments()
  //   .then(res.sendStatus(200))
  //   .catch(err => res.send(err))
  // },
  delete: (req, res) => {
    commentsModel.deleteComments(req.body.username, req.body.doctorId)
    .then(deletion => {
      console.log(`Number of deletions ${deletion}`);
      res.sendStatus(200)
    })
    .catch(err => console.error('Error deleting comment: ', err))
  },
}