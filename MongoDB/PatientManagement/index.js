const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const authRoutes=require('./routes/authRoutes')
const userRoutes=require('./routes/userRoutes')


const PORT = process.env.PORT
const app=express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("DB connected successfully...")
}).catch((err)=>{
    console.log("Error in connecting Mongoose..",err)
})

//routes

app.use('/auth',authRoutes);
app.use('/user',userRoutes);

app.listen(PORT,(err)=>{
    if(err){
        console.log("Error Found ",err)
    }else{
        console.log(`Server started at http://localhost:${PORT}`)
    }
})