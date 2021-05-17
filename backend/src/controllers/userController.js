'use strict';

const jwt = require('jsonwebtoken');
const { User } = require('../models');
const ErrorResponse = require('../utils/error');

const createUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        return res.status(201).json({
            success: true,
            token: newUser.getSignedToken(),
            data: { newUser },
        });
    } catch (error) {
        next(error);
    }
};

const getUser = async (req, res, next) => {
    const { authorization } = req.headers;
    let token;

    // Extract raw token
    if (authorization && authorization.startsWith('Bearer')) {
        token = authorization.split(' ')[1];
    }

    if (!token) {
        return next(new ErrorResponse(401, 'Not authorized'));
    }

    try {
        // Decode raw token to filter the corresponding user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.id);

        if (!user) {
            return next(new ErrorResponse(404, 'User not found'));
        }

        return res.status(200).json({
            success: true,
            data: { user },
        });
    } catch (error) {
        next(error);
    }
};

module.exports = { createUser, getUser };
