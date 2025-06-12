 // importo la libreria
import express, { json } from "express"
import productsRoutes from "./src/routes/products.js"
import customersRoutes from "./src/routes/customers.js"
import emloyeesRoutes from "./src/routes/employees.js"
import branchesRoutes from "./src/routes/branches.js"
import reviweRoutes from "./src/routes/reviews.js"
import registerEmployeeRoutes from "./src/routes/registerEmployees.js"
import registerCustomerRoutes from "./src/routes/registerCustomers.js"
import login from "./src/routes/login.js"
import logout from "./src/routes/logout.js"
import recoveryPassword from "./src/routes/recoveryPassword.js"
import faqsRoutes from "./src/routes/faqs.js"
import cors from "cors"


import fs from "fs"
import path from "path"


import swaggerUi from "swagger-ui-express"

import cookieParser from "cookie-parser"



const app = express();
app.use(
  cors({
    origin: "*", // Dominio del cliente
    credentials: true, // Permitir envío de cookies y credenciales
  })
);
app.use(express.json())
//permitir los archivos json

app.use(cookieParser())

const swaggerDocument = JSON.parse (
  fs.readFileSync(path.resolve("./ricaldone-24f-ZonadigitalDb-1.0.0-resolved.json"), "utf-8")
)

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))


//definir las rutas de las funciones en la app
app.use("/api/products", productsRoutes)
app.use("/api/customers",customersRoutes)
app.use("/api/employees",emloyeesRoutes)
app.use("/api/branches",branchesRoutes)
app.use("/api/reviews",reviweRoutes)
app.use("/api/registerEmployees",registerEmployeeRoutes)
app.use("/api/login", login)
app.use("/api/logout", logout)
app.use("/api/registerCustomers", registerCustomerRoutes)
app.use("/api/recoveryPassword", recoveryPassword)
app.use("/api/faqs", faqsRoutes)





// importo la constante para usar la libreria
export default app;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    