import User from "../models/userModel.js";

//const User=require('../models/userModel.js')

export const createUser=async(req,res)=>{
    try{
        const user=await User.create(req.body);
        res.status(201).json(user);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }

}
//////////////////////////////////////
export const getUsers=async(req,res)=>{
    try{
        const user=await User.find();
        res.status(200).json(user);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }

}

//////////////////////////
export const getUser=async(req,res)=>{
    let name=req.query.name
    try{
        const user=await User.findOne({name:name})
        res.status(200).json(user);
    }
      
    catch(err){
        res.status(400).json({error:err.message})
    }
}
/////////////////////////////////////////////
export const getUserById=async(req,res)=>{
    let id=req.query.id
    try{

        const user=await User.findById(id)
        if(!user)return res.status(401).json({error:"User not found"})
        res.status(200).json(user);
    }
      
    catch(err){
        res.status(400).json({error:err.message})
    }
}
/////////////////////////////////////
export const updateUser=async(req,res)=>{
    let oldName=req.body.oldName
    let newName=req.body.newName
    try{
        const user=await User.updateOne({name:oldName},{$set:{name:newName}}) 
        const result=await User.find();
        return res.status(200).json(result)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}
///////////////////////////////////

export const deleteUser=async(req,res)=>{
    let age=req.body
    try{
        const user=await User.deleteOne(age);
        const result=await User.find();
        return res.status(200).json(result)
    }
    catch(err){
        res.status(400).json({error:err.message})
    }
}
////////////////////////////////////////////

export const updateById=async(req,res)=>{
    try{
        const user=await User.findByIdAndUpdate(req.params.id,req.body)
        const result=await User.find();
        return res.status(200).json(result)
    }
     catch(err){
        res.status(400).json({error:err.message})
    }
}
////////////////////////////////////////////////////
export const deleteById=async(req,res)=>{
      try{
        const user=await User.findByIdAndDelete(req.params.id)
        const result=await User.find();
        return res.status(200).json(result)
    }
     catch(err){
        res.status(400).json({error:err.message})
    }
}
///////////////////////////////////////////////////
export const deleteAll=async(req,res)=>{
      try{
        const user=await User.deleteMany()
        const result=await User.find();
        return res.status(200).json(result)
    }
     catch(err){
        res.status(400).json({error:err.message})
    }
}