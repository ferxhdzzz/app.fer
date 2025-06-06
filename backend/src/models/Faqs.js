import{Schema, model} from "mongoose";

const faqsSchema = new Schema ({
    question:{
type: String,
require: true,
minLength: 4,
maxLenght: 100,
trim: true
    },

    answer: {
        type: String,
        require: true,
        minLength: 4,
maxLenght: 100,
trim: true
       
    },

    level: {
        type: Number,
        require: true,
       min: 1,
       max: 10,
       trim: true
       
    },

    isActived: {
        type: Boolean,
        require: true,
        default:true
       
    }
    
    
}, {
    timestamps:true,
    strict: false
})

export default model ("Faqs", faqsSchema)