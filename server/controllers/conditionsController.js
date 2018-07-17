const apiHelper = require('../apiHelpers/findConditions');

module.exports = {
  //returns search result of doctors array
  get: (req, res) => {
    apiHelper.findConditions()
  }
}