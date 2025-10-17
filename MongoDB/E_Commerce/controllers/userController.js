const User=require('../models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')

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
      if (!user) {
    return res.status(401).json({ success: false, message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ success: false, message: "Incorrect password" });
  }

  // if success
  res.json({ success: true, message: "Login successful" });
};


module.exports={register,login}