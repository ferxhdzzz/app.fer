//array de metodos
const faqsController = {};

import faqsModel from "../models/Faqs.js";

//get - select

faqsController.getFaqs = async (req, res) => {

try {
     const Faqs = await faqsModel.find()
    res.status(200).json (Faqs)
} catch (error) {
   console.log("error" +error)
   res.status(500).json("internal error server")

}

   
}

//post - agregar

faqsController.createFaqs = async (req, res) => {
    const {question, answer, level, isActived} = req.body; //req.body = lo que le pedimos al frontend

try {
     //validaciones
     if (!question|| !answer || !level || isActived === undefined) {
        return res.status(400).json({message:"pls insert the fields"})
     } 

     if(level < 1 || level > 10) {
        return res.status(400).json({message:"inavible level"})

     }

     if(question.leght < 4 || answer.leght < 4) {
        return res.status(400).json({message:"too short"})

     }
    
    const  newfaqs = new faqsModel({question, answer, level, isActived});
    await newfaqs.save()
    res.status(200).json({message: "faq saved"})

} catch (error) {
    console.log("error" +error)
    res.status(500).json("internal error server")
}

   
}  
 
//delete

faqsController.deleteFaqs = async (req, res) => {


try {
  const deletedFaqs =   await faqsController.findOneAndDelete(req.params.id)

    if(!deletedFaqs) {
        return res.status(400).json({message:"faqs not found"})
     }

res.json({message: "faq deleted"})


} catch (error) {
    console.log("error" +error)
    res.status(500).json("internal error server")
}



}

// actualizar - post
faqsController.updatesFaqs = async (req, res) =>{

try {

    if(level < 1 || level > 10) {
        return res.status(400).json({message:"inavible level"})

     }

     if(question.leght < 4 || answer.leght < 4) {
        return res.status(400).json({message:"too short"})

     }
    

    const {question, answer, level, isActived} = req.body; // solicito los valores
 const faqsUpdated = await faqsModel.findByIdAndUpdate(req.params.id, {
    question,
     answer, 
     level,
     isActived
}, {new: true});

if(!faqsUpdated) {
    return res.status(400).json({message:"faqs not found"})

 }

res.status(200).json({message: "faq updated"})

} catch (error) {
     console.log("error" +error)
    res.status(500).json("internal error server")
}



}

export default faqsController;