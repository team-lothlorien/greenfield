const apiHelper = require('../apiHelpers/findDoctors');
const loc = require('../apiHelpers/findLocation');

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    let query = req.query.term;
    let location = req.query.location;
    //accepts location string and returns location by lat and long
    loc.findLocation(location)
    .then(data => {
      if(data === undefined) return null;
      return apiHelper.findDoctors(query, data[0], data[1])
    })
    .then(map => {
      res.status(200).send(map)
    })
    .then(doctors => {
      if(doctors === null) return res.status(200).send(null);
      return res.status(200).send(doctors);
    })
    .catch(err => res.send(null))
  }
}
