import{Schema, model} from "mongoose";

const branchSchema = new Schema ({
    name:{
type: String,
require: true
    },

    address: {
        type: String,
        require: true,
       
    },

    telephone: {
        type: String,
        require: true,
        min: 8
       
    },

    schedule: {
        type: String,
        require: true,
       
    }
    
    
}, {
    timestamps:true,
    strict: false
})

export default model ("Branches", branchSchema)