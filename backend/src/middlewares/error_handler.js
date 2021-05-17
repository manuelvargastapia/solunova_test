'use strict';

// Handle errors based on type. When it's a Joi error, treat them as
// "BAD REQUEST" and append an explanation. Otherwise, compose a response
// using provided data or fallback to an "INTERNAL" error.
module.exports = (err, _, res, __) => {
    if (err && err.error && err.error.isJoi) {
        return res.status(400).json({
            success: false,
            data: {
                error: `Invalid data in ${err.type}`,
                message: err.error.toString(),
            },
        });
    }

    return res.status(err.statusCode || 500).json({
        success: false,
        data: {
            error: err.message || 'Internal server error',
        },
    });
};
