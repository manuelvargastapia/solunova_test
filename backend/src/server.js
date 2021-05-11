'use strict';

const app = require('./app');
const { sequelize } = require('./models');

const server = app.listen(3000);
console.log(`Listening on port 3000`);

// Check database connection status
sequelize
    .authenticate()
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.log("Couldn't connect to database:", error.message);
        server.close(() => {
            console.log('Server closed');
        });
    });
