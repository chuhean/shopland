const mongoose = require("mongoose");

//Product Review Schema
const reviewSchema = mongoose.Schema({
      rating: {type: Number, required: true},
      text: {type: String, required: true},
      date: {type: Date, required: true, default: Date.now},
      author: {
        //User ID
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
});

module.exports = mongoose.model("Review", reviewSchema);