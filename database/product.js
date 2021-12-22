import mongoose from 'mongoose';

const Product = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    massa: { type: String, required: true },
    currency: { type: String, required: true },
    url: { type: String, required: true },
});

export default mongoose.model('Product', Product);
