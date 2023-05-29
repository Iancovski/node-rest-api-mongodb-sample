import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin@noderestapisample.vbcunw5.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;