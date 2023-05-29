import Product from "../models/Product.js";

class ProductController {

    static find = (req, res) => {
        Product.find((err, products) => {
            res.status(200).json(products);
        })
    }

    static findById = (req, res) => {
        const id = req.params.id;

        Product.findById(id, (err, product) => {
            if (err) {
                res.status(400).send({message: `Product not found.\n${err.message}`});
            } else {
                res.status(200).send(product);
            }
        })
    }

    static save = (req, res) => {
        let product = new Product(req.body);

        product.save((err) => {
            if (err) {
                res.status(500).send({message: `Error saving product.\n${err.message}`});
            } else {
                res.status(201).send(product.toJSON()); 
            }
        })
    }

    static findByIdAndUpdate = (req, res) => {
        const id = req.params.id;

        Product.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `Error updating product.\n${err.message}`});
            } else {
                res.status(200).send({message: 'Product updated successfully.'});    
            }
        })
    }

    static findByIdAndDelete = (req, res) => {
        const id = req.params.id;

        Product.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `Error deleting product.\n${err.message}`});
            } else {
                res.status(200).send({message: 'Product deleted sucessfully.'});
            }
        })
    }

}

export default ProductController;