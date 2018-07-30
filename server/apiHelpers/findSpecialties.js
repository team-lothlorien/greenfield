const axios = require('axios');
const config = require('../config');
//fetches specialties from the API
module.exports.findSpecialties = function () {
  let url = `https://api.betterdoctor.com/2016-03-01/specialties?user_key=${config.API_KEY}`
  return axios.get(url)
  .then(data => data.data.data.map(specialty => specialty.name))
  .catch(err => console.error(err))
}