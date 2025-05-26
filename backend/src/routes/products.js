import express from "express";
import productsController from "../controllers/productscontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(productsController.getProducts) //mostrar
.post(productsController.createProducts) //agregar

router.route("/:id")

.put(productsController.updatesProducts) //actualizar
.delete(productsController.deleteProducts) //borrar

export default router;




