var favoritesModel = require('../models/favoritesModel.js');
var url = require('url');

module.exports = {
  get: (req, res) => {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    favoritesModel.getFavorites()

      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },
  post: (req, res) => {
    favoritesModel.saveFavorites()
      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },
  delete: (req, res) => {
    favoritesModel.deleteFavorites()
      .then ((data) => {
        res.send(data);
      })
      .catch ((err) => {
        console.log(err);
      });
  },
}