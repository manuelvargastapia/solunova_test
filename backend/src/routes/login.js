'use strict';

const router = require('express').Router();
const { login } = require('../controllers/loginController');

router.post('/login', login);

module.exports = router;
