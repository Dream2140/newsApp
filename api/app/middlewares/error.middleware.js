const ApiError = require('../exceptions/ApiError');

module.exports = function (err, req, res, next) {
    console.error(err);

    if (err instanceof ApiError) {
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }

    const stackTrace = err.stack;
    const functionName = stackTrace.split('\n')[1].split(' ')[5];

    return res.status(500).json({message: `Unexpected error occurred in method ${functionName}`})

};
