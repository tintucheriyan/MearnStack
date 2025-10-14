const express=require('express')
const routes=express.Router()
const order=require('../controllers/orderController')
const authMiddleware=require('../middlewares/auth')

routes.get('/home',authMiddleware.protect, order.Home)
routes.get('/myOrders',authMiddleware.protect, order.getAll)
routes.get('/getOrder/:id',authMiddleware.protect, order.getOrder)
routes.put('/updateOrder/:id',authMiddleware.protect, order.updateOrder)
routes.post('/createOrder',authMiddleware.protect, order.createOrder)
routes.delete('/deleteOrder/:id',authMiddleware.protect, order.deleteOrder)

module.exports=routes;