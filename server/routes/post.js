// VARIABLES FOR REQUIEREMENTS //
const express = require('express');
const router = express.Router();

const PostService = require('../controllers/PostService');

// CREATE ROUTES FOR POSTS//
router.post('/post', PostService.createPost);
router.get('/post', PostService.findAllPost);
router.get('/post/:id', PostService.findOnePost);

// EXPORT ROUTES //
module.exports = router;