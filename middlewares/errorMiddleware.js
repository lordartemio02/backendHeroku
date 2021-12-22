import MyError from './myError.js';

function errorMiddleware(err, req, res, next) {
    console.log(err);
    if (err instanceof MyError) {
        return res
            .status(err.status)
            .json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: 'Непредвиденная ошибка' });
}
export default errorMiddleware;
