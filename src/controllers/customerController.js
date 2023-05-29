import Customer from "../models/Customer.js";

class CustomerController {

    static find = (req, res) => {
        Customer.find((err, customers) => {
            res.status(200).json(customers);
        })
    }

    static findById = (req, res) => {
        const id = req.params.id;

        Customer.findById(id, (err, customer) => {
            if (err) {
                res.status(400).send({message: `Customer not found.\n${err.message}`});
            } else {
                res.status(200).send(customer);
            }
        })
    }

    static save = (req, res) => {
        let customer = new Customer(req.body);

        customer.save((err) => {
            if (err) {
                res.status(500).send({message: `Error saving customer.\n${err.message}`});
            } else {
                res.status(201).send(customer.toJSON()); 
            }
        })
    }

    static findByIdAndUpdate = (req, res) => {
        const id = req.params.id;

        Customer.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (err) {
                res.status(500).send({message: `Error updating customer.\n${err.message}`});
            } else {
                res.status(200).send({message: 'Customer updated successfully.'});    
            }
        })
    }

    static findByIdAndDelete = (req, res) => {
        const id = req.params.id;

        Customer.findByIdAndDelete(id, (err) => {
            if (err) {
                res.status(500).send({message: `Error deleting customer.\n${err.message}`});
            } else {
                res.status(200).send({message: 'Customer deleted sucessfully.'});
            }
        })
    }

}

export default CustomerController;