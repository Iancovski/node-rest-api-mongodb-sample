import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        phone_number: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true}
    }
);

const customer = mongoose.model('customer', customerSchema);

export default customer;