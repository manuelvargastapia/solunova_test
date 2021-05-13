'use strict';

const router = require('express').Router();
const registerUserValidator = require('../middlewares/register_user_validator');
const jwtHeaderValidator = require('../middlewares/jwt_header_validator');
const { createUser, getUser } = require('../controllers/userController');

router.get('/users', jwtHeaderValidator, getUser);

router.post('/users', registerUserValidator, createUser);

module.exports = router;
