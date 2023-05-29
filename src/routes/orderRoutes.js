import express from "express";
import OrderController from "../controllers/orderController.js";

const router = express.Router();

router
    .get("/order", OrderController.find)
    .get("/order/search", OrderController.findByCustomer)
    .get("/order/:id", OrderController.findById)
    .post("/order", OrderController.save)
    .put("/order/:id", OrderController.findByIdAndUpdate)
    .delete("/order/:id", OrderController.findByIdAndDelete);

export default router;