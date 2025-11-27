const express=require('express')
const routes=express.Router()
const product=require('../controllers/productController')
const authMiddleware=require('../middlewares/auth')
routes.get('/getAll',product.getAll)
routes.get('/getById/:id',product.getById)
routes.put('/updateProduct/:id',authMiddleware.protect,authMiddleware.admin,product.updateProduct)
routes.post('/createProduct',authMiddleware.protect,authMiddleware.admin,product.createProduct)
routes.delete('/deleteProduct/:id',authMiddleware.protect,authMiddleware.admin,product.deleteProduct)

module.exports=routes;