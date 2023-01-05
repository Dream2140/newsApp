module.exports = class ApiError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User not authorized')
    }

    static NotAllowedError(){
        return new ApiError(405, 'Not Allowed')
    }

    static BadRequest(message, errors = []) {
        return new ApiError(400, message);
    }

    static NotFoundRequest(message) {
        return new ApiError(404, message);
    }

    static DataBaseError(error) {
        return new ApiError(500, `Unexpected error in DB`, error)
    }
}
