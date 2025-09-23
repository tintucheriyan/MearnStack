const express=require('express')
const router=express.Router()
const userController=require('./../controller/userController.js')

router.route('/startMenu').get(userController.startMenu)
router.route('/getAllStudents').get(userController.getAllStudents);
router.route('/getAllStaffs').get(userController.getAllStaffs);
router.route('/getAllAdmin').get(userController.getAllAdmins);
router.route('/insertUsers').post(userController.insertUsers);
router.route('/updateUsers').put(userController.updateUsers);
router.route('/deleteUsers').delete(userController.deleteUsers);

module.exports=router;