const axios = require('axios');
const config = require('../config');

module.exports.findInsurances = function () {
  let url = `https://api.betterdoctor.com/2016-03-01/insurances?user_key=${config.API_KEY}`
  return axios.get(url)
  .then(data => data.data.map(insurance => insurance.name))
  .catch(err => console.error(err))
}