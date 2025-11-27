const mongoose=require('mongoose')

const OrderSchema=new mongoose.Schema(
  {
    orderItems:[

        { name:{type:String,required:true},
          price:{type:Number,required:true},
          quantity:{type:Number,required:true},
          product_id:
                { type: mongoose.Schema.Types.ObjectId,
                   required:true,
                 ref: 'products',}
        }],
    
    
    user:{
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User',   
         required: true},
    
   },
    {
      timestamps: true, 
     });
    

     
module.exports=mongoose.model('Order',OrderSchema);