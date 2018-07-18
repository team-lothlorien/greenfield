const apiHelper = require('../apiHelpers/findInsurances');

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    apiHelper.findInsurances()
    .then(insurances => res.status(200).send(insurances))
    .catch(err => console.error('Error fetching insurances: ', err))
  }
}