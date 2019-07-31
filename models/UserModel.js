const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: String,
  isEmployee: Boolean
});

const UserInfo = mongoose.model("UserInfo", UserSchema);

module.exports = UserInfo;
