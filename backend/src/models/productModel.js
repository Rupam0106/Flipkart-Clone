const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: Object,
      required: [true, "Please Enter title of the Product"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please Enter Description of the Product"],
      trim: true,
    },
    price: {
      type: Object,
      required: [true, "Please Enter Price of the Product"],
    },
    url: {
      type: String,
      required: [true, "Please Provide Product Image"],
    },
    detailUrl: {
      type: String,
      required: [true, "Please Provide Product Image"],
    },
    discount: {
      type: String,
      required: [true, "Please Provide Product discount"],
    },
    tagline: {
      type: String,
      required: [true, "Please Provide Product tagline"],
    },
    stock: {
      type: Number,
      required: [true, "Please Enter product Stock"],
      maxLength: [4, "Stock cannot exceed 4 characters"],
      default: 1,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
