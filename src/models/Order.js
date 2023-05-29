import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
    {
        product: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
        quantity: {type: Number, required: true}
    }
);

const orderSchema = new mongoose.Schema(
    {
        id: {type: String},
        customer: {type: mongoose.Schema.Types.ObjectId, ref: 'customer', required: true},
        products: [productsSchema],
        address: {
            street: {type: String, required: true},
            number: {type: Number, required: true},
            complement: {type: String},
            country: {type: String, required: true},
            state: {type: String, required: true},
            city: {type: String, required: true}  
        }
    }
);

const order = mongoose.model('order', orderSchema);

export default order;