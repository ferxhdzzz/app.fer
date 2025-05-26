const branchesController = {};

import branchesModel from "../models/Branches.js";

//get - select

branchesController.getBranches = async (req, res) => {

    const branches = await branchesModel.find()
    res.json (branches)
}

//post - agregar
          
branchesController.createBranches = async (req, res) => {
    const {name, address, telephone, schedule} = req.body; //req.body = lo que le pedimos al frontend
    const  newbranch = new branchesModel({name, address, telephone, schedule});
    await newbranch.save()
    res.json({message: "branch saved"})
}
 
//delete

branchesController.deleteBranches = async (req, res) => {
await branchesModel.findOneAndDelete(req.params.id)
res.json({message: "branch deleted"})
}

// actualizar - post

branchesController.updateBranches = async (req, res) =>{
const {name, address, telephone, schedule} = req.body; // solicito los valores
await branchesModel.findByIdAndUpdate(req.params.id, {
    name, 
    address, 
    telephone, 
    schedule
}, {new: true});
res.json({message: "branch deleted"})
}

export default branchesController;
