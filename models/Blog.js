const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    placeName: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
      slug_padding_size: 2,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);
