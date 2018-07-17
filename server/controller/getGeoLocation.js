
const {API_KEY_GEO} = require('../config');

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

module.exports = {
  formatLocationData: formatLocationData,
  url: `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY_GEO}&address=`
}