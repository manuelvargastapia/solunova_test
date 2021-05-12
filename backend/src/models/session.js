'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Session extends Model {
        static associate({ User }) {
            this.belongsTo(User, { foreignKey: 'userId' });
        }
    }

    Session.init(
        {
            userId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: 'Session',
            createdAt: 'timestamp',
            updatedAt: false,
        }
    );

    return Session;
};
