import Cart from "../models/Cart.js";

class CartController {

    static find = (req, res) => {
        Cart.find((err, carts) => {
            res.status(200).json(carts);
        })
    }

    static findById = (req, res) => {
        const id = req.params.id;

        Cart.findById(id, (err, cart) => {
            if (err) {
                res.status(400).send({message: `Cart not found.\n${err.message}`});
            } else {
                res.status(200).send(cart);
            }
        })
    }

    static save = (req, res) => {
        let cart = new Cart(req.body);

        cart.save((err) => {
            if (err) {
                res.status(500).send({message: `Error saving cart.\n${err.message}`});
            } else {
                res.status(201).send(cart.toJSON()); 
            }
        })
    }

    static findByIdAndUpdate = (req, res) => {
        const id = req.params.id;

        Cart.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `Error updating cart.\n${err.message}`});
            } else {
                res.status(200).send({message: 'Cart updated successfully.'});    
            }
        })
    }

    static findByIdAndDelete = (req, res) => {
        const id = req.params.id;

        Cart.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `Error deleting cart.\n${err.message}`});
            } else {
                res.status(200).send({message: 'Cart deleted sucessfully.'});
            }
        })
    }

}

export default CartController;