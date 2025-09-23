const express=require('express')
const router=express.Router()
const teacherController=require('./../controller/teacherController.js')


router.route('/getAllTeachers').get(teacherController.getAllTeachers);
router.route('/insertTeachers').post(teacherController.insertTeacher);
router.route('/deleteteachers').delete(teacherController.deleteTeacher);
router.route('/updateTeachers').put(teacherController.updateTeacher);
module.exports=router;