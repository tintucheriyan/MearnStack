import mongoose from "mongoose";

const userShema=new mongoose.Schema(
    {
        user_id:{
            type:Number,
            required:true,
            unique:true,
        },
        name:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            required:true,

        },
        email:{
            type:String,
            required:true,
            unique:true,
        }
    }
);

const User=mongoose.model("user",userShema);
export default User;
