const config = require('../config');
const axios = require('axios');

/*
google geocoding api must have an address like
address=1600+Amphitheatre+Parkway,+Mountain+View,+CA

this is what the formatLocationData does
it converts the parameter 'searchValue' from the users input
and changes it to a string seperated by '+' and ',' in order to 
be inserted into the url.

It can take any city name, state, or physical address and convert 
it to latitude and longitude.
*/

let formatLocationData = (searchValue) => {
  let formatArr = [];
  let format = searchValue.split(',');

  for (let i = 0; i < format.length; i += 1) {
    let temp = format[i].split(' ');
    formatArr.push(temp);
  }

  let formatString = '';

  for (let i = 0; i < formatArr.length; i += 1) {
    if (i !== 0) { formatString += ','; }

    for (let j = 0; j < formatArr[i].length; j += 1) {
      if (formatArr[i][j] !== "") {
        formatString += `+${formatArr[i][j]}`;
      }
    }
  }

  if (formatString[0] === '+') {
    formatString = formatString.slice(1);
  }
  return formatString;
};


module.exports.findLocation = function (locationQuery) {
  let location = formatLocationData(locationQuery);
  let url = `https://maps.googleapis.com/maps/api/geocode/json?key=${config.API_KEY_GEO}&address=`;
  return axios.get(`${url}${location}`)
  .then( response => {
    if (response.data.status === 'OK') {
      let lat = response.data.results[0].geometry.location.lat;
      let long = response.data.results[0].geometry.location.lng;
      return [lat, long];
    }
  })
  .catch(() => {return null})
}
