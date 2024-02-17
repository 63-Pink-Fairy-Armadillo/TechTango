const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const userController = require('./controllers/userController');
const MONGO_URL = 'mongodb+srv://justin:a1357924689@cluster0.se1vl.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGO_URL);

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../client')));

app.post('/signUp', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.newUser);
})

app.post('/signIn', userController.verifyUser, (req, res) => {
  return res.status(200).json(res.locals.user);
})

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
  res.status(500).send({ error: err });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
