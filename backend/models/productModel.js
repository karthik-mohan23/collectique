const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const productSchema = new mongoose.Schema(
  {
    //to identify which admin created this product
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },

    countInStock: {
      type: Boolean,
      required: true,
    },
    assured: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

//  A product can have multiple reviews associated with it. By using an array, you can store and retrieve all the reviews related to a product easily. Each element in the reviews array represents an individual review, which typically includes information like the user who left the review, the rating, the comment, and any other review-specific data.

// Scalability: As your application grows, you may want to add more features and properties to reviews, such as timestamps for when reviews were created, updated, or deleted, or additional metadata.

// Flexibility: When reviews are stored as an array within the product schema, you can have multiple reviews associated with a single product.
