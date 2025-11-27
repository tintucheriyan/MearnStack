const Product=require('../models/productModel')

async function getAll(req,res){
    const products=await Product.find({})
    res.json(products)
}

async function getById(req,res) {
    const product=await Product.findById(req.params.id)
    if(product)
        res.json(product)
    else
        res.send("product not found")
}

async function updateProduct(req,res){
    const product=await Product.findByIdAndUpdate(req.params.id,req.body)
    res.json(product)
}

async function createProduct(req,res) {
    const product=await Product.create(req.body)
    res.json({ success: true, message:"sucessfully created the product"})
}

async function deleteProduct(req,res){
    const product=await Product.findByIdAndDelete(req.params.id)
    res.json({ message: 'Product deleted' });
}

module.exports={getAll,getById,updateProduct,createProduct,deleteProduct}