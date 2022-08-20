const Blog = require("../models/Blog");
// const multer = require("multer");

const mongoose = require("mongoose");

// get all
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).sort({ createdAt: -1 });
  res.status(200).json(blogs);
};

// get one
const getBlog = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No blog" });
  }

  if (!blog) {
    return res.status(404).json({ error: "No blog" });
  }
  res.status(200).json(blog);
};

// // upload img
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "../../sl_frontend/public/uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });
// const upload = multer({ storage: storage });

// post new
const createNewBlog = async (req, res) => {
  const {
    title,
    author,
    body,
    img,
    favorite,
    // country,
    category,
  } = req.body;
  try {
    const blog = await Blog.create({
      title,
      author,
      body,
      img,
      favorite,
      // country,
      category,
    });
    res.status(200).json(blog);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// show one
const showOne = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findOne({ slug: req.params.slug });

  console.log(blog);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No blog" });
  }

  if (!blog) {
    return res.status(404).json({ error: "No blog" });
  }
  res.status(200).json(blog);
};

// delete
const deleteBlog = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No blog" });
  }

  const blog = await Blog.findOneAndDelete({ _id: id });

  if (!blog) {
    return res.status(404).json({ error: "No blog" });
  }
  res.status(200).json(blog);
};

// update
const updateBlog = async (req, res) => {
  const { id } = req.params;

  console.log(id);
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No blog" });
  }

  const blog = await Blog.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );

  if (!blog) {
    return res.status(404).json({ error: "No blog" });
  }
  console.log(blog);
  res.status(200).json(blog);
};

module.exports = {
  getBlogs,
  getBlog,
  // upload,
  createNewBlog,
  showOne,
  deleteBlog,
  updateBlog,
};
