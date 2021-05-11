'use strict';

const router = require('express').Router();
const registerUserValidator = require('../middlewares/register_user_validator');

router.get('/users', (req, res) => {
    res.status(200).send();
});

router.post('/users', registerUserValidator, (req, res) => {
    res.status(200).send();
});

module.exports = router;
