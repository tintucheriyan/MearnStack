const e = require('express')
const express=require('express')
const mongoose=require('mongoose')
const productRoutes=require('./routes/productRoute')
const orderRoutes=require('./routes/orderRoute')
const userRoutes=require('./routes/userRoute')
const port=3000
const app=express()
app.use(express.json())
require('dotenv').config()

mongoose.connect("mongodb://127.0.0.1:27017/ECommerce")
.then(()=>{
    console.log("mongoose connected")
})
.catch(err=>{
    console.log("failed to connect ")
})

app.use('/product',productRoutes)
app.use('/order',orderRoutes)
app.use('/user',userRoutes)


app.listen(port,()=>{
    console.log(`server conneted to ${port}`)
})