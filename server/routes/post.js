// VARIABLES FOR REQUIEREMENTS //
const express = require('express');
const router = express.Router();

const PostService = require('../controllers/PostService');
//const isAuthenticated = require ('../middlewares/isAuthenticated');

// CREATE ROUTES FOR AUTENTIFICATION //
router.post('/post', PostService.createPost);
router.get('/post', PostService.findAllPost);

// EXPORT ROUTES //
module.exports = router;