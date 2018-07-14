const mongoose = require("mongoose");

//Product Schema
const merchantSchema = mongoose.Schema({
      name: {type: String, required: true},
      email: {type: String, unique: true},
      tel: String,
      password: String,
});

module.exports = mongoose.model("Merchant", merchantSchema);