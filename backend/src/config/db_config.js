'use strict';

module.exports = {
    // Local environment.
    // Requires a running DB; it could be used the Postgres image
    // setted up by docker-compose.yml
    development: {
        username: 'postgres',
        password: 'password',
        database: 'solunova_test',
        host: 'localhost',
        port: 5432,
        dialect: 'postgres',
    },

    // Docker Compose environment.
    // Using docker-compose.yml file, this environment is populated
    // with environment variables provided by Docker.
    // It allows the interaction between the backend container and
    // the Postgres container.
    docker: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: process.env.DB_DIALECT,
    },
};
