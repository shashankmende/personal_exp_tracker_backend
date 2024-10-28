
const mongoose = require("mongoose")

const IncomeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true ,
        trim:true ,

    },
    amount:{
        type:Number,
        required:true,
        trim:true
    },
    type:{
        type:String,
        required:true,
        default:"income"
    },
    date:{
        type:Date,
        required:true,
        
    },
    category:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
},{timestamps:true})

const IncomeModel = mongoose.model('income',IncomeSchema)


module.exports = IncomeModel