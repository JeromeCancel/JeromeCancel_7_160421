// VARIABLES FOR REQUIEREMENTS //
const express = require('express');
const router = express.Router();


const UserService = require('../controllers/UserService');
const AuthService = require('../controllers/AuthService');
const AuthenticationJoi = require('../middlewares/AuthenticationJoi');


// ROUTES FOR AUTHENTICATION //
router.post('/register', AuthenticationJoi.register, AuthService.register);
router.post('/login', AuthService.login);

// ROUTES FOR USER MANAGEMENT //
router.delete('/user/:id', UserService.deleteUser);
router.put('/user/:id', UserService.updateUser);
router.get('/user/:id', UserService.getUser);

// EXPORT ROUTES //
module.exports = router;