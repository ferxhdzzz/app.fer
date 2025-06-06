import express from "express";
import faqsController from "../controllers/faqscontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();

router.route("/")
.get(faqsController.getFaqs) //mostrar
.post(faqsController.createFaqs) //agregar

router.route("/:id")

.put(faqsController.updatesFaqs) //actualizar
.delete(faqsController.deleteFaqs) //borrar

export default router;
