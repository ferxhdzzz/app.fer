import dotenv from "dotenv" // importar la libreria que acabamos de instalar

dotenv.config //ejecutamos la libreria, para acceder al punto env

export const config ={

    db:{
        URI: process.env.DB_URI || "mongodb://localhost:27017/zonadigitalDB20220031",
    },
    server:{
        port: process.env.PORT || 4000,
    },

    jwt:{
secret :process.env.JWT_SECRET || "lesserafimnaespa",
expiresIn :process.env.JWT_EXPIRES || "30d",
    },
    admin:{
        ADMIN_USERNAME :process.env.ADMIN_USERNAME || "fernanda@gmail.com",
        ADMIN_PASSWORD :process.env.ADMIN_PASSWORD || "lesserafimnaespa",
            },
            email:{
                useremail:process.env.USER_EMAIL || "lovercotes@gmail.com" ,
                userpassword:process.env.PASSWORD_EMAIL || "cbig yrkr bwql zsbx"
            }
}