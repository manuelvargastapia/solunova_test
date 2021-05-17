'use strict';

const { Model } = require('sequelize');

// "Session" model.
//
// It models the data required to create a register in the "Session"
// table that stores any users' session instance to generate a log.
module.exports = (sequelize, DataTypes) => {
    class Session extends Model {
        static associate({ User }) {
            this.belongsTo(User, { foreignKey: 'userUuid' });
        }
    }

    Session.init(
        {
            userUuid: {
                type: DataTypes.UUID,
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: 'Session',
            createdAt: 'timestamp',
            updatedAt: false,

            // Define table name to prevent Sequelize unexpectedly assuming the
            // plural name for the table: "Sessions"
            tableName: 'Session',
        }
    );

    return Session;
};
