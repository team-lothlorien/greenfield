const axios = require('axios');
const config = require('../config');
//gets a list of conditions from the Better Doctor API
module.exports.findConditions = function () {
  let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${config.API_KEY}`
  return axios.get(url)
}