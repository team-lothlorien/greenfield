const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const searchRouter = require('./routes/search');
const specialtyRouter = require('./routes/specialty');
const insuranceRouter = require('./routes/insurance');
const conditionsRouter = require('./routes/conditions');
const favoritesRouter = require('./routes/favorites');
const commentsRouter = require('./routes/comments');
const userRouter = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(`${__dirname}/../client/`));
app.use(cookieParser());
app.use(session({secret: 'secret!'}));

// const passport = require('./auth/googleAuth.js');
// app.use(passport.initialize());
// app.use(passport.session());

app.use('/search', searchRouter);
app.use('/specialties', specialtyRouter);
app.use('/insurance', insuranceRouter);
app.use('/conditions', conditionsRouter);
app.use('/favorites', favoritesRouter);
app.use('/comments', commentsRouter);
// app.use('/user', userRouter);

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
