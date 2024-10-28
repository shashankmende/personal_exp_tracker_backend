
const IncomeModel = require('../models/IncomeModel')


exports.addIncome = async(req,res)=>{
    const {title,amount,category,description,date}=req.body 
    const incomeInstance = IncomeModel({
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
        await incomeInstance.save()
        res.status(200).json({message:"Income added"})
    } catch (error) {
        res.status(500).json({message:`Server Error: ${error.message}`})
    }
}

exports.getIncomes= async(req,res)=>{
    try {
        const incomes = await IncomeModel.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message:`Server Error: ${error.message}`})
    }
}

exports.deleteIncome = async(req,res)=>{
    const {id}=req.params 
    IncomeModel.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({message:"Income deleted"})
    })
    .catch(error=>{
        res.status(500).json({message:`Server Error: ${error.message}`})
    })
}