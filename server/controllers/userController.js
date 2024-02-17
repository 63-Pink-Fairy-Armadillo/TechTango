const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const userController = {};

userController.getAllUsers = async (req, res, next) => {

};

/*
 * createUser - create and save a new User into the database
 */
userController.createUser = async (req, res, next) => {
  /*
   * declare variable for username and password
   * destructuring is important for safety here
   */
  const { username, password } = req.body;
  
  // if format is incorrect return error
  if (!username || !password) {
    return next({
      log: 'Express error handler caught error in userController.createUser creating user function',
      status: 400,
      message: {Error: 'Your POST request was unsuccessful'},
    });
  } else {
    try {
      /*
       * create new user and save it into document
       * password is hashed before saved in userModel.js
       */
      const newUser = await User.create({username, password});
      res.locals.newUser = newUser;
      return next();
    } catch (err) {
      return next({
        log: 'Express error handler caught error in userController.createUser saving newUser function',
        status: 500,
        message: {err},
      });
    }
  }
};

/*
 * verifyUser - Obtain username and password from the request body, locate
 * the appropriate user in the database, and then authenticate the submitted password
 * against the password stored in the database.
 */
userController.verifyUser = async (req, res, next) => {
  /*
   * declare variable for username and password
   * destructuring is important for safety here 
   * search user document for user with same username
   */
  const { username, password } = req.body;
  if (!username || !password) {
    return next({
      log: 'Express error handler caught error in userController.verifyUser verifying user function',
      status: 400,
      message: {err: 'Your POST request was unsuccessful'},
    });
  } else {
    try {
      /*
       * if username doesn't exist in document, redirect to '/signup' endpoint
       * else, compare password input and password in document through bcrypt
       */
      const user = await User.findOne({ username });
      if (!user) return res.redirect('/signup');
      
      // check if plaintext password matches encrypted password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) return next({
          log: 'Express error handler caught error in userController.verifyUser comparing password function',
          status: 500,
          message: {err},
        });

        /*
         * if passwords match, save user id into locals object
         * else, return 'Not_Found'
         */
        if (isMatch) {
          // res.cookie('quiz_user', account._id, {maxAge: 9000000000, httpOnly: true });
          res.locals.user = user;
          return next();
        } else return res.status(400).json({ result: 'Not_Found' });
      });
    } catch (err) {
      return next({
        log: 'Express error handler caught error in userController.verifyUser finding userName function',
        status: 500,
        message: {err},
      });
    }
  }
};

module.exports = userController;
