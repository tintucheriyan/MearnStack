const mongoose=require('mongoose')

const OrderSchema=new mongoose.Schema({
    orderItems:[

        { name:{type:String,required:true},
          price:{type:Number,required:true},
          quantity:{type:Number,required:true},
          product_id:
                { type: mongoose.Schema.Types.ObjectId,
                   required:true,
                 ref: 'products',}
        }],
    shippingAddress:{
        fullName:{type:String,required:true},
        location:{type:String,required:true},
        houseNo:{type:Number,required:true},
        pinCode:{type:Number,required:true},

    },
    paymentMethod:{type:String,required:true},
    itemsPrice: { type: Number, required: true },
    taxPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
    user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',   // reference to user collection
    required: true
  },
    }, 
    
    {
      timestamps: true, // adds createdAt and updatedAt
     });
    

     
module.exports=mongoose.model('Order',OrderSchema);