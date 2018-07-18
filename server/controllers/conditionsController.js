const apiHelper = require('../apiHelpers/findConditions');

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    apiHelper.findConditions()
    .then(conditions => res.status(200).send(conditions))
    .catch(err => console.error('Error fetching symptoms: ', err))
  }
}