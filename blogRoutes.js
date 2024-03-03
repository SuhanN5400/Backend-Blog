const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/blogs', async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/blogs', async (req, res) => {
  const blog = new Blog({
    title: req.body.title,
    blogContent: req.body.blogContent,
    authorName: req.body.authorName
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
