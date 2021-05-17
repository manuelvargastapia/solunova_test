'use strict';

const router = require('express').Router();

// Simple health check endpoint to sync services in docker-compose.yml
router.get('/health_check', (_, res) => {
    res.status(200).send();
});

module.exports = router;
