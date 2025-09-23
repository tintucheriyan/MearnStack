const express=require('express')
const router=express.Router()
const studentController=require('./../controller/studentController.js')


router.route('/getAllStudents').get(studentController.getAllStudents);
router.route('/insertStudents').post(studentController.insertStudent);
router.route('/deleteStudents').delete(studentController.deleteStudent);
router.route('/updateStudents').put(studentController.updateStudent);
module.exports=router;


