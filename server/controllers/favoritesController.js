var favoritesModel = require('../models/favoritesModel.js');

module.exports = {
  get: (req, res) => {
    let username = req.query.username;
    favoritesModel.getFavorites(username)
      .then ((data) => {
        res.json(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },
  post: (req, res) => {
    let username = req.body.username;
    let doctorNPI = req.body.doctorNPI;
    let doctorData = req.body.doctorData;
    favoritesModel.saveFavorites(username, doctorNPI, doctorData)
      .then (() => {
        res.sendStatus(200);
      })
      .catch ((err) => {
        console.log('Error saving doctor to favorites: ', err);
      });
  },
  delete: (req, res) => {
    let username = req.body.username;
    let doctorNPI = req.body.doctorNPI;
    favoritesModel.deleteFavorites(username, doctorNPI)
      .then (() => {
        res.sendStatus(200);
      })
      .catch ((err) => {
        console.log(err);
      });
  },
}
