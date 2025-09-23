const express = require("express");
const mongoose=require('mongoose');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const authRoutes=require('./routes/authRoutes.js');
const app = express();

require('dotenv').config();
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

app.use(express.json());
const PORT= 4000;

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(()=>{
  console.log('Connected to MongoDB')
  app.listen(PORT,()=>console.log(`server is running on ${PORT}`))
})
.catch(err=>{
  console.error("Mongodb connection error",err)
})

app.use('/users',userRoutes)
app.use('/students',studentRoutes)
app.use('/api',authRoutes)