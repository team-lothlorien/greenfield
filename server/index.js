const express = require('express');
const bodyParser = require('body-parser');

//Authentication
const bcrypt = require('bcrypt-nodejs');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const knex = require('../db/index.js');

//Router
const searchRouter = require('./routes/search');
const specialtyRouter = require('./routes/specialty');
const insuranceRouter = require('./routes/insurance');

const conditionsRouter = require('./routes/conditions');
const favoritesRouter = require('./routes/favorites');
const commentsRouter = require('./routes/comments');
const locationRouter = require('./routes/location');
// const userRouter = require('./routes/users');

//express
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(`${__dirname}/../client/`));

//Authentication
app.use(cookieParser());
app.use(session({
  secret: 'secret!',
  resave: true,
  saveUninitialized: true,
  cookie: {maxAge: 6000000}
}));


// const passport = require('./auth/googleAuth.js');
// app.use(passport.initialize());
// app.use(passport.session());

//added routers for each endpoint which can be found in the routes folder
app.use('/search', searchRouter);
app.use('/specialties', specialtyRouter);
app.use('/insurance', insuranceRouter);

app.use('/conditions', conditionsRouter);
app.use('/favorites', favoritesRouter);
app.use('/comments', commentsRouter);
app.use('/location', locationRouter);
// app.use('/user', userRouter);


//Authentication
app.post('/signup', (req, res) => {
  let saltRounds = 10;
  let username = req.body.username;
  let password = req.body.password;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let zipCode = req.body.zipCode;
  let age = req.body.age;
  let gender = req.body.gender;
  let email = req.body.email;
  console.log(username, password, firstName, lastName, zipCode, age, gender, email);
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, null, (err, hash) => {
      knex('Users').insert({
        username: username,
        password: hash,
        firstName: firstName,
        lastName: lastName,
        zipCode: zipCode,
        gender: gender,
        age: age,
        email: email
      })
      .then(resp => {
        //console.log(`${username} added to db`);
        req.session.regenerate(() => {
          req.session.username = username;
        });
      })
      .catch(err => { res.status(401).send(err); });
    });
  });
});


//handles login post request
app.post('/login', (req, response) => {
  let username = req.body.username;
  let password = req.body.password;
  knex('Users').where({username: username})
  .select('password')
  .then(resp => {
    if (resp[0]) {
      bcrypt.compare(password, resp[0].password, (err, res) => {
        if (res) {
          req.session.username = username;
          req.session.regenerate(() => {
            req.session.username = username;
            response.status(201);
            response.send(req.session);
            //console.log('Password Matched! redirecting....');
          });
        } else {
          response.status(401);
          response.send({status: 'badPassword'});
          //console.log('password did not match');
        }
      });
    } else {
      //console.log('Username not in database');
      response.send({status: 'badUser'});
    }
  })
  .catch(err => console.log('ERROR CAUGHT:', err));
});

//handles query posts and saves it into the db
app.post('/queries', (req, res) => {
  knex('Queries').insert({
    usersUsername: req.body.user,
    query: req.body.query,
    timeStamp: req.body.timeStamp

  })
  //.then(console.log('Query Saved! SNEAKY'))
  .catch();
});





//handles logout post, destroys the session
app.post('/logout', (req, res) => {
  req.session.destroy();
});


app.get('/authenticate', (req, res) => {
  // console.log('getSessiondata:', req.session, 'getSessionCookie:', req.session.username)
  res.send({
    status: req.session.username ? !!req.session.username : false,
    user: req.session.username || null
  });
});

let port = process.env.PORT || 3000;
//creates server connection
app.listen(port, () => {
  console.log(`Connected to port ${port}...`);
});
