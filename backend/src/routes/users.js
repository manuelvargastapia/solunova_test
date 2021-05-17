'use strict';

const router = require('express').Router();
const registerUserValidator = require('../middlewares/register_user_validator');
const jwtHeaderValidator = require('../middlewares/jwt_header_validator');
const { createUser, getUser } = require('../controllers/userController');

// GET api/users endpoint to send a user after validating JWT.
router.get('/users', jwtHeaderValidator, getUser);

// POST api/users to create new users.
router.post('/users', registerUserValidator, createUser);

module.exports = router;
