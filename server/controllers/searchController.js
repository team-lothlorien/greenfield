const apiHelper = require('../apiHelpers/findDoctors');

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    console.log(req.body);
    console.log(req.query);
    console.log(req.params);
    console.log(req);
    res.sendStatus(200);
    // apiHelper.findDoctors(req.body.term, req.body.lat, req.body.long)
  }
}