// VARIABLES FOR REQUIEREMENTS //
const express = require('express');
const router = express.Router();


const UserService = require('../controllers/UserService');
const AuthenticationJoi = require('../middlewares/AuthenticationJoi');


// CREATE ROUTES FOR AUTENTIFICATION, ADD verifyPassword FOR SIGNUP AND limiter TO THE LOGIN ROUTE //
router.post('/register', AuthenticationJoi.register, UserService.register);
router.post('/login', UserService.login);
router.delete('/user/:id', UserService.deleteUser);
router.put('/user/:id', UserService.updateUser);
router.get('/user/:id', UserService.getUser);

// EXPORT ROUTES //
module.exports = router;