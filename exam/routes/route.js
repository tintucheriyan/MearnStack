const express=require('express')
const router=express.Router()

const userRoutes=require('../controller/userController')

router.get('/get',userRoutes.get)
router.post('/insert',userRoutes.insert)

module.exports=router;