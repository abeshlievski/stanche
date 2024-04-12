const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    cube: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default:
        "https://duncanlock.net/images/posts/better-figures-images-plugin-for-pelican/dummy-200x200.png",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ad", adSchema);
