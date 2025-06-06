//array de metodos
const productsController = {};

import productsModel from "../models/Products.js";

//get - select

productsController.getProducts = async (req, res) => {

    const products = await productsModel.find()
    res.json (products)
}

//post - agregar

productsController.createProducts = async (req, res) => {
    const {name, description, price, stock} = req.body; //req.body = lo que le pedimos al frontend
    const  newproduct = new productsModel({name, description, price, stock});
    await newproduct.save()
    res.json({message: "product saved"})
}
 
//delete

productsController.deleteProducts = async (req, res) => {
await productsModel.findOneAndDelete(req.params.id)
res.json({message: "product deleted"})
}

// actualizar - post
productsController.updatesProducts = async (req, res) =>{
const {name, description, price, stock} = req.body; // solicito los valores
await productsModel.findByIdAndUpdate(req.params.id, {
    name,
    description,
    price, 
    stock
}, {new: true});
res.json({message: "product updated"})
}

export default productsController;

