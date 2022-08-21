const express = require('express')
const app = express()
const connectDB = require('./db/connect') 
require('dotenv').config()
// for getting json data from body
app.use(express.json())
const taskRoutes = require('./routes/task')


app.use("/api",taskRoutes)
app.get("/",(req,res)=>{
    console.log(req.body)
    res.json({"me so good":"this work"})
})






const start = async() =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000,()=>{
            console.log("working")
        })
    } catch (error) {
        console.log(error)
    }
}

start()