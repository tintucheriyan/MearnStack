
const express=require('express')
const mongoose=require('mongoose')
const app=express()
app.use(express.json())
const port=3000
const Routes=require('./routes/route')

mongoose.connect('mongodb://127.0.0.1:27017/exam')
.then(()=>console.log('mongodb connected'))
.catch(err=>console.log('fail to connect'))

app.use('',Routes)

app.listen(port,()=>console.log(`server connected to port ${port}`))