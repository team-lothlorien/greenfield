var favoritesModel = require('../models/favoritesModel.js');

module.exports = {
  //gets a complete list of saved doctors by username
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
  //adds a doctor to favorites
  post: (req, res) => {
    let username = req.body.username;
    let doctorNPI = req.body.doctorNPI;
    let doctorData = req.body.doctorData;
    //accepts username, doctorNPI, doctorData
    favoritesModel.saveFavorites(username, doctorNPI, doctorData)
      .then (() => {
        res.sendStatus(200);
      })
      .catch ((err) => {
        console.log('Error saving doctor to favorites: ', err);
      });
  },
  //deletes doctor from favorites
  delete: (req, res) => {
    let username = req.body.username;
    let doctorNPI = req.body.doctorNPI;
    //accepts username and doctorNPI
    favoritesModel.deleteFavorites(username, doctorNPI)
      .then (() => {
        res.sendStatus(200);
      })
      .catch ((err) => {
        console.log(err);
      });
  },
}
