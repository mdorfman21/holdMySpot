const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  given_name: String,
  isEmployee: Boolean,
  family_name: String,
  nickname: String,
  name: String,
  picture: String,
  locale: String,
  updated_at: String,
  email: String,
  email_verified: Boolean,
  sub: String
});

const UserInfo = mongoose.model("UserInfo", UserSchema);

module.exports = UserInfo;
