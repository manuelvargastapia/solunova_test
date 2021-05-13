'use strict';

const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate({ Session }) {
            this.hasMany(Session, { foreignKey: 'userUuid' });
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
            uuid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                allowNull: false,
            },
            firstname: DataTypes.STRING,
            lastname: DataTypes.STRING,
            email: DataTypes.STRING,
            username: DataTypes.STRING,
            password: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'User',
            hooks: {
                // Encrypt password just before saving to DB
                beforeCreate: (user) => {
                    const salt = bcrypt.genSaltSync(10);
                    user.password = bcrypt.hashSync(user.password, salt);
                },
            },

            // Define table name to prevent Sequelize unexpectedly assuming the
            // plural name for the table: "Users"
            tableName: 'User',
        }
    );

    // Instance method to check password validity
    User.prototype.isPasswordValid = function (password) {
        return bcrypt.compareSync(password, this.password);
    };

    // Instance method to generate a JWT
    User.prototype.getSignedToken = function () {
        return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
            expiresIn: '20min',
        });
    };

    return User;
};
