const express = require("express");
const router = express.Router();

const Blog = require("../models/Blog");


// GET ALL BLOGS
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// GET SINGLE BLOG
router.get("/:id", async (req, res) => {
  try {

    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      data: blog
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});


// CREATE BLOG
router.post("/", async (req, res) => {
  try {

    const { title, content, author } = req.body;

    const newBlog = new Blog({
      title,
      content,
      author
    });

    const savedBlog = await newBlog.save();

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: savedBlog
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});


// UPDATE BLOG
router.put("/:id", async (req, res) => {
  try {

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!updatedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      data: updatedBlog
    });

  } catch (error) {

    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});


// DELETE BLOG
router.delete("/:id", async (req, res) => {
  try {

    const deletedBlog = await Blog.findByIdAndDelete(
      req.params.id
    );

    if (!deletedBlog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;