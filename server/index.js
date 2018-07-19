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
  let email = req.body.email;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(password, salt, null, (err, hash) => {
      knex('Users').insert({
        username: username,
        password: hash,
        firstName: firstName,
        lastName: lastName,
        zipCode: zipCode,
        email: email
      })
      .then(resp => {
        console.log(`${username} added to db`);
        req.session.regenerate(() => {
          req.session.username = username;
        });
      })
      .catch(err => { res.status(401).send(err); });
    });
  });
});



app.post('/login', (req, response) => {
  let username = req.body.username;
  let password = req.body.password;
  knex('Users').where({username: username})
  .select('password')
  .then(resp => {
    if (resp[0]) {
      bcrypt.compare(password, resp[0].password, (err, res) => {
        if (res) {
          req.session.regenerate(() => {
            response.status(201);
            console.log('Password Matched! redirecting....');
          });
        } else {

          response.send({status: 'badPassword'});
          console.log('password did not match');
        }
      });
      //TEMP FIX UNTIL I FIND OUT HOW TO CALL THE CATCH;
    } else {
      console.log('Username not in database');
      response.send({status: 'badUser'});
    }
  })
  .catch(err => console.log('ERROR CAUGHT:', err));
});


app.post('/logout', (req, res) => {
  req.session.destroy();
});

app.get('/authenticate', (req, res) => {
  res.send(req.session.username ? !!req.session.username : false);
});

let port = process.env.PORT || 3000;
//creates server connection
app.listen(port, () => {
  console.log(`Connected to port ${port}...`);
});
