
import mongoose from "mongoose";
//const mongoose = require('mongoose');

const userSchema=new mongoose.Schema({

     name:{
        type:String,
        required:true,
     },
     email:{
        type:String,
        required:true,
        unique:true,
     },
     age:{
        type:Number,
        required:true,
     },
     image:{
      type:String,
      default:'',

     }
})

const Students=mongoose.model("Students",userSchema)
export default Students;

//module.exports=mongoose.model('User',userSchema)