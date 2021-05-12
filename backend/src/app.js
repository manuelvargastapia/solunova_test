'use strict';

const express = require('express');
const cors = require('cors');
const healthCheck = require('./routes/health_check');
const login = require('./routes/login');
const users = require('./routes/users');
const errorHandler = require('./middlewares/error_handler');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', healthCheck);
app.use('/api', login);
app.use('/api', users);

app.use(errorHandler);

module.exports = app;
