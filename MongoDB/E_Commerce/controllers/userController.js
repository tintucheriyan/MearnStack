const User=require('../models/userModel')
const jwt = require('jsonwebtoken');

const createToken = (id) =>
             { return jwt.sign({ id },
             process.env.JWT_SECRET,
              { expiresIn: "30d" }); };


async function register(req,res){
    const {username,password,email}=req.body
    userExist=await User.findOne({email})
    if(userExist)
       return res.json("user is already exists")
    const user=await User.create({username:username,password:password,email:email})
    const token=createToken(user.id);
        return res.status(201).json({token});
}

async function login(req,res){
     const {password,email}=req.body
     const user=await User.findOne({email})
     if(user && await user.matchPassword(password)){
           const token=createToken(user.id);
           return res.status(201).json({token});}
     else
        return res.json("invalid email or password")
}


module.exports={register,login}