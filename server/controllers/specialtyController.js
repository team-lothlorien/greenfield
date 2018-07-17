const apiHelper = require('../apiHelpers/findSpecialties');

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    apiHelper.findSpecialties()
  }
}