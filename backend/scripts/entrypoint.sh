#!/usr/bin/env bash

# This script comes in handy because it's intended to be executed
# right after creating the backend Docker image.

# Use docker values to connect to DB according to src/config/db_config.js
export NODE_ENV=docker

# Connect to the already existing DB (Postgres container) and create tables
npx sequelize-cli db:migrate

# Start the backend
npm start