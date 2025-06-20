import express from "express";
import salesController from "../controllers/salescontroller.js";

//coloca los metodos que tendra la la ruta
const router = express.Router();




router.route("/category").get(salesController.getSales)

router.route("/best-product").get(salesController.bestSellerProducts)

router.route("/frecuent-customers").get(salesController.frecuentCustomer)

router.route("/total-earings").get(salesController.totalEarings)

router.route("/").post(salesController.createSales) //agregar


//.put(salesController.updatesSales) //actualizar
//.delete(salesController.deleteSales) //borrar

export default router;




