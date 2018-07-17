const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');

let port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../client/app.jsx`));

//returns search result of doctors array
app.get('/search', (req, res) => {

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

})
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