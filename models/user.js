const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true, // ❗ important
  },
  name: String
});
const user = mongoose.model("User", userSchema);
module.exports = user;
