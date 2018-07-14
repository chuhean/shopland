const mongoose = require("mongoose");

//Product Schema
const productSchema = mongoose.Schema({
      title: {type: String, required: true},
      image: String,
      description: String,
      price: Number,
      rating: Number,
      merchant: {
        //Merchant ID
        type: mongoose.Schema.Types.ObjectId,
        ref: "Merchant"
      }
});

module.exports = mongoose.model("Product", productSchema);