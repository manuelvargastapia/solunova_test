'use strict';

const router = require('express').Router();
const { login } = require('../controllers/loginController');
const loginValidator = require('../middlewares/login_validator');

router.post('/login', loginValidator, login);

module.exports = router;
