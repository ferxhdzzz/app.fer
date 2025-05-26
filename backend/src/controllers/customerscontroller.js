const customersController = {};

import customersModel from "../models/Customers.js";

//get - select

customersController.getCustomers = async (req, res) => {

    const customers = await customersModel.find()
    res.json (customers)
}

//post - agregar
          
customersController.createCustomer = async (req, res) => {
    const {name, lastName, birthday, email,password,telephone,dui, isVerified} = req.body; //req.body = lo que le pedimos al frontend
    const  newcustomer = new customersModel({name, lastName, birthday, email,password,telephone,dui, isVerified});
    await newcustomer.save()
    res.json({message: "customer saved"})
}
 
//delete

customersController.deleteCustomer = async (req, res) => {
await customersModel.findOneAndDelete(req.params.id)
res.json({message: "customer deleted"})
}

// actualizar - post

customersController.updateCustomer = async (req, res) =>{
const {name, lastName, birthday, email,password,telephone,dui,isVerified} = req.body; // solicito los valores
await customersModel.findByIdAndUpdate(req.params.id, {
    name, 
    lastName, 
    birthday, 
    email,
    password,
    telephone,
    dui,
    isVerified
}, {new: true});
res.json({message: "customer deleted"})
}

export default customersController;

