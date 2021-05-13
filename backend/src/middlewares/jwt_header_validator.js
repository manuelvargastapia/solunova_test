'use strict';

// To force clients to send a Bearer token with the JWT token,
// we use Joi to validate the requests before handling them.
// Any error is forwarded to the `errorHandler` middleware.

const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({
    passError: true,
});

// Define a schema to accept required fields
const headersSchema = Joi.object({
    authorization: Joi.string().required(),
});

module.exports = validator.headers(headersSchema);
