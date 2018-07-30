const apiHelper = require('../apiHelpers/findInsurances');

module.exports = {
  //returns a list of insurances in an array of string
  get: (req, res) => {
    apiHelper.findInsurances()
    .then(insurances => res.status(200).send(insurances))
    .catch(err => console.error('Error fetching insurances: ', err))
  }
}