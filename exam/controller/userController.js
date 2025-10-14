const mongoose=require('mongoose')
const express=require('express')
const User=require('../models/userModel')


async function insert(req,res){
    try{
        data={name:'anu',phone:678543,email:'anu@gmail.com',pin:4342,amount:500}
    let result=await User.create(data)
    res.send("suceess")
  }
  catch(err){
      res.send(err)
    }
    }

async function get(req,res){
    try{
       let result =await User.find()
       res.send(result)
    }
    catch(err){
        res.send(err)
    }
}
    module.exports={insert,get}