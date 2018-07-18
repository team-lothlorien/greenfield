const apiHelper = require('../apiHelpers/findDoctors');
const loc = require('../apiHelpers/findLocation');

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    let query = req.query.term;
    let location = req.query.location;
    loc.findLocation(location)
    .then(data => {
      return apiHelper.findDoctors(query, data[0], data[1])
    })
    .then(doctors => {
      res.status(200).send(doctors);
    })
    .catch(err => console.error('Error fetching doctors: ', err))
  }
}