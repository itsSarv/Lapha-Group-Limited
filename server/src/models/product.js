const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: { type: String,},
  price: {
    type: Number,
  },
  productDescription: {
    type: String,
  },
  productCategory: {
    type: String,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
