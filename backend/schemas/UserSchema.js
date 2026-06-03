const { Schema } = require("mongoose");

const UserSchema = new Schema({
  fullname: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

module.exports = { UserSchema };