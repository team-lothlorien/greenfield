const commentsModel = require('../models/commentsModel')

module.exports = {
  //returns comments for specific doctorId (NPI)
  get: (req, res) => {
    commentsModel.getComments(req.query.doctorId)
    .then(comments => res.status(200).send(comments))
    .catch(err => {
      res.status(400)
      .send(console.error('Error fetching comments: ', err))
    })
  },
  //adds comments to specific doctor by doctorId, username, comment
  post: (req, res) => {
    commentsModel.saveComments(req.body.doctorId, req.body.username, req.body.comment)
    .then(res.sendStatus(201))
    .catch(err => {
      console.error('Error saving comment: ', err)
      res.status().send(err);
    });
  },
  //future functinality
  // put: (req, res) => {
  //   commentsModel.editComments()
  //   .then(res.sendStatus(200))
  //   .catch(err => res.send(err))
  // },
  //deletes comment by username and doctorId
  delete: (req, res) => {
    commentsModel.deleteComments(req.body.username, req.body.doctorId)
    .then(deletion => {
      console.log(`${deletion} comment deleted from databse`);
      res.sendStatus(200)
    })
    .catch(err => console.error('Error deleting comment: ', err))
  },
}