const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

accountSchema.pre('save', function (next) {
  const account = this;

  // generate a salt through SALT_WORK_FACTOR
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) return next({
      log: 'Express error handler caught error in userModel bcrypt.genSalt function',
      status: 500,
      message: {err},
    });

    // hash the password using new salt
    bcrypt.hash(account.password, salt, function (err, hash) {
      if (err) return next({
        log: 'Express error handler caught error in userModel bcrypt.hash function',
        status: 500,
        message: {err},
      });

      // overwrite the plaintext password with the hashed one
      account.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);
