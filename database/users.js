const mongoose = require("./connect");
var USERSCHEMA = {
  name: String,
  email: String,
  password: String,
  registerdate: Date,
  sex: String,
  address: String
}
const USER = mongoose.model("users", USERSCHEMA);
module.exports = {model: USER, schema: USERSCHEMA};
