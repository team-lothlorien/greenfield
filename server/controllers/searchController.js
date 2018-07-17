const apiHelper = require('../apiHelpers/findDoctors');

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    apiHelper.findDoctors(req.body.term, req.body.lat, req.body.long)
  }
}