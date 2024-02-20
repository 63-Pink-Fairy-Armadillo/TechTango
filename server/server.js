const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
/*--------------------------------------- MONGODB CONNECT ---------------------------------------*/
const userController = require('./controllers/userController');
const MONGO_URL =
  'mongodb+srv://justin:a1357924689@cluster0.se1vl.mongodb.net/TechTango?retryWrites=true&w=majority';
mongoose.connect(MONGO_URL);

const PORT = 3000;
const app = express();
/*--------------------------------------- JSON/COOKIE/STATIC ---------------------------------------*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.resolve(__dirname, '../dist')));
/*--------------------------------------- PATCH REQUEST ---------------------------------------*/
app.patch('/home/editTags', userController.editTags, (req, res) =>
  res.status(200).send('edit tags success')
);
app.patch('/home/editProfile', userController.editProfile, (req, res) =>
  res.status(200).send('edit profile success')
);
/*--------------------------------------- POST REQUEST ---------------------------------------*/
app.post('/signUp', userController.createUser, (req, res) => {
  return res.status(200).redirect('/home');
});
app.post('/', userController.verifyUser, (req, res) => {
  return res.status(200).redirect('/home');
});
/*--------------------------------------- GET REQUEST ---------------------------------------*/
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
/*--------------------------------------- Default Bundle ---------------------------------------*/
app.get('/bundle.js', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './../dist/bundle.js'));
});
app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, './../dist/index.html'));
});
/*--------------------------------------- 404 ERROR HANDLER ---------------------------------------*/
app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});
/*--------------------------------------- GLOBAL ERROR ---------------------------------------*/
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
/*--------------------------------------- LISTENER ---------------------------------------*/
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
