const router = require("express").Router();

const {
  getBlogs,
  getBlog,
  // upload,
  createNewBlog,
  showOne,
  deleteBlog,
  updateBlog,
} = require("../controllers/blogsController");

// get all
router.get("/", getBlogs);

// get one
router.get("/:id", getBlog);

// post new
// router.post("/new", upload.single("img"), createNewBlog);
router.post("/new", createNewBlog);

// show one
router.get("/:slug", showOne);

// delete
router.delete("/:id", deleteBlog);

// update
// router.put("/edit/:id", upload.single("blogImg"), updateBlog);
router.put("/edit/:id", updateBlog);

module.exports = router;
