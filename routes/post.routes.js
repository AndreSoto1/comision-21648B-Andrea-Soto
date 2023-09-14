
const express = require('express');
const router = express.Router();
const {
  getAllPost,
  formCreateNewPost,
  formUpdatePost,
  newPost,
  updatePost,
  deletePost
} = require('../scr/controllers/post.controllers');

// Rutas
router.get('/', getAllPost);
router.get('/create', formCreateNewPost);
router.get('/edit/:id', formUpdatePost);
router.post('/create', newPost);
router.post('/edit/:id', updatePost);
router.get('/delete/:id', deletePost);

module.exports = router;

