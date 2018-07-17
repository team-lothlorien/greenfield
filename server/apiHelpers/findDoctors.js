const axios = require('axios');
const config = require('../config');

module.exports.findDoctors = function (term, lat, long) {
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${term}&location=${lat}%2C%20${long}%2C100&user_location=40.750%2C%20-73.976&skip=0&limit=10&user_key=${config.API_KEY}`
  return axios.get(url)
  .then(data => data.data)
  .catch(err => console.error(err))
}