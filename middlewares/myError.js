class MyError extends Error {
    status;
    errors;

    constructor(status, message, errors = []) {
        super(message);
        this.status = status;
        this.errors = errors;
    }

    static BadRequest(message, errors = []) {
        return new MyError(400, message, errors);
    }
    static Unauthorized(message, errors = []) {
        return new MyError(401, message, errors);
    }

    static NotFound(message, errors = []) {
        return new MyError(404, message, errors);
    }
}

export default MyError;
