
const ExpenseModel = require('../models/ExpenseModel')


exports.addExpense = async(req,res)=>{
    const {title,amount,category,description,date}=req.body 
    const ExpenseInstance = ExpenseModel({
        title,
        amount,
        category,
        description,
        date
    })
    
    try {
        if (!title || !category || !description || !date){
            return res.status(400).json({message:"All fields are required and valid"})
        }
        if (amount<=0 || typeof amount !== "number"){
            return res.status(400).json({message:"Amount must be a positive  number"})
        }
        await ExpenseInstance.save()
        res.status(200).json({message:"Expense added"})
    } catch (error) {
        res.status(500).json({message:`Server Error: ${error.message}`})
    }
}

exports.getExpenses= async(req,res)=>{
    try {
        const expense = await ExpenseModel.find().sort({createdAt:-1})
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({message:`Server Error: ${error.message}`})
    }
}

exports.deleteExpense = async(req,res)=>{
    const {id}=req.params 
    ExpenseModel.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({message:"Expense deleted"})
    })
    .catch(error=>{
        res.status(500).json({message:`Server Error: ${error.message}`})
    })
}