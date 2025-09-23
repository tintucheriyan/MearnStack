
const User=require('../models/userModel')
const jwt=require('jsonwebtoken')
const createToken=(user)=>{
    return jwt.sign(
        {userId:user.id},
        process.env.JWT_SECRET,
        {expiresIn:'1h'}
    );
};

 const register=async(req,res)=>{
    try{
        const{name,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser) return res.status(400).json({message:"user already exists"});
        const user=await User.create({name,email,password});

        const token=createToken(user);
        res.status(201).json({token});

    } catch(err){
        res.status(500).json({message:'Server error',error:err.message});
    }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });   // use lowercase variable
    if (!user) return res.status(400).json({ message: "Invalid email" });

    const isMatch = await user.comparePassword(password); // use bcrypt compare method you defined
    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    const token = createToken(user);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'server error', error: err.message });
  }
};
module.exports={register,login}

