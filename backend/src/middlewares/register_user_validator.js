'use strict';

// Just to ensure we're getting all the required parameters, we
// use Joi to validate the requests before handling them.
// Any error is forwarded to the `errorHandler` middleware.

const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({
    passError: true,
});

// Define a schema to accept required fields
const bodySchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    userName: Joi.string().required(),
    password: Joi.string().required(),
});

module.exports = validator.body(bodySchema);
