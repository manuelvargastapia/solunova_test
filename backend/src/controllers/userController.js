const { User } = require('../models');

const createUser = async (req, res, next) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

const getUser = () => {};

module.exports = { createUser, getUser };
