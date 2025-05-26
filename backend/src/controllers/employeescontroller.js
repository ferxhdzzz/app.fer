const employeesController = {};

import employeesModel from "../models/Employees.js";

//get - select

employeesController.getEmployees = async (req, res) => {

    const employees = await employeesModel.find()
    res.json (employees)
}

//post - agregar
          
employeesController.createEmployees = async (req, res) => {
    const {name, lastName, birthday, email, address,hireDate,password,telephone,dui, isssNumber} = req.body; //req.body = lo que le pedimos al frontend
    const  newemployee = new employeesModel({name, lastName, birthday, email, address,hireDate,password,telephone,dui, isssNumber});
    await newemployee.save()
    res.json({message: "employee saved"})
}
 
//delete

employeesController.deleteEmployees = async (req, res) => {
await employeesModel.findOneAndDelete(req.params.id)
res.json({message: "employee deleted"})
}

// actualizar - post

employeesController.updateCustomer = async (req, res) =>{
const {name, lastName, birthday, email, address,hireDate,password,telephone,dui, isssNumber} = req.body; // solicito los valores
await employeesModel.findByIdAndUpdate(req.params.id, {
    name, 
    lastName,
     birthday, 
     email, 
     address,
     hireDate,
     password,
     telephone,
     dui, 
     isssNumber
}, {new: true});
res.json({message: "employee deleted"})
}

export default employeesController;