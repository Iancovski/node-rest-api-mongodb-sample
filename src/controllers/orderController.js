import Order from "../models/Order.js";

class OrderController {

    static find = (req, res) => {
        Order.find((err, orders) => {
            res.status(200).json(orders);
        })
    }

    static findById = (req, res) => {
        const id = req.params.id;

        Order.findById(id, (err, order) => {
            if (err) {
                res.status(400).send({message: `Order not found.\n${err.message}`});
            } else {
                res.status(200).send(order);
            }
        })
    }

    static findByCustomer = (req, res) => {
        const customer = req.query.customer;

        Order.find({'customer': customer}, {}, (err, orders) => {
            res.status(200).send(orders)
        })
    }

    static save = (req, res) => {
        let order = new Order(req.body);

        order.save((err) => {
            if (err) {
                res.status(500).send({message: `Error saving order.\n${err.message}`});
            } else {
                res.status(201).send(order.toJSON()); 
            }
        })
    }

    static findByIdAndUpdate = (req, res) => {
        const id = req.params.id;

        Order.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `Error updating order.\n${err.message}`});
            } else {
                res.status(200).send({message: 'Order updated successfully.'});    
            }
        })
    }

    static findByIdAndDelete = (req, res) => {
        const id = req.params.id;

        Order.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `Error deleting order.\n${err.message}`});
            } else {
                res.status(200).send({message: 'Order deleted sucessfully.'});
            }
        })
    }

}

export default OrderController;