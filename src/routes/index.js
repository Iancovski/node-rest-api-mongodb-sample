import express from "express";
import CartRoutes from "./cartRoutes.js"
import CustomerRoutes from "./customerRoutes.js"
import OrderRoutes from "./orderRoutes.js"
import ProductRoutes from "./productRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send()
    })

    app.use(
        express.json(),
        CartRoutes,
        CustomerRoutes,
        OrderRoutes,
        ProductRoutes
    )
}

export default routes;