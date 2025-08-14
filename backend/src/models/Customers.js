import{Schema, model} from "mongoose";

const customerSchema = new Schema ({
    name:{
type: String,
require: true
    },

    lastName:{
type: String,
require: true
    },

    birthday: {
        type: String,
        require: true,
        
    },

    email: {
        type: String,
        require: true,
       
    },

    password: {
        type: String,
        require: true,
        min:7
       
    },

    telephone: {
        type: String,
        require: true,
        min: 8
       
    },

    dui: {
        type: String,
        require: true,
        min: 9
       
    },
    isVerfied: {
        type: Boolean
       
    },
     loginAttemps: {
        type: Number,
        default: 0
        
       
    },
    timeOut: {
        type: Date,
               default:null

    }
    
    
}, {
    timestamps:true,
    strict: false
})

export default model ("Customers", customerSchema)