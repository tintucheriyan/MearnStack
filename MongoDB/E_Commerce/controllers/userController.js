const User=require('../models/userModel')
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')

const createToken = (id) =>
             { return jwt.sign({ id },
             process.env.JWT_SECRET,
              { expiresIn: "30d" }); };


async function register(req,res){
    const {username,password,email,role}=req.body
    userExist=await User.findOne({email})
    if(userExist)
       return res.json("user is already exists")
    const user=await User.create({username:username,password:password,email:email,role:role})
  
        return res.status(201).json("Registration completed Successfully");
}


  
  

async function login(req, res){
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }); 
    if (!user) return res.status(400).json({success: false, message: "User not found"});

    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) return res.status(400).json({ success: false, message: "Incorrect password" });

    const token = createToken(user);
    res.status(200).json({ success:true,token:token,user:user });
  } catch (err) {
    res.status(500).json({ message: 'server error', error: err.message });
  }
};


module.exports={register,login}