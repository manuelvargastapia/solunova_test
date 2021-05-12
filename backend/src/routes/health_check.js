'use strict';

const router = require('express').Router();

router.get('/health_check', (req, res) => {
    res.status(200).send();
});

module.exports = router;
