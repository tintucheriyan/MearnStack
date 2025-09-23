import Students from "../models/studentModel.js";

export const createStudent=async(req,res)=>{
    try{
        const {name,age,email}=req.body;
        const image=req.file? req.file.path :'';
        const student=await Students.create({name,email,age,image});
        res.status(201).json(student);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }

}

export const getStudents=async(req,res)=>{
    try{
        const student=await Students.find();
        res.status(200).json(student);
    }
    catch(err){
        res.status(400).json({error:err.message})
    }

}