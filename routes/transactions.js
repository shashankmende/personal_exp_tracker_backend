
const router = require("express").Router()

const { addExpense, getExpenses, deleteExpense } = require("../controllers/ExpenseController")
const {addIncome, getIncomes, deleteIncome}= require('../controllers/IncomeController')

 
//income
router.post('/add-income',addIncome)

router.get("/get-incomes",getIncomes)

router.delete('/delete-income/:id',deleteIncome)

//expense

router.post('/add-expense',addExpense)

router.get("/get-expenses",getExpenses)

router.delete('/delete-expense/:id',deleteExpense)

module.exports = router