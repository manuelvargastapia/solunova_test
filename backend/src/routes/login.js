'use strict';

const router = require('express').Router();
const { login, sessionLogger } = require('../controllers/loginController');
const loginValidator = require('../middlewares/login_validator');

// POST api/login endpoint to authenticate users using JWT.
router.post('/login', loginValidator, login, sessionLogger);

module.exports = router;
