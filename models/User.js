const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const userSchema = mongoose.Schema({
  local: {
    username: String,
    email: String,
    password: String,
    workHours: Int,
  },
  userInfo: {
    wrkExp: [],
    skills: [],
    certs: [],
    resume: String,
  },
});

// generating a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model("users", userSchema);
