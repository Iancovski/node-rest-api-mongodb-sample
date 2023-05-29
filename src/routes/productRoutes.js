import express from "express";
import ProductController from "../controllers/productController.js";

const router = express.Router();

router
    .get("/product", ProductController.find)
    .get("/product/:id", ProductController.findById)
    .post("/product", ProductController.save)
    .put("/product/:id", ProductController.findByIdAndUpdate)
    .delete("/product/:id", ProductController.findByIdAndDelete);

export default router;