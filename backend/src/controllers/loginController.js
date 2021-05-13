'use strict';

const { User } = require('../models');
const ErrorResponse = require('../utils/error');

const login = async (req, res, next) => {
    // Pick existing credential, because it could be the `username`
    // or the `email`, exclusively
    const credentials = {};
    const { email, username, password } = req.body;
    if (email != undefined) {
        credentials.email = email;
    } else {
        credentials.username = username;
    }

    try {
        // Filter by username or email accordingly
        const existingUser = await User.findOne({ where: credentials });

        if (!existingUser) {
            return next(new ErrorResponse(404, 'User not found'));
        }

        if (!existingUser.isPasswordValid(password)) {
            return next(new ErrorResponse(401, 'Invalid credentials'));
        }

        return res
            .status(200)
            .json({ success: true, token: existingUser.getSignedToken() });
    } catch (error) {
        next(error);
    }
};

module.exports = { login };
