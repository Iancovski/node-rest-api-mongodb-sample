import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: {type: String},
        description: {type: String, required: true},
        price: {type: Number, required: true}
    }
);

const product = mongoose.model('product', productSchema);

export default product;