import MyError from '../middlewares/myError.js';
import Product from '../database/product.js';

class itemController {
    async addProduct(req, res, next) {
        try {
            const { name, price, massa, currency, url } = req.body;

            if (
                name == null ||
                price == null ||
                massa == null ||
                currency == null ||
                url == null
            ) {
                throw MyError.BadRequest('Переданы не все заголовки');
            }
            if (String(parseFloat(price, 10)) !== String(price))
                throw MyError.BadRequest('Цена не число!');
            const product = await Product.create({
                name,
                price,
                massa,
                currency,
                url,
            });
            return res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    async getProducts(req, res, next) {
        try {
            const products = await Product.find();
            return res.status(200).json(products);
        } catch (error) {
            next(error);
        }
    }

    async getProduct(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw MyError.BadRequest('Id не передан');
            }
            const product = await Product.findById(id);
            if (product == null) throw MyError.NotFound('Продукт не найден');
            return res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const { product } = req.body;
            if (!product) {
                throw MyError.BadRequest('Продукт не передан');
            }
            if (String(parseFloat(product.price, 10)) !== String(product.price))
                throw MyError.BadRequest('Цена не число!');
            const updateProduct = await Product.findByIdAndUpdate(
                product._id,
                product,
                { new: true }
            );
            if (updateProduct == null)
                throw MyError.NotFound(product);
            return res.status(200).json(updateProduct);
        } catch (error) {
            next(error);
        }
    }
    async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                throw MyError.BadRequest('Id не передан');
            }
            const product = await Product.findByIdAndDelete(id);
            if (product == null)
                throw MyError.NotFound('Продукт не удалось удалить');
            return res.status(200).json(product);
        } catch (error) {
            next(error);
        }
    }

    getHeaders(req, res, next) {
        try {
            //const { catalogId } = req.body;
            return res.status(200).json(req.headers);
            return res.status(200).json(req.query);
        } catch (error) {
            next(error);
        }
    }
}

export default new itemController();
