const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController.js');
const auth=require('../middleware/auth.js')

router.post('/createUser',userController.createUser)
router.get('/getUsers',auth,userController.getUsers)
router.get('/getUser',userController.getUser)
router.get('/getUserById',userController.getUserById)
router.put('/updateUser',userController.updateUser)
router.delete('/deleteUser',userController.deleteUser)
router.put('/updateById/:id',userController.updateById)
router.delete('/deleteById/:id',userController.deleteById)
router.delete('/deleteAll',userController.deleteAll)
module.exports =router;