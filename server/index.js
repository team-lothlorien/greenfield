const express = require('express');
const bodyParser = require('body-parser');

const searchRouter = require('./routes/search');
const specialtyRouter = require('./routes/specialty');
const insuranceRouter = require('./routes/insurance');
const conditionsRouter = require('./routes/conditions');
const favoritesRouter = require('./routes/favorites');
const commentsRouter = require('./routes/comments');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(`${__dirname}/../client/`));

app.use('/search/:term/:location', searchRouter);
app.use('/specialties', specialtyRouter);
app.use('/insurance', insuranceRouter);
app.use('/conditions', conditionsRouter);
app.use('/favorites', favoritesRouter);
app.use('/comments', commentsRouter);

app.get('/login', (req,res) => {
  res.redirect('/');
});

app.get('/logout', (req, res) => {
  req.session.destroy(function(err) {
    res.redirect('/');
  });
});

let port = process.env.PORT || 3000;
//creates server connection
app.listen(port, () => {
  console.log(`Connected to port ${port}...`);
});
