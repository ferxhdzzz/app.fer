import express from "express";
import registerEmployeesController from "../controllers/registerEmployeecontroller.js";



//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")

.post(registerEmployeesController.registerEmployees) //agregar

export default router;


