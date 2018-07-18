const axios = require('axios');
const config = require('../config');

module.exports.findConditions = function () {
  let url = `https://api.betterdoctor.com/2016-03-01/conditions?user_key=${config.API_KEY}`
  return axios.get(url)
  .then(data => data.data.data.map(condition => condition.name))
  .catch(err => console.error(err))
}