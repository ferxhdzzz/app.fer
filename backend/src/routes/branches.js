import express from "express";
import branchesController from "../controllers/branchescontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(branchesController.getBranches) //mostrar
.post(branchesController.createBranches) //agregar

router.route("/:id")

.put(branchesController.updateBranches) //actualizar
.delete(branchesController.deleteBranches) //borrar

export default router;


