const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const userController = {};

// testing upload image
userController.uploadImage = async (req, res, next) => {
  console.log('upload image start');
  const { image } = req.body;
  console.log(image);
  if (!image || image.size >= 16 * 1024 * 1024) {
    return res.status(400).json({ error: 'Invalid image size' });
  }
  try {
    const imageSchema = new mongoose.Schema({
      image: { type: String, required: true },
    });
    const TestModel = mongoose.model('Test', imageSchema);
    await TestModelsave({ image: req.body.image });
    console.log('upload image finish');
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught error in userController.uploadImage function',
      status: 500,
      message: { err },
    });
  }
};

/*
 * getAllUserInformation - get information of all users from database
 */
userController.getAllUserInformation = async (req, res, next) => {
  try {
    /*
     * declare variable for user_id
     * get information of all users and filter out the current user
     */
    const user_id = req.cookies.TechTango_SSID;
    // const allUserInformations = await User.find({}, { _id: 0, password: 0 });
    // for (const [index, userInformation] of allUserInformations.entries()) {
    //   if (userInformation._id.toString() === user_id) {
    //     res.locals.user = userInformation;
    //     res.locals.otherUsers = allUserInformations.splice(index, 1);
    //     return next();
    //   }
    // }
    res.locals.user = await User.find({}, 'username personal_bios profile_pic');
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught error in userController.getAllUserInformation function',
      status: 500,
      message: { err },
    });
  }
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
  const profile_pic = req.body.profile_pic || 'default';
  const personal_bios = req.body.personal_bios;
  const link_in_bio = req.body.link_in_bio || [];
  // "[{name: 'Github', bio : 'https://github...'}, {}, {}]"
  // '[]'

  // if format is incorrect return error
  if (!username || !password) {
    return next({
      log: 'Express error handler caught error in userController.createUser creating user function',
      status: 400,
      message: { Error: 'Your POST request was unsuccessful' },
    });
  }
  try {
    /*
     * create new user and save it into document
     * save user id into cookie
     * password is hashed before saved in userModel.js
     */
    const newUser = new User({
      username,
      password,
      profile_pic,
      personal_bios,
      link_in_bio,
    });
    await newUser.save();
    console.log('new user: ', newUser);
    res.cookie('TechTango_SSID', newUser.id, {
      maxAge: 9000000000,
      httpOnly: true,
    });
    return next();
  } catch (err) {
    return next({
      log: 'Express error handler caught error in userController.createUser saving newUser function',
      status: 500,
      message: { err },
    });
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
      message: { err: 'Your POST request was unsuccessful' },
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
        if (err)
          return next({
            log: 'Express error handler caught error in userController.verifyUser comparing password function',
            status: 500,
            message: { err },
          });

        /*
         * if passwords match, save user id into cookie
         * else, return 'Not_Found'
         */
        if (isMatch) {
          res.cookie('TechTango_SSID', user.id, {
            maxAge: 9000000000,
            httpOnly: true,
          });
          return next();
        } else return res.status(400).json({ result: 'Not_Found' });
      });
    } catch (err) {
      return next({
        log: 'Express error handler caught error in userController.verifyUser finding userName function',
        status: 500,
        message: { err },
      });
    }
  }
};

module.exports = userController;
