/*const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    confirmpassword: String
})
const RegisterModel = mongoose.model('signup', RegisterSchema);
module.exports = RegisterModel;*/
// ---------------------------------------------------------------- //


const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  confirmpassword: String,
  role: { type: String, default: 'user' }, // Default role is user
});

const RegisterModel = mongoose.model('Register', RegisterSchema);
module.exports = RegisterModel;
