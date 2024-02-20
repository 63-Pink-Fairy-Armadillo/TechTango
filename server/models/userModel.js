const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const linkInBioSchema = new Schema({
  name: { type: String, required: true, unique: true },
  link: { type: String, required: true },
});

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_pic: { type: String, required: true },
  personal_bios: { type: String },
  link_in_bio: [linkInBioSchema],
  hashtag: {
    tag1: { type: Number, default: 1 },
    tag2: { type: Number, default: 1 },
    tag3: { type: Number, default: 1 },
  },
});

userSchema.pre('save', function (next) {
  const newUser = this;

  // generate a salt through SALT_WORK_FACTOR
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err)
      return next({
        log: 'Express error handler caught error in userModel bcrypt.genSalt function',
        status: 500,
        message: { err },
      });

    // hash the password using new salt
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err)
        return next({
          log: 'Express error handler caught error in userModel bcrypt.hash function',
          status: 500,
          message: { err },
        });

      // overwrite the plaintext password with the hashed one
      newUser.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);
