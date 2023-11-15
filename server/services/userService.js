const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

async function registerUser(name, email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new UserModel({
    name,
    email,
    password: hashedPassword,
  });
  return user.save();
}

async function loginUser(email, password) {
  const user = await UserModel.findOne({ email });
  return user;
}

module.exports = {
  registerUser,
  loginUser,
};
