const config = require('../config');
module.exports.findDoctor = function () {
  let url = `https://api.betterdoctor.com/2016-03-01/doctors?location=40.750%2C%20-73.976%2C100&user_location=40.750%2C%20-73.976&skip=0&limit=10&user_key=${config.API_KEY}`
  return axios.get(url).then(res => {
    console.log(res)
  });
}