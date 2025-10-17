const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    description:{ 
        type: String },
    brand:{
        type: String },
  category: { 
       type: String },
  price: { 
       type: Number, required: true },
  countInStock: { 
       type: Number, required: true },
    image:{type:String,
           required:true}
})

module.exports=mongoose.model('Product',productSchema)