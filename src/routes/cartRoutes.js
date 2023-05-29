import express from "express";
import CartController from "../controllers/cartController.js";

const router = express.Router();

router
    .get("/cart", CartController.find)
    .get("/cart/:id", CartController.findById)
    .post("/cart", CartController.save)
    .put("/cart/:id", CartController.findByIdAndUpdate)
    .delete("/cart/:id", CartController.findByIdAndDelete);

export default router;