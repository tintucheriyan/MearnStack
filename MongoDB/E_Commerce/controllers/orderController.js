const Order=require('../models/orderModel')


async function createOrder(req,res){
    const order=await Order.create({...req.body,
      user: req.user._id})
    res.json(order)
}

async function getAll(req,res){
    const orders = await Order.find({ user: req.user._id });
    res.json(orders)
}

async function getOrder(req,res){
    const order=await Order.findById(req.params.id)
    if(order)
        res.json(order)
    else
        res.json("item could not found")
}

async function updateOrder(req,res){
    const order=await Order.findByIdAndUpdate(req.params.id,req.body)
    res.json(order)
}

async function deleteOrder(req,res){
    const order=await Order.findByIdAndDelete(req.params.id)
    res.json("item deleted")
}

module.exports={Home,createOrder,getAll,getOrder,updateOrder,deleteOrder}