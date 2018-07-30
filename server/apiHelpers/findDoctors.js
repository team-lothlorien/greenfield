const axios = require('axios');
const config = require('../config');
//finds 50 doctors by query and location sorted by ascending rating
module.exports.findDoctors = function (term, lat, long) {
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${term}&location=${lat}%2C%20${long}%2C100&user_location=${lat}%2C%20${long}&sort=rating-desc&skip=0&limit=50&user_key=${config.API_KEY}`
  return axios.get(url)//sends get req to api
  .then(data => data.data.data)//returns doctor information
  .catch(err => console.error(err))
}