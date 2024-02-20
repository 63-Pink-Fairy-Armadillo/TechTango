const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const userController = require('./controllers/userController');
const MONGO_URL =
  'mongodb+srv://justin:a1357924689@cluster0.se1vl.mongodb.net/TechTango?retryWrites=true&w=majority';
mongoose.connect(MONGO_URL);

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.resolve(__dirname, '../dist')));

app.patch('/home/editTags', userController.editTags, (req, res) =>
  res.status(200).send('edit tags success')
);

app.patch('/home/editProfile', userController.editProfile, (req, res) =>
  res.status(200).send('edit profile success')
);

app.get('/home/getuser', userController.getEditUser, (req, res) =>
  res.status(200).json({
    user: res.locals.user,
  })
);

app.get('/home/users', userController.getAllUserInformation, (req, res) =>
  res.status(200).json({
    user: res.locals.user,
  })
);

app.get('/home', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './../dist/index.html'));
});

app.post('/signUp', userController.createUser, (req, res) => {
  return res.status(200).redirect('/home');
});

app.post('/', userController.verifyUser, (req, res) => {
  // TO DO: set log in cookie
  return res.status(200).redirect('/home');
});

// default loading
app.get('/bundle.js', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './../dist/bundle.js'));
});
app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './../dist/index.html'));
});

/**
 * 404 handler
 */
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  const defaultObj = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errObj = Object.assign({}, defaultObj, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
