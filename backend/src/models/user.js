'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate({ Post }) {
            this.hasMany(Post, { foreignKey: 'userId' });
        }

        // Don't return the user's password nor id
        toJSON() {
            return {
                ...this.get(),
                id: undefined,
                password: undefined,
            };
        }
    }

    User.init(
        {
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            userName: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',
        }
    );

    return User;
};
