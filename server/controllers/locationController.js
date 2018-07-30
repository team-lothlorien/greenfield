
const loc = require('../apiHelpers/findLocation');

module.exports = {
  // return the locations latitude longitude in an array
  get: (req, res) => {
    let location = req.query.location;
    loc.findLocation(location)
    
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => console.error('Error fetching doctors: ', err))
  }
}
