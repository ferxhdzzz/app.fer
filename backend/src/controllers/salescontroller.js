//array de metodos
const salesController = {};

import salesModel from "../models/Sales.js";

//get - select

salesController.getSales = async (req, res) => {

try {
     const resultado = await salesModel.aggregate(
        [
            {
                $group: {
                   _id: "$category",
                   totalVentas: {$sum: "$total"}
                        }
            },
          {
            $sort: {totalVentas:-1}  //-1 mayor a menor, 1 menor a mayor
          }

        ]
         )
    res.status(200).json (resultado)
} catch (error) {
   console.log("error" +error)
   res.status(500).json("internal error server")

}

}

salesController.bestSellerProducts = async (req, res) =>{
   
 try {  
    const resultado = await salesModel.aggregate(


        [
            {
                $group: {
                   _id: "$product",
                   cantidad: {$sum: 1}
                        }
            },
          {
            $sort: {cantidad:-1}  //-1 mayor a menor, 1 menor a mayor
          },

          {
            $limit: 5
          }

        ]
         )

    
         res.status(200).json (resultado)
        } catch (error) {
           console.log("error" +error)
           res.status(500).json("internal error server")
        
        }


}

salesController.frecuentCustomer = async (req, res) =>{
   
    try {  
       const resultado = await salesModel.aggregate(
   
   
           [
               {
                   $group: {
                      _id: "$customer",
                      compras: {$sum: 1}
                           }
               },
             {
               $sort: {compras: 1}  //-1 mayor a menor, 1 menor a mayor
             },
   
             {
               $limit: 3
             }
   
           ]
            )
   
       
            res.status(200).json (resultado)
           } catch (error) {
              console.log("error" +error)
              res.status(500).json("internal error server")
           
           }
   
   
   }


   salesController.totalEarings = async (req, res) =>{
   
    try {  
       const resultado = await salesModel.aggregate(
   
   
           [
               {
                   $group: {
                      _id: null,
                      gananciasTotales: {$sum: "$total"}
                           }
               },
             {
               $sort: {compras: 1}  //-1 mayor a menor, 1 menor a mayor
             },
   
             {
               $limit: 3
             }
   
           ]
            )
   
       
            res.status(200).json (resultado)
           } catch (error) {
              console.log("error" +error)
              res.status(500).json("internal error server")
           
           }
   
   
   }

//post - agregar

salesController.createSales = async (req, res) => {
    //const {product, category, customer, total, fecha} = req.body; //req.body = lo que le pedimos al frontend

try {
   

    const  newsale= new salesModel(req.body);
    await newsale.save()
    res.status(200).json({message: "sale saved"})

} catch (error) {
    console.log("error" +error)
    res.status(500).json("internal error server")
}

   
}  
 
/*

//delete

salesController.deleteSales = async (req, res) => {


try {
  const deletedSales =   await salesController.findOneAndDelete(req.params.id)

    if(!deletedSales) {
        return res.status(400).json({message:"sale not found"})
     }

res.json({message: "sale deleted"})


} catch (error) {
    console.log("error" +error)
    res.status(500).json("internal error server")
}



}

// actualizar - post
salesController.updatesSales = async (req, res) =>{

try {

    if(level < 1 || level > 10) {
        return res.status(400).json({message:"inavible level"})

     }

     if(question.leght < 4 || answer.leght < 4) {
        return res.status(400).json({message:"too short"})

     }
    

    const {product, category, customer, total, fecha} = req.body; // solicito los valores
 const faqsUpdated = await faqsModel.findByIdAndUpdate(req.params.id, {
    product,
     category, 
     customer, 
     total, 
     fecha
}, {new: true});

if(!faqsUpdated) {
    return res.status(400).json({message:"faqs not found"})

 }

res.status(200).json({message: "faq updated"})

} catch (error) {
     console.log("error" +error)
    res.status(500).json("internal error server")
}



}*/

export default salesController;