const express=require('express');
const router=express.Router();
const studentController=require('../controllers/studentController.js');
const upload=require('../middleware/multerConfig.js');

router.post('/createStudent',upload.single('image'),studentController.createStudent);
router.get('/getStudent',studentController.getStudents);

module.exports=router;