const apiHelper = require('../apiHelpers/findSpecialties');

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    apiHelper.findSpecialties()
    .then(sepcialties => res.status(200).send(sepcialties))
    .catch(err => console.log('Error fetching specialties: ', err))
  }
}