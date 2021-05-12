'use strict';

// Handle errors based on type. When it's a Joi error, treat them as
// "BAD REQUEST" and append an explanation. Otherwise, send an "INTERNAL"
// error
module.exports = (err, _, res, __) => {
    if (err && err.error && err.error.isJoi) {
        res.status(400).json({
            success: false,
            data: {
                error: `Invalid data in ${err.type}`,
                message: err.error.toString(),
            },
        });
    } else {
        res.status(500).json({
            success: false,
            data: {
                error: 'Internal server error',
                message: err.message,
            },
        });
    }
};
