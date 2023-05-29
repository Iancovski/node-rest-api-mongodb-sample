import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
    {
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
        quantity: {type: Number, required: true}
    }
);

const cartSchema = new mongoose.Schema(
    {
        id: {type: String},
        customer: {type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true},
        products: [productsSchema]
    }
);

const cart = mongoose.model('cart', cartSchema);

export default cart;