import MyError from '../middlewares/myError.js';
import User from '../database/user.js';

class authController {
    async login(req, res, next) {
        try {
            const { name, email, password } = req.body;
            let auth = false;
            const user = await User.find();
            user.forEach((element) => {
                if (
                    element.name === name &&
                    element.password === password &&
                    element.email === email
                ) {
                    auth = true;
                    return res.status(200).json(auth);
                }
            });
            if (auth == false) {
                throw MyError.Unauthorized('Ошибка авторизации');
            }
            return res.status(401).json(auth);
        } catch (error) {
            next(error);
        }
    }
}

export default new authController();
