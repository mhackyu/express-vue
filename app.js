const express = require('express');
const app = express();
// const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const session = require('express-session');
const logger = require('./src/core/logger');
const db = require('./src/core/database');
const routes = require('./src/routes');
const pageRoutes = require('./src/routes/page');

// initialize database connection
db.connect()
  .then(data => data)
  .catch(error => error);


// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//     credentials: true
//   })
// );

// user session
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}));

// setting public directory for assets
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
app.use('/assets/build', express.static(path.join(__dirname, 'dist')));
app.use('/assets/vue', express.static(path.join(__dirname, 'node_modules/vue/dist')));

// this will set default directory for ejs views
app.set('views', './src/views');

// setting ejs as our default template engine
app.set('view engine', 'ejs');

app.use(helmet());

// for parsing application/json
app.use(express.json());

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// setup success/error handler
app.use(function(req, res, next) {
  res.success = function(response) {
    // console.log('Success', response);
    logger.log('info', `[${res.req.method}][${req.originalUrl}]`, response);
    res.status(response.status).json(response.body);
  };

  res.error = function(error) {
    console.log('Error', error);
    logger.log('error', `[${res.req.method}][${req.originalUrl}]`, error);
    res.status(error.status).json(error.body);
  };

  next();
});

// consolidated endpoints for version one
app.use('/v1', routes);
app.use('/', pageRoutes);

// handle not exisiting routes
app.get('*', (req, res) => {
  res.render('not-found');
});

/**
 * Remove this code later.
 */

// const { response, SUCCESS } = require('./src/core/response');
// app.get('/', (req, res) => {
//   res.success(response(SUCCESS, 'Successfully updated', { id: 123 }));
// });

// const { token, JWT_TYPE } = require('./src/core/jwt');
// const t = token.sign(JWT_TYPE.SSO, { user: { id: 1 } });
// console.log(t);

// const mail = require('./src/core/mail');
// mail.createTransport();

module.exports = app;
