// VARIABLES FOR REQUIEREMENTS //
const express = require('express');
const router = express.Router();

const CommentService = require('../controllers/CommentService');

// CREATE ROUTES FOR AUTENTIFICATION //
router.post('/comment', CommentService.createComment);
router.get('/comment', CommentService.findAllComment);
router.get('/comment/:id', CommentService.findOneComment);

// EXPORT ROUTES //
module.exports = router;