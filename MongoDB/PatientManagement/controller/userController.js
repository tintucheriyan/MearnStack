const User=require('../model/userModel')

exports.getAllUser=async(req,res)=>{
    const users=await User.find().select('-password');
    res.json(users)

}