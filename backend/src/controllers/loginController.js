'use strict';

const { User, Session } = require('../models');
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

        res.status(200).json({
            success: true,
            token: existingUser.getSignedToken(),
        });

        // Forward the user to the next middleware after sending the response
        res.locals.logedInUser = existingUser;
        next();
    } catch (error) {
        next(error);
    }
};

// Store session instance right after login
const sessionLogger = async (_, res, next) => {
    try {
        const user = res.locals.logedInUser;
        await Session.create({ userUuid: user.uuid });
    } catch (error) {
        next(error);
    }
};

module.exports = { login, sessionLogger };
