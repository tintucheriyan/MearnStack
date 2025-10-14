const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    phone:{
        type:Number,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    pin:{
        type:Number,
        require:true

    },
    amount:{
        type:Number,
        require:true
    }

})

module.exports=mongoose.model('User',userSchema)