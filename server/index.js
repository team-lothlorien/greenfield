const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const {url, formatLocationData} = require('./controller/getGeoLocation.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/`));

//returns search result of doctors array
app.get('/search/:filter/:location', (req, res) => {

  // format location to place in url
  let location = formatLocationData(req.params.location);
 
  // turn location the user entered into a lat / long value
  axios.get(`${url}${location}`)
    .then( response => {
      if (response.data.status === 'OK') {
        let lat = response.data.results[0].geometry.location.lat;
        let long = response.data.results[0].geometry.location.lng;
        let filter = req.params.filter;

        // api call to good docs
      }
    })
    .catch( err => console.log(err) )
});
//adds doc to favorites db
app.post('/addFavorite', (req, res) => {

});
//deletes doc from favorites db
app.delete('/delteFavorite', (req, res) => {

});
//gets all favorites db
app.get('/favorites', (req, res) => {

});
//adds comment db
app.post('/addComment', (req, res) => {

});
//edits comment db
app.put('/editComment', (req, res) => {

});
//deletes comment db
app.delete('/deleteComment', (req, res) => {

});
//get all comments
app.get('/comments', (req, res) => {

});

//creates server connection
app.listen(port, () => {
  console.log(`Connected to port ${port}...`);
});
