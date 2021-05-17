'use strict';

// Just to ensure we're getting all the required parameters, we
// use Joi to validate the requests before handling them.
// Any error is forwarded to the `errorHandler` middleware.

const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({
    passError: true,
});

// Define a schema to accept `username` or `email`, exclusively, plus
// the required password.
const bodySchema = Joi.object({
    username: Joi.string(),
    email: Joi.string(),
    password: Joi.string().required(),
}).xor('username', 'email');

module.exports = validator.body(bodySchema);
