'use strict';

const router = require('express').Router();
const { login, sessionLogger } = require('../controllers/loginController');
const loginValidator = require('../middlewares/login_validator');

router.post('/login', loginValidator, login, sessionLogger);

module.exports = router;
