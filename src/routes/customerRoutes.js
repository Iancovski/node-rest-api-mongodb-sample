import express from "express";
import CustomerController from "../controllers/customerController.js";

const router = express.Router();

router
    .get("/customer", CustomerController.find)
    .get("/customer/:id", CustomerController.findById)
    .post("/customer", CustomerController.save)
    .put("/customer/:id", CustomerController.findByIdAndUpdate)
    .delete("/customer/:id", CustomerController.findByIdAndDelete);

export default router;