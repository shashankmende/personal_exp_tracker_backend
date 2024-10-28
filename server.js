

require('dotenv').config()

const express = require('express')
const cors = require('cors')
const db = require('./db/db')
// const router = require('./routes/transactions')
  
const {readdirSync}= require("fs")
const router = require('./routes/transactions')
 
const app = express()

const PORT = process.env.PORT

//middlewares
app.use(express.json())
app.use(cors())
 

//routes

app.use('/api/v1',router)


const server = ()=>{
    db()
    app.listen(PORT,()=>console.log("server is running at port:",PORT))
}

server()